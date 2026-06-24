import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1800

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 260)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (done) {
      // give the curtain-slide animation time to finish before unmounting
      const t = setTimeout(onFinish, 950)
      return () => clearTimeout(t)
    }
  }, [done, onFinish])

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1 bg-white" />

      {/* curtain panels */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-white"
        animate={{ x: done ? '-100%' : 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-white"
        animate={{ x: done ? '100%' : 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ opacity: done ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline gap-3"
        >
          <span className="font-display text-5xl md:text-7xl font-semibold text-ink tracking-tight">
            Editkaro
          </span>
          <span className="font-display text-5xl md:text-7xl font-semibold text-gradient">.in</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="eyebrow mt-4"
        >
          Crafting Viral Stories
        </motion.p>

        <div className="mt-10 w-56 md:w-72">
          <div className="h-px w-full bg-ink/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo via-violet to-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between font-mono text-xs text-ink-soft">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
