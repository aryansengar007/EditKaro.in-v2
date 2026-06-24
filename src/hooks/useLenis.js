import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

/**
 * Sets up Lenis smooth-scroll and keeps GSAP ScrollTrigger perfectly in
 * sync (Lenis drives the scroll position, ScrollTrigger reads from it).
 */
export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return lenisRef
}
