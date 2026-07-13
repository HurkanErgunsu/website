import { themeToCssVars } from '../utils/theme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VisualsSection from '../components/VisualsSection'
import TldrSection from '../components/TldrSection'
import FaqSection from '../components/FaqSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function AppLanding({ currentApp }) {
  return (
    <div
      className="min-h-svh"
      style={{
        ...themeToCssVars(currentApp.theme),
        backgroundColor: 'var(--section-white)',
        color: 'var(--color-text)',
      }}
    >
      <Navbar currentApp={currentApp} />
      <main>
        <Hero currentApp={currentApp} />
        <VisualsSection currentApp={currentApp} />
        <TldrSection currentApp={currentApp} />
        <FaqSection currentApp={currentApp} />
        <ContactForm currentApp={currentApp} />
      </main>
      <Footer currentApp={currentApp} />
    </div>
  )
}
