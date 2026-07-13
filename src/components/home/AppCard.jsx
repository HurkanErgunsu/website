import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/motion'
import AppLogo from '../AppLogo'
import PlatformIcons from './PlatformIcons'
import { contentDescriptionClass, contentTitleClass } from '../../utils/typography'

export default function AppCard({ appKey, app, onSelect }) {
  const handleSelect = () => onSelect(appKey)

  return (
    <motion.article
      variants={fadeInUp}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleSelect()
        }
      }}
      role="link"
      tabIndex={0}
      className="group flex cursor-pointer flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(15,23,42,0.45)] sm:p-8"
    >
      <AppLogo currentApp={app} size="lg" className="mb-5" />
      <h3 className={`${contentTitleClass} text-zinc-900`}>{app.name}</h3>
      <p className={`mt-2 flex-1 ${contentDescriptionClass} text-zinc-500`}>{app.slogan}</p>
      <div className="mt-5 flex items-center justify-between">
        <PlatformIcons stores={app.stores} />
        <span className="text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-600">
          View app →
        </span>
      </div>
    </motion.article>
  )
}
