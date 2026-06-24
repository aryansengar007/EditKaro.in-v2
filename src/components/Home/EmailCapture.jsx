import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react'
import { submitToSheet, isValidEmail } from '../../lib/googleSheets.config'

export default function EmailCapture({ dark = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('loading')
    const res = await submitToSheet('subscribe', { email })
    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else {
      setError(res.error || 'Something went wrong. Try again.')
      setStatus('error')
    }
  }

  const inputClasses = dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan'
    : 'bg-white border-ink/15 text-ink placeholder:text-ink-soft/60 focus:border-indigo'

  return (
    <div className="w-full max-w-sm">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2.5 rounded-full px-5 py-3.5 ${dark ? 'bg-white/10' : 'bg-indigo/8'}`}
          >
            <Check size={16} className="text-cyan" />
            <span className={`text-sm ${dark ? 'text-white' : 'text-ink'}`}>You're in. Welcome aboard.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative flex items-center gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="you@brand.com"
              className={`flex-1 rounded-full border px-5 py-3.5 text-sm outline-none transition-colors duration-300 ${inputClasses}`}
              data-cursor="explore"
              data-cursor-label="Type"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
                dark ? 'bg-white text-deep-ink' : 'bg-ink text-white'
              }`}
              data-cursor="explore"
              data-cursor-label="Subscribe"
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <ArrowRight size={16} />
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-1.5 text-xs mt-2.5 ${dark ? 'text-red-300' : 'text-red-500'}`}
        >
          <AlertCircle size={12} /> {error}
        </motion.p>
      )}
    </div>
  )
}
