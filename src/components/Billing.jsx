
import React, { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    number: '01',
    title: 'UI/UX DESIGN',
    subtitle: 'Design & User Experience',
    icon: '✦',
    description: 'Creating intuitive, attractive and user-friendly digital experiences.',
    skills: [
      { name: 'Figma', icon: '◈' },
      { name: 'Wireframing', icon: '▤' },
      { name: 'Prototyping', icon: '◇' },
      { name: 'User Flows', icon: '⌘' },
      { name: 'Web Design', icon: '▣' },
    ],
  },
  {
    number: '02',
    title: 'FRONTEND',
    subtitle: 'Web Development',
    icon: '⌘',
    description: 'Building responsive and visually engaging web interfaces.',
    skills: [
      { name: 'HTML', icon: '‹ ›' },
      { name: 'CSS', icon: '▣' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'React', icon: '⚛' },
      { name: 'Tailwind CSS', icon: '≈' },
    ],
  },
  {
    number: '03',
    title: 'PROGRAMMING',
    subtitle: 'Programming Languages',
    icon: '◇',
    description: 'Exploring programming concepts and developing problem-solving skills.',
    skills: [
      { name: 'Java', icon: 'J' },
      { name: 'Python', icon: 'Py' },
      { name: 'C', icon: 'C' },
      { name: 'C++', icon: 'C++' },
      { name: 'Kotlin', icon: 'K' },
    ],
  },
  {
    number: '04',
    title: 'BACKEND & TOOLS',
    subtitle: 'Development Tools',
    icon: '⚙',
    description: 'Working with backend technologies, databases and development tools.',
    skills: [
      { name: 'Spring Boot', icon: '♨' },
      { name: 'MongoDB', icon: '◉' },
      { name: 'Git', icon: '⑂' },
      { name: 'GitHub', icon: '◉' },
      { name: 'Postman', icon: '➤' },
    ],
  },
]

const Billing = () => {
  const [activeGroup, setActiveGroup] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const selectedGroup = skillGroups[activeGroup]

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
      { threshold: 0.12 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-12 overflow-hidden"
    >
      <style>{`
        .skills-gradient-text {
          background: linear-gradient(100deg, #c4b5fd, #818cf8, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes skillsReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes skillCardReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes skillPanelReveal {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes skillsGlow {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(-25px, 20px) scale(1.15);
          }
        }

        .skills-reveal {
          opacity: 1;
        }

        .skills-reveal.is-visible {
          animation: skillsReveal .8s ease both;
        }

        .skill-panel-animation {
          animation: skillPanelReveal .45s ease both;
        }

        .skill-dashboard-card {
          opacity: 0;
          animation: skillCardReveal .55s ease forwards;
          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }

        .skill-dashboard-card:hover {
          transform: translateY(-7px);
          border-color: rgba(167, 139, 250, .65);
          background: rgba(139, 92, 246, .12);
          box-shadow: 0 12px 30px rgba(91, 33, 182, .16);
        }

        .skills-bg-glow {
          animation: skillsGlow 8s ease-in-out infinite alternate;
        }

        .skill-category-button {
          transition: all .3s ease;
        }

        .skill-category-button:hover {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-reveal.is-visible,
          .skill-panel-animation,
          .skill-dashboard-card,
          .skills-bg-glow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .skill-category-button,
          .skill-dashboard-card {
            transition: none;
          }
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none skills-bg-glow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none skills-bg-glow" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className={`skills-reveal ${visible ? 'is-visible' : ''} mb-14`}>
          <p className="text-violet-300 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
            My Expertise
          </p>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            Skills & <span className="skills-gradient-text">Technologies.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mt-5 leading-8">
            A combination of creative design skills and technical knowledge
            that helps me build meaningful digital experiences.
          </p>

          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-violet-400 to-blue-400 mt-7" />
        </div>

        {/* Skills Dashboard */}
        <div className={`skills-reveal ${visible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8`}>

          {/* Category Sidebar */}
          <div className="rounded-3xl border border-violet-400/20 bg-[#11112b]/80 backdrop-blur-xl p-5 sm:p-6 h-fit">

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-sm tracking-wider">
                EXPERTISE
              </h3>

              <span className="text-violet-300 text-xs">
                04 Categories
              </span>
            </div>

            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
              {skillGroups.map((group, index) => (
                <button
                  key={group.number}
                  onClick={() => setActiveGroup(index)}
                  aria-pressed={activeGroup === index}
                  className={`skill-category-button min-w-[175px] lg:min-w-0 w-full text-left flex items-center gap-3 p-4 rounded-2xl border ${
                    activeGroup === index
                      ? 'bg-gradient-to-r from-violet-600/30 to-blue-600/20 border-violet-400/50 shadow-lg shadow-violet-900/20'
                      : 'bg-white/[0.02] border-white/5 hover:border-violet-400/30 hover:bg-violet-500/10'
                  }`}
                >
                  <span className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl ${
                    activeGroup === index
                      ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-violet-500/10 text-violet-300'
                  }`}>
                    {group.icon}
                  </span>

                  <span className="flex-1">
                    <span className="block text-white text-xs sm:text-sm font-bold">
                      {group.title}
                    </span>

                    <span className="block text-gray-500 text-[10px] sm:text-xs mt-1">
                      {group.number} / 04
                    </span>
                  </span>

                  <span className={`hidden lg:block transition-transform duration-300 ${
                    activeGroup === index
                      ? 'text-violet-300 translate-x-1'
                      : 'text-gray-600'
                  }`}>
                    →
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-xs leading-6">
                Exploring new technologies and continuously developing
                my creative and technical skills.
              </p>
            </div>
          </div>

          {/* Skills Display */}
          <div
            key={selectedGroup.number}
            className="skill-panel-animation rounded-3xl border border-violet-400/20 bg-[#101127]/80 backdrop-blur-xl p-6 sm:p-9 min-h-[390px]"
          >

            <div className="flex justify-between items-start gap-4 mb-8">
              <div>
                <p className="text-violet-300 text-xs tracking-[3px] font-semibold mb-3">
                  {selectedGroup.subtitle}
                </p>

                <h3 className="text-white text-2xl sm:text-3xl font-bold">
                  {selectedGroup.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mt-3 max-w-lg">
                  {selectedGroup.description}
                </p>
              </div>

              <span className="text-4xl sm:text-5xl font-bold text-violet-400/20">
                {selectedGroup.number}
              </span>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedGroup.skills.map((skill, index) => (
                <div
                  key={`${selectedGroup.number}-${skill.name}`}
                  className="skill-dashboard-card group rounded-2xl border border-white/10 bg-[#171832]/80 p-5 flex flex-col items-center justify-center text-center min-h-[130px]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-400/20 text-violet-200 text-xl font-bold group-hover:from-violet-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    {skill.icon}
                  </span>

                  <span className="text-gray-200 text-sm font-semibold mt-4 group-hover:text-violet-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Information */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-gray-500 text-xs">
                {selectedGroup.skills.length} Skills
              </span>

              <span className="text-violet-300 text-xs font-semibold">
                {selectedGroup.number} — 04
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Billing
