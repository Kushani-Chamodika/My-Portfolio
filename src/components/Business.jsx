
import React, { useEffect, useRef, useState } from 'react'

const highlights = [
  {
    number: '01',
    title: 'UI/UX Design',
    description:
      'Designing intuitive, user-friendly and visually engaging digital experiences.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Creative Thinking',
    description:
      'Turning ideas into meaningful solutions through creativity and problem-solving.',
    icon: '◇',
  },
  {
    number: '03',
    title: 'Technology',
    description:
      'Combining design knowledge with technical skills to build digital solutions.',
    icon: '⌘',
  },
]

const interests = ['UI/UX Design', 'Figma', 'Web Design', 'Problem Solving']

const Business = () => {
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
      { threshold: 0.12 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className={`about-reveal ${visible ? 'about-visible' : ''} mb-16`}>
          <p className="text-violet-300 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
            Get To Know Me
          </p>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            About <span className="portfolio-gradient-text">Me.</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-7" />
        </div>

        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className={`about-reveal ${visible ? 'about-visible' : ''}`}>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-violet-400" />
              <span className="text-violet-300 text-xs font-bold tracking-[3px]">
                INTRODUCTION
              </span>
            </div>

            <h3 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
              Passionate about creating
              <span className="block portfolio-gradient-text mt-2">
                meaningful digital experiences.
              </span>
            </h3>

            <p className="text-gray-400 text-base leading-8 mt-8">
              I'm Kushani Chamodika, a UI/UX Designer and IT Undergraduate
              with an interest in creating modern, creative and user-friendly
              digital experiences.
            </p>

            <p className="text-gray-400 text-base leading-8 mt-5">
              I enjoy transforming ideas into practical digital solutions
              through thoughtful interface design, user-focused experiences
              and technology. I'm passionate about continuously learning,
              improving my skills and exploring new ways to solve problems
              through design and development.
            </p>

            <p className="text-gray-400 text-base leading-8 mt-5">
              My goal is to create digital products that combine visual
              creativity, usability and functionality.
            </p>

            {/* Interests */}
            <div className="mt-9">
              <p className="text-gray-500 text-xs font-semibold tracking-[3px] mb-4">
                AREAS OF INTEREST
              </p>

              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2.5 rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 text-sm hover:bg-violet-500/20 hover:border-violet-400/60 hover:-translate-y-1 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlight Cards */}
          <div className="flex flex-col gap-5">

            {highlights.map((item, index) => (
              <div
                key={item.number}
                style={{ transitionDelay: `${index * 130}ms` }}
                className={`about-reveal ${visible ? 'about-visible' : ''} group relative flex gap-5 p-6 sm:p-7 rounded-3xl border border-violet-400/15 bg-[#111127]/80 backdrop-blur-xl hover:border-violet-400/50 hover:bg-[#171735] hover:-translate-y-2 transition-all duration-500`}
              >
                {/* Number */}
                <span className="absolute top-5 right-6 text-gray-600/50 text-sm font-bold">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-400/20 flex items-center justify-center text-violet-200 text-2xl group-hover:from-violet-500 group-hover:to-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1 pr-5">
                  <h4 className="text-white text-lg font-bold group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-7 mt-3">
                    {item.description}
                  </p>

                  <div className="w-10 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Quote Panel */}
        <div className={`about-reveal ${visible ? 'about-visible' : ''} mt-20 relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-600/15 via-[#171735] to-blue-600/15 p-8 sm:p-12 text-center`}>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-violet-500/15 blur-[70px] pointer-events-none" />

          <span className="relative text-violet-300 text-5xl font-serif">
            “
          </span>

          <p className="relative text-gray-200 text-lg sm:text-2xl leading-relaxed max-w-4xl mx-auto font-medium">
            I believe great digital experiences begin with understanding
            people, solving problems and designing with purpose.
          </p>

          <p className="relative text-violet-300 text-xs tracking-[4px] font-semibold mt-7">
            DESIGN WITH PURPOSE
          </p>
        </div>

      </div>
    </section>
  )
}

export default Business
