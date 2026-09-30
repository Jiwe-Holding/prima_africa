import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/Sections.jsx'

export default function NotFound() {
  return (
    <PageHero eyebrow="Error 404" title="This page could not be found." lead="It may have been moved or no longer exists.">
      <Link to="/" className="btn btn--light">Back to home <ArrowRight size={18} /></Link>
    </PageHero>
  )
}
