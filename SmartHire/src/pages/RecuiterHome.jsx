import React from 'react'
import { Link } from 'react-router'

const RecuiterHome = () => {
  return (
     <section className="relative h-[90vh] w-full flex items-center justify-center text-white">
      
     
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070"
        alt="recruiter"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hire the Right Talent Faster
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Post jobs, manage candidates and build your employer brand — all in one place
        </p>

        <div className="flex gap-4 justify-center mb-14">
          <Link
            to="/post-job"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Post A Job Now
          </Link>

          <Link
            to="/recruiter/applicants"
            className="bg-slate-800/80 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium transition border border-slate-600"
          >
            Get Applicants
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          
          <div className="flex items-center justify-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700">
            <div className="bg-indigo-600 p-3 rounded-full">
              👥
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">1M+</h3>
              <p className="text-slate-400 text-sm">Active Candidates</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700">
            <div className="bg-indigo-600 p-3 rounded-full">
              ✔
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">50K+</h3>
              <p className="text-slate-400 text-sm">Verified Recruiters</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-slate-800/40 backdrop-blur-md p-4 rounded-xl border border-slate-700">
            <div className="bg-indigo-600 p-3 rounded-full">
              📈
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">Fastest</h3>
              <p className="text-slate-400 text-sm">Growing Platform</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default RecuiterHome

