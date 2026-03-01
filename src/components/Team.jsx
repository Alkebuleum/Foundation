import { useContent } from '../hooks/useContent'

function TeamCard({ member }) {
  return (
    <div className="tc rv">
      <div className="tc-avatar" style={{
        background: `linear-gradient(135deg, ${member.avatar_gradient[0]}, ${member.avatar_gradient[1]})`,
      }}>
        {member.avatar_initial}
      </div>
      <div className="tc-info">
        <div className="tc-name">{member.name}</div>
        <div className="tc-role">{member.role}</div>
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="team-grid">
      {[1,2,3].map(i => (
        <div key={i} className="tc" style={{ opacity: 0.45 }}>
          <div style={{ aspectRatio: 1, background: 'var(--sand3)' }} />
          <div className="tc-info">
            <div style={{ height: 12, width: '70%', background: 'var(--sand3)', borderRadius: 4, marginBottom: 6 }} />
            <div style={{ height: 8,  width: '50%', background: 'var(--sand3)', borderRadius: 4 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Team() {
  const { data, loading, error } = useContent('team')

  return (
    <section className="section-bg-sand2" id="team">
      <div className="wrap">
        <div className="team-header rv">
          <div>
            <span className="tag">Leadership</span>
            <h2 className="sh">The builders <em>behind the chain</em></h2>
          </div>
          <p className="lead" style={{ maxWidth: 340, fontSize: '0.92rem' }}>
            Built by Africans and African Americans alongside pan-African partners worldwide.
          </p>
        </div>

        {loading && <Skeleton />}
        {error   && <p style={{ color: 'var(--ink3)', padding: '2rem 0' }}>Could not load team data.</p>}
        {data    && (
          <div className="team-grid">
            {data.map(member => <TeamCard key={member.id} member={member} />)}
            {/* Open role card — always shown */}
            <div className="tc-open">
              <div className="tc-open-icon">+</div>
              <div className="tc-open-text">Join the Foundation<br />We're growing the team</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
