"use client";
import Link from "next/link";
import { PromoStrip } from "@/components/PromoStrip";
import { Reviews } from "@/components/Reviews";

function VectorHero() {
  return (
    <svg viewBox="0 0 480 320" className="vector-blob mx-auto h-72 w-full max-w-lg" aria-hidden>
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ccfbf1"/><stop offset="100%" stopColor="#99f6e4"/></linearGradient></defs>
      <ellipse cx="240" cy="160" rx="200" ry="130" fill="url(#g)" />
      <path d="M140 180 Q240 250 340 180" stroke="#14b8a6" strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx="180" cy="130" r="14" fill="#134e4a" />
      <circle cx="300" cy="130" r="14" fill="#134e4a" />
      <path d="M190 105 Q240 60 290 105" stroke="#5eead4" strokeWidth="8" fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <VectorHero />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl text-[var(--fg)] md:text-6xl">BrightSmile Dental</h1>
          <p className="mt-4 text-xl text-[var(--fg)]">Gentle visits, brighter routines.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Vector-first hero — warm care menu, no stock film.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/matcher" className="rounded-full bg-[var(--accent)] px-8 py-4 font-semibold text-white motion-rise">Match your care plan</Link>
            <Link href="/book" className="rounded-full border-2 border-[var(--border)] bg-white px-8 py-4 font-semibold motion-rise">Book a visit</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <h2 className="text-center text-2xl font-bold">Care menu</h2>
        <nav className="mt-8 flex flex-wrap justify-center gap-3">
          {["Preventive", "Cosmetic", "Kids", "Emergency"].map((c) => (
            <Link key={c} href="/matcher" className="rounded-full border-2 border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold hover:bg-[var(--accent)] hover:text-white">{c}</Link>
          ))}
        </nav>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="rounded-3xl border-2 border-[var(--border)] bg-white p-8 animate-rise">
          <h3 className="font-display text-xl">At-home kits</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">Paste, floss, gentle white — matched to your wizard result.</p>
          <Link href="/shop" className="mt-6 inline-block font-semibold text-[var(--accent)]">Shop oral care →</Link>
        </div>
        <div className="rounded-3xl bg-[var(--accent)]/15 p-8 animate-rise">
          <h3 className="font-display text-xl">Visit types</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">Pediatric, cosmetic consult, sensitivity — flagged on book.</p>
          <Link href="/tips" className="mt-6 inline-block font-semibold">Read care tips →</Link>
        </div>
      </section>
      <PromoStrip />
      <Reviews />
    </main>
  );
}