function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="15" height="14" rx="2"/>
      <path d="m17 8 4-2v10l-4-2"/>
      <circle cx="8" cy="11" r="2" fill="currentColor" stroke="none" opacity=".5"/>
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3"/>
      <path d="M5 10a7 7 0 0 0 14 0"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="9" y1="22" x2="15" y2="22"/>
    </svg>
  )
}

const SERVICES = [
  {
    Icon: VideoIcon,
    num: '01',
    name: 'Digital Content',
    desc: 'We create engaging football content that speaks to a new generation of fans — match analysis, memes, vlogs, trending formats, and interviews across TikTok and Instagram.',
    tags: ['Match Analysis', 'Memes', 'Vlogs', 'Trends', 'Interviews'],
  },
  {
    Icon: ZapIcon,
    num: '02',
    name: 'Activation',
    desc: 'We activate brands inside football culture through watch parties, community events, stadium experiences, and on-ground campaigns that feel authentic to fans.',
    tags: ['Watch Parties', 'Brand Events', 'Community', 'Stadium Experience'],
  },
  {
    Icon: MicIcon,
    num: '03',
    name: 'Hosting',
    desc: 'Our team provides energetic and knowledgeable MC and hosting services for football events, brand activations, podcasts, and live match-day coverage.',
    tags: ['MC Services', 'Podcast Host', 'Live Coverage', 'Match Day'],
  },
]

export default function WhatWeDo() {
  return (
    <div className="section-divider" id="whatwedo">
      <div className="section-wrap">
        <div className="reveal">
          <div className="label">Our Services</div>
          <div className="title">
            WHAT WE<br />DO
          </div>
          <p className="section-sub reveal reveal-d1">
            Our work redefines how fans engage with the game. We combine creativity,
            authenticity, and analysis to create content that speaks to a new generation of football lovers.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ Icon, num, name, desc, tags }, i) => (
            <div key={name} className={`service-card reveal reveal-d${i + 1}`}>
              <div className="service-icon">
                <Icon />
              </div>
              <div className="service-num">{num}</div>
              <div className="service-name">{name}</div>
              <p className="service-desc">{desc}</p>
              <div className="service-tags">
                {tags.map(t => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
