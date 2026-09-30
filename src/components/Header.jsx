import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { expertises } from '../content/site.js'
import './Header.css'

// Pages whose hero is light (dark text) rather than a dark image/colour band
const lightHeroRoutes = ['/']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExp, setMobileExp] = useState(false)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setMegaOpen(false), setMobileOpen(false))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140)
  }

  const solid = scrolled || megaOpen || mobileOpen
  const lightHero = lightHeroRoutes.includes(pathname)
  const darkText = solid || lightHero
  const inExpertise = pathname.startsWith('/expertise')

  return (
    <header className={`header ${solid ? 'header--solid' : darkText ? 'header--clear' : 'header--overlay'}`}>
      <div className="header__bar container">
        <Logo light={!darkText} />

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/our-group" className="header__link">Our group</NavLink>

          <div className="header__mega-trigger" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className={`header__link ${inExpertise ? 'active' : ''}`}
              aria-expanded={megaOpen}
              aria-controls="mega-menu"
              onClick={() => setMegaOpen((v) => !v)}
            >
              Expertise <ChevronDown size={16} className={megaOpen ? 'rot' : ''} />
            </button>
          </div>

          <NavLink to="/expertise/market-research" className="header__link">Research &amp; data</NavLink>
          <NavLink to="/expertise/artificial-intelligence" className="header__link">AI</NavLink>
          <NavLink to="/contact" className="header__link">Contact</NavLink>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className={`btn btn--sm ${darkText ? 'btn--dark' : 'btn--light'}`}>
            Start a project <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <div
        id="mega-menu"
        className={`mega ${megaOpen ? 'is-open' : ''}`}
        onMouseEnter={openMega}
        onMouseLeave={scheduleClose}
      >
        <div className="mega__inner container">
          <div className="mega__intro">
            <span className="eyebrow">7 Business Units</span>
            <p className="mega__title">Complementary expertise to manage your markets proactively.</p>
            <Link to="/our-group" className="link-arrow">Discover the group <ArrowRight size={16} /></Link>
          </div>
          <ul className="mega__grid">
            {expertises.map((e) => (
              <li key={e.slug}>
                <Link to={`/expertise/${e.slug}`} className="mega__item">
                  <span className={`mega__icon tone-${e.tone}`}><Icon name={e.icon} size={20} /></span>
                  <span>
                    <span className="mega__name">{e.name} <ArrowRight size={14} /></span>
                    <span className="mega__desc">{e.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`drawer ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="drawer__nav container" aria-label="Mobile navigation">
          <Link to="/our-group" className="drawer__link">Our group</Link>
          <button
            type="button"
            className="drawer__link"
            aria-expanded={mobileExp}
            onClick={() => setMobileExp((v) => !v)}
          >
            Expertise <ChevronDown className={mobileExp ? 'rot' : ''} />
          </button>
          <ul className={`drawer__sub ${mobileExp ? 'is-open' : ''}`}>
            {expertises.map((e) => (
              <li key={e.slug}>
                <Link to={`/expertise/${e.slug}`}>
                  <Icon name={e.icon} size={18} /> {e.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/expertise/market-research" className="drawer__link">Research &amp; data</Link>
          <Link to="/contact" className="drawer__link">Contact</Link>
          <Link to="/contact" className="btn btn--primary drawer__cta">
            Start a project <ArrowRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
