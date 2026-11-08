/** Vertical rhythm between page sections */
export const sectionYClass = 'py-10 sm:py-14 lg:py-16'
export const sectionTopClass = 'pt-10 sm:pt-14 lg:pt-16'
export const sectionBottomClass = 'pb-10 sm:pb-14 lg:pb-16'

export const sectionXClass = 'px-6 sm:px-8'

/** Matches navbar inner width — max-w-6xl + horizontal padding */
export const pageShellClass = 'mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10'

export const sectionScrollClass = 'scroll-mt-24 overflow-x-hidden'

/** Standard section: scroll anchor + vertical spacing */
export const sectionClass = `${sectionScrollClass} ${sectionYClass}`

/** Section with horizontal padding on the outer wrapper */
export const sectionPaddedClass = `${sectionScrollClass} ${sectionXClass} ${sectionYClass}`

/** Hero: navbar clearance on top, section rhythm on bottom */
export const heroSectionClass = `relative overflow-hidden ${sectionXClass} ${sectionBottomClass} pt-16 sm:pt-20 md:pt-24`

/** Slightly tighter than inter-section gap (last section bottom + this margin) */
export const footerClass = 'mt-6 sm:mt-10'

/** Footer inner container — same horizontal shell as navbar */
export const footerContainerClass = `${pageShellClass} py-12 sm:py-14`

/** Space above the footer divider (between main columns and rule) */
export const footerDividerClass = 'mb-2 mt-10 border-t sm:mb-3 sm:mt-12'
