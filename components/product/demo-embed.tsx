import dynamic from "next/dynamic";
import type { ProductDemo } from "@/content/products";

const ScribedeskMock = dynamic(() =>
  import("./scribedesk-mock").then((m) => m.ScribedeskMock)
);
const RetailosMock = dynamic(() =>
  import("./retailos-mock").then((m) => m.RetailosMock)
);

export function DemoEmbed({ demo }: { demo: ProductDemo }) {
  switch (demo.kind) {
    case "iframe":
      return (
        <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-card">
          <iframe
            src={demo.src}
            title={demo.title}
            className="h-full w-full"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      );
    case "video":
      return (
        <video
          poster={demo.poster}
          src={demo.src}
          autoPlay
          muted
          loop
          playsInline
          className="aspect-[16/10] w-full rounded-2xl border border-border/60 bg-card object-cover"
        />
      );
    case "mock":
      return demo.component === "scribedesk" ? <ScribedeskMock /> : <RetailosMock />;
    case "screenshots":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {demo.images.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="rounded-2xl border border-border/60"
            />
          ))}
        </div>
      );
  }
}
