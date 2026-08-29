import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/brand/Hero";
import { ButtonLink } from "@/components/brand/Button";
import { CtaBanner } from "@/components/brand/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CivicActions — Trusted public services through open technology" },
      {
        name: "description",
        content:
          "A fully remote professional services firm helping U.S. government agencies deliver trusted public services through open technology and human-centered design.",
      },
      {
        property: "og:title",
        content: "CivicActions — Trusted public services through open technology",
      },
      {
        property: "og:description",
        content:
          "We help government deliver trusted public services through open technology and design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero
        title="We help government deliver trusted public services through open technology and design."
        actions={<ButtonLink to="/case-studies">See our work</ButtonLink>}
      />
      <CtaBanner color="red" />
    </>
  );
}
