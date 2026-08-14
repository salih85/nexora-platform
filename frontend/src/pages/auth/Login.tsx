import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { login } from '../../store'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('ava@nexora.io')
  const [password, setPassword] = useState('password123')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(
      login({
        id: 'demo-user',
        name: 'Ava Johnson',
        email: email || 'ava@nexora.io',
        role: 'student',
      }),
    )

    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Welcome back</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Sign in to Nexora</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-sky-900"
              placeholder="name@company.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-sky-900"
              placeholder="Enter your password"
            />
          </label>

          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Remember me
            </label>
            <button type="button" className="font-medium text-sky-600 hover:text-sky-500">
              Forgot password?
            </button>
          </div>

          <Button type="submit" fullWidth>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}
