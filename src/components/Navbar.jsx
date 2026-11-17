
import React, { useState } from 'react'

const navLinks = [
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Education', id: 'education' },
  { title: 'Contact', id: 'contact' },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="relative z-50 w-full px-6 sm:px-12 py-5 border-b border-white/5 bg-[#09091b]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <a href="#home" className="text-2xl font-extrabold tracking-wide text-white">
          KUSHANI<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-300 text-sm font-medium hover:text-violet-300 transition-colors duration-300 relative group"
              >
                {link.title}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:block px-6 py-3 rounded-full border border-violet-400/60 text-violet-200 text-sm font-semibold hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
        >
          Let's Talk ↗
        </a>

        <button
          onClick={() => setToggle(!toggle)}
          className="lg:hidden text-white text-3xl"
          aria-label="Toggle navigation"
        >
          {toggle ? '×' : '☰'}
        </button>

        {toggle && (
          <div className="absolute top-full right-5 mt-2 w-60 p-6 rounded-2xl bg-[#11112b] border border-violet-400/20 shadow-2xl lg:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setToggle(false)}
                    className="text-gray-200 hover:text-violet-300 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
