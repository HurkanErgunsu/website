import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { fadeInUp } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import PhoneMockup from './PhoneMockup'

export default function ScreenshotGallery({ currentApp }) {
  const screenshots = currentApp.screenshots ?? []
  const [paused, setPaused] = useState(false)
  const controls = useAnimationControls()
  const { theme } = currentApp
  const { white } = getSectionBackgrounds(theme)

  const duration = Math.max(screenshots.length * 7, 28)

  useEffect(() => {
    if (paused || screenshots.length === 0) {
      controls.stop()
      return
    }

    controls.set({ x: '0%' })
    controls.start({
      x: '-50%',
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    })
  }, [paused, screenshots.length, duration, controls])

  if (screenshots.length === 0) return null

  const items = [...screenshots, ...screenshots]

  return (
    <motion.div variants={fadeInUp} className="relative mt-8 min-w-0">
      <div
        className={`relative ${paused ? 'overflow-x-auto scrollbar-hide' : 'overflow-hidden'}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          animate={controls}
          className="flex w-max gap-5 px-6 sm:gap-6 sm:px-8"
          style={{ willChange: paused ? 'auto' : 'transform' }}
        >
          {items.map((shot, index) => (
            <div
              key={`${shot.id}-${index}`}
              className="w-[160px] shrink-0 sm:w-[192px] md:w-[224px]"
            >
              <PhoneMockup screenshot={shot} theme={theme} />
            </div>
          ))}
        </motion.div>
        {!paused && (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-12"
              style={{ background: `linear-gradient(to right, ${white}, transparent)` }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-12"
              style={{ background: `linear-gradient(to left, ${white}, transparent)` }}
            />
          </>
        )}
      </div>
    </motion.div>
  )
}
