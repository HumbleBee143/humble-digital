import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Pricing — Humble Digital',
  description: 'Transparent, affordable web design pricing. Starter sites from £75, full business packages from £300.',
}

const packages = [
  {
    tier: 'Basic',
    subtitle: 'Starter Website',
    desc: 'A simple, one-page website to get your business online fast.',
    price: '£75',
    delivery: '3 days',
    revisions: '2',
    includes: [
      '1 page',
      'Fully responsive design',
      'Contact form setup',
    ],
    highlight: false,
  },
  {
    tier: 'Standard',
    subtitle: 'Professional Website',
    desc: 'A full, multi-section website designed to showcase your brand and services.',
    price: '£180',
    delivery: '5 days',
    revisions: '3',
    includes: [
      'Up to 3 pages',
      'Fully responsive design',
      'Contact form setup',
      'Basic SEO setup',
    ],
    highlight: true,
  },
  {
    tier: 'Premium',
    subtitle: 'Complete Business Website',
    desc: 'A complete, custom-designed website ready for business growth.',
    price: '£300',
    delivery: '7 days',
    revisions: '5',
    includes: [
      'Up to 5 pages',
      'Fully responsive design',
      'Contact form setup',
      'Basic SEO setup',
      'Content upload',
      'Social media integration',
    ],
    highlight: false,
  },
]

const demos = [
  {
    label: 'Demo 1',
    type: 'Construction',
    url: 'humbledigitaldemo.great-site.net',
    href: 'https://humbledigitaldemo.great-site.net',
  },
  {
    label: 'Demo 2',
    type: 'Coaching',
    url: 'humbledigitaldemo2.great-site.net',
    href: 'https://humbledigitaldemo2.great-site.net',
  },
]

export default function Pricing() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-20 pb-4 px-6 max-w-6xl mx-auto">
        <AnimateIn delay={0}>
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Pricing</p>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Choose a package that fits your goals — all built to make your business look great online.
          </h1>
        </AnimateIn>
      </section>

      {/* ── Pricing cards ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="pricing-grid">
            {packages.map((pkg, i) => (
              <AnimateIn key={pkg.tier} delay={i * 120} className={pkg.highlight ? 'pricing-card-mid' : ''}>
              <div
                className={`
                  rounded-xl border p-8 flex flex-col gap-6 transition-all duration-300 h-full
                  ${pkg.highlight
                    ? 'bg-dark-card-2 border-gold/40 shadow-[0_0_40px_rgba(201,147,58,0.12)]'
                    : 'bg-dark-card border-white/5 hover:border-gold/20'
                  }
                `}
              >
                {pkg.highlight && (
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full w-fit border border-gold/20">
                    Most Popular
                  </span>
                )}

                <div>
                  <h2 className="text-2xl font-bold mb-1">{pkg.tier}</h2>
                  <p className="text-gold text-sm font-semibold">{pkg.subtitle}</p>
                </div>

                <p className="text-white/50 text-sm leading-relaxed">{pkg.desc}</p>

                <div className="text-4xl font-bold">{pkg.price}</div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Includes</p>
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Delivery</p>
                    <p className="font-semibold">{pkg.delivery}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Revisions</p>
                    <p className="font-semibold">{pkg.revisions}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`
                    mt-auto block text-center py-3 text-sm font-semibold transition-colors duration-200
                    ${pkg.highlight
                      ? 'bg-gold text-dark hover:bg-gold-light'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                    }
                  `}
                >
                  Get Started
                </Link>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Example sites ── */}
      <section className="py-16 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <AnimateIn delay={0}>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Example Sites</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Take a look and see what is possible!</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {demos.map((demo, i) => (
              <AnimateIn key={demo.label} delay={i * 100}>
              <div
                className="bg-[#1a1a1a] border border-white/5 rounded-xl p-8 hover:border-gold/20 transition-colors duration-200"
              >
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">{demo.label}</p>
                <h3 className="text-2xl font-bold mb-4">{demo.type}</h3>
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors group"
                >
                  <span>{demo.url}</span>
                  <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner />
    </>
  )
}
