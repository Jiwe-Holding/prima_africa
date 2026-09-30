import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { expertises, methods, process, stats } from '../content/site.js'
import './Sections.css'

export function PageHero({ eyebrow, title, lead, tone = 'green', image, children }) {
  return (
    <section className={`page-hero page-hero--${tone} ${image ? 'page-hero--image' : ''}`}>
      {image && <img className="page-hero__img" src={image} alt="" />}
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="h-1">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function StatsBand() {
  return (
    <section className="stats" aria-label="Key figures">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stats__item">
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
            <span className="stats__note">{s.note}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ExpertiseGrid({ exclude }) {
  const list = expertises.filter((e) => e.slug !== exclude)
  return (
    <div className="exp-grid">
      {list.map((e, i) => (
        <Reveal key={e.slug} delay={(i % 3) * 90}>
          <Link to={`/expertise/${e.slug}`} className="exp-card">
            <span className="exp-card__media">
              <img src={e.image} alt="" loading="lazy" />
              <span className={`exp-card__icon tone-${e.tone}`}><Icon name={e.icon} size={22} /></span>
            </span>
            <span className="exp-card__body">
              <h3 className="h-3">{e.name}</h3>
              <p>{e.summary}</p>
              <span className="exp-card__more">Learn more <ArrowRight size={16} /></span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

export function MethodsGrid() {
  return (
    <div className="methods">
      {methods.map((m, i) => (
        <Reveal key={m.code} delay={(i % 3) * 90} className="method">
          <div className="method__top">
            <span className="method__icon"><Icon name={m.icon} size={22} /></span>
            <span className="method__code">{m.code}</span>
          </div>
          <h3 className="h-3">{m.title}</h3>
          <p>{m.text}</p>
        </Reveal>
      ))}
    </div>
  )
}

// Interactive methods showcase: tab list + large photo
export function MethodsShowcase() {
  const [active, setActive] = useState(0)
  const m = methods[active]

  return (
    <div className="showcase">
      <div className="showcase__tabs" role="tablist" aria-label="Data collection methods">
        {methods.map((x, i) => (
          <button
            key={x.code}
            type="button"
            role="tab"
            id={`tab-${x.code}`}
            aria-selected={i === active}
            aria-controls="showcase-panel"
            className={`showcase__tab ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className="showcase__code">{x.code}</span>
            <span className="showcase__title">{x.title}</span>
            <ArrowRight size={18} className="showcase__arrow" />
          </button>
        ))}
      </div>

      <div className="showcase__panel" id="showcase-panel" role="tabpanel" aria-labelledby={`tab-${m.code}`}>
        {methods.map((x, i) => (
          <img key={x.code} src={x.image} alt="" className={i === active ? 'is-on' : ''} loading="lazy" />
        ))}
        <div className="showcase__caption" key={m.code}>
          <span className="showcase__badge"><Icon name={m.icon} size={18} /> {m.code}</span>
          <h3 className="h-3">{m.title}</h3>
          <p>{m.text}</p>
        </div>
      </div>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <ol className="process">
      {process.map((p, i) => (
        <Reveal as="li" key={p.step} delay={i * 90} className="process__step">
          <span className="process__num">{p.step}</span>
          <h3 className="h-3">{p.title}</h3>
          <p>{p.text}</p>
        </Reveal>
      ))}
    </ol>
  )
}

export function CtaBand({ title, text, to = '/contact', label = 'Start a project', image = '/images/call-center.webp' }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band">
          <img className="cta-band__img" src={image} alt="" loading="lazy" />
          <div className="cta-band__copy">
            <h2 className="h-2">{title}</h2>
            {text && <p className="lead">{text}</p>}
          </div>
          <Link to={to} className="btn btn--light">
            {label} <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
