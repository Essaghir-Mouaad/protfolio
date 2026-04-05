'use client'

import { owner } from '@/lib/data'
import { useState } from 'react'

// Note: Metadata export not supported in client components, see layout or create a server component wrapper

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Configure Formspree or Resend for email delivery
      // Replace with your actual form endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-16 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-web-text dark:text-ai-text">Get in Touch</h1>
        <p className="text-lg text-web-text-secondary dark:text-ai-text-secondary max-w-2xl">
          Have a project in mind? Want to discuss AI, web development, or just say hello? Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-web-text dark:text-ai-text">Send a Message</h2>

          {submitted && (
            <div className="p-4 bg-green-50 dark:bg-ai-surface border border-green-200 dark:border-ai-primary/20 text-green-800 dark:text-green-300 rounded-lg">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-web-text dark:text-ai-text mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 text-web-text dark:text-ai-text rounded-lg focus:outline-none focus:border-web-primary dark:focus:border-ai-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-web-text dark:text-ai-text mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 text-web-text dark:text-ai-text rounded-lg focus:outline-none focus:border-web-primary dark:focus:border-ai-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-web-text dark:text-ai-text mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 text-web-text dark:text-ai-text rounded-lg focus:outline-none focus:border-web-primary dark:focus:border-ai-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-web-text dark:text-ai-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 text-web-text dark:text-ai-text rounded-lg focus:outline-none focus:border-web-primary dark:focus:border-ai-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-web-primary dark:bg-ai-primary text-white dark:text-ai-bg font-semibold rounded-lg hover:bg-web-secondary dark:hover:bg-ai-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-web-text dark:text-ai-text">Contact Information</h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-web-text-secondary dark:text-ai-text-secondary mb-2">
                Email
              </h3>
              <a
                href={`mailto:${owner.email}`}
                className="text-lg font-semibold text-web-primary dark:text-ai-primary hover:text-web-secondary dark:hover:text-ai-secondary transition-colors break-all"
              >
                {owner.email}
              </a>
            </div>

            <div className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-web-text-secondary dark:text-ai-text-secondary mb-2">
                Phone
              </h3>
              <a
                href={`tel:${owner.phone}`}
                className="text-lg font-semibold text-web-primary dark:text-ai-primary hover:text-web-secondary dark:hover:text-ai-secondary transition-colors"
              >
                {owner.phone}
              </a>
            </div>

            <div className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-web-text-secondary dark:text-ai-text-secondary mb-3">
                Social
              </h3>
              <div className="space-y-2">
                <a
                  href={`https://linkedin.com/in/${owner.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-web-primary dark:text-ai-primary hover:text-web-secondary dark:hover:text-ai-secondary transition-colors font-semibold"
                >
                  LinkedIn: {owner.linkedin}
                </a>
                <a
                  href={`https://github.com/${owner.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-web-primary dark:text-ai-primary hover:text-web-secondary dark:hover:text-ai-secondary transition-colors font-semibold"
                >
                  GitHub: {owner.github}
                </a>
              </div>
            </div>
          </div>

          {/* CV Downloads */}
          <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-ai-secondary/20">
            <p className="text-sm font-semibold uppercase tracking-wider text-web-text-secondary dark:text-ai-text-secondary">
              Download CVs
            </p>
            <div className="space-y-2">
              <a
                href="/cv-ai.pdf"
                className="block w-full px-4 py-3 bg-ai-surface text-ai-primary border border-ai-primary/30 font-semibold rounded-lg hover:bg-ai-surface/80 transition-colors text-center"
              >
                📄 Download AI CV
              </a>
              <a
                href="/cv-web.pdf"
                className="block w-full px-4 py-3 bg-green-50 text-web-primary border border-web-primary/20 font-semibold rounded-lg hover:bg-green-100 transition-colors text-center"
              >
                📄 Download Web CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
