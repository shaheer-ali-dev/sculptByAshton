'use client'

import { useEffect, useRef, useState } from 'react'

const PAIN_POINTS = [
  'Feeling guilty about eating a meal out, or foods you love?',
  'Feeling like you can\'t enjoy social events with your friends?',
  'Like if you don\'t stick to the plan 100%, then you\'re failing?',
  'Like you have to be perfect, or it\'s not good enough?',
]

const PROMISES = [
  { label: 'Real Balance', body: 'How to enjoy life and still reach your goals.' },
  { label: 'Food Freedom', body: 'Eat the meals you love, yet still stay on track.' },
  { label: 'No Guilt', body: 'Live without the restriction, obsessiveness, and guilt.' },
]

export default function BalanceSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: '#ffffff',
        padding: '100px 24px',
        fontFamily: 'inherit',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* ── "Are you sick of..." block ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontSize: 13,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#000000',
            fontWeight: 700,
            marginBottom: 28,
          }}>
            Sound familiar?
          </p>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 48,
            letterSpacing: '-0.5px',
          }}>
            Are you sick of&hellip;
          </h2>

          {/* Pain points */}
          <div style={{ marginBottom: 64 }}>
            {PAIN_POINTS.map((point, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 18,
                  marginBottom: 20,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '2px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff', display: 'block' }} />
                </span>
                <p style={{
                  fontSize: 'clamp(17px, 2.5vw, 22px)',
                  color: '#000000',
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 400,
                }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
            marginBottom: 64,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        />

        {/* ── The turn ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            marginBottom: 56,
          }}
        >
          <p style={{
            fontSize: 'clamp(18px, 3vw, 26px)',
            color: '#000000',
            lineHeight: 1.75,
            fontWeight: 400,
            marginBottom: 0,
          }}>
            You are not a bad person for wanting to achieve your dream body,
            and not give up on all the things you love and enjoy.
          </p>
          <p style={{
            fontSize: 'clamp(22px, 4vw, 38px)',
            color: '#fff',
            fontWeight: 800,
            marginTop: 24,
            lineHeight: 1.3,
            letterSpacing: '-0.3px',
          }}>
            Good thing you absolutely&nbsp;
            <span style={{
              background: 'linear-gradient(90deg, #fff 0%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              don&apos;t have to.
            </span>
          </p>
        </div>

        {/* ── I teach you ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
            marginBottom: 56,
          }}
        >
          <p style={{
            fontSize: 13,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#000000',
            fontWeight: 700,
            marginBottom: 28,
          }}>
            What I teach you
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}>
            {PROMISES.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 24px',
                  borderRadius: 16,
                  border: '1px solid #fff9f9',
                  background: '#141414',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.8 + i * 0.12}s, transform 0.6s ease ${0.8 + i * 0.12}s`,
                }}
              >
                <div style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 10,
                }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 16, color: '#000000', lineHeight: 1.6 }}>
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA block ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s',
            borderTop: '1px solid #1e1e1e',
            paddingTop: 56,
          }}
        >
          <p style={{
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            color: '#000000',
            lineHeight: 1.65,
            fontWeight: 400,
            marginBottom: 36,
          }}>
            If you&apos;re ready to truly transform your body, your relationship
            with food, as well as yourself for good —
          </p>
          <p style={{
            fontSize: 'clamp(22px, 4vw, 40px)',
            color: '#fff',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 44,
            letterSpacing: '-0.5px',
          }}>
            complete the questionnaire<br />and let&apos;s get started.
          </p>

          <a
            href="#questionnaire"
            style={{
              display: 'inline-block',
              padding: '18px 44px',
              borderRadius: 50,
              background: '#fff',
              color: '#000',
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 0 0 0 rgba(255,255,255,0)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = 'scale(1.04)'
              el.style.boxShadow = '0 8px 40px rgba(255,255,255,0.15)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = 'scale(1)'
              el.style.boxShadow = '0 0 0 0 rgba(255,255,255,0)'
            }}
          >
            Start the Questionnaire →
          </a>
        </div>

      </div>
    </section>
  )
}

