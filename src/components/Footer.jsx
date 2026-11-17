
import React from 'react'

const navigation = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
  { name: 'Education', link: '#education' },
  { name: 'Contact', link: '#contact' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kushani-chamodika-44784334b/',
    icon: 'in',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Kushani-Chamodika',
    icon: '⌘',
  },
  {
    name: 'Email Me',
    link: 'mailto:chamodikakushani96@gmail.com',
    icon: '✉',
  },
]

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 px-6 sm:px-12 bg-[#070817] overflow-hidden">

      <style>{`
        .footer-link {
          transition: color .3s ease, transform .3s ease;
        }

        .footer-link:hover {
          color: #a78bfa;
          transform: translateX(5px);
        }

        .footer-social {
          transition: all .35s ease;
        }

        .footer-social:hover {
          transform: translateY(-4px);
          border-color: rgba(167, 139, 250, .7);
          background: rgba(139, 92, 246, .12);
          box-shadow: 0 8px 25px rgba(109, 40, 217, .15);
        }

        .footer-glow {
          animation: footerGlow 7s ease-in-out infinite alternate;
        }

        @keyframes footerGlow {
          from {
            transform: translate(0, 0) scale(1);
            opacity: .45;
          }
          to {
            transform: translate(-25px, 15px) scale(1.2);
            opacity: .85;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-glow {
            animation: none;
          }
          .footer-link, .footer-social {
            transition: none;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none footer-glow" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none footer-glow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Gradient Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent mb-14" />

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-14">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold text-white tracking-wide"
            >
              KUSHANI<span className="portfolio-gradient-text">.</span>
            </a>

            <p className="text-gray-400 text-sm leading-8 mt-6 max-w-sm">
              An IT undergraduate passionate about UI/UX design,
              networking, technology and mobile application development.
              Always learning and exploring new possibilities.
            </p>

            <p className="portfolio-gradient-text text-sm font-semibold mt-7">
              Designing • Developing • Connecting
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-violet-300 text-xs font-bold tracking-[3px] mb-7">
              EXPLORE
            </p>

            <h3 className="text-white text-xl font-bold mb-7">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="footer-link text-gray-400 text-sm w-fit"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-violet-300 text-xs font-bold tracking-[3px] mb-7">
              LET'S CONNECT
            </p>

            <h3 className="text-white text-xl font-bold mb-5">
              Get In Touch
            </h3>

            <p className="text-gray-400 text-sm leading-7 mb-7">
              Interested in collaborating or discussing an opportunity?
              Feel free to connect with me.
            </p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target={social.name === 'Email Me' ? undefined : '_blank'}
                  rel={social.name === 'Email Me' ? undefined : 'noopener noreferrer'}
                  className="footer-social flex items-center gap-4 p-3 rounded-xl bg-[#111127]/70 border border-violet-400/10"
                >
                  <span className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-300 font-bold">
                    {social.icon}
                  </span>

                  <span className="text-gray-300 text-sm font-medium">
                    {social.name}
                  </span>

                  <span className="ml-auto text-violet-300">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Kushani Chamodika. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-violet-300 transition-colors duration-300"
          >
            Back to Top
            <span className="group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer
