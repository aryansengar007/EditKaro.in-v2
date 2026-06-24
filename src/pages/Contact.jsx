import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SEO from '../components/Layout/SEO'
import AnimatedText from '../components/UI/AnimatedText'
import FloatingBlobs from '../components/UI/FloatingBlobs'
import ContactForm from '../components/Contact/ContactForm'

const INFO = [
  { icon: Mail, label: 'Email', value: 'hello@editkaro.in' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: MapPin, label: 'Studio', value: 'Gurugram, Haryana, India' },
  { icon: Clock, label: 'Response Time', value: 'Within 1 business day' },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Editkaro.in to start your next video editing or social media marketing project. We typically respond within one business day."
        path="/contact"
      />

      <section className="relative pt-36 md:pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-1" />
        <FloatingBlobs />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow inline-flex items-center gap-2 justify-center mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
            Let's Talk
          </span>
          <AnimatedText
            text="Tell us what you're building."
            as="h1"
            className="text-display-lg font-display font-semibold text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Share a few details about your project and we'll get back with next steps
            and a clear scope.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-10">
          <div className="space-y-4">
            {INFO.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="glass rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo to-cyan flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft/70">{item.label}</p>
                    <p className="text-ink font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              )
            })}

            <div className="rounded-2xl overflow-hidden h-48 relative bg-gradient-to-br from-indigo via-violet to-cyan">
              <div className="absolute inset-0 flex items-center justify-center text-white/90 text-sm font-mono">
                Gurugram, Haryana — India
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
