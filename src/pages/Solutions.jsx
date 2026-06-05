import { Link } from 'react-router-dom'
import { solutions } from '../data/content'
import { PageIntro, Section, Card, CTABanner, cardVariant } from '../components/ui'

const solutionIcons = ['rocket', 'ai', 'fintech', 'building']

// Free stock photos (Unsplash) downloaded by scripts/gen-images.mjs.
const IMG = {
  dashboard: '/images/solutions/dashboard.jpg',
  assistant: '/images/solutions/assistant.jpg',
}
const withFallback = (url, fallback) => ({ backgroundImage: `url(${url}), ${fallback}` })

export default function Solutions() {
  return (
    <>
      <PageIntro
        art="solutions"
        label="Solutions & Products"
        title="Accelerators that give you a head start"
        intro="Beyond custom builds, we maintain a set of proprietary platforms and pre-built accelerators. They cut months off delivery while staying fully yours to extend."
      />

      <Section tight>
        <div className="grid grid-2">
          {solutions.map((s, i) => (
            <Card
              key={s.title}
              title={s.title}
              to="/contact"
              linkLabel="Request a demo"
              variant={cardVariant(i)}
              pictogram={solutionIcons[i % solutionIcons.length]}
            >
              <div className="label" style={{ marginBottom: 10 }}>
                {s.type}
              </div>
              <p className="muted">{s.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Product mockup in a browser window */}
      <Section band>
        <div className="split">
          <div>
            <div className="label">Real products, not just demos</div>
            <h2>Dashboards your team will actually open</h2>
            <p className="body-lg muted" style={{ marginTop: 16 }}>
              Every accelerator ships as a working product — analytics, admin and billing
              included — running in your own cloud from day one, and fully yours to extend.
            </p>
            <ul className="ticks" style={{ marginTop: 24 }}>
              <li>Deployed in your environment within two weeks</li>
              <li>White-label and themeable to your brand</li>
              <li>Source code and IP handed over in full</li>
            </ul>
          </div>

          <div className="browser">
            <div className="browser__bar">
              <span className="browser__dot" />
              <span className="browser__dot" />
              <span className="browser__dot" />
              <span className="browser__addr" />
            </div>
            <div
              className="browser__shot"
              role="img"
              aria-label="Product analytics dashboard"
              style={withFallback(
                IMG.dashboard,
                'linear-gradient(135deg, var(--surface-high), var(--surface-container))'
              )}
            />
          </div>
        </div>
      </Section>

      {/* MR. Agent — image with live typing chat bubble + feature list */}
      <Section
        label="MR. Agent"
        title="Your AI sales consultant, on call 24/7"
        intro="Our flagship AI product greets visitors, answers product questions, qualifies leads and books calls — trained on your content and connected to your CRM."
      >
        <div className="split">
          <div className="media-frame">
            <div
              className="media-frame__img"
              role="img"
              aria-label="Person chatting with the AI sales assistant"
              style={withFallback(
                IMG.assistant,
                'linear-gradient(135deg, var(--surface-high), var(--surface-container))'
              )}
            />
            <div className="chat-pop" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <ul className="feature-list">
            <li>
              <strong>Always on.</strong> Round-the-clock responses in any timezone, in dozens
              of languages.
            </li>
            <li>
              <strong>Grounded answers.</strong> Retrieval over your docs and site, so replies
              stay accurate and on-brand.
            </li>
            <li>
              <strong>Books real meetings.</strong> Qualifies intent and drops booked calls
              straight onto your calendar.
            </li>
            <li>
              <strong>Connected.</strong> Hooks into your CRM, helpdesk and calendar out of the
              box.
            </li>
          </ul>
        </div>
      </Section>

      <CTABanner title="Want one of these in your product?" text="Most accelerators are live in your environment within two weeks." />
    </>
  )
}
