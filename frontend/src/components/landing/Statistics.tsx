import React from 'react'

export default function Statistics() {
  const stats = [
    { label: 'Students', value: '12k' },
    { label: 'Courses', value: '320' },
    { label: 'Projects', value: '8.5k' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
