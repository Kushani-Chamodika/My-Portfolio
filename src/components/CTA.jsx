
import React, { useEffect, useRef, useState } from 'react'

const contactDetails = [
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'chamodikakushani96@gmail.com',
    href: 'mailto:chamodikakushani96@gmail.com',
  },
  {
    icon: '⌖',
    label: 'LOCATION',
    value: 'Sri Lanka',
  },
  {
    icon: '✦',
    label: 'AVAILABILITY',
    value: 'Open to Opportunities',
  },
]

const CTA = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative py-28 px-6 sm:px-12 overflow-hidden ${visible ? 'contact-visible' : ''}`}
    >
      <style>{`
        .contact-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .contact-visible .contact-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-detail {
          transition: transform .35s ease, border-color .35s ease,
            background .35s ease, box-shadow .35s ease;
        }

        .contact-detail:hover {
          transform: translateX(-6px);
          border-color: rgba(167, 139, 250, .6);
          box-shadow: 0 12px 35px rgba(109, 40, 217, .12);
        }

        .contact-glow {
          animation: contactGlow 6s ease-in-out infinite alternate;
        }

        @keyframes contactGlow {
          from { transform: scale(1); opacity: .5; }
          to { transform: scale(1.2); opacity: .9; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .contact-glow {
            animation: none;
          }
          .contact-detail {
            transition: none;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none contact-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none contact-glow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Contact Panel */}
        <div className="contact-reveal relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-[#171633] via-[#111127] to-[#0b1024] p-7 sm:p-12 lg:p-16">

          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[110px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 mb-7">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-200 text-xs font-semibold tracking-[2px]">
                  GET IN TOUCH
                </span>
              </div>

              <p className="text-violet-300 text-xs font-bold tracking-[4px] mb-4">
                HAVE A PROJECT OR OPPORTUNITY?
              </p>

              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Let's Work
                <span className="block portfolio-gradient-text mt-2">
                  Together.
                </span>
              </h2>

              <p className="text-gray-400 text-base sm:text-lg leading-8 mt-7 max-w-xl">
                Have an opportunity, project idea or just want to connect?
                I'd love to hear from you. Let's create something meaningful
                together.
              </p>

              <a
                href="mailto:chamodikakushani96@gmail.com.com"
                className="inline-flex items-center gap-4 mt-9 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-lg shadow-violet-900/30 hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300"
              >
                Contact Me
                <span className="text-xl">↗</span>
              </a>
            </div>

            {/* Right Contact Cards */}
            <div className="flex flex-col gap-4">

              {contactDetails.map((item, index) => {
                const content = (
                  <>
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-400/20 flex items-center justify-center text-violet-200 text-xl">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[3px] mb-2">
                        {item.label}
                      </p>
                      <p className="text-gray-200 text-sm sm:text-base font-medium break-all">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <span className="text-violet-300 text-lg">↗</span>
                    )}
                  </>
                )

                const cardClass = "contact-detail flex items-center gap-4 p-5 rounded-2xl bg-[#090d20]/70 border border-violet-400/15 backdrop-blur-xl"

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className={cardClass}
                  >
                    {content}
                  </div>
                )
              })}

            </div>
          </div>

          {/* Bottom Footer */}
          <div className="relative z-10 mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              Have a great idea? Let's make it happen.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} Kushani Chamodika. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA
