import { LayoutDashboard, LogOut, MessageSquareText, Rocket, Settings } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Button from '../components/ui/Button'
import { useAuth } from '../hooks/useAuth'
import { logout } from '../store'

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/projects', label: 'Projects', icon: Rocket },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquareText },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function DashboardLayout() {
  const { user, isAuthenticated } = useAuth()
  const dispatch = useDispatch()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-slate-200 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white">
              N
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Workspace</p>
              <h1 className="text-xl font-bold">Nexora</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/80">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Signed in</p>
            <h2 className="mt-2 text-lg font-semibold">{user?.name ?? 'Learner'}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{user?.email ?? 'nexora@example.com'}</p>
          </div>

          <div className="mt-8">
            <Button variant="secondary" fullWidth onClick={() => dispatch(logout())} className="justify-center gap-2">
              <LogOut size={16} />
              Sign out
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
