import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Scrolls to top on route change (or to an #anchor when present).
function useScrollManager(pathname, hash) {
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

// Drives the top scroll-progress bar.
function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scrollbar')
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const p = max > 0 ? doc.scrollTop / max : 0
      if (bar) bar.style.setProperty('--p', p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

// Reveals elements as they enter the viewport (re-scans on each route).
function useScrollReveal(pathname) {
  useEffect(() => {
    const selector =
      '.section__head, .card, .quote, .cta-banner, .marquee, .stats, .faq__item, ' +
      '.hero .label, .hero .display, .hero p, .hero .btn-row'
    const els = Array.from(document.querySelectorAll(selector))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    els.forEach((el) => {
      el.classList.add('reveal')
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el]
      const idx = siblings.indexOf(el)
      el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useScrollManager(pathname, hash)
  useScrollProgress()
  useScrollReveal(pathname)

  return (
    <>
      <div className="scroll-progress" id="scrollbar" aria-hidden="true" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
