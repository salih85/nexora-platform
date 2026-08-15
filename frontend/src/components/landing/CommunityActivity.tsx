import React from 'react'

export default function CommunityActivity() {
  const items = [
    'User1 answered a question in React',
    'User2 posted a new project',
    'User3 earned a badge'
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Community Activity</h3>
      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {items.map((it, idx) => (
          <li key={idx} className="rounded-md border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">{it}</li>
        ))}
      </ul>
    </section>
  )
}
