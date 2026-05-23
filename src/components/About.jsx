const PILLARS = [
  {
    icon: '⚽',
    title: 'Cewek Bahas Bola',
    desc: 'Perspektif segar dari sudut pandang yang selama ini sering diabaikan',
  },
  {
    icon: '🏟️',
    title: 'Stadium Experience',
    desc: 'Tour ke stadion, nonton langsung, dan sharing pengalaman dari tribun',
  },
  {
    icon: '🎙️',
    title: 'Podcast & Diskusi',
    desc: 'Obrolan mendalam soal bola Indonesia dan global — santai tapi serius',
  },
  {
    icon: '🤝',
    title: 'Komunitas Inklusif',
    desc: 'Ruang aman untuk semua yang cinta bola, tanpa batas gender',
  },
]

export default function About() {
  return (
    <div className="section-divider" id="about">
      <div className="section-wrap">
        <div className="about-grid">
          <div className="reveal">
            <div className="label">Tentang GOTM</div>
            <h2 className="about-headline">
              BUKAN<br />
              <span className="outline">SEKEDAR</span><br />
              FANS
            </h2>
            <div className="about-body">
              <p>
                GOTM lahir dari rasa cinta terhadap sepak bola — dan keberanian untuk ngomong.
                Kami bukan pundit, bukan pelatih, tapi <strong>suara cewek-cewek</strong> yang
                nonton, analisis, dan ngomongin bola dengan cara kami sendiri.
              </p>
              <p>
                Dari tribun ke layar, dari warung kopi ke stadion, GOTM hadir buat semua yang
                percaya sepak bola bukan cuma milik satu kelompok saja.
              </p>
              <p>
                <a href="https://www.tiktok.com/@gotm_id" target="_blank" rel="noopener noreferrer">
                  @gotm_id di TikTok
                </a>{' '}
                — lebih banyak konten di sana.
              </p>
            </div>
          </div>

          <div className="pillar-list reveal reveal-d2">
            {PILLARS.map(({ icon, title, desc }) => (
              <div key={title} className="pillar">
                <div className="pillar-icon">{icon}</div>
                <div>
                  <div className="pillar-title">{title}</div>
                  <div className="pillar-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
