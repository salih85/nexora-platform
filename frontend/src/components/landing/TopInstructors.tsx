import React from 'react'

export default function TopInstructors() {
  const instructors = ['Alex', 'Priya', 'Sam', 'Jordan']
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Top Instructors</h3>
      <div className="flex gap-4">
        {instructors.map((i) => (
          <div key={i} className="flex w-40 flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="text-sm font-semibold text-slate-900 dark:text-white">{i}</div>
            <div className="text-xs text-slate-500 dark:text-slate-300">Instructor</div>
          </div>
        ))}
      </div>
    </section>
  )
}
