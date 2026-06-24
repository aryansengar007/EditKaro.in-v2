import SEO from '../components/Layout/SEO'

const SECTIONS = [
  {
    title: '1. Services',
    body: `Editkaro.in provides video editing, motion design, color grading and social
    media marketing services as agreed upon in individual project scopes or retainer
    agreements with each client.`,
  },
  {
    title: '2. Project Scope & Revisions',
    body: `Each project includes an agreed number of revision rounds as outlined at the
    start of the engagement. Requests beyond the agreed scope may incur additional
    charges, communicated transparently before any extra work begins.`,
  },
  {
    title: '3. Payment Terms',
    body: `Unless otherwise agreed in writing, projects require an upfront deposit
    before work begins, with the balance due upon final delivery. Retainer clients are
    billed on a recurring monthly schedule.`,
  },
  {
    title: '4. Intellectual Property',
    body: `Upon full payment, clients receive full ownership of final delivered assets.
    Editkaro.in retains the right to showcase completed work in its portfolio unless
    a client requests confidentiality in writing.`,
  },
  {
    title: '5. Client Responsibilities',
    body: `Clients are responsible for providing accurate source footage, brand
    guidelines and timely feedback. Delays in providing required materials may extend
    project timelines accordingly.`,
  },
  {
    title: '6. Cancellations & Refunds',
    body: `Deposits are non-refundable once work has commenced. Cancellations before
    work begins may be eligible for a partial refund at our discretion.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `Editkaro.in is not liable for indirect damages arising from the use of
    delivered content, including but not limited to platform algorithm changes or
    third-party policy enforcement.`,
  },
  {
    title: '8. Governing Law',
    body: `These terms are governed by the laws of India. Any disputes shall be
    subject to the jurisdiction of courts in Gurugram, Haryana.`,
  },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the Editkaro.in terms of service covering project scope, payments, intellectual property and client responsibilities."
        path="/terms"
      />

      <section className="pt-36 md:pt-44 pb-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <span className="eyebrow">Legal</span>
          <h1 className="font-display text-display-md font-semibold text-ink mt-4">Terms of Service</h1>
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
              Questions about these terms? Reach us at{' '}
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
