import { Link } from 'react-router-dom'
import { company, services, industries } from '../data/content'

export default function Footer() {
  const year = 2026

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <span className="logo__mark">NH</span>
              {company.short}
            </Link>
            <p>{company.blurb}</p>
            <div className="footer__social">
              <span>in</span>
              <span>X</span>
              <span>GH</span>
              <span>Dr</span>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Industries</h4>
            <ul>
              {industries.slice(0, 5).map((i) => (
                <li key={i.slug}>
                  <Link to={`/industries#${i.slug}`}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
              <li className="muted" style={{ fontSize: 16 }}>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.name} · {company.vat}
          </span>
          <span>
            <Link to="/contact">Privacy Policy</Link> · <Link to="/contact">Terms</Link> ·{' '}
            <Link to="/contact">Cookie settings</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
