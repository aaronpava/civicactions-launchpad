export function Quote({
  quote,
  attribution,
  role,
}: {
  quote: string;
  attribution: string;
  role?: string;
}) {
  return (
    <figure className="border-l-4 border-red pl-6">
      <blockquote className="font-serif text-2xl leading-snug text-navy">{quote}</blockquote>
      <figcaption className="mt-4 text-base text-ink">
        <span className="font-bold">{attribution}</span>
        {role ? <span className="text-ink/80">, {role}</span> : null}
      </figcaption>
    </figure>
  );
}
