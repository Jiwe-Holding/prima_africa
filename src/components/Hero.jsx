import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone, Tablet, ShoppingBasket } from 'lucide-react'
import './Hero.css'

const words = ['markets', 'brands', 'consumers', 'policies']

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="h2o">
      <div className="container">
        <div className="h2o__meta">
          <span className="eyebrow">Market research · Data · Consulting</span>
          <span className="h2o__live"><i /> Fieldwork teams in Kinshasa &amp; Bangui</span>
        </div>

        <h1 className="h2o__title">
          <span className="h2o__line">
            From the field
            <span className="h2o__pill" aria-hidden="true">
              <img src="/images/field-interviewer.webp" alt="" />
            </span>
          </span>
          <span className="h2o__line">
            to decisions that
          </span>
          <span className="h2o__line">
            move{' '}
            <span className="h2o__rotator" aria-live="polite">
              {words.map((w, k) => (
                <span key={w} className={k === i ? 'is-on' : ''} aria-hidden={k !== i}>{w}.</span>
              ))}
            </span>
          </span>
        </h1>

        <div className="h2o__grid">
          <div className="h2o__intro">
            <p className="lead">
              PRIMA AFRICA designs and runs your studies — CATI, CAPI, qualitative and digital — then turns the
              data into strategic recommendations your teams can act on.
            </p>
            <div className="h2o__ctas">
              <Link to="/expertise/market-research" className="btn btn--dark">
                Explore our research <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost">Start a project</Link>
            </div>
          </div>

          <div className="h2o__bento">
            <figure className="h2o__tile h2o__tile--tall">
              <img src="/images/cati-agent-2.webp" alt="Interviewer with a headset conducting a telephone survey" />
              <figcaption><Phone size={14} /> CATI · Telephone</figcaption>
            </figure>
            <figure className="h2o__tile">
              <img src="/images/market-vendor.webp" alt="Vendor at an open-air food market" />
              <figcaption><ShoppingBasket size={14} /> Consumer insight</figcaption>
            </figure>
            <Link to="/our-group" className="h2o__tile h2o__stat">
              <span className="h2o__stat-num">7</span>
              <span className="h2o__stat-txt">Business Units working together on your markets</span>
              <span className="h2o__stat-go"><ArrowUpRight size={18} /></span>
            </Link>
            <figure className="h2o__tile h2o__tile--wide">
              <img src="/images/community-meeting.webp" alt="Community discussion during qualitative fieldwork" />
              <figcaption><Tablet size={14} /> CAPI &amp; qualitative fieldwork</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
