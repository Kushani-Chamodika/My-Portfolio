
import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[720px] flex items-center px-6 sm:px-12 py-24 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute w-[450px] h-[450px] bg-violet-600/15 blur-[150px] rounded-full -top-20 left-0 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/15 blur-[150px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="portfolio-reveal">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 mb-7">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-200 text-xs font-semibold tracking-wider">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          <p className="text-gray-300 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Kushani
            <span className="block portfolio-gradient-text">
              Chamodika.
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-200 mt-7 leading-relaxed">
            Network Engineering & Network Support Engineering
            <span className="portfolio-gradient-text"> | </span>
            UI/UX Designer
          </h2>

          <p className="text-gray-400 text-base leading-8 max-w-xl mt-6">
            I create modern, creative and user-friendly digital experiences
            through thoughtful UI/UX design and technology.
            Passionate about transforming ideas into meaningful
            digital solutions.
          </p>

          {/* Tech Panel */}
          <div className="mt-8 max-w-lg rounded-2xl border border-violet-400/20 bg-[#11132c]/70 backdrop-blur-lg p-5 shadow-xl shadow-violet-950/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-gray-500 text-xs ml-2">about-me.js</span>
            </div>

            <p className="font-mono text-sm leading-7 text-gray-300">
              <span className="text-violet-400">const</span>{' '}
              <span className="text-blue-300">developer</span> = {'{'}
              <br />
              <span className="pl-5 text-gray-500">name:</span>{' '}
              <span className="text-green-300">'Kushani Chamodika'</span>,
              <br />
              <span className="pl-5 text-gray-500">interests:</span>{' '}
              <span className="text-green-300">'Design & Technology'</span>
              <br />
              {'}'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="px-7 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300"
            >
              Explore My Work ↗
            </a>

            <a
              href="/Kushani-CV.pdf"
              download
              className="px-7 py-4 rounded-full border border-violet-400/50 text-violet-200 font-semibold hover:bg-violet-500/10 transition-all duration-300"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Right Profile */}
        <div className="relative flex justify-center items-center portfolio-image-reveal">

          <div className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full bg-violet-600/20 blur-[110px]" />

          {/* Orbit */}
          <div className="absolute w-[390px] h-[390px] sm:w-[500px] sm:h-[500px] rounded-full border border-violet-400/20 portfolio-orbit" />

          <div className="relative z-10 w-[280px] h-[360px] sm:w-[360px] sm:h-[450px] rounded-[35px] p-[2px] bg-gradient-to-br from-violet-400 via-blue-500 to-violet-700 shadow-2xl shadow-violet-600/30 portfolio-float">
            <div className="w-full h-full rounded-[33px] overflow-hidden bg-[#11132c]">
              <img
                src="/Profile.png"
                alt="Kushani Chamodika"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Floating Labels */}
          <div className="absolute z-20 top-10 -right-5 sm:-right-8 p-4 rounded-2xl bg-[#15152e] border border-violet-400/50 backdrop-blur-xl shadow-xl shadow-violet-500/20 animate-bounce">
            <span className="text-violet-200 text-sm font-semibold">
              ✦ UI/UX Design
            </span>
          </div>

          <div className="absolute z-20 bottom-8 -left-5 sm:-left-8 p-4 rounded-2xl bg-[#15152e] border border-blue-400/50 backdrop-blur-xl shadow-xl shadow-blue-500/20 animate-bounce">
            <p className="text-blue-300 text-sm font-semibold">
              Network Engineering
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Design • Creativity • Technology
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
