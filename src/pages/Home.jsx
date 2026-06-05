import { Link } from 'react-router-dom'
import {
  company,
  services,
  work,
  industries,
  technologies,
  testimonials,
  engagementModels,
  stats,
  clients,
} from '../data/content'
import { Section, Card, Stats, Quote, CTABanner, cardVariant } from '../components/ui'
import { serviceIcons, industryIcons } from '../components/Icon'
import { HeroArt, Divider } from '../components/Art'
import FAQ from '../components/FAQ'

const workIcons = {
  'HR Tech': 'rocket',
  Social: 'consulting',
  Fintech: 'fintech',
  Proptech: 'building',
  Logistics: 'truck',
  AI: 'ai',
}

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <span className="hero__blob hero__blob--1" aria-hidden="true" />
        <span className="hero__blob hero__blob--2" aria-hidden="true" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="label">AI · Software · Data · Cloud</div>
              <h1 className="display">
                Build smarter,
                <br />
                ship faster with Nova Hyperion.
              </h1>
              <p className="body-lg muted">{company.blurb}</p>
              <div className="btn-row">
                <Link className="btn btn--primary" to="/contact">
                  Estimate project
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Intro call
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <HeroArt />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted-by logos (animated marquee) */}
      <Section tight band center label="Trusted by teams shipping at scale">
        <div className="marquee">
          <div className="marquee__track">
            {[...clients, ...clients].map((c, i) => (
              <span key={`${c}-${i}`}>{c}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Stats */}
      <Section tight>
        <Stats items={stats} />
      </Section>

      <div className="container">
        <Divider />
      </div>

      {/* 4. Core services */}
      <Section
        deco="rings"
        label="What we do"
        title="Engineering across the full product lifecycle"
        intro="One partner for strategy, design, build and scale — so your roadmap never waits on a handoff."
      >
        <div className="grid grid-4">
          {services.slice(0, 8).map((s, i) => (
            <Card
              key={s.slug}
              title={s.title}
              to="/services"
              variant={cardVariant(i)}
              pictogram={serviceIcons[s.slug]}
            >
              <p className="muted">{s.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. Featured work */}
      <Section
        band
        label="Selected work"
        title="Products we have shipped"
        intro="A few of the platforms and apps we have built with our clients."
      >
        <div className="grid grid-3">
          {work.slice(0, 6).map((w, i) => (
            <Card
              key={w.title}
              title={w.title}
              tags={w.tags}
              to="/work"
              variant={cardVariant(i)}
              pictogram={workIcons[w.industry] || 'code'}
            >
              <p className="muted">{w.summary}</p>
              <div className="label" style={{ marginTop: 14 }}>
                {w.result}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. Industries */}
      <Section
        label="Industries"
        title="Domain expertise that compounds"
        intro="We bring patterns and accelerators from every vertical we work in."
      >
        <div className="grid grid-3">
          {industries.map((ind, i) => (
            <Card
              key={ind.slug}
              title={ind.title}
              to="/industries"
              variant={cardVariant(i)}
              pictogram={industryIcons[ind.slug]}
            >
              <p className="muted">{ind.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 7. Technology stack */}
      <Section
        band
        label="Technologies"
        title="A modern, boring-on-purpose stack"
        intro="Proven tools we trust in production — chosen for your problem, not for hype."
      >
        <div className="grid grid-2">
          {technologies.map((t) => (
            <div className="card" key={t.group}>
              <h3>{t.group}</h3>
              <div className="chips" style={{ marginTop: 14 }}>
                {t.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Testimonials */}
      <Section
        label="Reviews"
        title="They already trusted us"
        intro="What it is like to build with Nova Hyperion, in our clients' words."
      >
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <Quote key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* 9. Engagement models */}
      <Section
        band
        deco="dots"
        label="How we work"
        title="Engagement models that flex with you"
        intro="Pick the shape of collaboration that fits your stage and team."
      >
        <div className="grid grid-3">
          {engagementModels.map((m, i) => (
            <Card
              key={m.title}
              title={m.title}
              variant={cardVariant(i)}
              pictogram={['consulting', 'data', 'rocket'][i]}
            >
              <p className="muted">{m.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 10. Recognitions */}
      <Section tight center label="Recognitions">
        <div className="logos">
          <span>Clutch · Top Developers 2026</span>
          <span>Clutch · 4.9★</span>
          <span>GoodFirms · Top AI Company</span>
          <span>AWS Partner</span>
        </div>
      </Section>

      {/* 11. Insights teaser */}
      <Section
        band
        label="Insights"
        title="Latest from our tech blog"
        intro="Notes on AI agents, software architecture and shipping fast."
      >
        <div className="grid grid-3">
          <Card
            title="Shipping an AI agent to production in 7 days"
            to="/insights"
            linkLabel="Read article"
            variant="outline"
            pictogram="ai"
          >
            <p className="muted">A practical playbook for going from prompt to a reliable, monitored agent.</p>
          </Card>
          <Card
            title="The boring stack that scales"
            to="/insights"
            linkLabel="Read article"
            variant="tinted"
            pictogram="cloud"
          >
            <p className="muted">Why we reach for proven tools first — and when we don't.</p>
          </Card>
          <Card
            title="Designing for the first 7 days"
            to="/insights"
            linkLabel="Read article"
            variant="accent"
            pictogram="consulting"
          >
            <p className="muted">How a demo-first approach de-risks every engagement.</p>
          </Card>
        </div>
      </Section>

      {/* 12. CTA banner */}
      <CTABanner />

      {/* 13. FAQ — above the footer */}
      <FAQ />
    </>
  )
}
