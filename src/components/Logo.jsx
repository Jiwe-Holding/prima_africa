import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="PRIMA AFRICA — Home">
      <span className="logo__mark" aria-hidden="true">φ</span>
      <span className="logo__text">
        <strong>PRIMA</strong> AFRICA
      </span>
    </Link>
  )
}
