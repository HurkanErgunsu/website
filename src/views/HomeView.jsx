import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { APPS_DATA, HOME_THEME, PORTFOLIO } from '../config/appConfig'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { sectionClass } from '../utils/layout'
import { sectionTitleClass, subtitleTextClass } from '../utils/typography'
import HomeNavbar from '../components/home/HomeNavbar'
import HomeFooter from '../components/home/HomeFooter'
import AppCard from '../components/home/AppCard'

export default function HomeView({ onSelectApp }) {
  const apps = Object.entries(APPS_DATA)

  useEffect(() => {
    document.title = PORTFOLIO.name
  }, [])

  return (
    <div
      className="min-h-svh"
      style={{ backgroundColor: HOME_THEME.background, color: HOME_THEME.text }}
    >
      <HomeNavbar />

      <main>
        <section id="apps" className={sectionClass}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl min-w-0 px-6 sm:px-8"
          >
            <motion.div variants={fadeInUp} className="mb-8 text-center">
              <h1 className={`${sectionTitleClass} text-zinc-900`}>Mobile Apps</h1>
              <p className={`mt-3 ${subtitleTextClass}`} style={{ color: HOME_THEME.textMuted }}>
                {PORTFOLIO.tagline}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {apps.map(([key, app]) => (
                <AppCard key={key} appKey={key} app={app} onSelect={onSelectApp} />
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <HomeFooter onSelectApp={onSelectApp} />
    </div>
  )
}
