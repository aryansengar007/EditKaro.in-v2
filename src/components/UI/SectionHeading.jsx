import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
  dark = false,
}) {
  const titleSize = size === 'xl' ? 'text-display-lg' : 'text-display-md'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <motion.span
          custom={0}
          variants={reveal}
          className={`eyebrow inline-flex items-center gap-2 ${dark ? 'text-cyan' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          custom={1}
          variants={reveal}
          className={`${titleSize} font-display font-semibold mt-4 ${dark ? 'text-white' : 'text-ink'}`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          custom={2}
          variants={reveal}
          className={`text-base md:text-lg mt-5 leading-relaxed ${dark ? 'text-white/60' : 'text-ink-soft'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
