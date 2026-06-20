import type { MetadataRoute } from "next";
import { company } from "@/content/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} — ${company.tagline}`,
    short_name: company.name,
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
