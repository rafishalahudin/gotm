import useReveal  from './hooks/useReveal'
import useTheme   from './hooks/useTheme'
import Cursor     from './components/Cursor'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import About      from './components/About'
import WhatWeDo   from './components/WhatWeDo'
import Stats      from './components/Stats'
import Partners   from './components/Partners'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  useReveal()
  const { isDark, toggle } = useTheme()

  return (
    <>
      <Cursor />
      <Nav isDark={isDark} onToggle={toggle} />
      <Hero />
      <Ticker />
      <About />
      <WhatWeDo />
      <Stats />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}
