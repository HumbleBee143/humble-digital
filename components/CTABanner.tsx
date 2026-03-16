import Link from 'next/link'

interface CTABannerProps {
  heading?: string
  subtext?: string
}

export default function CTABanner({
  heading = "Ready to Launch Your Website?",
  subtext,
}: CTABannerProps) {
  return (
    <section className="bg-gold py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-dark max-w-xl">
          {heading}
        </h2>
        {subtext && (
          <p className="text-dark/80 text-base md:hidden">{subtext}</p>
        )}
        <Link
          href="/contact"
          className="flex-shrink-0 px-8 py-3 bg-dark text-white font-semibold text-sm hover:bg-dark-card transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
