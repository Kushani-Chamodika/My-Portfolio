
import React, { useEffect, useRef, useState } from 'react'

const education = [
  {
    number: '01',
    period: '2023 – Present',
    title: 'BIT (Hons.) in Networking & Mobile Computing',
    institution: 'Horizon Campus',
    description:
      'Focused on computer networking, mobile computing technologies, and modern IT infrastructure, with practical knowledge of network systems, wireless communication, and software development.',
  },
  {
    number: '02',
    period: '2019 – 2021 (2022)',
    title: 'G.C.E. Advanced Level (Arts Stream)',
    institution: 'R/Kalawana National School',
    description:
      'Completed the G.C.E. Advanced Level examination in the Arts Stream, developing knowledge in humanities, social sciences, communication, and critical thinking.',
  },
]

const courses = [
  { number: '01', title: 'Data Communication & Network Technology', provider: 'Huawei ICT Academy', category: 'Network', year: '2026' },
  { number: '02', title: 'Introduction to Computer Networking', provider: 'Simplilearn Skillup', category: 'Network', year: '2026' },
  { number: '03', title: 'Learn CCNA 200-301 Network Fundamentals', provider: 'Simplilearn Skillup', category: 'Network', year: '2026' },
  { number: '04', title: 'Network Support & Security', provider: 'Cisco Networking Academy', category: 'Network', year: '2026' },
  { number: '05', title: 'Getting Started with Cisco Packet Tracer', provider: 'Cisco Networking Academy', category: 'Network', year: '2026' },
  { number: '06', title: 'Networking Basics', provider: 'Cisco Networking Academy', category: 'Network', year: '2026' },
  { number: '07', title: 'Advanced Diploma in Computer Networks and Internet Protocol', provider: 'Alison', category: 'Network', year: '2026' },
  { number: '08', title: 'Python for Beginners', provider: 'University of Moratuwa', category: 'Backend Development', year: '2025' },
]

const Testimonials = () => {
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
      id="education"
      ref={sectionRef}
      className={`relative py-28 px-6 sm:px-12 overflow-hidden ${visible ? 'education-visible' : ''}`}
    >
      <style>{`
        .education-reveal {
          opacity: 0;
          transform: translateY(35px);
        }

        .education-visible .education-reveal {
          animation: educationEnter 0.8s ease forwards;
        }

        @keyframes educationEnter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .education-card {
          transition: transform 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .education-card:hover {
          transform: translateY(-7px);
          border-color: rgba(167, 139, 250, 0.65);
          box-shadow: 0 18px 45px rgba(109, 40, 217, 0.13);
        }

        .education-course {
          transition: transform 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .education-course:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.7);
          box-shadow: 0 18px 40px rgba(91, 33, 182, 0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .education-reveal {
            opacity: 1;
            transform: none;
            animation: none !important;
          }
          .education-card, .education-course {
            transition: none;
          }
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="education-reveal mb-16">
          <p className="text-violet-300 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-5">
            My Journey
          </p>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            Education & <span className="portfolio-gradient-text">Courses.</span>
          </h2>

          <p className="text-gray-400 max-w-xl mt-5 leading-8">
            My academic background and continuous learning journey
            help me develop my knowledge, skills and passion for technology.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-7" />
        </div>

        {/* Education Timeline */}
        <div className="mb-24">

          <div className="education-reveal flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-2xl">
              🎓
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold">Education</h3>
              <p className="text-gray-500 text-sm mt-1">Academic Background</p>
            </div>
          </div>

          <div className="relative ml-5 sm:ml-7 border-l-2 border-violet-400/30 pl-8 sm:pl-10 space-y-8">

            {education.map((item, index) => (
              <div
                key={item.number}
                style={{ animationDelay: `${index * 180}ms` }}
                className="education-reveal relative"
              >
                <div className="absolute -left-[42px] sm:-left-[50px] top-7 w-5 h-5 rounded-full bg-[#08091a] border-[3px] border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

                <div className="education-card group p-6 sm:p-8 rounded-3xl bg-[#111127]/80 backdrop-blur-xl border border-violet-400/20">

                  <div className="flex justify-between items-start gap-3 mb-5">
                    <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-200 text-xs font-semibold">
                      {item.period}
                    </span>

                    <span className="text-gray-600 text-xs font-semibold">
                      {item.number} / 02
                    </span>
                  </div>

                  <h4 className="text-white text-xl sm:text-2xl font-bold leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-violet-300 font-semibold mt-3">
                    {item.institution}
                  </p>

                  <p className="text-gray-400 text-sm leading-7 mt-4 max-w-4xl">
                    {item.description}
                  </p>

                  <div className="w-10 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 mt-6 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Courses Heading */}
        <div className="education-reveal flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-2xl">
            📜
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">
              Courses & Certifications
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Professional Learning & Development
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course, index) => (
            <div
              key={course.number}
              style={{ animationDelay: `${index * 110}ms` }}
              className="education-reveal education-course group p-6 sm:p-7 rounded-3xl bg-[#111127]/80 backdrop-blur-xl border border-violet-400/15 flex flex-col"
            >

              <div className="flex justify-between items-center mb-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-400/20 flex items-center justify-center text-violet-200 text-xl group-hover:from-violet-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                  ✦
                </div>

                <span className="text-gray-600 text-sm font-semibold">
                  {course.number} / 08
                </span>
              </div>

              <p className="text-violet-300 text-xs font-bold tracking-[2px] mb-3 uppercase">
                {course.category}
              </p>

              <h4 className="text-white text-lg font-bold leading-7 flex-1">
                {course.title}
              </h4>

              <p className="text-gray-400 text-sm mt-4">
                {course.provider}
              </p>

              <div className="mt-7 pt-5 border-t border-white/10 flex justify-between items-center">
                <span className="text-gray-500 text-xs">
                  Year
                </span>

                <span className="text-violet-300 text-sm font-bold">
                  {course.year}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials
