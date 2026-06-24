import { createContext, useContext, useMemo, useState } from 'react'

const CursorContext = createContext(null)

export function CursorProvider({ children }) {
  const [variant, setVariant] = useState('default')
  const [label, setLabel] = useState('')

  const api = useMemo(
    () => ({
      variant,
      label,
      setCursor: (v, l = '') => {
        setVariant(v)
        setLabel(l)
      },
      resetCursor: () => {
        setVariant('default')
        setLabel('')
      },
    }),
    [variant, label]
  )

  return <CursorContext.Provider value={api}>{children}</CursorContext.Provider>
}

export function useCursor() {
  const ctx = useContext(CursorContext)
  if (!ctx) throw new Error('useCursor must be used within CursorProvider')
  return ctx
}
