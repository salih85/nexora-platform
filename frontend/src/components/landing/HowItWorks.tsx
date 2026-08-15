import React from 'react'

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white">{num}</div>
      <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">{title}</h4>
      <div className="text-sm text-slate-600 dark:text-slate-300">{desc}</div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">How NEXORA Works</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        <Step num={1} title="Learn" desc="Follow courses and lessons with quizzes and projects." />
        <Step num={2} title="Build" desc="Create projects, publish portfolios and connect your GitHub." />
        <Step num={3} title="Grow" desc="Earn XP, badges and certificates — track progress with analytics." />
      </div>
    </section>
  )
}
