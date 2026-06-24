import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Play, ArrowUpRight, Compass, Mail } from 'lucide-react'
import { useCursor } from './CursorContext'

const ICONS = {
  play: Play,
  open: ArrowUpRight,
  explore: Compass,
  contact: Mail,
}

const SIZE = {
  default: 14,
  text: 14,
  play: 88,
  open: 84,
  explore: 72,
  contact: 80,
}

export default function CustomCursor() {
  const { variant: ctxVariant, label: ctxLabel } = useCursor()
  const [hoverVariant, setHoverVariant] = useState(null)
  const [hoverLabel, setHoverLabel] = useState('')
  const [isDown, setIsDown] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [hidden, setHidden] = useState(true)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const springCfg = { stiffness: 320, damping: 28, mass: 0.6 }
  const x = useSpring(mx, springCfg)
  const y = useSpring(my, springCfg)

  // tighter spring for the small dot so it feels precise
  const dotSpring = { stiffness: 800, damping: 40, mass: 0.3 }
  const dx = useSpring(mx, dotSpring)
  const dy = useSpring(my, dotSpring)

  const activeVariant = hoverVariant || ctxVariant || 'default'
  const activeLabel = hoverLabel || ctxLabel || ''

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-ready')

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setHidden(false)
    }
    const down = () => setIsDown(true)
    const up = () => setIsDown(false)
    const leaveWindow = () => setHidden(true)

    const over = (e) => {
      const el = e.target.closest?.('[data-cursor]')
      if (el) {
        setHoverVariant(el.getAttribute('data-cursor'))
        setHoverLabel(el.getAttribute('data-cursor-label') || '')
      }
    }
    const out = (e) => {
      const el = e.target.closest?.('[data-cursor]')
      if (el && !e.relatedTarget?.closest?.('[data-cursor]')) {
        setHoverVariant(null)
        setHoverLabel('')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseout', leaveWindow)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseout', leaveWindow)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.documentElement.classList.remove('cursor-ready')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null

  const size = SIZE[activeVariant] ?? SIZE.default
  const Icon = ICONS[activeVariant]
  const isBig = size > 20

  return (
    <div className={`pointer-events-none fixed inset-0 z-[999] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      {/* outer ring / glow */}
      <motion.div
        style={{ x, y, width: size, height: size }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
      >
        <div
          className="absolute inset-0 rounded-full transition-all duration-300 ease-out-expo"
          style={{
            background: isBig
              ? 'linear-gradient(135deg, rgba(99,102,241,0.95), rgba(139,92,246,0.95))'
              : 'transparent',
            border: isBig ? 'none' : '1.5px solid rgba(99,102,241,0.55)',
            boxShadow: isBig
              ? '0 8px 30px rgba(99,102,241,0.35)'
              : '0 0 0 rgba(0,0,0,0)',
            transform: isDown ? 'scale(0.88)' : 'scale(1)',
          }}
        />
        {isBig && (
          <div className="relative flex flex-col items-center gap-1 text-white">
            {Icon && <Icon size={18} strokeWidth={2.25} />}
            {activeLabel && (
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] whitespace-nowrap">
                {activeLabel}
              </span>
            )}
          </div>
        )}
      </motion.div>

      {/* precise dot */}
      {!isBig && (
        <motion.div
          style={{ x: dx, y: dy }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo"
        />
      )}

      {/* soft ambient glow trailing behind everything */}
      <motion.div
        style={{ x, y, width: 260, height: 260 }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo via-violet to-cyan" />
      </motion.div>
    </div>
  )
}
