import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, expertises } from '../content/site.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <h2 className="h-2">Let’s talk about your next research project.</h2>
          <Link to="/contact" className="btn btn--primary">
            Contact us <ArrowRight size={18} />
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p>
              PRIMA consists of 7 Business Units working together to support our Clients in the proactive
              management of their respective markets.
            </p>
          </div>

          <div>
            <h3 className="footer__title">Expertise</h3>
            <ul className="footer__list">
              {expertises.map((e) => (
                <li key={e.slug}><Link to={`/expertise/${e.slug}`}>{e.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Group</h3>
            <ul className="footer__list">
              <li><Link to="/our-group">Our group</Link></li>
              <li><Link to="/expertise/market-research#methods">Methodologies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Offices</h3>
            <ul className="footer__list footer__offices">
              {company.offices.map((o) => (
                <li key={o.city}>
                  <MapPin size={16} aria-hidden="true" />
                  <span><strong>{o.city}</strong><br />{o.country}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {company.copyrightSince === year ? year : `${company.copyrightSince}–${year}`} PRIMA AFRICA. All rights reserved.</span>
          <span>Research · Data · Consulting</span>
        </div>
      </div>
    </footer>
  )
}
