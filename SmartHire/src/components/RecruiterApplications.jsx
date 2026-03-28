// import { useEffect, useState } from "react"
// import { useAuth } from "../context/Authcontext/Authcontext"
// import { useNavigate } from "react-router-dom"

// const RecruiterApplications = () => {
//   const { api ,token} = useAuth()
//   const navigate = useNavigate()

//   const [applications, setApplications] = useState([])
//   const [loading, setLoading] = useState(true)

//   const getApplications = async () => {
//     try {
//       const res = await api.get("/recruiter/applications",{
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       setApplications(res.data.applications)
//     } catch (err) {
//       console.log(err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getApplications()
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
//         Loading applications...
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-8">
//       <div className="max-w-6xl mx-auto">

//         <h1 className="text-3xl font-bold mb-6">
//           All Applications
//         </h1>

//         {applications.length === 0 ? (
//           <p className="text-gray-400">No applications yet</p>
//         ) : (
//           <div className="grid gap-6">

//             {applications.map((app) => (
//               <div
//                 key={app.id}
//                 className="bg-slate-800 p-6 rounded-lg border border-slate-700"
//               >

//                 <div className="flex justify-between mb-3">
//                   <h2 className="text-lg font-semibold">
//                     Application #{app.id}
//                   </h2>

//                   <span className="bg-yellow-600 px-3 py-1 rounded text-sm">
//                     {app.status}
//                   </span>
//                 </div>

//                 <p className="text-gray-400 mb-2">
//                   Match: {app.matchPercentage}%
//                 </p>

//                 <p className="text-gray-300 mb-2">
//                   Matching Skills: {app.matchingSkills}
//                 </p>

//                 {app.missingSkills && (
//                   <p className="text-red-400 mb-2">
//                     Missing Skills: {app.missingSkills}
//                   </p>
//                 )}

//                 <div className="flex justify-between items-center mt-4">
//                   <span className="text-sm text-gray-400">
//                     Applied: {new Date(app.appliedAt).toLocaleDateString()}
//                   </span>

//                   <button
//                     onClick={() => navigate(`/recruiter/applications/${app.id}`)}
//                     className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
//                   >
//                     View Applicant
//                   </button>
//                 </div>

//               </div>
//             ))}

//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default RecruiterApplications
import { useEffect, useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"
import { useNavigate } from "react-router-dom"

const RecruiterApplications = () => {
  const { api, token } = useAuth()
  const navigate = useNavigate()

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  const getApplications = async () => {
    try {
      const res = await api.get("/recruiter/applications", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setApplications(res.data.applications)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getApplications()
  }, [])

  const getStatusColor = (status) => {
    const colors = {
      PENDING: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      REVIEWED: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      SHORTLISTED: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      ACCEPTED: 'bg-green-500/20 text-green-400 border-green-500/50',
      REJECTED: 'bg-red-500/20 text-red-400 border-red-500/50',
      HIRED: 'bg-green-500/20 text-green-400 border-green-500/50'
    }
    return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/50'
  }

  const getStatusIcon = (status) => {
    const icons = {
      PENDING: '',
      REVIEWED: '',
      SHORTLISTED: '',
      ACCEPTED: '✅',
      REJECTED: '❌',
      HIRED: '🎉'
    }
    return icons[status] || '📋'
  }

  const getMatchColor = (percentage) => {
    if (percentage >= 80) return 'text-green-400'
    if (percentage >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const filteredApplications = applications.filter(app => {
    const matchesFilter = filter === 'all' || app.status === filter
    const matchesSearch = app.candidateName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.matchingSkills?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'PENDING').length,
    shortlisted: applications.filter(a => a.status === 'SHORTLISTED').length,
    accepted: applications.filter(a => a.status === 'ACCEPTED').length,
    rejected: applications.filter(a => a.status === 'REJECTED').length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 mt-4">Loading applications...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            All Applications
          </h1>
          <p className="text-gray-400 mt-2">
            Manage and review all job applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { label: 'All', value: 'all', count: stats.total, icon: '', color: 'bg-gray-600' },
            { label: 'Pending', value: 'PENDING', count: stats.pending, icon: '', color: 'bg-yellow-500' },
            { label: 'Shortlisted', value: 'SHORTLISTED', count: stats.shortlisted, icon: '', color: 'bg-purple-500' },
            { label: 'Accepted', value: 'ACCEPTED', count: stats.accepted, icon: '', color: 'bg-green-500' },
            { label: 'Rejected', value: 'REJECTED', count: stats.rejected, icon: '', color: 'bg-red-500' }
          ].map((action) => (
            <button
              key={action.value}
              onClick={() => setFilter(action.value)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                filter === action.value
                  ? `${action.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <div className="text-2xl mb-1">{action.icon}</div>
              <div className="text-lg font-semibold">{action.label}</div>
              <div className="text-sm opacity-75">{action.count}</div>
            </button>
          ))}
        </div>


        {filteredApplications.length === 0 ? (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-12 text-center border border-gray-700">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-white mb-2">No applications found</h3>
            <p className="text-gray-400">
              {searchTerm ? 'Try adjusting your search criteria' : 'No applications match the selected filter'}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                onMouseEnter={() => setHoveredCard(app.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  hoveredCard === app.id
                    ? 'border-green-500/50 transform scale-[1.02] shadow-lg'
                    : 'border-gray-700 hover:border-green-500/30'
                }`}
                onClick={() => navigate(`/recruiter/applications/${app.id}`)}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {app.candidateName?.charAt(0) || '?'}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{app.candidateName}</h3>
                            <p className="text-gray-400 text-sm">{app.jobTitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs">{app.candidateEmail}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(app.status)}`}>
                          <span>{getStatusIcon(app.status)}</span>
                          <span>{app.status}</span>
                        </span>
                        <span className="text-gray-500 text-xs">
                          Applied: {new Date(app.appliedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Match Score</span>
                        <span className={`text-lg font-bold ${getMatchColor(app.matchPercentage)}`}>
                          {app.matchPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            app.matchPercentage >= 80 ? 'bg-green-500' :
                            app.matchPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${app.matchPercentage}%` }}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-2">✓ Matching Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {app.matchingSkills?.split(',').slice(0, 3).map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md">
                                {skill.trim()}
                              </span>
                            ))}
                            {app.matchingSkills?.split(',').length > 3 && (
                              <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-md">
                                +{app.matchingSkills.split(',').length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {app.missingSkills && (
                          <div>
                            <p className="text-xs text-gray-400 mb-2">⚠ Missing Skills</p>
                            <div className="flex flex-wrap gap-2">
                              {app.missingSkills.split(',').slice(0, 2).map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-md">
                                  {skill.trim()}
                                </span>
                              ))}
                              {app.missingSkills.split(',').length > 2 && (
                                <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-md">
                                  +{app.missingSkills.split(',').length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/recruiter/applications/${app.id}`)
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-sm flex items-center gap-2 group"
                      >
                    
                        <span>View Details</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecruiterApplications