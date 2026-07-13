import { motion } from 'framer-motion'
import { pageShellClass } from '../utils/layout'
import AppLogo from './AppLogo'
import { APP_NAV_SECTIONS, scrollToSection } from '../utils/scroll'

function scrollToHero() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Navbar({ currentApp }) {
  const { theme } = currentApp

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/55 shadow-sm shadow-black/[0.04] backdrop-blur-2xl backdrop-saturate-200 supports-[backdrop-filter]:bg-white/45"
    >
      <div className={`${pageShellClass} grid h-[80px] grid-cols-[1fr_auto_1fr] items-center gap-4`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex min-w-0 items-center gap-2.5 justify-self-start transition-opacity hover:opacity-80 sm:gap-3"
        >
          <AppLogo currentApp={currentApp} size="nav" className="rounded-xl" />
          <span
            className="truncate text-lg font-extrabold leading-none tracking-tight sm:text-xl"
            style={{ color: theme.text }}
          >
            {currentApp.shortName ?? currentApp.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 justify-self-center md:flex lg:gap-10"
          aria-label="Page sections"
        >
          {APP_NAV_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-xs font-semibold uppercase tracking-[0.06em] text-slate-600 transition-colors hover:text-slate-900"
            >
              {label}
            </button>
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={scrollToHero}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex h-12 shrink-0 items-center justify-center justify-self-end rounded-full px-6 text-xs font-bold uppercase tracking-[0.06em] text-white transition-shadow hover:shadow-md"
          style={{
            backgroundColor: theme.text,
          }}
        >
          Download
        </motion.button>
      </div>
    </motion.nav>
  )
}
