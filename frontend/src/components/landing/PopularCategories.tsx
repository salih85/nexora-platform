import React from 'react'

export default function PopularCategories() {
  const cats = ['Web Dev', 'Data', 'DevOps', 'AI/ML', 'Mobile', 'Security']
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Popular Categories</h3>
      <div className="flex flex-wrap gap-3">
        {cats.map((c) => (
          <div key={c} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{c}</div>
        ))}
      </div>
    </section>
  )
}
