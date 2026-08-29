import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/brand/Button";
import { CtaBanner } from "@/components/brand/CtaBanner";
import { ditap } from "@/data/company";

const title = "DITAP training | CivicActions";
const description =
  "DITAP certification for federal contracting professionals: what the program is, who it's for, the cohort format, and learning outcomes.";

export const Route = createFileRoute("/services/ditap")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const fieldClass = "mt-2 w-full border border-gray-400 px-4 py-3 text-base text-ink";

function InterestForm() {
  const [values, setValues] = useState({ name: "", email: "", agency: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter an email address in the format name@example.com.";
    if (!values.agency.trim()) next.agency = "Enter your agency.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setValues({ name: "", email: "", agency: "", notes: "" });
  }

  const fields: { id: "name" | "email" | "agency"; label: string; type: string }[] = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "agency", label: "Agency or organization", type: "text" },
  ];

  return (
    <form className="mt-6 max-w-xl space-y-6" onSubmit={onSubmit} noValidate>
      <div aria-live="polite">
        {sent ? (
          <p className="border-l-4 border-teal bg-white p-4 text-base text-ink">
            Thanks — we'll be in touch with cohort dates and next steps.
          </p>
        ) : null}
      </div>
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={`ditap-${field.id}`} className="text-base font-bold text-navy">
            {field.label}
          </label>
          <input
            id={`ditap-${field.id}`}
            type={field.type}
            value={values[field.id]}
            onChange={(event) => setValues((prev) => ({ ...prev, [field.id]: event.target.value }))}
            aria-invalid={errors[field.id] ? true : undefined}
            aria-describedby={errors[field.id] ? `ditap-${field.id}-error` : undefined}
            className={fieldClass}
          />
          {errors[field.id] ? (
            <p id={`ditap-${field.id}-error`} className="mt-2 text-base text-red">
              {errors[field.id]}
            </p>
          ) : null}
        </div>
      ))}
      <div>
        <label htmlFor="ditap-notes" className="text-base font-bold text-navy">
          Anything we should know? (optional)
        </label>
        <textarea
          id="ditap-notes"
          rows={4}
          value={values.notes}
          onChange={(event) => setValues((prev) => ({ ...prev, notes: event.target.value }))}
          className={fieldClass}
        />
      </div>
      <Button type="submit">Request cohort details</Button>
    </form>
  );
}

function Page() {
  return (
    <>
      <section className="container-1200 py-14 md:py-20">
        <p className="eyebrow text-red">Workforce development</p>
        <h1 className="mt-3 max-w-3xl text-navy">{ditap.title}</h1>
        <p className="mt-6 max-w-3xl text-ink">{ditap.intro}</p>
      </section>

      <section aria-labelledby="ditap-what-heading" className="container-1200 pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="ditap-what-heading" className="text-3xl text-navy md:text-4xl">
              What DITAP is
            </h2>
            {ditap.what.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="mt-5 text-ink">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-3xl text-navy md:text-4xl">Who it's for</h2>
            <ul className="mt-6 space-y-3 text-base text-ink">
              {ditap.audience.map((item) => (
                <li key={item} className="border-l-4 border-red pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ditap-format-heading" className="bg-navy py-16">
        <div className="container-1200">
          <h2 id="ditap-format-heading" className="text-3xl text-white md:text-4xl">
            Cohort format
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ditap.format.map((item) => (
              <li key={item.title} className="border border-white/40 p-6">
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-base text-white/90">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ditap-outcomes-heading" className="container-1200 py-16">
        <h2 id="ditap-outcomes-heading" className="text-3xl text-navy md:text-4xl">
          What you'll be able to do
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {ditap.outcomes.map((item) => (
            <li key={item} className="flex gap-3 bg-gray-100 p-4 text-base text-ink">
              <span aria-hidden="true" className="font-bold text-red">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ditap-interest-heading" className="bg-gray-100 py-16">
        <div className="container-1200">
          <h2 id="ditap-interest-heading" className="text-3xl text-navy md:text-4xl">
            Start here
          </h2>
          <p className="mt-5 max-w-2xl text-ink">
            Tell us a little about you and we'll send upcoming cohort dates, pricing, and the
            enrollment steps for your agency.
          </p>
          <InterestForm />
        </div>
      </section>

      <CtaBanner
        color="navy"
        headline="Build skills that stay."
        subline="Let's talk about training your team."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "All services", to: "/services" }}
      />
    </>
  );
}
