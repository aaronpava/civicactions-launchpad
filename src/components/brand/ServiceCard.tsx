import { Link } from "@tanstack/react-router";

export type Service = {
  title: string;
  description: string;
  to: string;
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border border-gray-400 p-8">
      <h3 className="text-2xl">
        <Link
          to={service.to}
          className="text-navy underline decoration-1 underline-offset-4 hover:text-red-dark"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-4 text-base text-ink">{service.description}</p>
    </article>
  );
}
