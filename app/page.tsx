import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import AnimateIn from '@/components/AnimateIn'

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 pt-20 pb-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-label text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Web Design
          </p>
          <h1 className="hero-heading text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Affordable Web Design<br />
            <span className="text-gold">for Everyone</span>
          </h1>
          <p className="hero-sub text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Your ideas deserve a stunning website without breaking the bank.
            Let&apos;s build something great together.
          </p>
          <div className="hero-cta">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-dark-card py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto md:mx-0 bg-[#2a2a2a] rounded-2xl overflow-hidden border border-white/5">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-dark-navy mx-auto flex items-center justify-center mb-3">
                      <span className="text-gold font-display font-bold text-3xl">H</span>
                    </div>
                    <p className="text-white/30 text-sm">Photo coming soon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-lg hidden md:block" />
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Story Behind<br />Humble Digital
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Humble Digital was created by me, <strong className="text-white font-semibold">Matthew Humble</strong>,
              after over five years in the IT industry. I provide a friendly web design service focused
              on creating modern, affordable websites for small businesses, coaches, and individuals.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-line" />

      {/* ── Services ── */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-xl leading-tight">
              Explore Our Range of Affordable Web Design Services
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: '01.', title: 'Website Design', desc: 'Creating simple, modern websites tailored to your needs.' },
              { num: '02.', title: 'E-commerce Solutions', desc: 'Launch your online store seamlessly with our help.' },
              { num: '03.', title: 'SEO Services', desc: "Boost your website's search engine visibility effectively." },
            ].map((s, i) => (
              <AnimateIn key={s.num} delay={i * 100}>
                <div className="service-card bg-dark-card border border-white/5 rounded-xl p-8 hover:border-gold/30 h-full">
                  <p className="text-gold text-2xl font-bold mb-4">{s.num}</p>
                  <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />

      {/* ── Why Choose Us ── */}
      <section className="particle-bg py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold">Discover Our Unique Value Propositions</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Affordability', desc: 'Affordable web design solutions tailored to fit your budget while maintaining quality and style.' },
              { title: 'Personal Touch', desc: 'Our hands-on approach ensures personalised service and support throughout your web design journey.' },
              { title: 'Simplicity', desc: 'We simplify the web design process, making it easy for you to take your ideas online.' },
            ].map((v, i) => (
              <AnimateIn key={v.title} delay={i * 120} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-12">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold">How We Collaborate to Create Your Website</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 'Step-01', title: 'Consultation', desc: 'We start with a friendly consultation to understand your vision and goals.' },
              { step: 'Step-02', title: 'Design & Build', desc: 'Next, we create a tailored design that reflects your brand identity and meets your needs.' },
              { step: 'Step-03', title: 'Launch & Support', desc: 'Finally, we launch your website and provide ongoing support to ensure your success.' },
            ].map((p, i) => (
              <AnimateIn key={p.step} delay={i * 120} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-4 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-10" style={{ width: 'calc(100% - 2rem)', left: '50%' }} />
                )}
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">{p.step}</p>
                <h3 className="font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #1f1a0f 50%, #1a1a1a 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(201,147,58,0.3) 0px, transparent 1px, transparent 40px)' }}
        />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Create Your Dream Website Together!</h2>
          <p className="text-white/60 mb-10">Contact us today to discuss your web design needs and how we can help you.</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-colors duration-200"
          >
            Get Started
          </Link>
        </AnimateIn>
      </section>
    </>
  )
}
