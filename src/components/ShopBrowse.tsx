"use client";
import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopBrowse() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || p.category === cat;
      return matchQ && matchC;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort]);
  return (
    <div className="mt-10 space-y-6">
      <div className="flex flex-col gap-3 rounded-2xl border-2 border-[var(--border)] bg-white p-4 md:flex-row md:items-center md:p-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search care products"
          className="flex-1 rounded-full border-2 border-[var(--border)] px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-full border-2 border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-semibold"
        >
          <option value="All">All care types</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-full border-2 border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-semibold"
        >
          <option value="featured">Recommended</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="rating">Patient favorites</option>
        </select>
      </div>
      <p className="text-sm font-semibold text-[var(--muted)]">{filtered.length} gentle picks for you</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
