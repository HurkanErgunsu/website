import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { APP_NAV_SECTIONS, scrollToSection } from '../utils/scroll'
import { footerClass, footerContainerClass, footerDividerClass } from '../utils/layout'
import { contentDescriptionClass } from '../utils/typography'
import AppLogo from './AppLogo'

function SocialIcon({ href, label, children }) {
  const className =
    'flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/10 hover:text-white'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" aria-label={label} className={className}>
      {children}
    </button>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function FooterLink({ children, onClick, href }) {
  const className = `${contentDescriptionClass} text-left text-zinc-400 transition-colors hover:text-white`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default function Footer({ currentApp }) {
  const { links } = currentApp
  const privacyUrl = `/apps/${currentApp.id}/privacy/index.html`
  const termsUrl = `/apps/${currentApp.id}/terms/index.html`
  const year = new Date().getFullYear()

  return (
    <footer className={footerClass} style={{ backgroundColor: currentApp.theme.footerBg }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={footerContainerClass}
      >
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12"
        >
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              {currentApp.theme.logoBg ? (
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: currentApp.theme.logoBg }}
                >
                  <AppLogo currentApp={currentApp} size="md" className="h-9 w-9 rounded-lg shadow-none" />
                </div>
              ) : (
                <AppLogo currentApp={currentApp} size="md" className="h-11 w-11 rounded-xl shadow-none" />
              )}
              <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {currentApp.name}
              </span>
            </div>

            {currentApp.footerDescription && (
              <p className={`mt-4 ${contentDescriptionClass} text-zinc-400`}>
                {currentApp.footerDescription}
              </p>
            )}
          </div>

          <FooterColumn title="Product">
            {APP_NAV_SECTIONS.map(({ id, label }) => (
              <FooterLink key={id} onClick={() => scrollToSection(id)}>
                {label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Support">
            <FooterLink href="/">All Apps</FooterLink>
            <FooterLink href={privacyUrl}>Privacy Policy</FooterLink>
            <FooterLink href={termsUrl}>Terms of Use</FooterLink>
          </FooterColumn>
        </motion.div>

        <div className={footerDividerClass} aria-hidden="true" />

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div className="flex items-center gap-1">
            <SocialIcon href={links.tiktok} label="TikTok">
              <TikTokIcon />
            </SocialIcon>
            <SocialIcon href={links.instagram} label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href={links.facebook} label="Facebook">
              <FacebookIcon />
            </SocialIcon>
          </div>

          <p className={`${contentDescriptionClass} text-zinc-500`}>
            &copy; {year} {currentApp.name}. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
