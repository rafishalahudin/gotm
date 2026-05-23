const CARDS = [
  {
    icon: '🏟️', cat: 'Seri Populer', name: 'Nyetadion',
    sub: 'Petualangan dari satu stadion ke stadion lainnya',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-dot" patternUnits="userSpaceOnUse" width="28" height="28">
            <circle cx="14" cy="14" r="1.2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-dot)" />
      </svg>
    ),
  },
  {
    icon: '⚽', cat: 'Olahraga', name: 'Futsal GOTM',
    sub: 'Main bareng, keringetan bareng, seru bareng',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-grid" patternUnits="userSpaceOnUse" width="24" height="24">
            <line x1="0" y1="12" x2="24" y2="12" stroke="white" strokeWidth=".6" />
            <line x1="12" y1="0" x2="12" y2="24" stroke="white" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-grid)" />
      </svg>
    ),
  },
  {
    icon: '🎙️', cat: 'Audio', name: 'Podcast',
    sub: 'Ngobrol serius tapi santai soal bola',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-circ" patternUnits="userSpaceOnUse" width="52" height="52">
            <circle cx="26" cy="26" r="22" fill="none" stroke="white" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-circ)" />
      </svg>
    ),
  },
  {
    icon: '🗺️', cat: 'Eksplorasi', name: 'Stadium Tour',
    sub: 'Behind the scenes dari tribun langsung',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-chk" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect x="0"  y="0"  width="10" height="10" fill="white" opacity=".3" />
            <rect x="10" y="10" width="10" height="10" fill="white" opacity=".3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-chk)" />
      </svg>
    ),
  },
  {
    icon: '🎬', cat: 'Kolaborasi', name: 'Ft. KPI',
    sub: 'Kolaborasi seru bareng kreator dan komunitas lain',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-tri" patternUnits="userSpaceOnUse" width="44" height="44">
            <polygon points="22,0 44,44 0,44" fill="none" stroke="white" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-tri)" />
      </svg>
    ),
  },
  {
    icon: '📺', cat: 'Live Content', name: 'Stadeo Live',
    sub: 'Coverage langsung dari stadion, real time, real vibes',
    pattern: (
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="p-wave" patternUnits="userSpaceOnUse" width="48" height="28">
            <path d="M0,14 Q12,0 24,14 Q36,28 48,14" fill="none" stroke="white" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-wave)" />
      </svg>
    ),
  },
]

const DELAYS = [1, 2, 3, 1, 2, 3]

export default function ContentGrid() {
  return (
    <div className="section-divider" id="content">
      <div className="section-wrap">
        <div className="content-head reveal">
          <div>
            <div className="label">Konten Pilihan</div>
            <div className="title">APA YANG<br />KITA BUAT</div>
          </div>
          <a
            href="https://www.instagram.com/gotm_id/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fill"
            style={{ flexShrink: 0, alignSelf: 'flex-end' }}
          >
            Lihat Semua <span className="btn-icon">→</span>
          </a>
        </div>

        <div className="cards-grid">
          {CARDS.map(({ icon, cat, name, sub, pattern }, i) => (
            <div key={name} className={`card reveal reveal-d${DELAYS[i]}`}>
              <div className="card-bg">
                <svg className="card-pattern" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  {pattern.props.children}
                </svg>
                <div className="card-glow" />
                <div className="card-icon">{icon}</div>
              </div>
              <div className="card-info">
                <div className="card-cat">{cat}</div>
                <div className="card-name">{name}</div>
                <div className="card-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
