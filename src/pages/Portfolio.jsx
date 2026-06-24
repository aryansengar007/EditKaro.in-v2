import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/Layout/SEO'
import SectionHeading from '../components/UI/SectionHeading'
import FilterBar from '../components/Portfolio/FilterBar'
import PortfolioCard from '../components/Portfolio/PortfolioCard'
import Lightbox from '../components/Portfolio/Lightbox'
import { categories, portfolio } from '../data/portfolio'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  )

  const idx = lightboxItem ? filtered.findIndex((p) => p.id === lightboxItem.id) : -1
  const next = () => setLightboxItem(filtered[(idx + 1) % filtered.length])
  const prev = () => setLightboxItem(filtered[(idx - 1 + filtered.length) % filtered.length])

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Editkaro.in's portfolio — short form, long form, gaming, football, eCommerce, documentary, color grading, anime and ad creative work."
        path="/portfolio"
      />

      <section className="pt-36 md:pt-44 pb-12 bg-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-1 opacity-70" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <SectionHeading
            eyebrow="Our Work"
            title="Stories we've helped tell."
            description="Every edit below is a real brief, real footage, and a real outcome — filtered by the format that matters to you."
            size="xl"
          />
        </div>
      </section>

      <section className="sticky top-[64px] md:top-[76px] z-30 bg-paper/80 backdrop-blur-md border-b border-ink/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FilterBar categories={categories} active={active} onChange={setActive} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-paper min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key={active}
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
              >
                {filtered.map((p, i) => (
                  <motion.div key={p.id} layout className={p.size === 'wide' ? 'sm:col-span-2' : ''}>
                    <PortfolioCard project={p} onOpen={setLightboxItem} index={i} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-ink-soft py-20">
                No projects in this category yet — check back soon.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Lightbox project={lightboxItem} onClose={() => setLightboxItem(null)} onNext={next} onPrev={prev} />
    </>
  )
}
