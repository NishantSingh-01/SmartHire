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

        console.log(res.data, "resume analysis")
        setData(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    if (token) fetchAnalysis()
  }, [token])

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        Loading Resume Analysis...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Resume Analysis
        </h1>

        {/* Score */}
        <div className="bg-slate-800 p-6 rounded-xl mb-6">
          <h2 className="text-xl mb-2">Score</h2>
          <p className="text-4xl font-bold text-green-400">
            {data.score}/100
          </p>
        </div>

        {/* Skills */}
        <div className="bg-slate-800 p-6 rounded-xl mb-6">
          <h2 className="text-xl mb-4">Extracted Skills</h2>

          <div className="flex flex-wrap gap-2">
            {data.extractedSkills?.map((skill, i) => (
              <span
                key={i}
                className="bg-slate-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-xl mb-4">Suggestions</h2>

          <ul className="space-y-2">
            {data.suggestions?.map((s, i) => (
              <li key={i} className="text-gray-300">
                • {s}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ResumeAnalysis