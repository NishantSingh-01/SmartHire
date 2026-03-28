import React from "react"
import { Link } from "react-router-dom"

const CandidateHome = () => {
  
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070"
        alt="candidate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Dream Job Faster
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Explore opportunities, apply easily, and build your professional profile
        </p>

        <div className="flex gap-4 justify-center mb-14">
          <Link
            to="/jobs"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Browse Jobs
          </Link>

          <Link
            to="/resume"
            className="bg-slate-800/80 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium transition border border-slate-600"
          >
         Upload Resume
          </Link>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group">
    <div className="bg-indigo-600/20 group-hover:bg-indigo-600 p-3 rounded-full transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div className="text-left">
      <h3 className="font-bold text-2xl text-white">12</h3>
      <p className="text-slate-400 text-sm">Applied Jobs</p>
    </div>
  </div>

  <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group">
    <div className="bg-indigo-600/20 group-hover:bg-indigo-600 p-3 rounded-full transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    </div>
    <div className="text-left">
      <h3 className="font-bold text-2xl text-white">5</h3>
      <p className="text-slate-400 text-sm">Saved Jobs</p>
    </div>
  </div>

  <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group">
    <div className="bg-indigo-600/20 group-hover:bg-indigo-600 p-3 rounded-full transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 group-hover:text-white transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <div className="text-left">
      <h3 className="font-bold text-2xl text-white">2</h3>
      <p className="text-slate-400 text-sm">Interviews Scheduled</p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default CandidateHome