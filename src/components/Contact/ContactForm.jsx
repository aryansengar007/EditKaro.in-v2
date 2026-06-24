import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Check, AlertCircle, ArrowRight } from 'lucide-react'
import { submitToSheet, isValidEmail, isValidPhone } from '../../lib/googleSheets.config'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Tell us your name.'
    if (!isValidEmail(form.email)) e.email = 'Enter a valid email address.'
    if (form.phone && !isValidPhone(form.phone)) e.phone = 'Enter a valid phone number.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Tell us a little more about your project.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const res = await submitToSheet('contact', form)
    if (res.ok) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setServerError(res.error || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 md:p-14 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo to-cyan flex items-center justify-center mx-auto">
          <Check size={26} className="text-white" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink mt-6">Message sent.</h3>
        <p className="text-ink-soft mt-3 max-w-sm mx-auto">
          Thanks for reaching out — our team typically replies within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-indigo hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 md:p-10 space-y-5">
      <Field label="Full Name" error={errors.name}>
        <input
          value={form.name}
          onChange={handleChange('name')}
          placeholder="Aryan Sengar"
          data-cursor="explore"
          data-cursor-label="Type"
          className={inputClass(errors.name)}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email Address" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="you@brand.com"
            data-cursor="explore"
            data-cursor-label="Type"
            className={inputClass(errors.email)}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} optional>
          <input
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="+91 98765 43210"
            data-cursor="explore"
            data-cursor-label="Type"
            className={inputClass(errors.phone)}
          />
        </Field>
      </div>

      <Field label="Your Message" error={errors.message}>
        <textarea
          value={form.message}
          onChange={handleChange('message')}
          rows={5}
          placeholder="Tell us about your brand, your goals, and what you're looking to create…"
          data-cursor="explore"
          data-cursor-label="Type"
          className={`${inputClass(errors.message)} resize-none`}
        />
      </Field>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-sm text-red-500"
          >
            <AlertCircle size={14} /> {serverError}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        data-cursor="contact"
        data-cursor-label="Send"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-medium text-sm hover:bg-deep-ink transition-colors duration-300"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Message <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  )
}

function inputClass(error) {
  return `w-full rounded-2xl border px-5 py-3.5 text-sm outline-none bg-white transition-colors duration-300 ${
    error ? 'border-red-400' : 'border-ink/12 focus:border-indigo'
  }`
}

function Field({ label, error, optional, children }) {
  return (
    <div>
      <label className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">{label}</span>
        {optional && <span className="text-xs text-ink-soft/50">Optional</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-500 mt-1.5">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}
