export function PageStub({ title, intro }: { title: string; intro?: string }) {
  return (
    <>
      <section className="container-1200 py-16 md:py-24">
        <h1 className="text-navy">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-ink">{intro}</p> : null}
        <p className="mt-10 max-w-2xl text-base text-ink">
          This page is scaffolded. Content is coming in a later pass.
        </p>
      </section>
    </>
  );
}
