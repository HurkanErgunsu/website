/**
 * Shared type scale
 * - Body / description / card subtitle: 16px (text-base)
 * - Meta / nav / buttons: 14px (text-sm)
 * - Card titles: 16px semibold
 * - Section titles / hero: display sizes
 */

export const heroHeadlineClass =
  'text-[clamp(1.75rem,2.4vw+1rem,2.75rem)] font-bold leading-[1.15] tracking-tight'

export const sectionTitleClass =
  'text-[clamp(1.375rem,1.4vw+0.9rem,1.875rem)] font-bold tracking-tight leading-[1.2]'

/** Card / block titles — 16px */
export const contentTitleClass = 'text-base font-semibold leading-tight tracking-tight'

/** Body copy & descriptions — 16px everywhere */
export const contentDescriptionClass = 'text-base font-normal leading-[1.55]'

/** Same as description (legacy alias) */
export const bodyTextClass = contentDescriptionClass

/** Hero role line — 16px */
export const subtitleTextClass = 'text-base font-normal leading-snug'

/** Company / school under card title — 16px */
export const contentSubtitleClass = 'text-base font-medium leading-tight'

/** Dates, location, section labels — 14px */
export const metaTextClass = 'text-sm font-medium leading-tight'

/** Navbar section links — 14px */
export const navLinkClass = 'text-sm font-medium tracking-[0.04em]'

/** Buttons — 14px */
export const buttonTextClass = 'text-sm font-semibold'

export const formLabelClass = 'text-base font-medium tracking-tight'
