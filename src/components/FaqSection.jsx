import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { sectionPaddedClass } from '../utils/layout'
import { sectionTitleClass, subtitleTextClass } from '../utils/typography'
import Accordion from './Accordion'

export default function FaqSection({ currentApp }) {
  const { theme } = currentApp
  const { white } = getSectionBackgrounds(theme)

  return (
    <section
      id="faq"
      className={sectionPaddedClass}
      style={{ backgroundColor: white }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <h2 className={sectionTitleClass} style={{ color: theme.text }}>
            Frequently Asked Questions
          </h2>
          <p className={`mt-3 ${subtitleTextClass}`} style={{ color: theme.text }}>
            Quick answers to the things people ask us most about {currentApp.name}.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Accordion currentApp={currentApp} items={currentApp.faq} />
        </motion.div>
      </motion.div>
    </section>
  )
}
