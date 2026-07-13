import { motion } from 'framer-motion'
import { HOME_NAV_SECTIONS, HOME_THEME, PORTFOLIO } from '../../config/appConfig'
import { scrollToSection } from '../../utils/scroll'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function HomeNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/55 shadow-sm shadow-black/[0.04] backdrop-blur-2xl backdrop-saturate-200 supports-[backdrop-filter]:bg-white/45"
    >
      <div className="mx-auto grid h-[80px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 sm:px-10 lg:px-12">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className="flex min-w-0 items-center gap-2.5 justify-self-start transition-opacity hover:opacity-80 sm:gap-3"
        >
          {PORTFOLIO.logo ? (
            <img
              src={PORTFOLIO.logo}
              alt={PORTFOLIO.logoAlt}
              className="h-11 w-11 shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-black/5"
            />
          ) : (
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-base font-bold text-white shadow-sm"
              style={{ backgroundColor: HOME_THEME.accent }}
            >
              {PORTFOLIO.name.charAt(0)}
            </div>
          )}
          <span className="truncate text-lg font-extrabold leading-none tracking-tight text-zinc-900 sm:text-xl">
            {PORTFOLIO.name}
          </span>
        </a>

        <div aria-hidden="true" />

        <nav
          className="hidden items-center gap-6 justify-self-end md:flex lg:gap-8"
          aria-label="App categories"
        >
          {HOME_NAV_SECTIONS.map(({ id, label }) => (
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
      </div>
    </motion.nav>
  )
}
