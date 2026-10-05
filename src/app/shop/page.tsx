import { ShopBrowse } from "@/components/ShopBrowse";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="rounded-3xl border-2 border-[var(--border)] bg-white px-8 py-10 text-center md:px-12">
        <h1 className="font-display text-4xl text-[var(--fg)] md:text-5xl">Smile care shop</h1>
        <p className="mt-4 mx-auto max-w-xl text-[var(--muted)]">
          Take-home kits, brushes, and whitening refills — search by care type, sort by reviews, open gentle PDPs.
        </p>
      </div>
      <ShopBrowse />
    </main>
  );
}
