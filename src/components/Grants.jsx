import { useState } from 'react'
import { GRANTS } from '../data/static'

export default function Grants() {
  const [form, setForm]     = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // ------------------------------------------------------------------
    // CONNECT YOUR BACKEND HERE
    // Option A: POST to your own API  →  fetch('/api/grants', {...})
    // Option B: Formspree             →  fetch('https://formspree.io/f/YOUR_ID', {...})
    // Option C: GitHub Issue via API  →  fetch('https://api.github.com/repos/Alkebuleum/Foundation/issues', {...})
    //
    // For now we simulate a 1-second delay and show success.
    // ------------------------------------------------------------------
    await new Promise(r => setTimeout(r, 1000))
    setStatus('sent')
  }

  const { tag, title, lead, categories, form_note, form_fields } = GRANTS

  return (
    <section className="grants-bg" id="grants">
      <div className="wrap">
        <div className="grants-grid">

          {/* Left: info */}
          <div className="grants-left rv">
            <span className="tag eco-tag">{tag}</span>
            <h2 className="sh sh-white" style={{ marginBottom: '1rem' }}>
              {title[0]} <em>{title[1]}</em>
            </h2>
            <p className="lead lead-white">{lead}</p>

            <div className="gf-list">
              {categories.map((c, i) => (
                <div className="gf" key={i}>
                  <div className="gf-ico">{c.icon}</div>
                  <div>
                    <div className="gf-title">{c.title}</div>
                    <div className="gf-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: application panel */}
          <div className="grants-panel rv">
            <div className="gp-title">Start your application</div>
            <p className="gp-sub">{form_note}</p>

            {status === 'sent' ? (
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>Application received!</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
                  We'll review your submission and respond within 2 weeks.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {form_fields.map(f => {
                  if (f.type === 'select') return (
                    <select key={f.name} name={f.name} className="gi gi-select"
                      onChange={handleChange} defaultValue="">
                      <option value="" disabled>{f.placeholder}</option>
                      {f.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  )
                  if (f.type === 'textarea') return (
                    <textarea key={f.name} name={f.name} className="gi"
                      placeholder={f.placeholder} rows={3}
                      style={{ resize: 'vertical' }} onChange={handleChange} />
                  )
                  return (
                    <input key={f.name} name={f.name} type={f.type}
                      className="gi" placeholder={f.placeholder}
                      onChange={handleChange} />
                  )
                })}
                <button type="submit" className="btn btn-white"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: '0.25rem' }}
                  disabled={status === 'sending'}>
                  {status === 'sending' ? 'Submitting…' : 'Submit Application'}
                </button>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)', textAlign: 'center', marginTop: '0.9rem' }}>
                  By submitting you agree to our grants review policy.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
