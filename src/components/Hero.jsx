import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { heroSectionClass } from '../utils/layout'
import { heroHeadlineClass, subtitleTextClass } from '../utils/typography'
import StoreBadges from './StoreBadges'

function HeroHeadline({ headline, theme }) {
  const lines = headline ?? []

  return (
    <h1
      className={`mx-auto flex w-full max-w-[min(100%,44rem)] flex-col items-center text-center ${heroHeadlineClass}`}
      style={{ color: theme.text }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="sm:whitespace-nowrap">
          {line.map((segment, segmentIndex) => (
            <span
              key={segmentIndex}
              style={{ color: segment.accent ? theme.primary : theme.text }}
            >
              {segment.text}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export default function Hero({ currentApp }) {
  const { theme, hero } = currentApp
  const { white } = getSectionBackgrounds(theme)

  return (
    <section
      id="hero"
      className={heroSectionClass}
      style={{ backgroundColor: white }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        {hero?.badge && (
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 shadow-sm"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="text-[13px] font-medium" style={{ color: theme.text }}>
              {hero.badge}
            </span>
          </motion.div>
        )}

        <motion.div variants={fadeInUp} className="w-full text-center">
          <HeroHeadline headline={hero?.headline} theme={theme} />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className={`mt-8 max-w-[680px] ${subtitleTextClass}`}
          style={{ color: theme.text }}
        >
          {hero?.description ?? currentApp.slogan}
        </motion.p>

        <motion.div
          id="download"
          variants={fadeInUp}
          className="mt-8 scroll-mt-24"
        >
          <StoreBadges
            currentApp={currentApp}
            size="lg"
            className="justify-center gap-4 px-0 py-0"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
