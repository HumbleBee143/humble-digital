import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-6">
          <Link href="/" className="text-white/50 text-sm hover:text-gold transition-colors">Home</Link>
          <Link href="/#about" className="text-white/50 text-sm hover:text-gold transition-colors">About</Link>
          <Link href="/#services" className="text-white/50 text-sm hover:text-gold transition-colors">Services</Link>
          <Link href="/pricing" className="text-white/50 text-sm hover:text-gold transition-colors">Pricing</Link>
          <Link href="/contact" className="text-white/50 text-sm hover:text-gold transition-colors">Contact</Link>
        </nav>
        <p className="text-white/40 text-sm">Copyright &copy; 2026 Humble Digital</p>
      </div>
    </footer>
  )
}
