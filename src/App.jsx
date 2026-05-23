import useReveal    from './hooks/useReveal'
import Cursor       from './components/Cursor'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Ticker       from './components/Ticker'
import Stats        from './components/Stats'
import About        from './components/About'
import ContentGrid  from './components/ContentGrid'
import Community    from './components/Community'
import Footer       from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <ContentGrid />
      <Community />
      <Footer />
    </>
  )
}
