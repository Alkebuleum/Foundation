import { useContent } from '../hooks/useContent'

const STATUS_MAP = {
  live:     { label: 'Live',     cls: 's-live',  dotCls: 'sd-live'  },
  building: { label: 'Building', cls: 's-build', dotCls: 'sd-build' },
  soon:     { label: 'Soon',     cls: 's-soon',  dotCls: 'sd-soon'  },
}

function EcCard({ item }) {
  const s = STATUS_MAP[item.status] || STATUS_MAP.soon
  return (
    <div className="ec">
      <div className={`ec-status ${s.cls}`}>
        <span className={`s-dot ${s.dotCls}`} />{s.label}
      </div>
      <div className="ec-ico" style={{ background: item.icon_bg }}>{item.icon}</div>
      <div className="ec-type">{item.type}</div>
      <div className="ec-name">{item.name}</div>
      <p className="ec-desc">{item.description}</p>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="ec-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="ec" style={{ opacity: 0.4 }}>
          <div style={{ width: 40, height: 40, borderRadius: 9, background: 'rgba(255,255,255,0.06)', marginBottom: '1rem' }} />
          <div style={{ height: 8, width: '50%', background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 14, width: '75%', background: 'rgba(255,255,255,0.1)',  borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 8,  width: '90%', background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
        </div>
      ))}
    </div>
  )
}

export default function Ecosystem() {
  const { data, loading, error } = useContent('ecosystem')

  return (
    <section className="eco-bg" id="ecosystem">
      <div className="wrap">
        <div className="eco-header rv">
          <div>
            <span className="tag eco-tag">Protocol Stack</span>
            <h2 className="sh sh-white">The Alkebuleum <em>Ecosystem</em></h2>
          </div>
          <a href="https://github.com/Alkebuleum" target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </div>

        {loading && <Skeleton />}
        {error   && <p style={{ color: 'rgba(255,255,255,0.4)', padding: '2rem 0' }}>Could not load ecosystem data.</p>}
        {data    && (
          <div className="eco-grid rv">
            {data.map(item => <EcCard key={item.id} item={item} />)}
          </div>
        )}

        <div className="eco-foot rv">
          <a href="#" className="btn btn-amber" style={{ fontSize: '0.875rem', padding: '0.6rem 1.3rem' }}>
            Developer Docs
          </a>
          <span className="eco-foot-sep">·</span>
          <a href="#">Read Whitepaper →</a>
        </div>
      </div>
    </section>
  )
}
