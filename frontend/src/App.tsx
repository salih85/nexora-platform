import { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Login from './pages/auth/Login'
import DashboardHome from './pages/dashboard/DashboardHome'
import HomeLanding from './pages/HomeLanding'
import { store, type RootState } from './store'

function AppRoutes() {
  const mode = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    document.documentElement.style.colorScheme = mode
    localStorage.setItem('nexora-theme', mode)
  }, [mode])

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomeLanding />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="projects" element={<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">Projects coming soon.</div>} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}
