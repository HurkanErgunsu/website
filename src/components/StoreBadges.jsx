const BADGES = {
  appStore: '/badges/app-store.svg',
  googlePlay: '/badges/google-play.png',
}

const badgeSizes = {
  sm: {
    appStore: 'h-9 w-[6.75rem]',
    playStore: 'h-10 w-[7.25rem]',
  },
  md: {
    appStore: 'h-11 w-[8.25rem]',
    playStore: 'h-12 w-[8.75rem]',
  },
  lg: {
    appStore: 'h-13 w-[9.75rem] sm:h-[3.85rem] sm:w-[12.25rem]',
    playStore: 'h-13 w-[10.25rem] sm:h-[3.85rem] sm:w-[13rem]',
  },
}

function AppStoreBadge({ href, size = 'md', available = true }) {
  if (!available) return null

  const boxClass = badgeSizes[size]?.appStore ?? badgeSizes.md.appStore

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`inline-flex shrink-0 items-center justify-center transition-transform hover:scale-105 active:scale-95 ${boxClass}`}
    >
      <img
        src={BADGES.appStore}
        alt="Download on the App Store"
        className="h-full w-full object-contain object-center"
        draggable={false}
      />
    </a>
  )
}

function PlayStoreBadge({ href, size = 'md', available = true, accentColor }) {
  const boxClass = badgeSizes[size]?.playStore ?? badgeSizes.md.playStore

  const image = (
    <img
      src={BADGES.googlePlay}
      alt="Get it on Google Play"
      className={`h-full w-full object-contain object-center ${available ? '' : 'opacity-40 grayscale'}`}
      draggable={false}
    />
  )

  if (available) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={`inline-flex shrink-0 items-center justify-center transition-transform hover:scale-105 active:scale-95 ${boxClass}`}
      >
        {image}
      </a>
    )
  }

  return (
    <div className={`relative inline-flex shrink-0 ${boxClass}`}>
      <span
        aria-label="Google Play — Coming Soon"
        className={`inline-flex h-full w-full cursor-not-allowed items-center justify-center ${boxClass}`}
      >
        {image}
      </span>
      <span
        className="pointer-events-none absolute -right-1 -top-2 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:text-[10px]"
        style={{ backgroundColor: accentColor }}
      >
        Coming Soon
      </span>
    </div>
  )
}

export default function StoreBadges({ currentApp, size = 'md', className = '' }) {
  const { links, theme, stores = { ios: true, android: true } } = currentApp

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3.5 px-3 py-4 sm:gap-4 sm:px-4 sm:py-5 ${className}`}>
      <AppStoreBadge href={links.appStore} size={size} available={stores.ios} />
      <PlayStoreBadge
        href={links.playStore}
        size={size}
        available={stores.android}
        accentColor={theme.primary}
      />
    </div>
  )
}
