import { Link } from 'react-router-dom'
import { Decor } from './Art'
import { Pictogram } from './Icon'
import Illustration from './Illustration'

// Cycles the three card variants across a grid by index.
export const cardVariant = (i) => ['outline', 'tinted', 'accent'][i % 3]

// A standard page section with optional eyebrow label, heading and intro.
export function Section({ id, label, title, intro, center, band, tight, deco, children }) {
  return (
    <section
      id={id}
      className={`section${tight ? ' section--tight' : ''}${band ? ' band' : ''}${
        center ? ' center' : ''
      }${deco ? ' section--deco' : ''}`}
    >
      {deco && <Decor variant={deco} />}
      <div className="container">
        {(label || title || intro) && (
          <div className="section__head">
            {label && <div className="label">{label}</div>}
            {title && <h2>{title}</h2>}
            {intro && <p className="body-lg muted">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// Generic card. `to` turns the bottom link into a router link.
// `variant` (outline | tinted | accent) selects one of three visuals/animations;
// `pictogram` is an Icon name rendered as a monochromatic pictogram.
export function Card({
  id,
  title,
  children,
  tags,
  to,
  linkLabel = 'Learn more',
  variant = 'outline',
  pictogram,
}) {
  return (
    <article id={id} className={`card card--${variant}`}>
      <Pictogram name={pictogram} variant={variant} />
      <h3>{title}</h3>
      {children}
      {tags && (
        <div className="chips" style={{ marginTop: 16 }}>
          {tags.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      {to && (
        <Link className="card__link" to={to}>
          {linkLabel} →
        </Link>
      )}
    </article>
  )
}

export function Stats({ items }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div key={s.label}>
          <div className="stat__num">{s.num}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function CTABanner({
  title = 'Ready to build with Nova Hyperion?',
  text = 'Tell us what you want to build. You will have a first working demo just 7 days from kick-off.',
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-banner">
          <h2>{title}</h2>
          <p className="body-lg muted">{text}</p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              Estimate project
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Book an intro call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Quote({ quote, name, role }) {
  return (
    <figure className="quote">
      <p>“{quote}”</p>
      <footer>
        <cite>{name}</cite>
        {role}
      </footer>
    </figure>
  )
}

// Shared intro band for sub-pages. `art` renders a transparent illustration beside the copy.
export function PageIntro({ label, title, intro, art }) {
  return (
    <header className="page-intro section--deco">
      <Decor variant="rings" />
      <div className="container">
        <div className={art ? 'intro-grid' : ''}>
          <div className="intro-copy">
            <div className="label">{label}</div>
            <h1>{title}</h1>
            {intro && <p className="body-lg muted">{intro}</p>}
          </div>
          {art && (
            <div className="intro-art">
              <Illustration name={art} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
