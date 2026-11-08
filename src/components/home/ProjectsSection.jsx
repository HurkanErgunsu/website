import { motion } from 'framer-motion'
import { APPS_DATA } from '../../config/appConfig'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'
import { pageShellClass, sectionClass } from '../../utils/layout'
import {
  buttonTextClass,
  contentDescriptionClass,
  contentTitleClass,
  sectionTitleClass,
} from '../../utils/typography'
import { usePortfolioTheme } from '../../context/PortfolioThemeContext'

export default function ProjectsSection({ onSelectApp }) {
  const apps = Object.entries(APPS_DATA)
  const { theme } = usePortfolioTheme()

  return (
    <section id="projects" className={sectionClass}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={pageShellClass}
      >
        <motion.div variants={fadeInUp} className="mb-5 max-w-2xl text-left sm:mb-6">
          <h2 className={sectionTitleClass} style={{ color: theme.text }}>
            Projects
          </h2>
          <p className={`mt-2.5 ${contentDescriptionClass}`} style={{ color: theme.textMuted }}>
            Indie mobile apps I designed, built, and shipped.
          </p>
        </motion.div>

        <div className="grid items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {apps.map(([key, app]) => (
            <motion.button
              key={key}
              type="button"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              onClick={() => onSelectApp(key)}
              className="glass-panel glass-button-hover flex w-full flex-col overflow-hidden rounded-2xl p-5 text-left shadow-none transition-[border-color,background-color,box-shadow] duration-200 hover:shadow-lg hover:shadow-black/20"
            >
              <img
                src={app.logo}
                alt={app.logoAlt}
                className="h-12 w-12 rounded-xl object-cover shadow-md"
                style={{ boxShadow: `0 0 0 1px ${theme.border}` }}
                draggable={false}
              />
              <h3 className={`mt-4 ${contentTitleClass}`} style={{ color: theme.text }}>
                {app.name}
              </h3>
              <p className={`mt-1.5 flex-1 ${contentDescriptionClass}`} style={{ color: theme.textMuted }}>
                {app.slogan}
              </p>
              <span
                className={`glass-button mt-7 w-full rounded-xl px-4 py-2.5 text-center ${buttonTextClass}`}
              >
                View details
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
