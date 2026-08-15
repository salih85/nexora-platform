import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-4 text-5xl font-extrabold text-slate-900 dark:text-white">Learn. Build. Connect.</h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">The modern platform for developers to learn skills, build projects, and grow their professional network.</p>

      <div className="flex items-center justify-center gap-4">
        <Link to="/courses" className="rounded-lg bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700">Explore Courses</Link>
        <Link to="/signup" className="rounded-lg border border-slate-200 px-6 py-3 text-slate-700 dark:border-slate-700 dark:text-slate-200">Join NEXORA</Link>
      </div>
    </section>
  )
}
