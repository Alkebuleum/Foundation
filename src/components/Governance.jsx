import { GOVERNANCE } from '../data/static'

// Build SVG donut from tokenomics data
// r=50, circumference≈314
function DonutChart({ slices }) {
  const total = slices.reduce((s, x) => s + x.pct, 0)
  const circ  = 2 * Math.PI * 50
  let offset  = circ / 4 // start at top (rotate -90°)

  return (
    <svg width="130" height="130" viewBox="0 0 130 130">
      <circle cx="65" cy="65" r="50" fill="none" stroke="#E8E0D3" strokeWidth="18" />
      {slices.map(s => {
        const dash    = (s.pct / total) * circ
        const gap     = circ - dash
        const element = (
          <circle key={s.label}
            cx="65" cy="65" r="50" fill="none"
            stroke={s.color} strokeWidth="18"
            strokeDasharray={`${dash.toFixed(2)} ${gap.toFixed(2)}`}
            strokeDashoffset={offset.toFixed(2)}
          />
        )
        offset -= dash
        return element
      })}
      <circle cx="65" cy="65" r="34" fill="white" />
      <text x="65" y="61" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="13" fill="#0F0D0A">$ALKE</text>
      <text x="65" y="74" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#5C5650">TOKEN</text>
    </svg>
  )
}

export default function Governance() {
  const { intro, steps, token_stats, tokenomics } = GOVERNANCE

  return (
    <section className="section-bg-sand" id="governance">
      <div className="wrap">
        <div className="gov-layout">

          {/* Left: intro + steps */}
          <div className="gov-intro rv">
            <span className="tag">Governance</span>
            <h2 className="sh" style={{ marginBottom: '1.2rem' }}>
              Decentralized <em>by design</em>
            </h2>
            {intro.map((p, i) => <p key={i}>{p}</p>)}

            <div className="gov-steps">
              {steps.map(s => (
                <div className="gs" key={s.num}>
                  <div className="gs-num">{s.num}</div>
                  <div>
                    <div className="gs-title">{s.title}</div>
                    <div className="gs-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: token donut + stat mini-cards */}
          <div className="rv">
            <div className="gov-token-wrap">
              <div className="gov-token-title">$ALKE Token Distribution</div>
              <div className="donut-row">
                <DonutChart slices={tokenomics} />
                <div className="t-legend">
                  {tokenomics.map(s => (
                    <div className="t-row" key={s.label}>
                      <div className="t-dot" style={{ background: s.color }} />
                      <div className="t-name">{s.label}</div>
                      <div className="t-pct">{s.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick-stat mini cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              {token_stats.map(s => (
                <div key={s.label} style={{
                  background: '#fff', border: '1px solid var(--sand3)',
                  borderRadius: 10, padding: '1.2rem',
                }}>
                  <div style={{
                    fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem',
                    color: s.color === 'amber' ? 'var(--amber)' : 'var(--green)',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--ink3)', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
