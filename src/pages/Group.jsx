import { MapPin } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import GroupWheel from '../components/GroupWheel.jsx'
import Icon from '../components/Icon.jsx'
import { PageHero, StatsBand, ExpertiseGrid, CtaBand } from '../components/Sections.jsx'
import { company } from '../content/site.js'
import './Pages.css'

const values = [
  {
    icon: 'Handshake',
    title: 'Partners to our clients',
    text: 'We work with our Clients like partners and colleagues, to improve their business processes for the long term.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Methodological rigour',
    text: 'Proven collection and analysis methods, and a constant focus on data quality.',
  },
  {
    icon: 'Earth',
    title: 'Local roots, international reach',
    text: 'Offices in Kinshasa and Bangui, and international partners for multi-country studies.',
  },
]

export default function Group() {
  return (
    <>
      <PageHero
        eyebrow="Our group"
        title="7 Business Units working for your markets."
        lead="PRIMA consists of 7 Business Units working together to support our Clients in the proactive management of their respective markets."
        image="/images/business-team.webp"
      />

      <StatsBand />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Organisation</Reveal>
            <Reveal as="h2" delay={80} className="h-2">A wheel of complementary expertise.</Reveal>
            <Reveal as="p" delay={140} className="lead">
              At the centre, one shared vision: data as the starting point of every decision. Around it, seven
              practices that combine to meet the needs of each project.
            </Reveal>
          </div>
          <GroupWheel />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Our commitments</Reveal>
            <Reveal as="h2" delay={80} className="h-2">What guides us.</Reveal>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="value">
                <span className="value__icon"><Icon name={v.icon} size={26} /></span>
                <h3 className="h-3">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Expertise</Reveal>
            <Reveal as="h2" delay={80} className="h-2">Our Business Units.</Reveal>
          </div>
          <ExpertiseGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Locations</Reveal>
            <Reveal as="h2" delay={80} className="h-2">At the heart of Central Africa.</Reveal>
          </div>
          <div className="offices">
            {company.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 100} className="office">
                <MapPin size={22} aria-hidden="true" />
                <h3 className="h-2">{o.city}</h3>
                <p>{o.country}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s build your next project together." />
    </>
  )
}
