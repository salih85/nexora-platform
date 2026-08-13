import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div style={{display:'flex'}}>
      <aside style={{width:220, borderRight:'1px solid #eee', padding:16}}>
        <h3>Nexora</h3>
        <nav>
          <ul style={{listStyle:'none', padding:0}}>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/dashboard/projects">Projects</Link></li>
          </ul>
        </nav>
      </aside>
      <section style={{flex:1, padding:16}}>
        <Outlet />
      </section>
    </div>
  )
}
