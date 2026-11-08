import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'
import { pageShellClass, sectionClass } from '../../utils/layout'
import {
  contentDescriptionClass,
  contentSubtitleClass,
  contentTitleClass,
  metaTextClass,
  sectionTitleClass,
} from '../../utils/typography'
import { PORTFOLIO } from '../../config/appConfig'
import { usePortfolioTheme } from '../../context/PortfolioThemeContext'

function EducationCard({ item, theme }) {
  return (
    <motion.article variants={fadeInUp} className="glass-panel rounded-2xl p-5">
      <div className="space-y-5">
        <div>
          <h4 className={contentTitleClass} style={{ color: theme.text }}>
            {item.title}
          </h4>
          <p className={`mt-1.5 ${contentSubtitleClass}`}>
            <span style={{ color: theme.textMuted }}>{item.place}</span>
            {item.period && (
              <>
                <span style={{ color: theme.textMuted }}> · </span>
                <span className={metaTextClass} style={{ color: theme.accent }}>
                  {item.period}
                </span>
              </>
            )}
          </p>
        </div>

        {item.detail && (
          <p className={contentDescriptionClass} style={{ color: theme.textMuted }}>
            {item.detail}
          </p>
        )}
      </div>
    </motion.article>
  )
}

export default function EducationSection() {
  const { theme } = usePortfolioTheme()

  return (
    <section id="education" className={sectionClass}>
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
          Education
        </motion.h2>

        <motion.div variants={fadeInUp} className="space-y-3">
          <h3 className={`${metaTextClass} uppercase tracking-[0.1em]`} style={{ color: theme.textMuted }}>
            Academic
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {PORTFOLIO.education.map((item) => (
              <EducationCard key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 space-y-3 sm:mt-12">
          <h3 className={`${metaTextClass} uppercase tracking-[0.1em]`} style={{ color: theme.textMuted }}>
            Language courses
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {PORTFOLIO.furtherEducation.map((item) => (
              <EducationCard key={item.id} item={item} theme={theme} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
