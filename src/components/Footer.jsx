import { FOOTER, SITE } from '../data/static'

export default function Footer() {
  return (
    <footer>
      <div className="ft-inner">
        <div className="ft-top">

          {/* Brand */}
          <div>
            <div className="ft-brand-name">
              Alkebuleum <span>Foundation</span>
            </div>
            <p className="ft-brand-desc">{FOOTER.tagline}</p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map(col => (
            <div key={col.title}>
              <div className="ft-col-h">{col.title}</div>
              <ul className="ft-links">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="ft-bottom">
          <span className="ft-copy">© {new Date().getFullYear()} {SITE.name} · {SITE.url}</span>
          <div className="ft-socials">
            {FOOTER.socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
