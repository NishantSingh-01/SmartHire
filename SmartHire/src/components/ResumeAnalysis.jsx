import { useEffect, useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"

const ResumeAnalysis = () => {
  const { api, token } = useAuth()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await api.get("/resume/analysis", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        // console.log(res.data, "resume analysis")
        setData(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    if (token) fetchAnalysis()
  }, [token])

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading Resume Analysis...</p>
        </div>
      </div>
    )
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getScoreBgColor = (score) => {
    if (score >= 80) return "bg-green-950/50 border-green-800"
    if (score >= 60) return "bg-yellow-950/50 border-yellow-800"
    return "bg-red-950/50 border-red-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Resume Analysis
          </h1>
          <p className="text-gray-300">
            Detailed insights and recommendations for your resume
          </p>
        </div>

        <div className={`mb-6 p-6 rounded-xl border ${getScoreBgColor(data.score)} transition-all bg-slate-800/50`}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-1">
                Overall Score
              </h2>
              <p className={`text-5xl font-bold ${getScoreColor(data.score)}`}>
                {data.score}
                <span className="text-2xl text-gray-400">/100</span>
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    data.score >= 80 ? "bg-green-400" : 
                    data.score >= 60 ? "bg-yellow-400" : "bg-red-400"
                  }`}
                  style={{ width: `${data.score}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {data.score >= 80 ? "Excellent! Your resume looks great!" :
                 data.score >= 60 ? "Good job! Some improvements needed." :
                 "Needs improvement. Review suggestions below."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-slate-700 rounded-lg">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">
              Extracted Skills
            </h2>
          </div>
          
          {data.extractedSkills?.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.extractedSkills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-slate-700 text-blue-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No skills extracted</p>
          )}
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-slate-700 rounded-lg">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">
              Improvement Suggestions
            </h2>
          </div>
          
          {data.suggestions?.length > 0 ? (
            <div className="space-y-3">
              {data.suggestions?.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center mt-0.5">
                    <span className="text-purple-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No suggestions available</p>
          )}
        </div>

        {data.extractedSkills && data.suggestions && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">{data.extractedSkills.length}</p>
              <p className="text-sm text-gray-400">Skills Found</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">{data.suggestions.length}</p>
              <p className="text-sm text-gray-400">Suggestions</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ResumeAnalysis