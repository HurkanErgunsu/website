import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getSectionBackgrounds } from '../utils/theme'
import { contentDescriptionClass, contentTitleClass } from '../utils/typography'

function ChevronIcon({ isOpen, color }) {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{ color }}
      className="shrink-0"
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

function AccordionItem({ question, answer, isOpen, onToggle, theme, cardBg }) {
  const activeBg = `${theme.primary}0A`
  const activeBorder = `${theme.primary}1A`
  const activeText = theme.primary

  return (
    <div
      className="overflow-hidden rounded-2xl border border-black/10 transition-colors"
      style={{
        backgroundColor: isOpen ? activeBg : cardBg,
        borderColor: isOpen ? activeBorder : undefined,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors sm:px-7 ${
          isOpen ? '' : 'hover:bg-black/[0.02]'
        }`}
        aria-expanded={isOpen}
        style={{ backgroundColor: 'transparent' }}
      >
        <span
          className={contentTitleClass}
          style={{ color: isOpen ? activeText : theme.text }}
        >
          {question}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
          style={{
            backgroundColor: `${theme.primary}0F`,
            borderColor: isOpen ? activeBorder : `${theme.primary}1A`,
          }}
        >
          <ChevronIcon isOpen={isOpen} color={isOpen ? activeText : theme.primary} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ backgroundColor: 'transparent' }}
          >
            <p
              className={`px-6 pb-6 sm:px-7 sm:pb-7 ${contentDescriptionClass}`}
              style={{
                color: isOpen ? theme.text : theme.textMuted,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion({ currentApp, items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const { theme } = currentApp
  const { white } = getSectionBackgrounds(theme)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          theme={theme}
          cardBg={white}
        />
      ))}
    </div>
  )
}
