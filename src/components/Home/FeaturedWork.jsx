import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { portfolio } from '../../data/portfolio'
import SectionHeading from '../UI/SectionHeading'
import MagneticButton from '../UI/MagneticButton'
import PortfolioCard from '../Portfolio/PortfolioCard'
import Lightbox from '../Portfolio/Lightbox'

const featured = portfolio.slice(0, 6)

export default function FeaturedWork() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    if (!mq.matches) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      const distance = track.scrollWidth - window.innerWidth + 80

      const tween = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.scrollTrigger?.kill()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const openProject = (p) => setActive(p)
  const idx = active ? featured.findIndex((p) => p.id === active.id) : -1
  const next = () => setActive(featured[(idx + 1) % featured.length])
  const prev = () => setActive(featured[(idx - 1 + featured.length) % featured.length])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-0 md:h-screen bg-paper overflow-hidden flex flex-col md:justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="A showreel, not a slideshow."
            description="Scroll through a handful of recent edits across formats — every project below opens into a full case preview."
          />
          <div className="md:pb-2">
            <MagneticButton to="/portfolio" variant="outline" cursorLabel="All Work">
              View Full Portfolio
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="md:px-10 overflow-hidden">
        <div ref={trackRef} className="flex gap-5 px-6 md:px-0 w-max">
          {featured.map((p, i) => (
            <div key={p.id} className="w-[78vw] sm:w-[360px] md:w-[380px] shrink-0">
              <PortfolioCard project={p} onOpen={openProject} index={i} />
            </div>
          ))}
        </div>
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} onNext={next} onPrev={prev} />
    </section>
  )
}
