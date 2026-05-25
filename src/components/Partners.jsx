/* Update partner names below to match actual Canva partner list */
const BRANDS = ['Vidio', 'KPI', 'Nalar Sport', 'Bola.net', 'Timnas ID', 'Goal ID']
const MEDIA  = ['Tribun Bola', 'DSports', 'Football ID', '90min ID', 'Berita Lyv']

function PartnerRow({ items }) {
  return (
    <div className="partners-row">
      {items.map(name => (
        <div key={name} className="partner-chip">{name}</div>
      ))}
    </div>
  )
}

export default function Partners() {
  return (
    <div className="section-divider" id="partners">
      <div className="section-wrap">
        <div className="reveal">
          <div className="label">Collaborations</div>
          <div className="title">
            OUR BELOVED<br />PARTNERS
          </div>
          <p className="section-sub reveal reveal-d1">
            Brands and media who trust GOTM to bridge football culture with their audience.
          </p>
        </div>

        <div className="partners-cats reveal reveal-d2">
          <div>
            <div className="partners-cat-label">Brand Partners</div>
            <PartnerRow items={BRANDS} />
          </div>
          <div>
            <div className="partners-cat-label">Media Partners</div>
            <PartnerRow items={MEDIA} />
          </div>
        </div>
      </div>
    </div>
  )
}
