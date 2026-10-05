export default function TipsPage() {
  const tips = [{"t":"Brush order","b":"Floss or clean between, then brush — demo hygiene sequence."},{"t":"Sensitivity","b":"Use relief gel twice daily max; pair with soft bristles."},{"t":"Kids","b":"Bubble rinse is alcohol-free — supervise under age 8."}];
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Care tips</h1>
      <div className="mt-10 space-y-6">
        {tips.map((x) => (
          <article key={x.t} className="rounded-2xl border border-[var(--border)] p-6 animate-rise">
            <h2 className="font-semibold">{x.t}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{x.b}</p>
          </article>
        ))}
      </div>
    </main>
  );
}