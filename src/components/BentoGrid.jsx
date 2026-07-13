import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { contentDescriptionClass, contentTitleClass } from '../utils/typography'

export default function BentoGrid({ currentApp, cards }) {
  const { theme } = currentApp
  const { white } = getSectionBackgrounds(theme)

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
    >
      {cards.map((card) => (
        <motion.article
          key={card.title}
          variants={fadeInUp}
          className="group rounded-3xl border border-black/10 p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(15,23,42,0.45)] sm:p-8"
          style={{ backgroundColor: white }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${theme.primary}12`, color: theme.text }}
            aria-hidden="true"
          >
            <span className="text-2xl leading-none" role="img">
              {card.icon}
            </span>
          </div>
          <h3
            className={`mt-5 ${contentTitleClass}`}
            style={{ color: theme.text }}
          >
            {card.title}
          </h3>
          <p
            className={`mt-2 ${contentDescriptionClass}`}
            style={{ color: theme.text }}
          >
            {card.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  )
}
