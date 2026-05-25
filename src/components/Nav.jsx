import { useState } from 'react'

export default function Nav({ isDark, onToggle }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <img src="/logo.png" alt="GOTM" className="nav-logo-img" />
        <div className="nav-brand">
          <small>Girl of The Match</small>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#whatwedo">What We Do</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="https://www.instagram.com/gotm_id/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Follow Us
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={onToggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`mobile-menu${open ? ' open' : ''}`}>
        <li><a href="#about"    onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#whatwedo" onClick={() => setOpen(false)}>What We Do</a></li>
        <li><a href="#partners" onClick={() => setOpen(false)}>Partners</a></li>
        <li><a href="#contact"  onClick={() => setOpen(false)}>Contact</a></li>
        <li>
          <a href="https://www.instagram.com/gotm_id/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Follow Us
          </a>
        </li>
      </ul>
    </nav>
  )
}
