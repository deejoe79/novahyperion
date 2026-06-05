import { Link } from 'react-router-dom'
import { industries } from '../data/content'
import { PageIntro, Section, CTABanner, cardVariant } from '../components/ui'
import { Pictogram, industryIcons } from '../components/Icon'

// Mosaic tiles (free Unsplash photos via scripts/gen-images.mjs). `cls` controls
// the bento span; order matters for grid auto-placement.
const tiles = [
  { slug: 'proptech', label: 'Proptech / Real Estate', cls: 'mosaic__tile--lg' },
  { slug: 'fintech', label: 'Fintech & Banking', cls: 'mosaic__tile--wide' },
  { slug: 'logistics', label: 'Logistics & Supply Chain', cls: '' },
  { slug: 'manufacturing', label: 'Manufacturing', cls: '' },
  { slug: 'healthcare', label: 'Healthcare', cls: 'mosaic__tile--wide' },
  { slug: 'retail', label: 'Retail & E-commerce', cls: 'mosaic__tile--wide' },
]
const fallbackBg = 'linear-gradient(135deg, var(--surface-bright), var(--surface-container))'

export default function Industries() {
  return (
    <>
      <PageIntro
        art="industries"
        label="Industries"
        title="Built for the realities of your domain"
        intro="Every vertical has its own constraints — compliance, latency, data sensitivity. We bring patterns, accelerators and hard-won lessons from each one we serve."
      />

      <Section tight>
        <div className="grid grid-3">
          {industries.map((ind, i) => (
            <article
              id={ind.slug}
              className={`card card--${cardVariant(i)}`}
              key={ind.slug}
              style={{ scrollMarginTop: 90 }}
            >
              <Pictogram name={industryIcons[ind.slug]} variant={cardVariant(i)} />
              <h3>{ind.title}</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                {ind.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Duotone mosaic gallery — colour reveals on hover */}
      <Section
        band
        label="Across every sector"
        title="Software we have shipped into the real world"
        intro="Hover any tile to bring it to life."
      >
        <div className="mosaic">
          {tiles.map((t) => (
            <Link
              key={t.slug}
              to={`/industries#${t.slug}`}
              className={`mosaic__tile ${t.cls}`}
              style={{ backgroundImage: `url(/images/industries/${t.slug}.jpg), ${fallbackBg}` }}
              aria-label={t.label}
            >
              <span className="mosaic__label">{t.label}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        label="Why it matters"
        title="Domain context is a shortcut"
        intro="Teams that already understand your space spend less time learning and more time shipping."
      >
        <div className="grid grid-3">
          <div className="card card--outline">
            <div className="stat__num">-30%</div>
            <p className="muted">less ramp-up time when a team knows the domain.</p>
          </div>
          <div className="card card--tinted">
            <div className="stat__num">7 days</div>
            <p className="muted">to a working demo, regardless of vertical.</p>
          </div>
          <div className="card card--accent">
            <div className="stat__num">100%</div>
            <p className="muted">of projects ship with compliance considered from day one.</p>
          </div>
        </div>
      </Section>

      <CTABanner title="Working in a regulated space?" text="We have shipped compliant software in fintech, healthcare and beyond." />
    </>
  )
}
