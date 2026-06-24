import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../UI/MagneticButton'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className={`flex items-center justify-between rounded-full px-5 md:px-6 transition-all duration-500 ease-out-expo ${
              scrolled ? 'glass shadow-soft py-2.5' : 'py-1'
            }`}
          >
            <Link to="/" className="flex items-center gap-2" data-cursor="explore" data-cursor-label="Home">
              <span className="font-display text-xl md:text-2xl font-semibold text-ink">Editkaro</span>
              <span className="font-display text-xl md:text-2xl font-semibold text-gradient">.in</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-cursor="explore"
                  data-cursor-label={l.label}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo to-cyan"
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <MagneticButton to="/contact" variant="solid" cursorLabel="Contact">
                Start a Project
              </MagneticButton>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-2 text-ink"
              aria-label="Open menu"
              data-cursor="explore"
              data-cursor-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl font-semibold">
                Editkaro<span className="text-gradient">.in</span>
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 text-ink" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start justify-center gap-2 px-8">
              {[...LINKS, { to: '/contact', label: 'Contact' }].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl font-semibold text-ink flex items-center gap-3 py-2"
                  >
                    {l.label}
                    <ArrowUpRight className="text-indigo" size={28} />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pb-10 flex gap-6 text-ink-soft text-sm font-mono">
              <Link to="/privacy-policy" onClick={() => setOpen(false)}>Privacy</Link>
              <Link to="/terms" onClick={() => setOpen(false)}>Terms</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
