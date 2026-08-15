import React from 'react'

function CourseCard({ title, author }: { title: string; author: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="h-32 rounded-md bg-slate-100 dark:bg-slate-800" />
      <h4 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
      <div className="text-xs text-slate-500 dark:text-slate-300">{author}</div>
    </div>
  )
}

export default function FeaturedCourses() {
  const sample = [
    { title: 'Full-Stack React Developer', author: 'A. Developer' },
    { title: 'Advanced TypeScript Patterns', author: 'B. Engineer' },
    { title: 'Build with Node & Express', author: 'C. Creator' },
    { title: 'Open Source Project Workflow', author: 'D. Maintainer' },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Featured Courses</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {sample.map((c) => (
          <CourseCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
