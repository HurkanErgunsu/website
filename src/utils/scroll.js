export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export const APP_NAV_SECTIONS = [
  { id: 'visuals', label: 'Screens' },
  { id: 'features', label: 'Features' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]
