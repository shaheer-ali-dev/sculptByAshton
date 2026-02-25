'use client'

import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()

  const handleSignUp = () => {
    const element = document.getElementById('questionnaire')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWishlistClick = () => {
    router.push('/pages/wishlist')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

     {/* Premium Gradient Wishlist Banner */}
<div
  onClick={() => router.push('/pages/wishlist')}
  className="absolute top-0 left-0 w-full py-3 text-center text-white 
             text-xs sm:text-sm md:text-base font-semibold tracking-wider 
             cursor-pointer z-50 transition-opacity duration-300 hover:opacity-90"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(255, 94, 158, 0.95),
        rgba(199, 55, 255, 0.95),
        rgba(255, 56, 96, 0.95),
        rgba(255, 140, 0, 0.95)
      )
    `
  }}
>
  Join the Wishlist — Limited Early Access Available
</div>

      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundColor: '#000000' }}
      />

      {/* Logo */}
      <div className="absolute top-16 left-8 z-40">
        <div className="flex items-center gap-3">
          <img
            src="/logo-m.png"
            alt="AW Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div className="text-white text-2xl font-bold whitespace-nowrap heading-font">
            SCULPT <br /> BY ASHTON
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 md:px-10 lg:px-16 flex flex-col items-center text-center">

          <header className="mb-6 w-full flex justify-center">
            <div className="flex flex-col items-center">
              <div
                className="font-bold text-white heading-font"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', lineHeight: 1 }}
              >
                AVERAGE IS A HABIT
              </div>

              <div
                className="font-bold mt-3 text-white heading-font"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', lineHeight: 1 }}
              >
                GREATNESS IS A DECISION
              </div>
            </div>
          </header>

          {/* ✅ Replaced Paragraph */}
          <p className="text-white text-base sm:text-lg md:text-xl mb-8 leading-relaxed normal-font w-full max-w-5xl">
            Sculpted by Ashton isn't just about building a powerful physique. It's a mindset.
            It's understanding that your body is a work of art in every single way. And this
            piece of art is built on the foundation of discipline, self-respect, the relentless,
            and endless drive to evolve. This is about becoming the version of yourself that
            follows through, that leads, that shows up with intention every single day. I'm here
            to guide that transformation with fitness and nutrition tailored specifically to YOU,
            helping you step into your strongest, most unstoppable self.
          </p>

          <button
            onClick={handleSignUp}
            className="bg-black border border-white text-white px-10 py-4 rounded-full font-bold text-lg 
                       shadow-md hover:shadow-2xl transition-all duration-300 
                       transform hover:scale-105 flex items-center gap-2 group"
          >
            SIGN UP NOW
            <img
              src="https://cdn.prod.website-files.com/681907465c74d32f50b71064/681907465c74d32f50b71077_arrow-circle-broken-right.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  )
}