import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      curRef.current.style.left = mx + 'px'
      curRef.current.style.top  = my + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ringRef.current.style.left = rx + 'px'
      ringRef.current.style.top  = ry + 'px'
      rafId = requestAnimationFrame(animRing)
    }

    const onOver = e => {
      if (e.target.closest('a, button')) {
        curRef.current.classList.add('grow')
        ringRef.current.classList.add('grow')
      }
    }
    const onOut = () => {
      curRef.current.classList.remove('grow')
      ringRef.current.classList.remove('grow')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    rafId = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor"      ref={curRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
