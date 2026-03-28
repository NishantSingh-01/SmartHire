import { useEffect, useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"
import { useNavigate } from "react-router-dom"

const RecruiterApplications = () => {
  const { api ,token} = useAuth()
  const navigate = useNavigate()

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  const getApplications = async () => {
    try {
      const res = await api.get("/recruiter/applications",{
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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
        Loading applications...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          All Applications
        </h1>

        {applications.length === 0 ? (
          <p className="text-gray-400">No applications yet</p>
        ) : (
          <div className="grid gap-6">

            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >

                <div className="flex justify-between mb-3">
                  <h2 className="text-lg font-semibold">
                    Application #{app.id}
                  </h2>

                  <span className="bg-yellow-600 px-3 py-1 rounded text-sm">
                    {app.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-2">
                  Match: {app.matchPercentage}%
                </p>

                <p className="text-gray-300 mb-2">
                  Matching Skills: {app.matchingSkills}
                </p>

                {app.missingSkills && (
                  <p className="text-red-400 mb-2">
                    Missing Skills: {app.missingSkills}
                  </p>
                )}

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-400">
                    Applied: {new Date(app.appliedAt).toLocaleDateString()}
                  </span>

                  <button
                    onClick={() => navigate(`/recruiter/applications/${app.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    View Applicant
                  </button>
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