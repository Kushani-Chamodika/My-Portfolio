
import React, { useEffect, useRef, useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'DocNest',
    category: 'Healthcare Application',
    description:
      'A healthcare application designed to provide a modern and user-friendly digital healthcare experience.',
    image: '/DocNest.png',
    tags: ['Healthcare', 'UI/UX Design', 'Application'],
  },
  {
    number: '02',
    name: 'FixFlow',
    category: 'IT Support Management System',
    description:
      'An IT support management system designed to organize support requests and streamline ticket management through a user-friendly interface.',
    image: '/FixFlow IT Support Dashboard.png',
    tags: ['IT Support', 'Dashboard UI', 'Management System'],
  },
  {
    number: '03',
    name: 'Online Movie Ticket Booking System',
    category: 'Web Application',
    description:
      'An online movie ticket booking system designed to make it easier for users to explore movies, check showtimes and book cinema tickets.',
    image: '/Ticket Booking.png',
    tags: ['Web Development', 'Booking System', 'UI Design'],
  },
  {
    number: '04',
    name: 'Smart Home Security System',
    category: 'IoT Project',
    description:
      'A smart home security project focused on improving home monitoring and security through connected devices and sensors.',
    image: '/Smart Home Security.png',
    tags: ['IoT', 'Smart Home', 'Security'],
  },
  {
    number: '05',
    name: 'Small Office Network Design',
    category: 'Networking & Troubleshooting',
    description:
      'Designed a small office network topology and worked on identifying and troubleshooting network connectivity issues.',
    image: '/Small Office Network.png',
    tags: ['Networking', 'Network Topology', 'Troubleshooting'],
  },
]

const CardDeal = () => {
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
      { threshold: 0.08 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div
          className={`project-reveal ${
            visible ? 'project-visible' : ''
          } mb-16`}
        >
          <p className="text-violet-300 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
            My Recent Work
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                Featured{' '}
                <span className="portfolio-gradient-text">
                  Projects.
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-7" />
            </div>

            <p className="text-gray-400 max-w-md leading-8">
              Explore my work across UI/UX design, software development,
              IoT and networking, showcasing my creativity and technical interests.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">

          {projects.map((project, index) => (
            <article
              key={project.number}
              style={{
                transitionDelay: visible
                  ? `${index * 120}ms`
                  : '0ms',
              }}
              className={`
                project-reveal
                ${visible ? 'project-visible' : ''}
                project-card
                group relative rounded-3xl overflow-hidden
                border border-violet-400/15
                bg-[#111127]/80 backdrop-blur-xl

                ${
                  index === projects.length - 1 &&
                  projects.length % 2 !== 0
                    ? 'md:col-span-2 md:w-1/2 md:justify-self-center'
                    : ''
                }
              `}
            >
              {/* Image */}
              <div className="relative h-[250px] sm:h-[310px] overflow-hidden bg-[#17172e]">

                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="w-full h-full object-cover object-top project-image transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09091b]/90 via-transparent to-[#09091b]/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Project Number */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-[#0b0b20]/90 border border-violet-400/30 backdrop-blur-md">
                  <span className="text-violet-200 text-xs font-bold tracking-wider">
                    PROJECT / {project.number}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full border border-white/20 bg-[#111127]/80 backdrop-blur-md flex items-center justify-center text-white text-xl group-hover:bg-violet-600 group-hover:border-violet-400 transition-all duration-300 group-hover:rotate-45">
                  ↗
                </div>
              </div>

              {/* Information */}
              <div className="relative p-7 sm:p-8">

                <p className="text-violet-300 text-xs font-bold uppercase tracking-[3px] mb-3">
                  {project.category}
                </p>

                <h3 className="text-white text-2xl font-bold leading-snug group-hover:text-violet-200 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mt-4">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-200 text-xs font-medium hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Link */}
                <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-500 text-xs tracking-wider">
                    FEATURED PROJECT
                  </span>

                  <a
                    href="#contact"
                    className="text-violet-300 text-sm font-semibold hover:text-white transition-colors"
                  >
                    Discuss Project ↗
                  </a>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Text */}
        <div
          className={`project-reveal ${
            visible ? 'project-visible' : ''
          } mt-12 text-center`}
        >
          <p className="text-gray-500 text-sm">
            <span className="text-violet-300 font-semibold">
              05
            </span>{' '}
            Projects
            <span className="mx-3 text-gray-700">•</span>
            Design, Development & Technology
          </p>
        </div>

      </div>
    </section>
  )
}

export default CardDeal
