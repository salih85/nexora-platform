import React from 'react'

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{name}</div>
      <div className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{price}</div>
      <ul className="mb-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        {features.map((f) => <li key={f}>• {f}</li>)}
      </ul>
      <button className="rounded-md bg-sky-600 px-4 py-2 text-white">Choose</button>
    </div>
  )
}

export default function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['Browse courses', 'Community access'] },
    { name: 'Pro', price: '$9/mo', features: ['Projects', 'Certificates', 'Priority support'] },
    { name: 'Team', price: '$49/mo', features: ['Team seats', 'Analytics', 'SAML'] },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Pricing</h3>
      <div className="grid gap-4 sm:grid-cols-3">{plans.map((p) => <Plan key={p.name} {...p} />)}</div>
    </section>
  )
}
