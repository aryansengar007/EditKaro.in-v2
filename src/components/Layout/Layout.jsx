import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../UI/ScrollProgress'
import PageTransition from './PageTransition'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
