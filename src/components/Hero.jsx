export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="orb1" />
      <div className="orb2" />
      <div className="noise" />

      <div className="hero-inner">
        <div className="hero-left">
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
          <div className="ring-wrap">
            <div className="ring-outer" />
            <div className="ring-mid" />
            <div className="logo-disc">
              <span className="logo-disc-text">GOTM</span>
            </div>
            <div className="orbit orbit-1">🏟️</div>
            <div className="orbit orbit-2">⚽</div>
            <div className="orbit orbit-3">🎙️</div>
          </div>
        </div>
      </div>
    </section>
  )
}
