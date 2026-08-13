import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <header style={{padding:12, borderBottom:'1px solid #eee'}}>
        <Link to="/admin">Admin</Link>
      </header>
      <main style={{padding:16}}>
        <Outlet />
      </main>
    </div>
  )
}
