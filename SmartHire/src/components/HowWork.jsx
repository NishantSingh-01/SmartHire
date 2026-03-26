import React from 'react'

const HowWork = () => {
  return (
     <section className=" flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-12">
      
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-10 max-w-6xl w-full border border-gray-700 transform transition-all duration-500 hover:scale-[1.02]">
        
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-400 text-md mt-2">
            Simple 4-step process to find your perfect hire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent group-last:hidden"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
              Create Recruiter Account
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Sign up and set your company profile in minutes
            </p>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent group-last:hidden"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
              Post Your Job
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Create detailed job listings with our easy-to-use form
            </p>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent group-last:hidden"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
              Review Applications
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Browse qualified candidates and shortlist top talent
            </p>
          </div>

        
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                4
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
              Hire the Right Candidate
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Connect with candidates and make your hire
            </p>
          </div>

        </div>

  

      </div>
    </section>
  )
}

export default HowWork
