import React from 'react'

export default function Testimonials() {
  const t = [
    { name: 'Dev A', text: 'Nexora helped me ship my first open-source library.' },
    { name: 'Dev B', text: 'Courses are concise and project-focused.' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Testimonials</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.map((s, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">{s.name}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
