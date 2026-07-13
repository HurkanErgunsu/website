export default function AppLogo({ currentApp, size = 'md', featured = false, className = '' }) {
  const { theme } = currentApp
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    nav: 'h-11 w-11',
    lg: 'h-20 w-20',
    xl: 'h-28 w-28',
  }

  const featuredStyles = featured
    ? 'rounded-2xl shadow-md ring-1 ring-gray-100/80 md:rounded-3xl'
    : 'rounded-2xl shadow-lg'
  const sizeStyles =
    featured && size === 'xl' ? 'h-28 w-28 md:h-32 md:w-32' : sizes[size]

  if (currentApp.logo) {
    return (
      <img
        src={currentApp.logo}
        alt={currentApp.logoAlt}
        className={`${sizeStyles} object-contain ${featuredStyles} ${className}`}
      />
    )
  }

  return (
    <div
      className={`${sizeStyles} flex items-center justify-center font-bold text-white ${featuredStyles} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
        fontSize: size === 'xl' ? '2rem' : size === 'lg' ? '1.5rem' : '1rem',
      }}
      aria-hidden={!currentApp.logoAlt}
    >
      {currentApp.name.charAt(0)}
    </div>
  )
}
