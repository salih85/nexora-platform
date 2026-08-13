import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div>
      <header style={{padding:16, borderBottom:'1px solid #eee'}}>
        <Link to="/">Nexora</Link> · <Link to="/login">Login</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
