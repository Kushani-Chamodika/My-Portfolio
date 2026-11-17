
import React from 'react'

const highlights = [
  {
    number: '01',
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive and user-friendly digital experiences.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'CREATIVE DESIGN',
    description: 'Transforming ideas into modern and meaningful designs.',
    icon: '◇',
  },
  {
    number: '03',
    title: 'TECHNOLOGY',
    description: 'Combining creativity with technical knowledge and innovation.',
    icon: '⌘',
  },
]

const Stats = () => {
  return (
    <section className="relative py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">

        {highlights.map((item) => (
          <div
            key={item.number}
            className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-[#101827]/70 hover:border-cyan-400/50 hover:bg-[#142235] transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center bg-cyan-400/10 text-cyan-400 text-2xl group-hover:bg-cyan-400 group-hover:text-[#080D19] transition-all duration-300">
              {item.icon}
            </div>

            <div>
              <p className="text-cyan-400 text-xs font-semibold tracking-widest mb-2">
                {item.number}
              </p>

              <h3 className="text-white text-sm sm:text-base font-bold tracking-wide">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs leading-6 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats
