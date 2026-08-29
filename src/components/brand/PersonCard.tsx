export type Person = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="flex h-full flex-col">
      <div className="aspect-square w-full overflow-hidden bg-gray-200">
        {person.photo ? (
          <img
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : null}
      </div>
      <h3 className="mt-4 text-xl">{person.name}</h3>
      <p className="eyebrow mt-1 text-red">{person.role}</p>
      {person.bio ? <p className="mt-3 text-base text-ink">{person.bio}</p> : null}
    </article>
  );
}
