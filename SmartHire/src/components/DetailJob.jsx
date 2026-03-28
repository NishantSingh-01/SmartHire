import React, { useState, useEffect } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

const DetailJob = () => {
  const { id } = useParams()
  const { api, token } = useAuth()

  const [job, setJob] = useState(null)
  const [appliedJobs, setAppliedJobs] = useState([])
  const [recommended, setRecommended] = useState([])
  const [expandedJob, setExpandedJob] = useState(null)
  const [matchData, setMatchData] = useState({})
  const [roadmapData, setRoadmapData] = useState({})

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/jobs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setJob(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    const fetchAppliedJobs = async () => {
      try {
        const res = await api.get("/applications/my-applications", {
          headers: { Authorization: `Bearer ${token}` },
        })
        const appliedIds = res.data.applications.map((app) => app.jobId)
        setAppliedJobs(appliedIds)
      } catch (err) {
        console.log(err)
      }
    }

    const fetchRecommendations = async () => {
      try {
        const res = await api.get("/jobs/recommendations?limit=5", {
          headers: { Authorization: `Bearer ${token}` },
        })
        setRecommended(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    if (token) {
      fetchJob()
      fetchAppliedJobs()
      fetchRecommendations()
    }
  }, [id, token])

  const handleApply = async (jobId) => {
    try {
      await api.post(`/applications/apply/${jobId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setAppliedJobs((prev) => [...prev, jobId])
      toast.success("Application submitted successfully!")
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to apply")
      console.log(err.response?.data || err.message)
    }
  }

  const fetchInsights = async (jobId) => {
    try {
      const [matchRes, roadmapRes] = await Promise.all([
        api.get(`/jobs/${jobId}/match`, { headers: { Authorization: `Bearer ${token}` } }),
        api.post(`/jobs/${jobId}/roadmap`, {}, { headers: { Authorization: `Bearer ${token}` } }),
      ])
      setMatchData((prev) => ({ ...prev, [jobId]: matchRes.data }))
      setRoadmapData((prev) => ({ ...prev, [jobId]: roadmapRes.data }))
      setExpandedJob(expandedJob === jobId ? null : jobId)
    } catch (err) {
      console.log(err)
    }
  }

  if (!job) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
        <p className="mt-4 text-white text-lg font-medium">Loading job details...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {recommended.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Recommended For You
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {recommended.map((jobRec) => (
                <div
                  key={jobRec.jobId}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {jobRec.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {jobRec.company} • {jobRec.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: `${jobRec.matchPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-green-400 font-semibold text-sm">
                        {jobRec.matchPercentage}%
                      </span>
                    </div>
                    <button className="text-xs text-purple-400 hover:text-purple-300 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <span>🏢</span>
                    {job.company}
                  </span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <span>📍</span>
                    {job.location}
                  </span>
                  {job.salary && (
                    <>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <span>💰</span>
                        {job.salary}
                      </span>
                    </>
                  )}
                </div>
                {job.requiredSkills && job.requiredSkills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.requiredSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleApply(job.id)}
                  disabled={appliedJobs.includes(job.id)}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    appliedJobs.includes(job.id)
                      ? "bg-green-600/20 text-green-400 border border-green-500/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                  }`}
                >
                  {appliedJobs.includes(job.id) ? "✓ Application Submitted" : "Apply Now"}
                </button>
                <button
                  onClick={() => fetchInsights(job.id)}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  AI Insights
                </button>
              </div>
            </div>

            {job.description && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            )}

            {expandedJob === job.id && matchData[job.id] && (
              <div className="mt-8 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Match Score</h3>
                      <div className="relative">
                        <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                          {matchData[job.id].matchPercentage}%
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            style={{ width: `${matchData[job.id].matchPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Matching Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {matchData[job.id].matchingSkills.map((s, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Skills to Develop</h3>
                      <div className="flex flex-wrap gap-2">
                        {matchData[job.id].missingSkills.length === 0 ? (
                          <span className="text-green-400 text-sm font-medium">🎉 Perfect match! No missing skills</span>
                        ) : (
                          matchData[job.id].missingSkills.map((s, i) => (
                            <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                              {s}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">AI Recommendation</h3>
                      <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg">
                        {matchData[job.id].recommendation}
                      </p>
                    </div>
                  </div>
                </div>
                
                {roadmapData[job.id] && (
                  <div className="mt-6 pt-6 border-t border-purple-500/30">
                    <h3 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                      <span>📚</span> Learning Roadmap
                    </h3>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                        {roadmapData[job.id].roadmap}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default DetailJob