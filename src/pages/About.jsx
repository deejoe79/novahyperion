import { Link } from 'react-router-dom'
import { stats } from '../data/content'
import { PageIntro, Section, Stats, CTABanner, cardVariant } from '../components/ui'
import { Pictogram } from '../components/Icon'

const valueIcons = ['rocket', 'consulting', 'code', 'shield']
const bg = (url, fallback = 'linear-gradient(135deg, var(--surface-high), var(--surface-container))') => ({
  backgroundImage: `url(${url}), ${fallback}`,
})

const values = [
  ['Demo first', 'We prove direction with working software in days, not slideware in weeks.'],
  ['Own the outcome', 'We measure ourselves on the metrics that matter to your business.'],
  ['Clear over clever', 'Simple architecture, honest communication, no surprises.'],
  ['Build to hand over', 'Code, docs and tooling that any team can pick up later.'],
]

const team = [
  ['Alex Nowak', 'Co-founder & CEO'],
  ['Jana Kowalska', 'Co-founder & CTO'],
  ['Tomasz Wójcik', 'Head of AI'],
  ['Sara Lindqvist', 'Head of Design'],
  ['Marcin Lewandowski', 'Head of Delivery'],
  ['Ewa Zielińska', 'Head of People'],
]

export default function About() {
  return (
    <>
      <PageIntro
        art="about"
        label="About us"
        title="A product studio that ships"
        intro="Nova Hyperion started in 2015 with a simple belief: great software comes from small, senior teams who own the outcome. A decade later we have shipped over 120 products across four continents — and we still start every engagement with a demo in week one."
      />

      <Section tight>
        <Stats items={stats} />
      </Section>

      {/* Our story — overlapping photo collage */}
      <Section>
        <div className="split">
          <div>
            <div className="label">Our story</div>
            <h2>A decade of shipping, side by side</h2>
            <p className="body-lg muted" style={{ marginTop: 16 }}>
              We began as two engineers who were tired of watching good ideas die in slide
              decks. So we made a rule: prove it with working software, fast.
            </p>
            <p className="muted" style={{ marginTop: 14 }}>
              Ten years on we are a senior, remote-first team of designers and engineers across
              Europe — still small enough to care about every detail, and still shipping a demo
              in week one.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn--primary" to="/careers">
                Join the team
              </Link>
              <Link className="btn btn--ghost" to="/work">
                See our work
              </Link>
            </div>
          </div>

          <div className="collage">
            <div className="collage__img collage__img--a" style={bg('/images/about/studio-a.jpg')} role="img" aria-label="The team collaborating" />
            <div className="collage__img collage__img--b" style={bg('/images/about/studio-b.jpg')} role="img" aria-label="A working session" />
            <div className="collage__badge">
              <div className="stat__num" style={{ fontSize: 30 }}>2015</div>
              <div className="stat__label">founded in Budapest</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        band
        label="Our values"
        title="What we optimize for"
      >
        <div className="grid grid-2">
          {values.map(([t, d], i) => (
            <div className={`card card--${cardVariant(i)}`} key={t}>
              <Pictogram name={valueIcons[i % valueIcons.length]} variant={cardVariant(i)} />
              <h3>{t}</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="Leadership"
        title="The people behind Nova Hyperion"
        intro="Senior operators who have built and scaled products before — and still write code and sit in design reviews."
      >
        <div className="grid grid-3">
          {team.map(([name, role], i) => (
            <div className="person" key={name}>
              <div
                className="person__photo"
                style={bg(`/images/about/team-${i + 1}.jpg`)}
                role="img"
                aria-label={name}
              />
              <h3>{name}</h3>
              <div className="label person__role">{role}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        band
        center
        tight
        label="Recognitions & partners"
      >
        <div className="logos">
          <span>Clutch · Top Developers 2026</span>
          <span>GoodFirms · Top AI Company</span>
          <span>AWS Partner</span>
          <span>Google Cloud Partner</span>
          <span>ISO 27001</span>
        </div>
      </Section>

      <CTABanner title="Like how we think?" text="Whether you want to build with us or work with us, we would love to talk." />
    </>
  )
}
