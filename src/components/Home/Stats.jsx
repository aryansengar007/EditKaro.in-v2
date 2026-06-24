import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const STATS = [
  { value: 180, suffix: '+', label: 'Brands & Creators Served' },
  { value: 2400, suffix: '+', label: 'Projects Delivered' },
  { value: 95, suffix: 'M+', label: 'Views Generated' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const numberRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const target = STATS[i].value
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.8,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
            onUpdate: function () {
              el.textContent = Math.floor(el.innerText).toLocaleString()
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-deep-ink overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-mesh-1" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left border-l border-white/10 pl-5 md:pl-6 first:border-l-0 first:pl-0">
              <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
                >
                  0
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-gradient">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-white/60 text-sm md:text-base font-mono">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
