import { ArrowUpRight, BookOpen, FolderKanban, Sparkles, Users } from 'lucide-react'

const stats = [
  { label: 'Active courses', value: '12', icon: BookOpen, tone: 'sky' },
  { label: 'Projects', value: '04', icon: FolderKanban, tone: 'violet' },
  { label: 'Mentors', value: '08', icon: Users, tone: 'emerald' },
]

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white shadow-lg dark:border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Overview</p>
            <h2 className="mt-3 text-3xl font-bold">Welcome back, Ava</h2>
            <p className="mt-2 max-w-xl text-sm text-sky-100">
              Your learning journey is moving fast. Continue where you left off and keep your momentum going.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-3">
            <Sparkles size={28} />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div className={`rounded-xl p-2 ${tone === 'sky' ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-200' : tone === 'violet' ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-200' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200'}`}>
                <Icon size={18} />
              </div>
              <ArrowUpRight className="text-slate-400" size={18} />
            </div>
            <p className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Current learning path</h3>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200">
              72% complete
            </span>
          </div>

          <div className="space-y-4">
            {[
              'Design Systems Fundamentals',
              'React + TypeScript Patterns',
              'API Integration workshop',
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-200">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{item}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Next milestone in 2 days</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Focus</h3>
          <div className="mt-5 rounded-2xl bg-sky-50 p-4 text-sm text-sky-900 dark:bg-sky-900/30 dark:text-sky-100">
            <p className="font-semibold">Product design sprint</p>
            <p className="mt-2">Build a collaborative project dashboard from the ground up.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

