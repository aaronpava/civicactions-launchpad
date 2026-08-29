import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/brand/Button";

const title = "Contact | CivicActions";
const description =
  "Tell us about your project, contracting question, or press inquiry. CivicActions is a fully distributed team serving government agencies.";

export const Route = createFileRoute("/contact")({
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

type Fields = {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
};

const empty: Fields = { name: "", email: "", organization: "", topic: "", message: "" };

const topics = ["New project", "Contracting question", "Careers", "Press", "Something else"];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter an email address in the format name@example.com.";
  if (!values.organization.trim()) errors.organization = "Enter your organization.";
  if (!values.topic) errors.topic = "Choose how we can help.";
  if (!values.message.trim()) errors.message = "Enter a message so we know what you need.";
  return errors;
}

const fieldClass = "mt-2 w-full border border-gray-400 px-4 py-3 text-base text-ink";

function Page() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update(field: keyof Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setValues(empty);
  }

  function describedBy(field: keyof Fields) {
    return errors[field] ? `${field}-error` : undefined;
  }

  return (
    <section className="container-1200 py-14 md:py-20">
      <h1 className="max-w-3xl text-navy">Let's build a public success story.</h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-2xl text-navy md:text-3xl">Send us a message</h2>
          <div aria-live="polite" className="mt-4">
            {sent ? (
              <p className="border-l-4 border-teal bg-gray-100 p-4 text-base text-ink">
                Thanks — your message has been sent. We usually reply within one business day.
              </p>
            ) : null}
          </div>

          <form className="mt-6 space-y-6" onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="name" className="text-base font-bold text-navy">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={describedBy("name")}
                className={fieldClass}
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-base text-red">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-base font-bold text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={describedBy("email")}
                className={fieldClass}
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-base text-red">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="organization" className="text-base font-bold text-navy">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={values.organization}
                onChange={(event) => update("organization", event.target.value)}
                aria-invalid={errors.organization ? true : undefined}
                aria-describedby={describedBy("organization")}
                className={fieldClass}
              />
              {errors.organization ? (
                <p id="organization-error" className="mt-2 text-base text-red">
                  {errors.organization}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="topic" className="text-base font-bold text-navy">
                How can we help?
              </label>
              <select
                id="topic"
                name="topic"
                value={values.topic}
                onChange={(event) => update("topic", event.target.value)}
                aria-invalid={errors.topic ? true : undefined}
                aria-describedby={describedBy("topic")}
                className={fieldClass}
              >
                <option value="">Choose an option</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              {errors.topic ? (
                <p id="topic-error" className="mt-2 text-base text-red">
                  {errors.topic}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="text-base font-bold text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={describedBy("message")}
                className={fieldClass}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-base text-red">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <Button type="submit">Send message</Button>
          </form>
        </div>

        <div className="bg-gray-100 p-8">
          <h2 className="text-2xl text-navy">Other ways to reach us</h2>
          <div className="mt-6 space-y-6 text-base text-ink">
            <div>
              <h3 className="eyebrow text-red">Mailing address</h3>
              <address className="mt-2 not-italic">
                3527 Mt. Diablo Blvd., Unit 269
                <br />
                Lafayette, CA 94549
              </address>
            </div>
            <div>
              <h3 className="eyebrow text-red">Phone</h3>
              <p className="mt-2">
                <a
                  href="tel:+15104087510"
                  className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
                >
                  510-408-7510
                </a>
              </p>
            </div>
            <div>
              <h3 className="eyebrow text-red">Email</h3>
              <p className="mt-2">
                <a
                  href="mailto:contact@civicactions.com"
                  className="text-red underline decoration-1 underline-offset-4 hover:text-red-dark"
                >
                  contact@civicactions.com
                </a>
              </p>
            </div>
            <p>
              We are a fully distributed team working from more than 90 cities across the U.S. and
              Canada, so the mailing address is for correspondence rather than visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
