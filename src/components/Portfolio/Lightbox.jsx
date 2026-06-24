import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play, Clock, Tag } from 'lucide-react'
import { useEffect } from 'react'

export default function Lightbox({ project, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-ink/70 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-glass-lg grid md:grid-cols-[1.4fr_1fr] max-h-[88vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-soft"
              data-cursor="explore"
              data-cursor-label="Close"
            >
              <X size={18} />
            </button>

            <div
              className="relative aspect-video md:aspect-auto md:h-full flex items-center justify-center"
              style={{ background: `linear-gradient(150deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
            >
              <div className="absolute inset-0 bg-black/15" />
              <button
                className="relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                data-cursor="play"
                data-cursor-label="Play"
              >
                <Play size={22} className="text-white fill-white" />
              </button>

              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/25"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/25"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="p-7 md:p-9 overflow-y-auto">
              <span className="eyebrow">{project.category}</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink mt-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-ink-soft text-sm md:text-base mt-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mt-6 text-ink-soft text-sm font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} /> {project.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 text-xs font-mono text-indigo bg-indigo/8 border border-indigo/15 rounded-full px-3 py-1.5"
                  >
                    <Tag size={11} /> {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
