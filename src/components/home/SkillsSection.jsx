import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'
import { pageShellClass, sectionClass } from '../../utils/layout'
import {
  contentDescriptionClass,
  contentTitleClass,
  sectionTitleClass,
} from '../../utils/typography'
import { PORTFOLIO } from '../../config/appConfig'
import { usePortfolioTheme } from '../../context/PortfolioThemeContext'

export default function SkillsSection() {
  const { theme } = usePortfolioTheme()

  return (
    <section id="skills" className={sectionClass}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={pageShellClass}
      >
        <motion.h2
          variants={fadeInUp}
          className={`${sectionTitleClass} mb-5 text-left sm:mb-6`}
          style={{ color: theme.text }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {PORTFOLIO.skills.groups.map((group) => (
            <motion.div key={group.title} variants={fadeInUp} className="glass-panel rounded-2xl p-5">
              <h3 className={contentTitleClass} style={{ color: theme.text }}>
                {group.title}
              </h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-3 py-1.5 ${contentDescriptionClass}`}
                    style={{
                      color: theme.textMuted,
                      backgroundColor: theme.chipBg,
                      border: `1px solid ${theme.chipBorder}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap justify-start gap-2.5">
          {PORTFOLIO.skills.languages.map((lang) => (
            <span
              key={lang.name}
              className={`glass-panel rounded-full px-3.5 py-1.5 ${contentDescriptionClass}`}
              style={{ color: theme.textMuted }}
            >
              {lang.name}: {lang.level}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
