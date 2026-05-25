function BallWatermark({ cls }) {
  return (
    <svg className={`vm-ball ${cls || ''}`} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M100 8 L135 38 L122 80 L78 80 L65 38 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M135 38 L174 52 L168 98 L133 113 L122 80 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M65 38 L26 52 L32 98 L67 113 L78 80 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M168 98 L152 140 L112 157 L100 122 L133 113 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M32 98 L48 140 L88 157 L100 122 L67 113 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M112 157 L100 192 L88 157 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

const TEAM = [
  {
    photo: '/team-daniela.png',
    name: 'Daniela',
    role: 'Storyteller & Producer',
    handle: '@d4nielakt',
    href: 'https://www.instagram.com/d4nielakt/',
    bio: "Wasn't a football fan — until one home match changed everything. With a background in TV reporting, she brings strong storytelling and production value to GOTM.",
    num: '07',
  },
  {
    photo: '/team-wanda.png',
    name: 'Wanda',
    role: 'Visual Director',
    handle: '@waandaputrir',
    href: 'https://www.instagram.com/waandaputrir/',
    bio: "A proud Jak Angel who's supported Persija since elementary school. Our visual expert in videography and editing — GOTM content always looks sharp because of her.",
    num: '10',
  },
  {
    photo: '/team-rere.png',
    name: 'Rere',
    role: 'Content Strategist',
    handle: '@deazeroo',
    href: 'https://www.instagram.com/deazeroo/',
    bio: "A loyal Manchester United fan who understands tactics and game flow. The brain behind our analysis content — she leads content planning and ideation at GOTM.",
    num: '11',
  },
]

const MISSIONS = [
  'To create a space where all football fans (regardless of background) feel empowered to engage, express, and be part of the conversation.',
  'To collaborate with diverse communities and creators in building a healthier, more respectful football fandom.',
  'To produce content that blends football strategy, culture, and storytelling — making the sport more relatable and relevant for today\'s audience.',
]

function PitchSVG() {
  return (
    <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="pitch-svg">
      {/* Outer field */}
      <rect x="4" y="4" width="392" height="262" rx="4" stroke="currentColor" strokeWidth="1.8"/>
      {/* Halfway line */}
      <line x1="200" y1="4" x2="200" y2="266" stroke="currentColor" strokeWidth="1.8"/>
      {/* Center circle */}
      <circle cx="200" cy="135" r="50" stroke="currentColor" strokeWidth="1.8"/>
      {/* Center dot */}
      <circle cx="200" cy="135" r="4" fill="currentColor"/>
      {/* Left penalty area */}
      <rect x="4" y="72" width="70" height="126" stroke="currentColor" strokeWidth="1.8"/>
      {/* Left goal box */}
      <rect x="4" y="95" width="32" height="80" stroke="currentColor" strokeWidth="1.8"/>
      {/* Left penalty spot */}
      <circle cx="56" cy="135" r="3" fill="currentColor"/>
      {/* Left penalty arc */}
      <path d="M74 110 Q105 135 74 160" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      {/* Right penalty area */}
      <rect x="326" y="72" width="70" height="126" stroke="currentColor" strokeWidth="1.8"/>
      {/* Right goal box */}
      <rect x="364" y="95" width="32" height="80" stroke="currentColor" strokeWidth="1.8"/>
      {/* Right penalty spot */}
      <circle cx="344" cy="135" r="3" fill="currentColor"/>
      {/* Right penalty arc */}
      <path d="M326 110 Q295 135 326 160" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      {/* Corner arcs */}
      <path d="M4 18 Q18 4 32 4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M368 4 Q396 4 396 18" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M4 252 Q4 266 18 266" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M382 266 Q396 266 396 252" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </svg>
  )
}

export default function About() {
  return (
    <div className="section-divider about-section" id="about">

      {/* Background pitch watermark */}
      <div className="about-bg-pitch" aria-hidden>
        <PitchSVG />
      </div>

      <div className="section-wrap">

        {/* ── Header row ─────────────────── */}
        <div className="about-header-grid reveal">
          <div className="about-header-text">
            <div className="label">About Us</div>
            <h2 className="about-headline">
              ABOUT<br />
              GOTM
            </h2>
            <p className="about-desc">
              We're more than just fans — we're reshaping football media through a lens
              that's long been overlooked. At <strong>GOTM (Girl of The Match)</strong>, we bring
              a fresh and inclusive perspective to the game, amplifying women's voices in a space
              traditionally dominated by one narrative.
            </p>
          </div>

          <div className="about-header-field reveal reveal-d2">
            <div className="field-card">
              <PitchSVG />
              <div className="field-badge">⚽</div>
            </div>
          </div>
        </div>

        {/* ── Vision + Mission cards ──────── */}
        <div className="about-vm-grid">
          {/* Vision */}
          <div className="vm-card vision-card reveal reveal-d1">
            <BallWatermark cls="vm-ball-tr" />
            <div className="vm-deco-quote">"</div>
            <div className="vm-card-head">
              <span className="vm-chevrons">»»»</span>
              <span className="vm-card-title">Vision</span>
            </div>
            <p className="vm-body">
              To create an <strong>inclusive</strong> and{' '}
              <strong>elevated football fan culture</strong> where women are seen,
              heard, and respected for their passion, knowledge, and contributions
              to the game.
            </p>
          </div>

          {/* Mission */}
          <div className="vm-card mission-card reveal reveal-d2">
            <BallWatermark cls="vm-ball-bl" />
            <div className="vm-card-head">
              <span className="vm-chevrons">»»»</span>
              <span className="vm-card-title">Mission</span>
            </div>
            <ul className="mission-list">
              {MISSIONS.map((m, i) => (
                <li key={i} className="mission-item">
                  <span className="mission-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mission-text">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Team ───────────────────────── */}
        <div className="team-section">
          <div className="team-head reveal">
            <div className="label">Meet The Team</div>
            <div className="title">THE SQUAD</div>
          </div>

          <div className="team-grid">
            {TEAM.map(({ photo, name, role, handle, href, bio, num }, i) => (
              <div key={name} className={`team-card reveal reveal-d${i + 1}`}>
                <div className="team-card-jersey">{num}</div>
                <div className="team-card-top">
                  <div className="team-avatar">
                    <img src={photo} alt={name} />
                  </div>
                  <div>
                    <div className="team-name-el">{name}</div>
                    <div className="team-role">{role}</div>
                  </div>
                </div>
                <p className="team-bio-el">{bio}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="team-handle">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {handle}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
