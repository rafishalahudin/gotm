import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <div className="nav-badge">GOTM</div>
        <div className="nav-brand">
          GOTM
          <small>Girl of The Match</small>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#content">Konten</a></li>
        <li><a href="#community">Komunitas</a></li>
        <li>
          <a href="https://www.instagram.com/gotm_id/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Follow Kami
          </a>
        </li>
      </ul>

      <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <ul className={`mobile-menu${open ? ' open' : ''}`}>
        <li><a href="#about"     onClick={() => setOpen(false)}>Tentang</a></li>
        <li><a href="#content"   onClick={() => setOpen(false)}>Konten</a></li>
        <li><a href="#community" onClick={() => setOpen(false)}>Komunitas</a></li>
        <li>
          <a href="https://www.instagram.com/gotm_id/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Follow Kami
          </a>
        </li>
      </ul>
    </nav>
  )
}
