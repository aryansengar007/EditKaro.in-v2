import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'

const SIZE_CLASSES = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/10] sm:col-span-2',
  square: 'aspect-[4/5]',
}

export default function PortfolioCard({ project, onOpen, index = 0 }) {
  const [from, to] = project.gradient

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full rounded-3xl overflow-hidden text-left ${SIZE_CLASSES[project.size] || 'aspect-[4/5]'}`}
      data-cursor="play"
      data-cursor-label="Watch"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-110"
        style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 2px, transparent 2px, transparent 14px)',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out-expo">
        <Play size={14} className="text-white fill-white" />
      </div>

      <div className="absolute top-4 left-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
          {project.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
        <h3 className="font-display text-lg md:text-xl font-semibold text-white leading-tight">
          {project.title}
        </h3>
        <p className="text-white/70 text-xs mt-1.5 line-clamp-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
          {project.description}
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-white/70">
            <Clock size={11} /> {project.duration}
          </span>
          <div className="flex gap-1.5">
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-[10px] text-white/60">
                #{t.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  )
}
