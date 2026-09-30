import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import GroupWheel from '../components/GroupWheel.jsx'
import Reveal from '../components/Reveal.jsx'
import { StatsBand, ExpertiseGrid, MethodsShowcase, ProcessSteps, CtaBand } from '../components/Sections.jsx'
import { sectors, getExpertise } from '../content/site.js'
import './Home.css'

const ticker = ['CATI', 'CAPI', 'CAWI', 'Focus groups', 'In-depth interviews', 'Mystery shopping', 'Social listening', 'Geomarketing', 'Omnibus', 'Segmentation']

const fieldPoints = [
  'Urban and rural coverage across Central Africa',
  'Quantitative, qualitative and digital collection',
  'Quality control from fieldwork to final dataset',
  'International partners for multi-country surveys',
]

export default function Home() {
  const ai = getExpertise('artificial-intelligence')

  return (
    <>
      <Hero />

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <StatsBand />

      {/* FIELD FEATURE */}
      <section className="section">
        <div className="container field">
          <Reveal className="field__media">
            <img src="/images/community-meeting.webp" alt="Researchers leading a community discussion" loading="lazy" />
            <img className="field__inset" src="/images/cati-agent.webp" alt="Telephone interviewer with headset" loading="lazy" />
            <span className="field__tag">Field · Phone · Online</span>
          </Reveal>
          <Reveal delay={120} className="stack">
            <span className="eyebrow">Data collection</span>
            <h2 className="h-2">Close to the ground, where the answers are.</h2>
            <p className="lead">
              Reliable insight starts with reliable data. We reach the people who matter to your business —
              in city centres, markets and villages — and bring their voices back to your boardroom.
            </p>
            <ul className="checks">
              {fieldPoints.map((p) => (
                <li key={p}><Check size={18} aria-hidden="true" /> {p}</li>
              ))}
            </ul>
            <Link to="/expertise/market-research" className="link-arrow">Discover Market Research <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* METHODS SHOWCASE */}
      <section className="section section--dark" id="methods">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal className="stack">
              <span className="eyebrow">Methodologies</span>
              <h2 className="h-2">Every collection mode. One quality standard.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead">
                Quantitative, qualitative or digital: we combine collection modes to reach your audiences with the best
                possible data quality, wherever they are.
              </p>
            </Reveal>
          </div>
          <Reveal><MethodsShowcase /></Reveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal className="stack">
              <span className="eyebrow">Expertise</span>
              <h2 className="h-2">Solutions for every step of your decisions.</h2>
            </Reveal>
            <Reveal delay={100} className="stack">
              <p className="lead">
                Six specialised practices — from market research to AI — that combine to answer your most
                complex business and policy questions.
              </p>
            </Reveal>
          </div>
          <ExpertiseGrid />
        </div>
      </section>

      {/* GROUP */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal className="stack">
              <span className="eyebrow">Our group</span>
              <h2 className="h-2">One group, seven Business Units, one shared standard for data.</h2>
            </Reveal>
            <Reveal delay={100} className="stack">
              <p className="lead">
                PRIMA consists of 7 Business Units working together to support our Clients in the proactive
                management of their respective markets.
              </p>
              <Link to="/our-group" className="link-arrow">More about the group <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
          <Reveal><GroupWheel /></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">How we work</Reveal>
            <Reveal as="h2" delay={80} className="h-2">From business question to recommendation.</Reveal>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* SECTORS + AI */}
      <section className="section">
        <div className="container split">
          <Reveal className="stack">
            <span className="eyebrow">Sectors</span>
            <h2 className="h-2">Deep knowledge of your markets.</h2>
            <p className="lead">
              Our teams work with private companies, public institutions and international organisations across a
              wide range of industries.
            </p>
            <ul className="chips">
              {sectors.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <Link to={`/expertise/${ai.slug}`} className="ai-card">
              <img src={ai.image} alt="" loading="lazy" />
              <span className="ai-card__body">
                <span className="eyebrow">PRIMA AI</span>
                <h3 className="h-2">Conversational AI for your customers.</h3>
                <p>{ai.intro}</p>
                <span className="link-arrow">Discover PRIMA AI <ArrowRight size={16} /></span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need research or data?"
        text="Tell us about your project — our teams will come back to you with a tailored methodological proposal."
      />
    </>
  )
}
