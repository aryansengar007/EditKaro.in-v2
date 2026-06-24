import { Link } from 'react-router-dom'
import { useMagnetic } from '../../hooks/useMagnetic'
import { ArrowRight } from 'lucide-react'

/**
 * variant: 'solid' | 'outline' | 'ghost'
 */
export default function MagneticButton({
  to,
  href,
  onClick,
  children,
  variant = 'solid',
  icon = true,
  className = '',
  cursorLabel = 'Open',
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25)

  const base =
    'relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-sm tracking-wide transition-colors duration-300 ease-out-expo select-none'

  const styles = {
    solid: 'bg-ink text-white hover:bg-deep-ink',
    outline: 'border border-ink/15 text-ink hover:border-ink/40',
    gradient: 'text-white bg-gradient-to-r from-indigo via-violet to-cyan shadow-glass-lg',
    ghost: 'text-ink hover:text-indigo',
  }

  const content = (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor="explore"
      data-cursor-label={cursorLabel}
      className={`${base} ${styles[variant]} ${className}`}
      style={{ transition: 'transform 0.2s ease-out-expo, background-color 0.3s' }}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </span>
  )

  if (to) {
    return (
      <Link to={to} className="group inline-block">
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className="group inline-block" target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button onClick={onClick} className="group inline-block">
      {content}
    </button>
  )
}
