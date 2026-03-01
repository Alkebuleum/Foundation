import { useEffect } from 'react'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import Mission    from './components/Mission'
import Ecosystem  from './components/Ecosystem'
import Programs   from './components/Programs'
import Grants     from './components/Grants'
import Governance from './components/Governance'
import News       from './components/News'
import Team       from './components/Team'
import Footer     from './components/Footer'
import './index.css'

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })

    const observe = () => {
      document.querySelectorAll('.rv').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 0.08}s`
        io.observe(el)
      })
    }

    // Observe now + after a tick (dynamic sections load async)
    observe()
    const t = setTimeout(observe, 800)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Mission />
      <Ecosystem />
      <Programs />
      <Grants />
      <Governance />
      <News />
      <Team />
      <Footer />
    </>
  )
}
