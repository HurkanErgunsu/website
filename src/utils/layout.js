/** Vertical rhythm between page sections */
export const sectionYClass = 'py-16 sm:py-24'
export const sectionTopClass = 'pt-16 sm:pt-24'
export const sectionBottomClass = 'pb-16 sm:pb-24'

export const sectionXClass = 'px-6 sm:px-8'

export const sectionScrollClass = 'scroll-mt-24 overflow-x-hidden'

/** Standard section: scroll anchor + vertical spacing */
export const sectionClass = `${sectionScrollClass} ${sectionYClass}`

/** Section with horizontal padding on the outer wrapper */
export const sectionPaddedClass = `${sectionScrollClass} ${sectionXClass} ${sectionYClass}`

/** Hero: navbar clearance on top, section rhythm on bottom */
export const heroSectionClass = `relative overflow-hidden ${sectionXClass} ${sectionBottomClass} pt-20 sm:pt-24 md:pt-28`

/** Slightly tighter than inter-section gap (last section bottom + this margin) */
export const footerClass = 'mt-10 sm:mt-16'

/** Footer inner container padding */
export const footerContainerClass = `mx-auto max-w-6xl ${sectionXClass} py-12 sm:py-16`

/** Space above the footer divider (between main columns and rule) */
export const footerDividerClass = 'mb-2 mt-12 border-t border-zinc-800 sm:mb-3 sm:mt-14'
