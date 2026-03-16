'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitContact, type FormState } from '@/app/actions/contact'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export default function ContactForm() {
  const [state, action] = useFormState<FormState, FormData>(submitContact, null)

  return (
    <form action={action} className="space-y-5">
      {state && (
        <div
          className={`p-4 rounded-lg text-sm font-medium ${
            state.success
              ? 'bg-green-900/30 border border-green-500/30 text-green-400'
              : 'bg-red-900/30 border border-red-500/30 text-red-400'
          }`}
        >
          {state.message}
        </div>
      )}

      {!state?.success && (
        <>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold transition-colors outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold transition-colors outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:border-gold transition-colors outline-none resize-none"
              required
            />
          </div>
          <SubmitButton />
        </>
      )}
    </form>
  )
}
