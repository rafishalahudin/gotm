import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('gotm-theme') !== 'light' }
    catch { return true }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    try { localStorage.setItem('gotm-theme', isDark ? 'dark' : 'light') } catch {}
  }, [isDark])

  return { isDark, toggle: () => setIsDark(d => !d) }
}
