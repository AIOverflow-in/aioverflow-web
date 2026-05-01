"use server";

import { Resend } from "resend";
import { randomUUID } from "node:crypto";
import { company } from "@/content/company";
import type { ClientContext } from "@/lib/client-context";
import { getServerContext } from "@/lib/server-context";
import { buildSubject, renderHtml, renderText } from "@/lib/format-submission";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; error: string };

function parseClientContext(raw: FormDataEntryValue | null): ClientContext | null {
  if (!raw || typeof raw !== "string") return null;
  try {
    return JSON.parse(raw) as ClientContext;
  } catch {
    return null;
  }
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const companyField = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const clientCtx = parseClientContext(formData.get("context"));

  if (!name || !email || !message) {
    return { status: "error", error: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      error: "Contact form is not configured yet. Please email us directly.",
    };
  }

  let serverCtx;
  try {
    serverCtx = await getServerContext();
  } catch (err) {
    console.error("Server context lookup failed:", err);
    serverCtx = {
      ip: null,
      geo: {
        city: null,
        region: null,
        country: null,
        countryCode: null,
        timezone: null,
        latitude: null,
        longitude: null,
        org: null,
        asn: null,
        proxy: null,
      },
      ua: { raw: null, device: "Unknown" as const, os: "Unknown", browser: "Unknown" },
    };
  }

  const submission = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    lead: { name, email, company: companyField, message },
    client: clientCtx,
    server: serverCtx,
  };

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "AI Overflow <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: buildSubject(submission),
      text: renderText(submission),
      html: renderHtml(submission),
    });
    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        error: "Could not send. Please try again or email us directly.",
      };
    }
    return { status: "success" };
  } catch (err) {
    console.error("Contact form error:", err);
    return { status: "error", error: "Something went wrong. Please try again." };
  }
}
