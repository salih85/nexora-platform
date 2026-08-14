import { MoonStar, SunMedium } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import type { RootState } from '../../store'
import { toggleTheme } from '../../store'

export default function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white shadow-sm">
            N
          </span>
          Nexora
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex dark:text-slate-300">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => dispatch(toggleTheme())} className="!px-3 !py-2">
            {mode === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
          </Button>
          <Link to="/login">
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
