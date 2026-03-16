import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Contact — Humble Digital',
  description: 'Get in touch with Humble Digital. Call, email or fill out the form and Matthew will get back to you soon.',
}

export default function Contact() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-20 pb-4 px-6 max-w-6xl mx-auto">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Get in Touch</h1>
        <p className="text-white/50 text-lg">Drop me a message and I&apos;ll get back to you soon.</p>
      </section>

      {/* ── Contact section ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left — contact details */}
          <div className="space-y-8">
            <div>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Reach Out</p>
              <h2 className="text-3xl font-bold mb-8">Connect with Me Today</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:07734221045" className="text-white font-semibold hover:text-gold transition-colors">
                    07734 221045
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:matthew@humbledigital.co.uk" className="text-white font-semibold hover:text-gold transition-colors break-all">
                    matthew@humbledigital.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="mt-10 p-5 bg-dark-card border border-white/5 rounded-xl">
              <p className="text-white/50 text-sm leading-relaxed">
                I typically respond within a few hours. For urgent enquiries, give me a call directly.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-dark-card border border-white/5 rounded-xl p-8">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">Drop Me a Message</p>
            <h3 className="text-2xl font-bold mb-8">Fill out the form and I&apos;ll get back to you soon</h3>

            <form className="space-y-5" action="mailto:matthew@humbledigital.co.uk" method="post" encType="text/plain">
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
              <button
                type="submit"
                className="w-full py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Let's Create Your Dream Website Together!"
      />
    </>
  )
}
