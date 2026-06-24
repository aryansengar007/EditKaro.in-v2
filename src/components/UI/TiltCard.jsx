import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', tiltStrength = 10, ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const spring = { stiffness: 220, damping: 22, mass: 0.6 }
  const sx = useSpring(mx, spring)
  const sy = useSpring(my, spring)

  const rotateX = useTransform(sy, [0, 1], [tiltStrength, -tiltStrength])
  const rotateY = useTransform(sx, [0, 1], [-tiltStrength, tiltStrength])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative will-change-transform ${className}`}
      {...rest}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.5), transparent 60%)`,
        }}
      />
    </motion.div>
  )
}
