import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/static'

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when user navigates
  function close() { setMenuOpen(false) }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={close}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="7" fill="var(--amber-pale)" />
            <circle cx="16" cy="16" r="12.5" stroke="var(--amber)" strokeWidth="1.4" />
            <circle cx="16" cy="16" r="6.5"  stroke="var(--amber)" strokeWidth="0.8" strokeDasharray="2 2.5" />
            <path d="M16 6.5v19M6.5 16h19" stroke="var(--amber)" strokeWidth="0.8" opacity="0.4" />
            <circle cx="16"   cy="16"   r="2.8" fill="var(--amber)" />
            <circle cx="16"   cy="8.5"  r="1.4" fill="var(--amber)" opacity="0.5" />
            <circle cx="23.5" cy="16"   r="1.4" fill="var(--amber)" opacity="0.5" />
            <circle cx="16"   cy="23.5" r="1.4" fill="var(--amber)" opacity="0.5" />
            <circle cx="8.5"  cy="16"   r="1.4" fill="var(--amber)" opacity="0.5" />
          </svg>
          <span className="logo-text">
            Alkebuleum <span>Foundation</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="nav-right">
          <a href="#" className="btn btn-ghost-nav nav-whitepaper">Whitepaper</a>
          <a href="#grants" className="btn btn-amber">Apply for Grant</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </div>

      {/* Mobile dropdown */}
      <div className={`nav-mobile ${menuOpen ? 'nav-mobile-open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <div className="nav-mobile-actions">
          <a href="#" onClick={close} className="btn btn-ghost-nav" style={{ flex: 1, justifyContent: 'center' }}>
            Whitepaper
          </a>
          <a href="#grants" onClick={close} className="btn btn-amber" style={{ flex: 1, justifyContent: 'center' }}>
            Apply for Grant
          </a>
        </div>
      </div>
    </nav>
  )
}
