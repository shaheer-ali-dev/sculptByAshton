'use client'

import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()

  const scrollToQuestionnaire = () => {
    const el = document.getElementById('questionnaire')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          TOP BANNER — like "Baddies Lift Heavy" reference screenshot
          Light background, text on left, rounded black button on right
      ───────────────────────────────────────────────────────────────── */}
      <div
        className="w-full flex flex-row items-center justify-between gap-3
                   px-4 sm:px-8 py-3 sm:py-4 cursor-pointer
                   bg-[#f0ebe3]"
        onClick={scrollToQuestionnaire}
        role="button"
        aria-label="Start now"
      >
        <p className="text-black text-xs sm:text-sm font-semibold leading-snug">
          Level up your mindset, and create lasting habits that make{' '}
          <span className="font-black uppercase">being sculpted a lifestyle</span>
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); scrollToQuestionnaire() }}
          className="flex-shrink-0 bg-black text-white font-bold text-xs sm:text-sm
                     px-4 sm:px-6 py-2 sm:py-2.5 rounded-full whitespace-nowrap
                     hover:bg-gray-800 transition-colors duration-200"
        >
          START NOW
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          GRADIENT WISHLIST BANNER
      ───────────────────────────────────────────────────────────────── */}
      <div
        onClick={() => router.push('/waitlist')}
        className="w-full py-2.5 sm:py-3 text-center text-white
                   text-xs sm:text-sm font-semibold tracking-wider
                   cursor-pointer hover:opacity-90 transition-opacity duration-300"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(255,94,158,0.95),
            rgba(199,55,255,0.95),
            rgba(255,56,96,0.95),
            rgba(255,140,0,0.95)
          )`
        }}
      >
        Join the Wishlist — Limited Early Access Available
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          HERO SECTION
          Uses flex column so nothing is absolute-positioned.
          This prevents ALL horizontal overflow on mobile.
      ───────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none" />

        {/* ── Logo row — in normal document flow, never clips ── */}
        <div className="relative z-40 w-full px-4 sm:px-8 pt-5 sm:pt-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo-m.png"
              alt="AW Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
            />
            <div className="text-white font-bold heading-font leading-tight"
                 style={{ fontSize: 'clamp(0.95rem, 4vw, 1.5rem)' }}>
              SCULPT <br /> BY ASHTON
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-10 px-4 sm:px-6">
          <div className="w-full max-w-2xl flex flex-col items-center text-center">

            {/* Headline */}
            <h1 className="font-bold text-white heading-font mb-4 w-full"
                style={{ fontSize: 'clamp(1.3rem, 6vw, 2.5rem)', lineHeight: 1.1 }}>
              AVERAGE IS A HABIT
              <br />
              GREATNESS IS A DECISION
            </h1>

            {/* Body text */}
            <p className="text-white leading-relaxed normal-font mb-8 w-full"
               style={{ fontSize: 'clamp(0.8rem, 3.5vw, 1.1rem)' }}>
              Sculpted by Ashton isn&apos;t just about building a powerful physique. It&apos;s a mindset.
              It&apos;s understanding that your body is a work of art in every single way. And this
              piece of art is built on the foundation of discipline, self-respect, the relentless,
              and endless drive to evolve. This is about becoming the version of yourself that
              follows through, that leads, that shows up with intention every single day. I&apos;m here
              to guide that transformation with fitness and nutrition tailored specifically to YOU,
              helping you step into your strongest, most unstoppable self.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToQuestionnaire}
              className="bg-black border border-white text-white
                         px-6 sm:px-10 py-3 sm:py-4 rounded-full
                         font-bold shadow-md hover:shadow-2xl
                         transition-all duration-300 transform hover:scale-105
                         flex items-center justify-center gap-2
                         w-full sm:w-auto"
              style={{ fontSize: 'clamp(0.85rem, 3vw, 1.1rem)' }}
            >
              SIGN UP NOW
              <img
                src="https://cdn.prod.website-files.com/681907465c74d32f50b71064/681907465c74d32f50b71077_arrow-circle-broken-right.svg"
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>

          </div>
        </div>
      </section>
    </>
  )
}
