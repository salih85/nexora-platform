import { Routes, Route, Link } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import Login from './pages/auth/Login'
import DashboardHome from './pages/dashboard/DashboardHome'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<PublicLayout />}>
				<Route index element={<div style={{padding:20}}>Welcome to Nexora — <Link to="/dashboard">Dashboard</Link></div>} />
				<Route path="login" element={<Login />} />
			</Route>

			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<DashboardHome />} />
			</Route>
		</Routes>
	)
}
