
import React, { useEffect, useRef, useState } from 'react'

const socialLinks = [
  {
    number: '01',
    name: 'LinkedIn',
    category: 'PROFESSIONAL NETWORK',
    description:
      'Connect with me professionally and explore my academic and career journey.',
    icon: 'in',
    link: 'https://www.linkedin.com/in/kushani-chamodika-44784334b/',
    action: 'Visit LinkedIn',
  },
  {
    number: '02',
    name: 'GitHub',
    category: 'CODE & PROJECTS',
    description:
      'Explore my development projects, source code and technical work.',
    icon: '⌘',
    link: 'https://github.com/Kushani-Chamodika',
    action: 'Explore GitHub',
  },
  {
    number: '03',
    name: 'Gmail',
    category: 'GET IN TOUCH',
    description:
      'Have an opportunity or project in mind? Feel free to send me an email.',
    icon: '✉',
    link: 'mailto:chamodikakushani96@gmail.com',
    action: 'Send an Email',
  },
]

const Clients = () => {
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
      ref={sectionRef}
      className={`relative py-28 px-6 sm:px-12 overflow-hidden ${
        visible ? 'social-visible' : ''
      }`}
    >
      <style>{`
        .social-reveal {
          opacity: 0;
          transform: translateY(40px);
        }

        .social-visible .social-reveal {
          animation: socialEnter .8s ease forwards;
        }

        @keyframes socialEnter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-card {
          transition: transform .4s ease, border-color .4s ease,
            box-shadow .4s ease, background .4s ease;
        }

        .social-card:hover {
          transform: translateY(-10px);
          border-color: rgba(167, 139, 250, .65);
          box-shadow: 0 20px 45px rgba(109, 40, 217, .16);
        }

        .social-icon {
          transition: transform .4s ease, background .4s ease,
            color .4s ease;
        }

        .social-card:hover .social-icon {
          transform: rotate(-8deg) scale(1.08);
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          color: white;
        }

        .social-arrow {
          transition: transform .35s ease;
        }

        .social-card:hover .social-arrow {
          transform: translate(5px, -5px);
        }

        @media (prefers-reduced-motion: reduce) {
          .social-reveal {
            opacity: 1;
            transform: none;
            animation: none !important;
          }

          .social-card, .social-icon, .social-arrow {
            transition: none;
          }
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="social-reveal text-center mb-16">
          <p className="text-violet-300 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
            Find Me Online
          </p>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            Let's Connect &
            <span className="block portfolio-gradient-text mt-2">
              Collaborate.
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            I'm always open to connecting with new people, exploring
            opportunities and sharing ideas. Feel free to reach out!
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mt-7" />
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {socialLinks.map((social, index) => (
            <a
              key={social.number}
              href={social.link}
              target={social.name === 'Gmail' ? undefined : '_blank'}
              rel={social.name === 'Gmail' ? undefined : 'noopener noreferrer'}
              style={{ animationDelay: `${index * 180}ms` }}
              className="social-reveal social-card group relative p-8 sm:p-9 min-h-[320px] rounded-3xl bg-[#111127]/80 backdrop-blur-xl border border-violet-400/15 overflow-hidden flex flex-col"
            >

              {/* Card Glow */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-violet-500/10 blur-[70px] rounded-full group-hover:bg-violet-500/20 transition-all duration-500" />

              <div className="relative z-10 flex flex-col flex-1">

                {/* Icon and Number */}
                <div className="flex justify-between items-center mb-9">

                  <div className="social-icon w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-violet-200 text-3xl font-bold">
                    {social.icon}
                  </div>

                  <span className="text-gray-600 text-sm font-semibold">
                    {social.number}
                  </span>

                </div>

                {/* Card Information */}
                <p className="text-violet-300 text-[10px] font-bold tracking-[2px] mb-3">
                  {social.category}
                </p>

                <h3 className="text-white text-2xl font-bold group-hover:text-violet-300 transition-colors duration-300">
                  {social.name}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mt-4 flex-1">
                  {social.description}
                </p>

                {/* Action */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/10">

                  <span className="text-violet-300 text-sm font-semibold">
                    {social.action}
                  </span>

                  <span className="social-arrow text-violet-300 text-xl">
                    ↗
                  </span>

                </div>

              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Clients
