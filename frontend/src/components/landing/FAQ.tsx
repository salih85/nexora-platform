import React from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'How do I enroll?', a: 'Create an account and click enroll on a course.' },
    { q: 'Can I contribute content?', a: 'Yes — instructors can apply to publish courses.' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">FAQ</h3>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="font-semibold text-slate-900 dark:text-white">{f.q}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
