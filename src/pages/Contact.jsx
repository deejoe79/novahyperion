import { useState } from 'react'
import { company, services } from '../data/content'
import { PageIntro, Section } from '../components/ui'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageIntro
        art="contact"
        label="Contact"
        title="Let's build something"
        intro="Tell us what you want to build and we will get back within one business day. Every conversation can start under NDA — your idea stays yours."
      />

      <Section tight>
        <div className="grid grid-2">
          {/* Form */}
          <div className="card">
            {sent ? (
              <div className="stack">
                <h3>Thanks — message received.</h3>
                <p className="muted">
                  This is a demo form, so nothing was actually sent. In production this would reach our
                  team and you would hear back within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="service">What do you need?</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="A few sentences about what you want to build, your timeline and budget range."
                  />
                </div>
                <button className="btn btn--primary" type="submit">
                  Send & request estimate
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="stack">
            <div className="card">
              <h3>Talk to us directly</h3>
              <ul className="ticks" style={{ marginTop: 16 }}>
                <li>
                  Email: <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  Phone: <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
                </li>
                <li>{company.address}</li>
              </ul>
            </div>
            <div className="card">
              <h3>What happens next</h3>
              <ul className="ticks" style={{ marginTop: 16 }}>
                <li>We reply within one business day.</li>
                <li>A 30-minute call to understand your goals.</li>
                <li>A written estimate and a proposed first demo.</li>
              </ul>
            </div>
            <div className="card">
              <div className="label">Good to know</div>
              <p className="muted" style={{ marginTop: 10 }}>
                We are happy to sign an NDA before any details are shared, and you own all code and IP
                from day one.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
