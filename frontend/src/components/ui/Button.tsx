import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className,
  ...props
}: Props) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

  const variantClasses = {
    primary:
      'bg-sky-600 text-white shadow-sm hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400',
    secondary:
      'border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
    ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800',
  }

  return (
    <button
      className={twMerge(
        clsx(baseClasses, variantClasses[variant], fullWidth && 'w-full', className),
      )}
      {...props}
    />
  )
}
