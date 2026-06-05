import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo__mark">NH</span>
          {company.short}
        </Link>

        <nav className={`nav${open ? ' open' : ''}`}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={close}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary nav__cta" onClick={close}>
            Contact us
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
