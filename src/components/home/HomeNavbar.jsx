import { motion } from 'framer-motion'
import { pageShellClass } from '../../utils/layout'
import { HOME_NAV_SECTIONS, PORTFOLIO } from '../../config/appConfig'
import { scrollToSection } from '../../utils/scroll'
import { usePortfolioTheme } from '../../context/PortfolioThemeContext'
import { metaTextClass, navLinkClass } from '../../utils/typography'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
    </svg>
  )
}

export default function HomeNavbar() {
  const { theme, isDark, toggleMode } = usePortfolioTheme()

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b shadow-sm transition-colors duration-300"
      style={{
        backgroundColor: theme.navBg,
        borderColor: theme.navBorder,
        backdropFilter: 'blur(22px) saturate(160%)',
        WebkitBackdropFilter: 'blur(22px) saturate(160%)',
        boxShadow: isDark
          ? '0 1px 0 rgba(255,255,255,0.06), 0 8px 28px -18px rgba(0,0,0,0.55)'
          : '0 1px 0 rgba(15,23,42,0.06), 0 8px 28px -18px rgba(15,23,42,0.12)',
      }}
    >
      <div className={`${pageShellClass} flex h-[4.5rem] items-center justify-between gap-4 sm:h-20`}>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-80 sm:gap-3"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11 ${metaTextClass} font-bold`}
            style={{ backgroundColor: theme.accent }}
          >
            {PORTFOLIO.shortName}
          </div>
          <div className="min-w-0 space-y-0.5 text-left">
            <span className="block truncate text-base font-semibold leading-tight" style={{ color: theme.text }}>
              {PORTFOLIO.name}
            </span>
            <span
              className="hidden truncate text-sm font-normal leading-tight sm:block"
              style={{ color: theme.textMuted }}
            >
              Software Engineer
            </span>
          </div>
        </a>

        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={toggleMode}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="glass-button glass-button-hover flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{ color: theme.text }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <nav
            className="flex max-w-[48vw] items-center justify-end gap-4 overflow-x-auto scrollbar-hide sm:max-w-none sm:gap-6 lg:gap-7"
            aria-label="Page sections"
          >
            {HOME_NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`shrink-0 uppercase transition-colors ${navLinkClass}`}
                style={{ color: theme.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.text
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.textMuted
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.nav>
  )
}
