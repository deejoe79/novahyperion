import { technologies } from '../data/content'
import { PageIntro, Section, CTABanner, cardVariant } from '../components/ui'
import { Pictogram } from '../components/Icon'

const groupIcons = ['code', 'cloud', 'ai', 'data']

// Tech-stack chips that float around the workspace photo.
const floatingChips = ['TypeScript', 'React', 'Python', 'AWS', 'Kubernetes', 'PyTorch', 'Go']

export default function Technologies() {
  return (
    <>
      <PageIntro
        art="technologies"
        label="Technologies"
        title="The tools behind our builds"
        intro="We are deliberately conservative about our stack: proven, well-supported tools that let us move fast without surprising you in production. We pick technology to fit your problem — never the other way around."
      />

      <Section tight>
        <div className="grid grid-2">
          {technologies.map((t, i) => (
            <div className={`card card--${cardVariant(i)}`} key={t.group}>
              <Pictogram name={groupIcons[i % groupIcons.length]} variant={cardVariant(i)} />
              <h3>{t.group}</h3>
              <div className="chips" style={{ marginTop: 16 }}>
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

      {/* Workspace photo with floating tech-stack chips over a dotted grid */}
      <Section band>
        <div className="split">
          <div>
            <div className="label">Battle-tested toolkit</div>
            <h2>One modern stack, end to end</h2>
            <p className="body-lg muted" style={{ marginTop: 16 }}>
              The same proven tools power every layer — from the type-safe frontend to the
              models, pipelines and infrastructure behind it. Fewer surprises, faster delivery,
              and code your team can own long after launch.
            </p>
            <ul className="ticks" style={{ marginTop: 24 }}>
              <li>Type-safe from database to UI</li>
              <li>Cloud-agnostic, infrastructure as code</li>
              <li>Observability and tests wired in from day one</li>
            </ul>
          </div>

          <div className="tech-photo">
            <div
              className="tech-photo__img"
              role="img"
              aria-label="Developer workspace with code on screen"
              style={{
                backgroundImage:
                  'url(/images/technologies/workspace.jpg), linear-gradient(135deg, var(--surface-high), var(--surface-container))',
              }}
            />
            {floatingChips.map((c, i) => (
              <span className={`tech-chip tech-chip--${i + 1}`} key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        label="Our principles"
        title="How we choose technology"
      >
        <div className="grid grid-3">
          <div className="card card--outline">
            <Pictogram name="consulting" variant="outline" />
            <h3>Boring by default</h3>
            <p className="muted" style={{ marginTop: 10 }}>
              We reach for mature, well-documented tools first. Novelty has to earn its place.
            </p>
          </div>
          <div className="card card--tinted">
            <Pictogram name="web3" variant="tinted" />
            <h3>Own your stack</h3>
            <p className="muted" style={{ marginTop: 10 }}>
              No lock-in to us. Standard tooling means any team can pick up the code later.
            </p>
          </div>
          <div className="card card--accent">
            <Pictogram name="qa" variant="accent" />
            <h3>Observable from day one</h3>
            <p className="muted" style={{ marginTop: 10 }}>
              Logging, metrics and tracing are part of the build, not an afterthought.
            </p>
          </div>
        </div>
      </Section>

      <CTABanner title="Have a stack already?" text="We are happy to work within your existing tools and conventions." />
    </>
  )
}
