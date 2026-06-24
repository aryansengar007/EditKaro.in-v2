import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react'
import EmailCapture from '../Home/EmailCapture'

export default function Footer() {
  return (
    <footer className="relative bg-deep-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 via-transparent to-cyan/10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-start border-b border-white/10 pb-16">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Let's turn your next idea
              <br /> into a viral story.
            </h3>
            <Link
              to="/contact"
              data-cursor="contact"
              data-cursor-label="Say Hi"
              className="inline-flex items-center gap-2 mt-6 text-cyan font-medium group"
            >
              Start a project
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div>
            <p className="eyebrow text-white/60 mb-3">Stay in the loop</p>
            <EmailCapture dark />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-semibold">Editkaro.in</span>
            <p className="text-white/50 text-sm mt-3 max-w-[220px]">
              Premium video editing & social media marketing for brands and creators.
            </p>
          </div>

          <FooterCol
            title="Navigate"
            links={[
              { label: 'Home', to: '/' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'About', to: '/about' },
              { label: 'Team', to: '/team' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: 'Contact', to: '/contact' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms of Service', to: '/terms' },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: 'Short Form Editing', to: '/portfolio' },
              { label: 'Long Form Editing', to: '/portfolio' },
              { label: 'Social Media Marketing', to: '/portfolio' },
            ]}
          />

          <div>
            <p className="eyebrow text-white/60 mb-4">Follow</p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-cursor="explore"
                  data-cursor-label="Follow"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-white/40 text-xs font-mono">
          <span>© {new Date().getFullYear()} Editkaro.in — All rights reserved.</span>
          <span>Designed & built with intent. Gurugram, India.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="eyebrow text-white/60 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/70 hover:text-white text-sm transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
