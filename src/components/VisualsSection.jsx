import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { sectionClass } from '../utils/layout'
import { sectionTitleClass, subtitleTextClass } from '../utils/typography'
import ScreenshotGallery from './ScreenshotGallery'

export default function VisualsSection({ currentApp }) {
  const { theme } = currentApp
  const { white } = getSectionBackgrounds(theme)

  return (
    <section
      id="visuals"
      className={sectionClass}
      style={{ backgroundColor: white }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl min-w-0"
      >
        <motion.div variants={fadeInUp} className="px-6 text-center sm:px-8">
          <h2 className={sectionTitleClass} style={{ color: theme.text }}>
            See it in action
          </h2>
          <p
            className={`mx-auto mt-3 max-w-2xl ${subtitleTextClass}`}
            style={{ color: theme.text }}
          >
            {currentApp.visualsDescription}
          </p>
        </motion.div>

        <ScreenshotGallery currentApp={currentApp} />
      </motion.div>
    </section>
  )
}
