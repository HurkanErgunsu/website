import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

function ChevronIcon({ isOpen, color }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="mt-0.5 shrink-0"
      style={{ color }}
      aria-hidden="true"
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

function ExperienceCard({ item, theme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
      className="glass-panel glass-button-hover self-start overflow-hidden rounded-2xl shadow-none transition-[border-color,background-color,box-shadow] duration-200 hover:shadow-lg hover:shadow-black/20"
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-3 p-5 text-left"
      >
        <div className="min-w-0 flex-1 space-y-5">
          <div>
            <h3 className={contentTitleClass} style={{ color: theme.text }}>
              {item.role}
            </h3>
            <div className="mt-1.5">
              <p className={contentSubtitleClass} style={{ color: theme.textMuted }}>
                {item.company}
              </p>
              {(item.city || item.country || item.employmentType || item.period) && (
                <p className={`mt-1 ${metaTextClass}`}>
                  <span style={{ color: theme.textMuted }}>
                    {[
                      [item.city, item.country].filter(Boolean).join(', '),
                      item.employmentType,
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </span>
                  {item.period && (
                    <>
                      {(item.city || item.country || item.employmentType) && (
                        <span style={{ color: theme.textMuted }}> · </span>
                      )}
                      <span style={{ color: theme.accent }}>{item.period}</span>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className={contentDescriptionClass} style={{ color: theme.textMuted }}>
              {item.description}
            </p>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.ul
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className={`mt-2 space-y-1.5 overflow-hidden ${contentDescriptionClass}`}
                  style={{ color: theme.textMuted }}
                >
                  {item.details.map((detail) => (
                    <li key={detail.slice(0, 40)} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: theme.textMuted }}
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <ChevronIcon isOpen={isOpen} color={theme.textMuted} />
      </button>
    </motion.article>
  )
}

export default function ExperienceSection() {
  const { theme } = usePortfolioTheme()

  return (
    <section id="experience" className={sectionClass}>
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
          Experience
        </motion.h2>

        <div className="grid items-start gap-4 sm:grid-cols-2 sm:gap-5">
          {PORTFOLIO.experience.map((item) => (
            <ExperienceCard key={item.id} item={item} theme={theme} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
