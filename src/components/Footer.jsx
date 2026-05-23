const LINKS = [
  { href: 'https://www.instagram.com/gotm_id/', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@gotm_id',    label: 'TikTok'    },
  { href: 'https://www.threads.net/@gotm_id',   label: 'Threads'   },
]

export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <img src="/logo.png" alt="GOTM" className="foot-logo-img" />
          <div className="foot-sub">Girl of The Match</div>
        </div>

        <div className="foot-links">
          {LINKS.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>

        <div className="foot-copy">#FootballForEveryone &mdash; &copy; 2025 GOTM</div>
      </div>
    </footer>
  )
}
