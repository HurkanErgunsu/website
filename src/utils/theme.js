export function themeToCssVars(theme) {
  const sections = getSectionBackgrounds(theme)

  return {
    '--color-primary': theme.primary,
    '--color-primary-light': theme.primaryLight,
    '--color-primary-dark': theme.primaryDark,
    '--color-background': theme.background,
    '--color-surface': theme.surface,
    '--color-text': theme.text,
    '--color-text-muted': theme.textMuted,
    '--color-footer-bg': theme.footerBg,
    '--color-footer-text': theme.footerText,
    '--section-white': sections.white,
    '--section-alt': sections.alt,
    '--carousel-fade': sections.alt,
  }
}

/** Alternating section stripes: white ↔ soft muted surface */
export function getSectionBackgrounds(theme) {
  const white = '#FFFFFF'
  const alt =
    theme.sectionMuted ??
    (theme.background && theme.background.toUpperCase() !== '#FFFFFF'
      ? theme.background
      : '#F9FAFB')

  return { white, alt }
}
