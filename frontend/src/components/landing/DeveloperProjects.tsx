import React from 'react'

export default function DeveloperProjects() {
  const projects = ['Portfolio Site', 'Chat App', 'E-commerce', 'Analytics Dashboard']
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Developer Projects</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {projects.map((p) => (
          <div key={p} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="h-28 rounded-md bg-slate-100 dark:bg-slate-800" />
            <div className="mt-3 font-semibold text-slate-900 dark:text-white">{p}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
