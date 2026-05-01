export function SectionLabel({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-3 font-mono-label text-foreground/60">
      {number && (
        <>
          <span>{number}</span>
          <span aria-hidden className="h-px w-8 bg-border-strong" />
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
