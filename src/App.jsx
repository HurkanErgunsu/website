import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { APPS_DATA, PORTFOLIO } from './config/appConfig'
import HomeView from './views/HomeView'
import AppLanding from './views/AppLanding'

function getAppIdFromUrl() {
  const appId = new URLSearchParams(window.location.search).get('app')
  return appId && APPS_DATA[appId] ? appId : null
}

function setAppInUrl(appId) {
  const url = new URL(window.location.href)
  if (appId) {
    url.searchParams.set('app', appId)
  } else {
    url.searchParams.delete('app')
  }
  window.history.pushState({}, '', url)
}

export default function App() {
  const [activeAppId, setActiveAppId] = useState(getAppIdFromUrl)

  const selectApp = useCallback((appKey) => {
    if (!APPS_DATA[appKey]) return
    setAppInUrl(appKey)
    setActiveAppId(appKey)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onPopState = () => setActiveAppId(getAppIdFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (activeAppId) {
      document.title = APPS_DATA[activeAppId].name
      return
    }

    document.title = PORTFOLIO.name
  }, [activeAppId])

  return (
    <AnimatePresence mode="wait">
      {activeAppId ? (
        <motion.div
          key={activeAppId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <AppLanding currentApp={APPS_DATA[activeAppId]} />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <HomeView onSelectApp={selectApp} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
