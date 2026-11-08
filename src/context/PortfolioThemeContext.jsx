import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { HOME_THEMES } from '../config/appConfig'

const STORAGE_KEY = 'portfolio-theme-mode'
const PortfolioThemeContext = createContext(null)

function getInitialMode() {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export function PortfolioThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({
      mode,
      isDark: mode === 'dark',
      theme: HOME_THEMES[mode],
      toggleMode,
      setMode,
    }),
    [mode, toggleMode],
  )

  return (
    <PortfolioThemeContext.Provider value={value}>
      {children}
    </PortfolioThemeContext.Provider>
  )
}

export function usePortfolioTheme() {
  const context = useContext(PortfolioThemeContext)
  if (!context) {
    throw new Error('usePortfolioTheme must be used within PortfolioThemeProvider')
  }
  return context
}
