// const RecruiterHero = () => {
//   return (
//     <div className="min-h-[60vh] bg-gradient-to-r from-slate-700 to-slate-900 text-white flex items-center">
//       <div className="max-w-6xl mx-auto px-6">

//         <p className="text-gray-400 text-lg mb-3">
//           Recruiter Panel
//         </p>

//         <h1 className="text-5xl font-bold mb-6 leading-tight">
//           Manage your hiring
//           <br />
//           and find top talent faster
//         </h1>

//         <p className="text-gray-400 max-w-2xl text-lg">
//           Create jobs, track applicants, and manage your company hiring
//           pipeline in one place. Build your team with better visibility
//           and smarter recruiting tools.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl">
//             Post a Job
//           </button>

//           <button className="border border-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl">
//             View Applicants
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default RecruiterHero
import { useState } from 'react'

const RecruiterHero = () => {
  const [hoveredButton, setHoveredButton] = useState(null)
  const [activeStat, setActiveStat] = useState(null)

  const stats = [
    { label: 'Active Jobs', value: '24', change: '+12%', trend: 'up' },
    { label: 'Total Applicants', value: '156', change: '+23%', trend: 'up' },
    { label: 'Shortlisted', value: '48', change: '+8%', trend: 'up' }
  ]

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="text-center">
          
          <div className="inline-block mb-4 animate-bounce">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-green-400 text-lg mb-3 font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            Recruiter Panel
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          </p>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Manage your hiring
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient">
              and find top talent
            </span>
            <br />
            faster
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Create jobs, track applicants, and manage your company hiring
            pipeline in one place. Build your team with better visibility
            and smarter recruiting tools.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
           
            
          
          </div>
          
        
          
          <div className="mt-12 flex items-center pb-5 justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2 group cursor-pointer hover:text-green-400 transition-colors">
              <span className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse"></span>
              <span>Real-time updates</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 group cursor-pointer hover:text-green-400 transition-colors">
              <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></span>
              <span>AI-powered matching</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2 group cursor-pointer hover:text-green-400 transition-colors">
              <span className="w-2 h-2 bg-purple-400 rounded-full group-hover:animate-pulse"></span>
              <span>Analytics dashboard</span>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes shine {
          from {
            transform: translateX(-100%) rotate(45deg);
          }
          to {
            transform: translateX(100%) rotate(45deg);
          }
        }
        
        .animate-shine {
          animation: shine 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default RecruiterHero