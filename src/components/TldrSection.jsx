import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { sectionClass } from '../utils/layout'
import { sectionTitleClass, subtitleTextClass } from '../utils/typography'
import BentoGrid from './BentoGrid'

export default function TldrSection({ currentApp }) {
  const { theme } = currentApp
  const cards = currentApp.tldrCards ?? []
  const { white } = getSectionBackgrounds(theme)

  if (cards.length === 0) return null

  return (
    <section
      id="features"
      className={sectionClass}
      style={{ backgroundColor: white }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-5xl min-w-0 px-6 sm:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <h2 className={sectionTitleClass} style={{ color: theme.text }}>
            Why {currentApp.name}?
          </h2>
          <p
            className={`mx-auto mt-3 max-w-2xl ${subtitleTextClass}`}
            style={{ color: theme.text }}
          >
            The essentials at a glance — no fluff, just what makes this app worth
            downloading.
          </p>
        </motion.div>

        <BentoGrid currentApp={currentApp} cards={cards} />
      </motion.div>
    </section>
  )
}
