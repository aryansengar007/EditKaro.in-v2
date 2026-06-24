import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const scrollHeight = h.scrollHeight - h.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo via-violet to-cyan transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
