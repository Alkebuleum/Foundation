import { MISSION } from '../data/static'

export default function Mission() {
  const { quote, author, stats, body, pillars } = MISSION
  return (
    <section className="section-bg-sand" id="mission">
      <div className="wrap">
        <div className="mission-grid">

          {/* Visual column */}
          <div className="rv">
            <div className="mission-card">
              <p className="mq">{quote}</p>
              <p className="mq-attr">{author}</p>
            </div>
            <div className="mini-row">
              {stats.map((s, i) => (
                <div className="mini" key={i}>
                  <div className="mini-n">{s.value}</div>
                  <div className="mini-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div className="mission-text rv">
            <span className="tag">Our Mission</span>
            <h2 className="sh" style={{ marginBottom: '1.2rem' }}>
              Technology that serves <em>African dignity</em>
            </h2>
            {body.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: i === 1
                  ? `<strong>${p.split('.')[0]}.</strong>${p.slice(p.indexOf('.') + 1)}`
                  : p
              }} />
            ))}
            <div className="pillar-list">
              {pillars.map((p, i) => (
                <div className="pr" key={i}>
                  <div className="pr-icon">{p.icon}</div>
                  <div>
                    <div className="pr-title">{p.title}</div>
                    <div className="pr-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
