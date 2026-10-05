"use client";
import { useState } from "react";
const faqs = [{"q":"What is the care matcher?","a":"Multi-step wizard pairs symptoms with visit type and shop kits."},{"q":"Can I use SMILE10 online?","a":"10% off oral care shop orders at checkout."},{"q":"Kids appointments?","a":"Matcher flags pediatric slots on book."},{"q":"Sensitive teeth?","a":"Matcher routes to relief gel and gentle paste bundles."}] as { q: string; a: string }[];
export function AiAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="rounded-3xl border-2 border-[var(--border)] bg-white overflow-hidden shadow-sm mb-3 max-h-[60vh] max-w-sm overflow-y-auto p-4 animate-rise">
          <p className="font-semibold">AI Assistant</p>
          <ul className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <li key={f.q}><p className="font-medium">{f.q}</p><p className="mt-1 text-[var(--muted)]">{f.a}</p></li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg">Ask AI</button>
    </div>
  );
}
