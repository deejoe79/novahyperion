import { Link } from 'react-router-dom'
import { services } from '../data/content'
import { PageIntro, Section, CTABanner, cardVariant } from '../components/ui'
import { Pictogram, serviceIcons } from '../components/Icon'

// Raster images (AI-generated via scripts/gen-images.mjs). Each falls back to an
// on-brand gradient if the file is missing, so the layout never breaks.
const IMG = {
  studio: '/images/services/studio.jpg',
  build: '/images/services/build.jpg',
}
const withFallback = (url, fallback) => ({ backgroundImage: `url(${url}), ${fallback}` })

export default function Services() {
  return (
    <>
      <PageIntro
        art="services"
        label="Services"
        title="Product engineering, end to end"
        intro="Eight disciplines under one roof, so your product never stalls waiting on a vendor handoff. Every engagement follows the same shape: overview → details → process → related work → kick-off."
      />

      <Section tight>
        <div className="grid grid-2">
          {services.map((s, i) => (
            <article
              id={s.slug}
              className={`card card--${cardVariant(i)}`}
              key={s.slug}
              style={{ scrollMarginTop: 90 }}
            >
              <Pictogram name={serviceIcons[s.slug]} variant={cardVariant(i)} />
              <h3>{s.title}</h3>
              <p className="muted" style={{ marginBottom: 18 }}>
                {s.summary}
              </p>
              <ul className="ticks">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Framed photo with overlapping ring + floating badge */}
      <Section band>
        <div className="split">
          <div>
            <div className="label">How we build</div>
            <h2>Senior teams, shipping in the open</h2>
            <p className="body-lg muted" style={{ marginTop: 16 }}>
              No black boxes. You see working software early and often — paired with the
              engineers building it, the decisions behind it, and the metrics that prove it
              works.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn--primary" to="/work">
                See our work
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Talk to an engineer
              </Link>
            </div>
          </div>

          <div className="media-frame">
            <svg className="media-frame__ring" viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="58" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="40" fill="none" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="1.5" />
              <circle cx="60" cy="2" r="4" fill="var(--primary)" />
            </svg>
            <div
              className="media-frame__img"
              role="img"
              aria-label="Engineer building software with live UI and data visualisations"
              style={withFallback(
                IMG.build,
                'linear-gradient(135deg, var(--surface-high), var(--surface-container))'
              )}
            />
            <div className="media-frame__badge">
              <div className="stat__num">7 days</div>
              <div className="stat__label">to first working demo</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Full-bleed duotone showcase band */}
      <Section tight>
        <div className="showcase">
          <div
            className="showcase__media"
            style={withFallback(IMG.studio, 'linear-gradient(135deg, #2a1c16, #14142b)')}
            aria-hidden="true"
          />
          <div className="showcase__inner">
            <div className="label">One studio, every discipline</div>
            <h2>From a blank repo to a product people rely on</h2>
            <p className="body-lg">
              Strategy, design, AI, web, mobile, data and cloud — one accountable team that
              carries your idea all the way to scale.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn--primary" to="/contact">
                Estimate project
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        band
        label="How we deliver"
        title="A predictable path from idea to impact"
        intro="The same lightweight process underpins every service."
      >
        <div className="grid grid-4">
          {[
            ['01 · Discover', 'A short paid sprint to align on goals, scope and success metrics.'],
            ['02 · Demo', 'A first working demo within 7 days so we validate direction early.'],
            ['03 · Build', 'Iterative delivery in two-week cycles with continuous QA.'],
            ['04 · Scale', 'Hardening, monitoring and ongoing iteration after launch.'],
          ].map(([t, d], i) => (
            <div className={`card card--${cardVariant(i)}`} key={t}>
              <div className="label">{t.split(' · ')[0]}</div>
              <h3 style={{ marginTop: 8 }}>{t.split(' · ')[1]}</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Not sure which service you need?" text="Tell us the problem. We will recommend the smallest path to a working demo." />
    </>
  )
}
