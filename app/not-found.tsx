export default function NotFound() {
  return (
    <section className="flex h-[70vh] w-full items-center justify-center">
      <div className="flex max-w-md flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-8 text-center text-[color:var(--text)] shadow-[0_18px_70px_-60px_rgba(15,23,42,0.85)]">
        <h1 className="text-2xl font-semibold tracking-tight">
          Lost in the gradient.
        </h1>
        <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
          The page you’re looking for doesn’t exist yet. If this feels off, drop
          a note at
          <a
            href="mailto:tanavposwal939@gmail.com"
            className="ml-1 underline decoration-[rgba(var(--accent-rgb),0.4)] underline-offset-4">
            tanavposwal939@gmail.com
          </a>
          .
        </p>
        <a
          href="/"
          className="mx-auto inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-6 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--text-muted)] transition-all hover:border-[rgba(var(--accent-rgb),0.35)] hover:text-[rgb(var(--accent-rgb))]">
          back home
        </a>
      </div>
    </section>
  );
}
