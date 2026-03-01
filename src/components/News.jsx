import { useContent } from '../hooks/useContent'

function NewsCard({ item, large }) {
  return (
    <div className="nc rv">
      <div className="nc-img" style={{
        background: `linear-gradient(135deg, ${item.image_gradient[0]}, ${item.image_gradient[1]})`,
        height: large ? 220 : 180,
      }}>
        {/* Decorative SVG watermark */}
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" opacity="0.25">
          <circle cx="35" cy="35" r="28" stroke="white" strokeWidth="1.5" />
          <path d="M35 12v46M12 35h46" stroke="white" strokeWidth="1" />
          <circle cx="35" cy="35" r="9" stroke="white" />
        </svg>
      </div>
      <div className="nc-body">
        <div className="nc-meta">
          <span className="nc-cat">{item.category}</span>
          <span className="nc-date">{item.date}</span>
        </div>
        <div className="nc-title" style={large ? { fontSize: '1.3rem' } : {}}>{item.title}</div>
        <p className="nc-excerpt">{item.excerpt}</p>
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="news-grid">
      {[1,2,3].map(i => (
        <div key={i} className="nc" style={{ opacity: 0.45 }}>
          <div style={{ height: 180, background: 'var(--sand3)' }} />
          <div className="nc-body">
            <div style={{ height: 8,  width: '40%', background: 'var(--sand3)', borderRadius: 4, marginBottom: 8 }} />
            <div style={{ height: 14, width: '80%', background: 'var(--sand3)', borderRadius: 4, marginBottom: 6 }} />
            <div style={{ height: 8,  width: '100%',background: 'var(--sand3)', borderRadius: 4, marginBottom: 4 }} />
            <div style={{ height: 8,  width: '70%', background: 'var(--sand3)', borderRadius: 4 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function News() {
  const { data, loading, error } = useContent('news')

  return (
    <section className="news-bg" id="news">
      <div className="wrap">
        <div className="news-header rv">
          <div>
            <span className="tag">Updates</span>
            <h2 className="sh">From the <em>Foundation</em></h2>
          </div>
          <a href="#" className="btn btn-ghost-nav">All updates</a>
        </div>

        {loading && <Skeleton />}
        {error   && <p style={{ color: 'var(--ink3)', padding: '2rem 0' }}>Could not load news.</p>}
        {data    && (
          <div className="news-grid">
            {data.map((item, i) => (
              <NewsCard key={item.id} item={item} large={i === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
