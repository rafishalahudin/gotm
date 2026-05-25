const NAV = [
  { href: '#about',    label: 'About' },
  { href: '#whatwedo', label: 'What We Do' },
  { href: '#numbers',  label: 'Numbers' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact',  label: 'Contact' },
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
          {NAV.map(({ href, label }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        <div className="foot-copy">#FootballForEveryone &mdash; &copy; 2025 GOTM</div>
      </div>
    </footer>
  )
}
