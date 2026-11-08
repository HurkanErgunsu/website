import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'
import { pageShellClass } from '../../utils/layout'
import {
  buttonTextClass,
  contentDescriptionClass,
  heroHeadlineClass,
  metaTextClass,
  subtitleTextClass,
} from '../../utils/typography'
import { PORTFOLIO } from '../../config/appConfig'
import { scrollToSection } from '../../utils/scroll'
import { usePortfolioTheme } from '../../context/PortfolioThemeContext'

export default function PortfolioHero() {
  const { theme } = usePortfolioTheme()

  return (
    <section id="home" className="relative overflow-hidden hero-circuit">
      <div className={`${pageShellClass} py-14 sm:py-16 lg:py-20`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex w-full flex-col items-start gap-8 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-12 lg:gap-14"
        >
          <div className="min-w-0 max-w-xl space-y-5 lg:max-w-2xl">
            <motion.div variants={fadeInUp}>
              <div className="space-y-2">
                <h1 className={heroHeadlineClass} style={{ color: theme.text }}>
                  {PORTFOLIO.name}
                </h1>
                <p className={subtitleTextClass} style={{ color: theme.textMuted }}>
                  {PORTFOLIO.role}
                </p>
              </div>
              <span
                className={`mt-2.5 inline-flex rounded-full px-3 py-1 ${metaTextClass} backdrop-blur-md`}
                style={{
                  color: theme.accent,
                  backgroundColor: theme.chipBg,
                  border: `1px solid ${theme.chipBorder}`,
                }}
              >
                Passionate · Results-driven · Innovative
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className={`max-w-xl ${contentDescriptionClass}`} style={{ color: theme.textMuted }}>
                {PORTFOLIO.tagline}
              </p>
              <div className="flex flex-wrap items-center justify-start gap-3">
                <a
                  href={PORTFOLIO.cvUrl}
                  download
                  className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 ${buttonTextClass}`}
                  style={{ backgroundColor: theme.accent }}
                >
                  Download CV
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className={`glass-button glass-button-hover inline-flex items-center justify-center rounded-xl px-5 py-2.5 ${buttonTextClass}`}
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          </div>

          <motion.img
            variants={fadeInUp}
            src={PORTFOLIO.portrait}
            alt={PORTFOLIO.portraitAlt}
            className="ml-auto h-36 w-36 shrink-0 rounded-full object-cover object-top sm:ml-0 sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            style={{ boxShadow: `0 0 0 2px ${theme.border}` }}
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  )
}
