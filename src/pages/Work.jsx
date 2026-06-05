import { Link } from 'react-router-dom'
import { work } from '../data/content'
import { PageIntro, Section, CTABanner, cardVariant } from '../components/ui'
import { Pictogram } from '../components/Icon'

// Cover photo filename (under /images/work) per case study.
const covers = {
  Flaree: 'flaree',
  PulseDate: 'pulsedate',
  SendWise: 'sendwise',
  AssetIQ: 'assetiq',
  RouteCast: 'routecast',
  'MR. Agent': 'mr-agent',
}
const coverBg = (title) =>
  `url(/images/work/${covers[title]}.jpg), linear-gradient(135deg, var(--surface-bright), var(--surface-container))`

const anatomy = [
  { t: 'Challenge', d: 'The business problem and constraints we set out to solve.', pic: 'shield' },
  { t: 'Solution', d: 'The product, architecture and team we put in place.', pic: 'code' },
  { t: 'Results', d: 'The measurable outcomes after launch.', pic: 'qa' },
  { t: 'Stack', d: 'The technologies and why we chose them.', pic: 'data' },
]

export default function Work() {
  return (
    <>
      <PageIntro
        art="work"
        label="Selected work"
        title="Case studies"
        intro="Real products we have designed, built and scaled with our clients. Each one started with a working demo in the first week."
      />

      <Section tight>
        <div className="grid grid-3">
          {work.map((w) => (
            <article className="project-card" key={w.title}>
              <Link
                to="/contact"
                className="project-card__cover"
                style={{ backgroundImage: coverBg(w.title) }}
                aria-label={`${w.title} case study`}
              >
                <span className="project-card__result">{w.result}</span>
              </Link>
              <div className="project-card__body">
                <div className="label">{w.industry}</div>
                <h3>{w.title}</h3>
                <p className="muted">{w.summary}</p>
                <div className="chips">
                  {w.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link className="card__link" to="/contact">
                  Discuss a similar build →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        band
        label="The anatomy of a case study"
        title="How we tell the story of a build"
        intro="Every detailed case study on request follows the same structure."
      >
        <div className="grid grid-4">
          {anatomy.map((a, i) => (
            <div className={`card card--${cardVariant(i)}`} key={a.t}>
              <Pictogram name={a.pic} variant={cardVariant(i)} />
              <h3>{a.t}</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                {a.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Want the full case study?" text="Ask us for a detailed walkthrough of any project, including metrics and architecture." />
    </>
  )
}
