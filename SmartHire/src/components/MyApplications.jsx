import { useEffect, useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"

const MyApplications = () => {
  const { api, token } = useAuth()

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  const getMyApplications = async () => {
    try {
      const res = await api.get("/applications/my-applications", {
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
    getMyApplications()
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
          My Applications ....
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
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-semibold">
                    {app.jobTitle}
                  </h2>

                  <span className={`px-3 py-1 rounded text-sm ${
                    app.status === "ACCEPTED"
                      ? "bg-green-600"
                      : app.status === "REJECTED"
                      ? "bg-red-600"
                      : app.status === "SHORTLISTED"
                      ? "bg-blue-600"
                      : "bg-yellow-600"
                  }`}>
                    {app.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-2">
                  {app.company} • {app.location}
                </p>

                <div className="mb-3">
                  <span className="text-gray-400 text-sm">
                    Match Percentage:
                  </span>
                  <p className="text-green-400 font-semibold">
                    {app.matchPercentage}%
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-gray-400 text-sm">
                    Matching Skills
                  </p>

                  <p className="text-gray-300">
                    {app.matchingSkills}
                  </p>
                </div>

                {app.missingSkills && (
                  <div className="mb-3">
                    <p className="text-red-400">
                      Missing: {app.missingSkills}
                    </p>
                  </div>
                )}

                <div className="flex justify-between text-sm text-gray-400 mt-4">
                  <span>
                    Applied: {new Date(app.appliedAt).toLocaleDateString()}
                  </span>

                  <span>
                    Updated: {new Date(app.updatedAt).toLocaleDateString()}
                  </span>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default MyApplications