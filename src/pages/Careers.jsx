import { PageIntro, Section, Card, CTABanner, cardVariant } from '../components/ui'
import { Pictogram } from '../components/Icon'

const perkIcons = ['consulting', 'cloud', 'rocket', 'code']
const openingIcons = ['code', 'ai', 'consulting', 'cloud', 'shield', 'qa']
const culture = [1, 2, 3, 4, 5, 6].map((n) => `/images/careers/culture-${n}.jpg`)

const openings = [
  ['Senior Full-Stack Engineer', 'Engineering · Remote (EU)'],
  ['AI / ML Engineer', 'AI · Warsaw / Remote'],
  ['Product Designer', 'Design · Remote (EU)'],
  ['DevOps Engineer', 'Platform · Remote (EU)'],
  ['Engineering Manager', 'Engineering · Warsaw'],
  ['QA Automation Engineer', 'Quality · Remote (EU)'],
]

const perks = [
  ['Senior-only teams', 'Work alongside people you learn from, on small teams that own real outcomes.'],
  ['Remote-first', 'Work from anywhere in Europe, with optional space in our Warsaw studio.'],
  ['Real ownership', 'Equity, a learning budget and time to invest in open source.'],
  ['Ship, do not slide', 'Spend your days building product, not writing status decks.'],
]

export default function Careers() {
  return (
    <>
      <PageIntro
        art="careers"
        label="Careers"
        title="Grow by building real things"
        intro="We are a small, senior team that ships product for a living. If you want autonomy, great peers and work that reaches real users, you will feel at home here."
      />

      {/* Life here — auto-scrolling culture gallery */}
      <Section tight label="Life at Nova Hyperion" title="People you’ll actually enjoy shipping with">
        <div className="ribbon">
          <div className="ribbon__track">
            {[...culture, ...culture].map((src, i) => (
              <div
                key={i}
                className="ribbon__tile"
                style={{
                  backgroundImage: `url(${src}), linear-gradient(135deg, var(--surface-high), var(--surface-container))`,
                }}
                role="img"
                aria-label="Life at Nova Hyperion"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        label="Why Nova Hyperion"
        title="What you can expect"
      >
        <div className="grid grid-2">
          {perks.map(([t, d], i) => (
            <Card key={t} title={t} variant={cardVariant(i)} pictogram={perkIcons[i % perkIcons.length]}>
              <p className="muted">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        band
        label="Open positions"
        title="Roles we are hiring for"
        intro="Do not see your role? Tell us how you would add value — we hire for talent over titles."
      >
        <div className="grid grid-2">
          {openings.map(([role, meta], i) => (
            <article className={`card card--${cardVariant(i)}`} key={role}>
              <Pictogram name={openingIcons[i % openingIcons.length]} variant={cardVariant(i)} />
              <h3>{role}</h3>
              <div className="label" style={{ marginTop: 8 }}>
                {meta}
              </div>
              <a className="card__link" href="/contact">
                Apply →
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        label="Hiring process"
        title="Four honest conversations"
      >
        <div className="grid grid-4">
          {[
            ['01', 'Intro chat', 'A 30-minute call to learn about each other.'],
            ['02', 'Craft interview', 'A practical session on real problems — no trick puzzles.'],
            ['03', 'Team fit', 'Meet the people you would work with day to day.'],
            ['04', 'Offer', 'Clear, fast and transparent on comp and expectations.'],
          ].map(([n, t, d], i) => (
            <div className={`card card--${cardVariant(i)}`} key={n}>
              <div className="label">{n}</div>
              <h3 style={{ marginTop: 8 }}>{t}</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Think you would fit?" text="Send us a note and a link to something you are proud of." />
    </>
  )
}
