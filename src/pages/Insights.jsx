import { Link } from 'react-router-dom'
import { PageIntro, Section, CTABanner, cardVariant } from '../components/ui'
import { Pictogram } from '../components/Icon'

const bg = (url) => ({
  backgroundImage: `url(${url}), linear-gradient(135deg, var(--surface-high), var(--surface-container))`,
})

const resourceIcons = ['data', 'consulting', 'rocket', 'code']

const articles = [
  {
    title: 'Shipping an AI agent to production in 7 days',
    tag: 'AI Agents',
    summary: 'A practical playbook for going from a prompt to a reliable, monitored agent your users can trust.',
  },
  {
    title: 'The boring stack that scales',
    tag: 'Architecture',
    summary: 'Why we reach for proven tools first — and the specific moments when we choose to break that rule.',
  },
  {
    title: 'Designing for the first 7 days',
    tag: 'Process',
    summary: 'How a demo-first approach de-risks every engagement and keeps stakeholders aligned.',
  },
  {
    title: 'RAG without the regret',
    tag: 'AI Agents',
    summary: 'Retrieval patterns that keep generative answers grounded, fast and cheap in production.',
  },
  {
    title: 'A pragmatic guide to mobile CI/CD',
    tag: 'DevOps',
    summary: 'Cutting release friction on iOS and Android without a dedicated platform team.',
  },
  {
    title: 'Data contracts for small teams',
    tag: 'Data',
    summary: 'Lightweight ways to keep analytics trustworthy as a product grows.',
  },
]

const resources = [
  ['Whitepaper', 'The 7-Day Demo Playbook'],
  ['Guide', 'Choosing an AI engagement model'],
  ['Webinar', 'From MVP to Series-B platform'],
  ['Open source', 'Nova Hyperion on GitHub'],
]

export default function Insights() {
  return (
    <>
      <PageIntro
        art="insights"
        label="Insights"
        title="Notes from the build"
        intro="Articles, guides and resources on AI agents, software architecture and shipping fast — written by the engineers and designers doing the work."
      />

      <Section tight>
        {/* Featured article */}
        <Link to="/insights" className="featured">
          <div
            className="featured__media"
            style={bg('/images/insights/post-1.jpg')}
            role="img"
            aria-label={articles[0].title}
          />
          <div className="featured__body">
            <div className="label">Featured · {articles[0].tag}</div>
            <h2>{articles[0].title}</h2>
            <p className="body-lg muted" style={{ marginTop: 14 }}>
              {articles[0].summary}
            </p>
            <span className="card__link">Read article →</span>
          </div>
        </Link>

        {/* Latest posts list */}
        <div className="post-list">
          {articles.slice(1).map((a, idx) => (
            <Link to="/insights" className="post-row" key={a.title}>
              <div
                className="post-row__thumb"
                style={bg(`/images/insights/post-${idx + 2}.jpg`)}
                role="img"
                aria-label={a.title}
              />
              <div className="post-row__body">
                <div className="label">{a.tag}</div>
                <h3>{a.title}</h3>
                <p className="muted">{a.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        band
        label="Resources"
        title="Guides, whitepapers & open source"
        intro="Deeper material to take away — and code you can use today."
      >
        <div className="grid grid-4">
          {resources.map(([type, title], i) => (
            <div className={`card card--${cardVariant(i)}`} key={title}>
              <Pictogram name={resourceIcons[i % resourceIcons.length]} variant={cardVariant(i)} />
              <div className="label">{type}</div>
              <h3 style={{ marginTop: 8 }}>{title}</h3>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Want these in your inbox?" text="We send one thoughtful engineering note a month. No noise." />
    </>
  )
}
