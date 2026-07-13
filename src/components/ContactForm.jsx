import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/motion'
import { getSectionBackgrounds } from '../utils/theme'
import { sectionPaddedClass } from '../utils/layout'
import {
  contentDescriptionClass,
  formLabelClass,
  sectionTitleClass,
  subtitleTextClass,
} from '../utils/typography'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm({ currentApp }) {
  const { theme, contact } = currentApp
  const { white } = getSectionBackgrounds(theme)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (contact.submitEndpoint) {
      try {
        const res = await fetch(contact.submitEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...form, app: currentApp.id }),
        })
        if (!res.ok) throw new Error('Failed to send')
        setStatus('success')
        setForm(initialForm)
      } catch {
        setStatus('error')
      }
    } else {
      setTimeout(() => {
        setStatus('success')
        setForm(initialForm)
      }, 800)
    }
  }

  const inputClass = `w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition-shadow focus:ring-2 leading-normal ${contentDescriptionClass}`

  return (
    <section
      id="contact"
      className={sectionPaddedClass}
      style={{ backgroundColor: white }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-xl"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <h2 className={sectionTitleClass} style={{ color: theme.text }}>
            Get in touch
          </h2>
          <p className={`mt-3 ${subtitleTextClass}`} style={{ color: theme.text }}>
            Questions, feedback, or partnership ideas? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={`mb-1.5 block ${formLabelClass}`} style={{ color: theme.text }}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
                style={{ '--tw-ring-color': `${theme.primary}40` }}
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="lastName" className={`mb-1.5 block ${formLabelClass}`} style={{ color: theme.text }}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={`mb-1.5 block ${formLabelClass}`} style={{ color: theme.text }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className={`mb-1.5 block ${formLabelClass}`} style={{ color: theme.text }}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message" className={`mb-1.5 block ${formLabelClass}`} style={{ color: theme.text }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl disabled:opacity-60"
            style={{
              backgroundColor: theme.primary,
              boxShadow: `0 8px 24px ${theme.primary}40`,
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <p className="text-center text-sm text-emerald-600">{contact.successMessage}</p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-500">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  )
}
