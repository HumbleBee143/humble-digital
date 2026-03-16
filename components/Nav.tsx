'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Humble Digital"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <a href="#" className="nav-link text-sm text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="nav-link text-sm text-white/80 hover:text-white transition-colors">About</a>
              <a href="#services" className="nav-link text-sm text-white/80 hover:text-white transition-colors">Services</a>
            </>
          ) : (
            <>
              <Link href="/" className="nav-link text-sm text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="nav-link text-sm text-white/80 hover:text-white transition-colors">About</Link>
              <Link href="/#services" className="nav-link text-sm text-white/80 hover:text-white transition-colors">Services</Link>
            </>
          )}
          <Link
            href="/pricing"
            className={`nav-link text-sm transition-colors ${pathname === '/pricing' ? 'text-gold' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`nav-link text-sm transition-colors ${pathname === '/contact' ? 'text-gold' : 'text-white/80 hover:text-white'}`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-dark transition-all duration-200 rounded-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {isHome ? (
            <>
              <a href="#" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">About</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Services</a>
            </>
          ) : (
            <>
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Home</Link>
              <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">About</Link>
              <Link href="/#services" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Services</Link>
            </>
          )}
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Pricing</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white/80 text-sm hover:text-white">Contact</Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit px-5 py-2 border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-dark transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
