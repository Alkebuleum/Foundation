import { useContent } from '../hooks/useContent'

function ProgramCard({ item }) {
  return (
    <div className={`pc${item.featured ? ' feat' : ''} rv`}>
      <div className="pc-tag">{item.tag}</div>
      <div className="pc-title">{item.title}</div>
      <p className="pc-body">{item.description}</p>
      <a href={item.url} className="pc-link">{item.link_label} →</a>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="prog-grid">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="pc" style={{ opacity: 0.5 }}>
          <div style={{ height: 10, width: '35%', background: 'var(--sand3)', borderRadius: 8, marginBottom: 10 }} />
          <div style={{ height: 16, width: '80%', background: 'var(--sand3)', borderRadius: 6, marginBottom: 8 }} />
          <div style={{ height: 10, width: '100%',background: 'var(--sand3)', borderRadius: 4, marginBottom: 4 }} />
          <div style={{ height: 10, width: '70%', background: 'var(--sand3)', borderRadius: 4 }} />
        </div>
      ))}
    </div>
  )
}

export default function Programs() {
  const { data, loading, error } = useContent('programs')

  const featured   = data?.find(p => p.featured)
  const supporting = data?.filter(p => !p.featured) ?? []
  // Split supporting into two groups of ~2
  const colA = supporting.slice(0, 2)
  const colB = supporting.slice(2)

  return (
    <section className="section-bg-sand2" id="programs">
      <div className="wrap">
        <div className="prog-header rv">
          <span className="tag">Real-World Impact</span>
          <h2 className="sh" style={{ marginBottom: '0.6rem' }}>
            On the Ground, <em>Across Africa</em>
          </h2>
          <p className="lead" style={{ marginTop: '0.75rem' }}>
            We don't wait for adoption. We demonstrate the future, then scale it.
          </p>
        </div>

        {loading && <Skeleton />}
        {error   && <p style={{ color: 'var(--ink3)', padding: '2rem 0' }}>Could not load programs data.</p>}

        {data && (
          <div className="prog-grid">
            {featured && <ProgramCard item={featured} />}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {colA.map(item => <ProgramCard key={item.id} item={item} />)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {colB.map(item => <ProgramCard key={item.id} item={item} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
