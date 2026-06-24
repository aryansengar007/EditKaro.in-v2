import { motion } from 'framer-motion'

export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-3 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap scrollbar-none">
      {categories.map((cat) => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            data-cursor="explore"
            data-cursor-label={cat}
            className={`relative shrink-0 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-ink-soft hover:text-ink border border-ink/10'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo via-violet to-cyan"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        )
      })}
    </div>
  )
}
