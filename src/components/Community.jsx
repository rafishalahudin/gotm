const SOCIALS = [
  {
    href: 'https://www.instagram.com/gotm_id/',
    cls: 'soc-ig',
    icon: '📸',
    label: '@gotm_id di Instagram',
  },
  {
    href: 'https://www.tiktok.com/@gotm_id',
    cls: 'soc-tt',
    icon: '🎵',
    label: '@gotm_id di TikTok',
  },
  {
    href: 'https://www.threads.net/@gotm_id',
    cls: 'soc-th',
    icon: '🔗',
    label: '@gotm_id di Threads',
  },
]

export default function Community() {
  return (
    <div className="section-divider" id="community">
      <div className="section-wrap">
        <div className="cta-box reveal">
          <div>
            <div className="label">Bergabung Sekarang</div>
            <h2 className="cta-headline">
              IKUT<br /><span className="pk">KOMUNITAS</span><br />KAMI
            </h2>
            <p className="cta-desc">
              Gabung bareng ribuan cewek (dan cowok!) yang cinta bola. Temukan GOTM di semua
              platform — lebih banyak sharing ada di TikTok!
            </p>
          </div>

          <div className="social-list">
            {SOCIALS.map(({ href, cls, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`soc ${cls}`}
              >
                <span className="soc-icon">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
