import { useState } from 'react'
import { ArrowRight, CircleCheck, MapPin } from 'lucide-react'
import { PageHero } from '../components/Sections.jsx'
import { company, expertises } from '../content/site.js'
import './Pages.css'

// URL of a form service (Formspree, Getform, custom API…) defined in .env
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const initial = { name: '', email: '', company: '', topic: '', message: '', consent: false }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) err.message = 'Please describe your needs in a few words.'
    if (!form.consent) err.consent = 'We need your consent to get back to you.'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      if (!ENDPOINT) {
        if (import.meta.env.DEV) {
          console.info('[contact] VITE_CONTACT_ENDPOINT not set — simulated submission', form)
          setStatus('sent')
          return
        }
        throw new Error('missing endpoint')
      }
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(res.statusText)
      setStatus('sent')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  const field = (k, label, props = {}) => (
    <label className={`field ${errors[k] ? 'has-error' : ''}`}>
      <span>{label}</span>
      <input value={form[k]} onChange={set(k)} aria-invalid={!!errors[k]} {...props} />
      {errors[k] && <em>{errors[k]}</em>}
    </label>
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your project."
        lead="Market research, fieldwork, consulting or AI: tell us what you need and we’ll get back to you shortly."
        image="/images/call-center.webp"
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__form">
            {status === 'sent' ? (
              <div className="contact__success" role="status">
                <CircleCheck size={48} strokeWidth={1.5} />
                <h2 className="h-2">Thank you — your message has been sent.</h2>
                <p className="lead">Our team will get back to you as soon as possible.</p>
                <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  {field('name', 'Full name *', { autoComplete: 'name' })}
                  {field('email', 'Work email *', { type: 'email', autoComplete: 'email' })}
                  {field('company', 'Organisation', { autoComplete: 'organization' })}
                  <label className="field">
                    <span>Topic</span>
                    <select value={form.topic} onChange={set('topic')}>
                      <option value="">Select an area of expertise</option>
                      {expertises.map((e) => <option key={e.slug} value={e.name}>{e.name}</option>)}
                      <option value="Other">Other request</option>
                    </select>
                  </label>
                  <label className={`field field--full ${errors.message ? 'has-error' : ''}`}>
                    <span>Your needs *</span>
                    <textarea rows={6} value={form.message} onChange={set('message')} aria-invalid={!!errors.message}
                      placeholder="Objectives, target audiences, geographic areas, timeline…" />
                    {errors.message && <em>{errors.message}</em>}
                  </label>
                  <label className={`check field--full ${errors.consent ? 'has-error' : ''}`}>
                    <input type="checkbox" checked={form.consent} onChange={set('consent')} />
                    <span>I agree that PRIMA AFRICA may use this information to contact me.</span>
                    {errors.consent && <em>{errors.consent}</em>}
                  </label>
                </div>
                {status === 'error' && (
                  <p className="form-error" role="alert">Sending failed. Please try again in a few moments.</p>
                )}
                <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          <aside className="contact__aside">
            <img className="contact__img" src="/images/field-interviewer.webp" alt="Field researcher holding a tablet" loading="lazy" />
            <div className="contact__aside-body">
              <h2 className="h-3">Our offices</h2>
              {company.offices.map((o) => (
                <div key={o.city} className="contact__office">
                  <MapPin size={20} aria-hidden="true" />
                  <div>
                    <strong>{o.city}</strong>
                    <span>{o.country}</span>
                  </div>
                </div>
              ))}
              <div className="contact__note">
                <strong>Multi-country studies</strong>
                <p>With our network of international partners, we coordinate qualitative and quantitative surveys beyond Central Africa.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
