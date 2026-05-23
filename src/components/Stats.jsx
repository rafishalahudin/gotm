import { useEffect, useRef, useState } from 'react'

function useCounter(end, duration = 1800) {
  const [count, setCount]     = useState(0)
  const ref                   = useRef(null)
  const hasRun                = useRef(false)

  useEffect(() => {
    if (!end) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !hasRun.current) {
          hasRun.current = true
          let start = null
          const step = ts => {
            if (!start) start = ts
            const p    = Math.min((ts - start) / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setCount(Math.round(ease * end))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.3 })

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return { count, ref }
}

function StatCard({ end, label, platform, delay }) {
  const { count, ref } = useCounter(end)

  return (
    <div className={`stat-card reveal reveal-d${delay}`} ref={ref}>
      <div className="stat-platform">{platform}</div>
      <div className="stat-num">
        {end ? count.toLocaleString('id-ID') : '6'}
        <span className="accent">+</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="section-divider">
      <div className="section-wrap">
        <div className="stats-head reveal">
          <div>
            <div className="label">Angka Kami</div>
            <div className="title">
              KOMUNITAS<br />YANG NYATA
            </div>
          </div>
        </div>
        <div className="stats-grid">
          <StatCard end={3532} label="Followers & Terus Bertumbuh" platform="Instagram"     delay={1} />
          <StatCard end={117}  label="Konten Dipublikasikan"        platform="Semua Platform" delay={2} />
          <StatCard end={0}    label="Format Konten Unik"           platform="Format"         delay={3} />
        </div>
      </div>
    </div>
  )
}
