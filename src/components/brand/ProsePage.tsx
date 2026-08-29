import type { ReactNode } from "react";

export function ProsePage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-1200 py-14 md:py-20">
      <div className="max-w-[680px]">
        <h1 className="text-navy">{title}</h1>
        {intro ? <p className="mt-6 text-ink">{intro}</p> : null}
        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function ProseSection({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="text-2xl text-navy md:text-3xl">{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mt-4 text-ink">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
