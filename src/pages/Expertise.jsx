import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { PageHero, ExpertiseGrid, MethodsGrid, ProcessSteps, CtaBand } from '../components/Sections.jsx'
import { getExpertise } from '../content/site.js'
import NotFound from './NotFound.jsx'
import './Pages.css'

function Column({ col }) {
  return (
    <div className="xcol">
      <h2 className="xcol__title">{col.title}</h2>
      {col.chips ? (
        <ul className="xcol__chips">
          {col.items.map((it) => (
            <li key={it.t}><Check size={16} aria-hidden="true" /> {it.t}</li>
          ))}
        </ul>
      ) : (
        <ul className="xcol__list">
          {col.items.map((it, i) => (
            <Reveal as="li" key={it.t} delay={i * 60}>
              <span className="xcol__idx">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{it.t}</h3>
                {it.d && <p>{it.d}</p>}
              </div>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Expertise() {
  const { slug } = useParams()
  const exp = getExpertise(slug)
  if (!exp) return <NotFound />

  const isResearch = exp.slug === 'market-research'

  return (
    <>
      <PageHero eyebrow="Business Unit" title={exp.name} lead={exp.intro} tone={exp.tone} image={exp.image} key={exp.slug}>
        <div className="page-hero__ctas">
          <Link to="/contact" className="btn btn--light">Talk to an expert <ArrowRight size={18} /></Link>
          {isResearch && <a href="#methods" className="btn btn--ghost-light">Our methodologies</a>}
        </div>
      </PageHero>

      <section className="section">
        <div className="container xcols">
          {exp.columns.map((col) => (
            <Column key={col.title} col={col} />
          ))}
        </div>
      </section>

      {isResearch && (
        <>
          <section className="section section--soft" id="methods">
            <div className="container">
              <div className="section-head section-head--split">
                <Reveal className="stack">
                  <span className="eyebrow">Methodologies</span>
                  <h2 className="h-2">Every collection mode, one quality standard.</h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="lead">
                    Face-to-face fieldwork, telephone, online or qualitative: each study combines the methods best
                    suited to your audiences and timelines.
                  </p>
                </Reveal>
              </div>
              <MethodsGrid />
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <Reveal as="span" className="eyebrow">How we work</Reveal>
                <Reveal as="h2" delay={80} className="h-2">A research process managed end to end.</Reveal>
              </div>
              <ProcessSteps />
            </div>
          </section>
        </>
      )}

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">The PRIMA group</Reveal>
            <Reveal as="h2" delay={80} className="h-2">Explore our other expertise.</Reveal>
          </div>
          <ExpertiseGrid exclude={exp.slug} />
        </div>
      </section>

      <CtaBand
        title={`A ${exp.name} project in mind?`}
        text="Our teams will get back to you with a proposal tailored to your challenges."
      />
    </>
  )
}
