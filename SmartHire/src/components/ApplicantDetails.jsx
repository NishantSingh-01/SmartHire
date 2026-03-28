import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../context/Authcontext/Authcontext"
import toast from "react-hot-toast"

const ApplicantDetails = () => {
  const { id } = useParams()
  const { api, token } = useAuth()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const getDetails = async () => {
    try {
      const res = await api.get(`/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setData(res.data)
    } catch (err) {
      console.log(err)
      toast.error("Failed to fetch applicant details")
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (status) => {
    const toastId = toast.loading("Updating status...")

    try {
      setUpdating(true)

      const res = await api.put(
        `/recruiter/applications/${id}/status?status=${status}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setData(prev => ({
        ...prev,
        status: res.data.newStatus
      }))

      toast.success(`Application ${status.toLowerCase()} successfully`, {
        id: toastId
      })

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to update status",
        { id: toastId }
      )
    } finally {
      setUpdating(false)
    }
  }

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
      PENDING: '⏳',
      REVIEWED: '👁️',
      SHORTLISTED: '⭐',
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

  useEffect(() => {
    getDetails()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 mt-4">Loading applicant details...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h3 className="text-xl font-semibold text-white mb-2">Applicant not found</h3>
          <p className="text-gray-400">The requested applicant could not be found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Applicant Details
          </h1>
          <p className="text-gray-400 mt-2">
            Review candidate information and application status
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {data.candidateName?.charAt(0) || '?'}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{data.candidateName}</h2>
                <p className="text-gray-400">{data.candidateEmail}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(data.status)}`}>
                    <span>{getStatusIcon(data.status)}</span>
                    <span>{data.status}</span>
                  </span>
                  <span className="text-gray-500 text-xs">
                    Applied: {new Date(data.appliedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-700">
            <div className="flex gap-2 px-6">
              {['overview', 'skills', 'timeline'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab
                      ? 'border-green-500 text-green-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Job Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Position</p>
                      <p className="text-white font-medium">{data.jobTitle}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Company</p>
                      <p className="text-white font-medium">{data.company}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{data.location}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Match Analysis</h3>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">Overall Match</span>
                      <span className={`text-lg font-bold ${getMatchColor(data.matchPercentage)}`}>
                        {data.matchPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          data.matchPercentage >= 80 ? 'bg-green-500' :
                          data.matchPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${data.matchPercentage}%` }}
                      />
                    </div>
                  </div>
                  
                  {data.matchingSkills && (
                    <div className="mt-4">
                      <p className="text-gray-400 text-sm mb-2">✓ Matching Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {data.matchingSkills.split(',').map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md">
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {data.missingSkills && (
                    <div className="mt-4">
                      <p className="text-gray-400 text-sm mb-2">⚠ Missing Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {data.missingSkills.split(',').map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-md">
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Skills Assessment</h3>
                  
                  {data.matchingSkills && (
                    <div className="mb-6">
                      <p className="text-green-400 font-medium mb-3">✓ Strong Match Skills</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {data.matchingSkills.split(',').map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg border border-green-500/30">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300 text-sm">{skill.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {data.missingSkills && (
                    <div>
                      <p className="text-red-400 font-medium mb-3">⚠ Skills to Develop</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {data.missingSkills.split(',').map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-red-500/10 rounded-lg border border-red-500/30">
                            <span className="text-red-400">⚠</span>
                            <span className="text-gray-300 text-sm">{skill.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Application Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400">📝</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Application Submitted</p>
                      <p className="text-gray-400 text-sm">{new Date(data.appliedAt).toLocaleDateString()} at {new Date(data.appliedAt).toLocaleTimeString()}</p>
                    </div>
                  </div>
                  
                  {data.status !== 'PENDING' && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400">👁️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Status Updated</p>
                        <p className="text-gray-400 text-sm">Current: {data.status}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-700">
            <div className="flex flex-wrap gap-3">
              <button
                disabled={updating || data.status === 'SHORTLISTED' || data.status === 'ACCEPTED' || data.status === 'REJECTED'}
                onClick={() => updateStatus("SHORTLISTED")}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  updating || data.status === 'SHORTLISTED' || data.status === 'ACCEPTED' || data.status === 'REJECTED'
                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-purple-600 hover:bg-purple-700 hover:scale-105'
                } text-white`}
              >
             
                <span>Shortlist</span>
              </button>

              <button
                disabled={updating || data.status === 'ACCEPTED' || data.status === 'REJECTED'}
                onClick={() => updateStatus("ACCEPTED")}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  updating || data.status === 'ACCEPTED' || data.status === 'REJECTED'
                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-green-600 hover:bg-green-700 hover:scale-105'
                } text-white`}
              >
                <span>✅</span>
                <span>Accept</span>
              </button>

              <button
                disabled={updating || data.status === 'REJECTED'}
                onClick={() => updateStatus("REJECTED")}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  updating || data.status === 'REJECTED'
                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-red-600 hover:bg-red-700 hover:scale-105'
                } text-white`}
              >
                <span>❌</span>
                <span>Reject</span>
              </button>

              {data.resumeUrl && (
                <a
                  href={data.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 flex items-center gap-2 text-white ml-auto"
                >
                  <span>📄</span>
                  <span>View Resume</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantDetails