import { useEffect, useRef, useState } from 'react'

function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref               = useRef(null)
  const hasRun            = useRef(false)

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

function StatCard({ end, suffix = '+', label, platform, delay, staticVal }) {
  const { count, ref } = useCounter(end)

  return (
    <div className={`stat-card reveal reveal-d${delay}`} ref={ref}>
      <div className="stat-platform">{platform}</div>
      <div className="stat-num">
        {staticVal ?? (end ? count.toLocaleString('id-ID') : '0')}
        <span className="accent">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="section-divider" id="numbers">
      <div className="section-wrap">
        <div className="stats-head reveal">
          <div>
            <div className="label">Our Reach</div>
            <div className="title">
              GOTM IN<br />NUMBERS
            </div>
          </div>
        </div>
        <div className="stats-grid stats-grid-6">
          <StatCard end={4923}  suffix="+"   label="TikTok Followers"       platform="TikTok"     delay={1} />
          <StatCard end={1300}  suffix="+"   label="Instagram Followers"    platform="Instagram"  delay={2} />
          <StatCard end={0}     suffix=""    label="TikTok Total Reach"     platform="TikTok"     delay={3} staticVal="8.5M" />
          <StatCard end={0}     suffix=""    label="Instagram Reach"        platform="Instagram"  delay={1} staticVal="20K" />
          <StatCard end={0}     suffix="%"   label="TikTok Engagement Rate" platform="TikTok"     delay={2} staticVal="115" />
          <StatCard end={0}     suffix="%"   label="Instagram Engagement"   platform="Instagram"  delay={3} staticVal="22" />
        </div>
      </div>
    </div>
  )
}
