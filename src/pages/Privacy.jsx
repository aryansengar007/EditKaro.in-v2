import SEO from '../components/Layout/SEO'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as your name, email
    address, phone number, and project details when you fill out our contact form or
    subscribe to our newsletter. We may also collect basic usage data (pages visited,
    device type, browser) through standard analytics tools to improve our website.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to respond to your inquiries, deliver
    requested services, send occasional updates if you've subscribed, and improve our
    website and offerings. We do not sell your personal information to third parties.`,
  },
  {
    title: '3. Data Storage',
    body: `Form submissions (contact and newsletter) are stored securely in a Google
    Sheets-backed system accessible only to authorized Editkaro.in team members. We
    retain this information only as long as necessary for business or legal purposes.`,
  },
  {
    title: '4. Cookies & Tracking',
    body: `Our website may use cookies or similar technologies to remember preferences
    and understand how visitors use our site. You can disable cookies through your
    browser settings at any time.`,
  },
  {
    title: '5. Third-Party Services',
    body: `We may use third-party tools (such as Google Sheets/Apps Script for form
    handling) that process data on our behalf under their own privacy and security
    practices.`,
  },
  {
    title: '6. Your Rights',
    body: `You may request access to, correction of, or deletion of your personal
    information at any time by contacting us at hello@editkaro.in.`,
  },
  {
    title: '7. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. Continued use of our website
    after changes constitutes acceptance of the revised policy.`,
  },
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Editkaro.in privacy policy to understand how we collect, use and protect your personal information."
        path="/privacy-policy"
      />

      <section className="pt-36 md:pt-44 pb-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <span className="eyebrow">Legal</span>
          <h1 className="font-display text-display-md font-semibold text-ink mt-4">Privacy Policy</h1>
          <p className="text-ink-soft text-sm mt-3 font-mono">Last updated: June 2026</p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-semibold text-ink">{s.title}</h2>
                <p className="text-ink-soft text-sm md:text-base mt-3 leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-cream">
            <p className="text-ink-soft text-sm">
              Questions about this policy? Reach us at{' '}
              <a href="mailto:hello@editkaro.in" className="text-indigo font-medium">
                hello@editkaro.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
