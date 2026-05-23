const ITEMS = [
  'Nyetadion', 'Futsal', 'Podcast', 'Stadium Tour',
  'Ft. KPI', 'Stadeo Live', 'Cewek Bahas Bola', 'Football For Everyone',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span className="ticker-sep">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
