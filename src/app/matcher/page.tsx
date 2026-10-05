"use client";
import Link from "next/link";
import { useState } from "react";

const wizard = [
  { key: "symptom", q: "Primary concern?", options: [{ v: "sensitivity", l: "Sensitivity" }, { v: "whitening", l: "Whitening" }, { v: "kids", l: "Kids checkup" }] },
  { key: "visit", q: "Visit preference?", options: [{ v: "quick", l: "Quick hygiene" }, { v: "consult", l: "Cosmetic consult" }, { v: "urgent", l: "Urgent slot" }] },
  { key: "home", q: "At-home support?", options: [{ v: "paste", l: "Daily paste" }, { v: "white", l: "Gentle white" }, { v: "guard", l: "Night guard" }] },
];
export default function MatcherPage() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Record<string, string>>({});
  const done = step >= wizard.length;
  const result = done ? (picks.symptom === "kids" ? "Pediatric visit + bubble rinse kit" : picks.home === "white" ? "Whitening strips + consult" : "Sensitivity gel + hygiene visit") : "";
  return (
    <main className="mx-auto max-w-xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-display text-4xl">Care matcher</h1>
      {!done ? (
        <div className="mt-8 rounded-3xl border-2 border-[var(--border)] bg-white p-8 animate-rise">
          <p className="text-sm text-[var(--muted)]">Step {step + 1} / {wizard.length}</p>
          <h2 className="mt-2 text-xl font-bold">{wizard[step].q}</h2>
          <div className="mt-6 space-y-3">
            {wizard[step].options.map((o) => (
              <button key={o.v} type="button" className="w-full rounded-full border-2 border-[var(--border)] px-4 py-3 text-left font-semibold hover:border-[var(--accent)]" onClick={() => { setPicks((p) => ({ ...p, [wizard[step].key]: o.v })); setStep((s) => s + 1); }}>{o.l}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-3xl bg-[var(--accent)]/10 p-8 animate-rise">
          <p className="text-sm font-semibold text-[var(--muted)]">Your match</p>
          <p className="mt-2 text-2xl font-bold">{result}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="rounded-full bg-[var(--accent)] px-6 py-3 text-center font-semibold text-white">Book visit</Link>
            <Link href="/shop" className="rounded-full border-2 border-[var(--border)] bg-white px-6 py-3 text-center font-semibold">Shop kit</Link>
          </div>
        </div>
      )}
    </main>
  );
}