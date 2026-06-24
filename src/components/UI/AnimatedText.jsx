import { motion } from 'framer-motion'

/**
 * Splits text into words and animates each word in with a staggered
 * blur + rise reveal. Use for hero headlines and big statement copy.
 */
export default function AnimatedText({
  text,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.045,
  once = true,
}) {
  const words = text.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
