'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import FounderSection from './FounderSection'

export default function FeaturesSection() {
  const router = useRouter()

  const handleSignUp = () => {
    const element = document.getElementById('questionnaire')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      title: 'Build Strength That Lasts:',
      items: [
        'Customized training plans built to help you lift heavier, grow real muscle, and feel genuinely strong.',
        'Full access to the Sculpt By Ashton App so you can track your workouts, nutrition, and progress with ease.',
      ],
    },
    {
      title: 'Confidence From the Inside Out:',
      items: [
        'Mindset tools and practical strategies to help you break out of self-doubt and develop unbreakable discipline.',
        'Weekly check-ins to keep you grounded, focused, and consistent through your entire journey.',
      ],
    },
    {
      title: 'A Lifestyle You Can Maintain:',
      items: [
        'Nutrition built around your favorite foods, with guidance tailored to your exact goals, making clean eating fun, simple, and sustainable.',
        'Daily habit-building systems designed to stick with you for life — no more starting over.',
      ],
    },
    {
      title: 'Support You Can Count On:',
      items: ['Direct 1:1 communication with your coach, Ashton, for accountability, motivation, and real guidance whenever you need it.'],
    },
    {
      title: 'Real Coaching.',
      items: [
        'Every program is personally designed and reviewed by an experienced coach — never auto-generated or AI-built.',
        'Your training, nutrition, and progression are manually adjusted based on your body, performance, and real-world feedback.',
      ],
    },
  ]

  return (
    <>
      <section className="py-16 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center heading-font text-2xl sm:text-3xl font-extrabold text-black-300 mb-8 sm:mb-10">
            WHAT YOU&apos;LL GAIN WITH 1:1 COACHING:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg border border-black p-4 sm:p-6 min-h-[200px] sm:min-h-[240px] shadow-sm"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <svg width="100%" height="100%" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0127 29.0569L24.0127 34.0569L36.5127 21.5569" stroke="black" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.2627 6.15143C18.9399 4.02431 23.2092 2.80688 27.7627 2.80688C41.5697 2.80688 52.7627 13.9998 52.7627 27.8069C52.7627 41.6139 41.5697 52.8069 27.7627 52.8069C13.9556 52.8069 2.7627 41.6139 2.7627 27.8069C2.7627 23.2534 3.98012 18.9841 6.10725 15.3069" stroke="black" strokeWidth="3.75" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-black table-heading-font font-extrabold italic text-base sm:text-lg md:text-xl leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <ul className="mt-4 sm:mt-6 normal-font space-y-3 sm:space-y-4 text-gray-800 text-sm">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex normal-font gap-3 items-start">
                      <span className="mt-1 text-black normal-font leading-none">•</span>
                      <span className="text-black normal-font">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSignUp}
              className="bg-black border border-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg
                         shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out
                         transform hover:scale-105 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              SIGN UP NOW
              <img src="https://cdn.prod.website-files.com/681907465c74d32f50b71064/681907465c74d32f50b71077_arrow-circle-broken-right.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
      <FounderSection />
    </>
  )
}
