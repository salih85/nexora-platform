import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLanding() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/50 py-8 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600 dark:text-slate-300">
        <div className="mb-4 flex items-center justify-between">
          <div className="font-semibold">Nexora</div>
          <nav className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/pricing">Pricing</Link>
          </nav>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} Nexora. All rights reserved.</div>
      </div>
    </footer>
  )
}
