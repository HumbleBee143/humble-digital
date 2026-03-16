'use client'

import { useState, useEffect } from 'react'

const stats = [
  { value: '5+', label: 'Years in IT', sub: 'Building technical expertise' },
  { value: '£75', label: 'Starting price', sub: 'Affordable for every business' },
  { value: '3 days', label: 'Fast turnaround', sub: 'From brief to live site' },
  { value: '100%', label: 'Responsive', sub: 'Works on every device' },
  { value: 'UK', label: 'Based', sub: 'Newcastle & remote UK-wide' },
]

export default function StatsCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div className="w-full bg-[#1a1a1a] border border-gold/20 rounded-2xl p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(201,147,58,0.08) 0%, transparent 70%)'
        }} />
        <div
          key={active}
          className="relative z-10"
          style={{ animation: 'fadeUp 0.4s ease both' }}
        >
          <p className="text-6xl font-bold text-gold mb-2">{stats[active].value}</p>
          <p className="text-white text-xl font-semibold mb-1">{stats[active].label}</p>
          <p className="text-white/40 text-sm">{stats[active].sub}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {stats.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to stat ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
