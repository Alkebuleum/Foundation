import { HERO } from '../data/static'

const MAP_CONNECTIONS = [
  ['monrovia','accra'],['accra','lagos'],['lagos','addis'],
  ['addis','nairobi'],['lagos','kinshasa'],['kinshasa','johannesburg'],
  ['cairo','lagos'],['nairobi','johannesburg'],
]

function getNode(nodes, id) { return nodes.find(n => n.id === id) }

export default function Hero() {
  const { badge, headline, lead, cta_primary, cta_secondary, stats, map_nodes } = HERO

  return (
    <section className="hero" id="home">
      <div className="hero-inner">

        {/* ── LEFT: text ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            {badge}
          </div>

          <h1 className="hero-h1">
            {headline[0]}<br />
            <em>{headline[1]}</em><br />
            {headline[2]}
          </h1>

          <p className="hero-lead">{lead}</p>

          <div className="hero-cta">
            <a href={cta_primary.href}   className="btn btn-amber-lg">{cta_primary.label}</a>
            <a href={cta_secondary.href} className="btn btn-outline-lg">{cta_secondary.label}</a>
          </div>

          <div className="hero-stats">
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <div className="stat-n">{s.value}</div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Africa map ── */}
        <div className="hero-visual">
          <div className="africa-svg-wrap">

            {/* Floating annotation cards */}
            <div className="vis-card c1">
              <div className="vis-card-label"><span className="vis-pip pip-g" />Live</div>
              <div className="vis-card-val">AIChain</div>
              <div className="vis-card-sub">Identity Protocol</div>
            </div>
            <div className="vis-card c2">
              <div className="vis-card-label"><span className="vis-pip pip-g" />Live</div>
              <div className="vis-card-val">JollofSwap</div>
              <div className="vis-card-sub">Pan-African DEX</div>
            </div>
            <div className="vis-card c3">
              <div className="vis-card-label"><span className="vis-pip pip-a" />Building</div>
              <div className="vis-card-val">AmVault</div>
              <div className="vis-card-sub">Wallet SDK</div>
            </div>
            <div className="vis-card c4">
              <div className="vis-card-label"><span className="vis-pip pip-a" />Building</div>
              <div className="vis-card-val">Nuru AI</div>
              <div className="vis-card-sub">Decentralized Guide</div>
            </div>

            {/* Africa SVG */}
            <svg viewBox="0 0 440 540" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
              <defs>
                <radialGradient id="glow1" cx="50%" cy="45%" r="50%">
                  <stop offset="0%"   stopColor="#D4860A" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#D4860A" stopOpacity="0"    />
                </radialGradient>
                <radialGradient id="glow2" cx="50%" cy="70%" r="40%">
                  <stop offset="0%"   stopColor="#1A6B3C" stopOpacity="0.09" />
                  <stop offset="100%" stopColor="#1A6B3C" stopOpacity="0"    />
                </radialGradient>
                <clipPath id="africaClip">
                  <path d="M175 30 C195 24 220 28 238 42 C258 58 270 76 266 100 C280 118 292 138 284 162 C298 184 302 210 290 234 C306 256 310 284 294 308 C282 330 266 348 248 360 C228 378 204 396 180 402 C156 408 132 396 114 378 C96 360 84 336 78 312 C68 286 74 260 88 240 C76 220 72 196 86 174 C78 152 86 128 102 112 C96 88 104 62 122 46 Z" />
                </clipPath>
              </defs>

              {/* Glow */}
              <ellipse cx="205" cy="240" rx="150" ry="190" fill="url(#glow1)" />
              <ellipse cx="200" cy="320" rx="120" ry="130" fill="url(#glow2)" />

              {/* Continent body */}
              <path
                d="M175 30 C195 24 220 28 238 42 C258 58 270 76 266 100 C280 118 292 138 284 162 C298 184 302 210 290 234 C306 256 310 284 294 308 C282 330 266 348 248 360 C228 378 204 396 180 402 C156 408 132 396 114 378 C96 360 84 336 78 312 C68 286 74 260 88 240 C76 220 72 196 86 174 C78 152 86 128 102 112 C96 88 104 62 122 46 Z"
                fill="var(--sand2)" stroke="var(--sand3)" strokeWidth="1.5"
              />

              {/* Grid inside continent */}
              <g clipPath="url(#africaClip)" opacity="0.45">
                {[120,170,220,270,320,370].map(y => (
                  <line key={y} x1="70" y1={y} x2="315" y2={y} stroke="var(--sand3)" strokeWidth="0.8" />
                ))}
                {[130,180,230,280].map(x => (
                  <line key={x} x1={x} y1="28" x2={x} y2="410" stroke="var(--sand3)" strokeWidth="0.8" />
                ))}
              </g>

              {/* Madagascar */}
              <path d="M330 180 C337 174 344 182 346 193 C348 208 344 226 338 234 C332 238 326 230 326 215 C324 200 326 188 330 180Z"
                fill="var(--sand2)" stroke="var(--sand3)" strokeWidth="1.2" />

              {/* Network connections */}
              {MAP_CONNECTIONS.map(([a, b]) => {
                const na = getNode(map_nodes, a)
                const nb = getNode(map_nodes, b)
                if (!na || !nb) return null
                return (
                  <line key={`${a}-${b}`}
                    x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
                    stroke={na.color === 'amber' ? 'var(--amber)' : 'var(--green)'}
                    strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45"
                  />
                )
              })}

              {/* City nodes */}
              {map_nodes.map(n => {
                const c = n.color === 'amber' ? 'var(--amber)' : 'var(--green)'
                const r = n.status === 'active' ? 7 : 5
                return (
                  <g key={n.id}>
                    <circle cx={n.cx} cy={n.cy} r={r * 3} fill={c} opacity="0.06" />
                    <circle cx={n.cx} cy={n.cy} r={r * 2} fill={c} opacity="0.13" />
                    <circle cx={n.cx} cy={n.cy} r={r}     fill={c} opacity="0.9"  />
                    {n.status === 'active' && (
                      <text x={n.cx - 20} y={n.cy - 14}
                        fontFamily="IBM Plex Mono, monospace" fontSize="7.5"
                        fill="var(--amber)" fontWeight="600">LIVE</text>
                    )}
                  </g>
                )
              })}

              {/* City labels */}
              {map_nodes.filter(n => n.label).map(n => (
                <text key={`lbl-${n.id}`}
                  x={n.cx + 10} y={n.cy + 4}
                  fontFamily="DM Sans, sans-serif" fontSize="8.5"
                  fill="var(--ink3)" opacity="0.7">
                  {n.label}
                </text>
              ))}

              {/* Legend */}
              <circle cx="70" cy="460" r="5" fill="var(--amber)" opacity="0.85" />
              <text x="80" y="464" fontFamily="DM Sans, sans-serif" fontSize="9" fill="var(--ink3)">Live Protocol</text>
              <circle cx="70" cy="476" r="5" fill="var(--green)" opacity="0.85" />
              <text x="80" y="480" fontFamily="DM Sans, sans-serif" fontSize="9" fill="var(--ink3)">Network Node</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
