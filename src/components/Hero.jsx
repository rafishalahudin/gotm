function HeroDeco() {
  return (
    <div className="hero-deco" aria-hidden>
      {/* Football outline SVG */}
      <svg className="hero-ball-svg" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M100 8 L135 38 L122 80 L78 80 L65 38 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M135 38 L174 52 L168 98 L133 113 L122 80 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M65 38 L26 52 L32 98 L67 113 L78 80 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M168 98 L152 140 L112 157 L100 122 L133 113 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M32 98 L48 140 L88 157 L100 122 L67 113 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M112 157 L100 192 L88 157 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
      {/* Feminine sparkle accents */}
      <span className="hero-spark-1">✦</span>
      <span className="hero-spark-2">✦</span>
      <span className="hero-spark-3">⚽</span>
      <span className="hero-spark-4">✦</span>
      {/* Female symbol */}
      <svg className="hero-fem-svg" viewBox="0 0 60 80" fill="none">
        <circle cx="30" cy="28" r="22" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="30" y1="50" x2="30" y2="78" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="18" y1="66" x2="42" y2="66" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/hero-team.png" alt="" className="hero-bg-mobile" aria-hidden />
      <div className="hero-bg-mobile-overlay" aria-hidden />
      <div className="hero-grid" />
      <div className="orb1" />
      <div className="orb2" />
      <div className="noise" />
      <HeroDeco />

      <div className="hero-inner">
        <div className="hero-left">
          <img src="/logo.png" alt="GOTM" className="hero-mobile-logo" />

          <div className="eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-label">#FootballForEveryone</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line"><span className="title-line-in">GIRL</span></span>
            <span className="title-line"><span className="title-line-in">OF THE</span></span>
            <span className="title-line"><span className="title-line-in"><span className="pk">MATCH</span></span></span>
          </h1>

          <p className="hero-tag">
            <strong>Cewek bahas bola.</strong> Bukan pundit, bukan coach — cuma cewek-cewek
            yang cinta sepak bola dan nggak takut buat ngomong. Lebih banyak sharing di TikTok!
          </p>

          <div className="hero-actions">
            <a
              href="https://www.instagram.com/gotm_id/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill"
            >
              Follow Kami
              <span className="btn-icon">→</span>
            </a>
            <a href="#content" className="btn btn-ghost">
              Lihat Konten ↓
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <img src="/hero-team.png" alt="GOTM Team" className="hero-photo-img" />
            <div className="orbit orbit-1">🏟️</div>
            <div className="orbit orbit-2">⚽</div>
            <div className="orbit orbit-3">🎙️</div>
          </div>
        </div>
      </div>
    </section>
  )
}
