const ITEMS = [
  ['AIChain',   'Identity Protocol'],
  ['JollofSwap','Pan-African DEX'],
  ['AmVault',   'Wallet SDK'],
  ['Nuru AI',   'Decentralized Guide'],
  ['AkeBank',   'Blockchain Finance'],
  ['$ALKE',     'Native Token'],
  ['Liberia',   'Anti-Corruption Program'],
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map(([name, desc], i) => (
          <span className="m-item" key={i}>
            <strong>{name}</strong> {desc}
            <span className="m-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
