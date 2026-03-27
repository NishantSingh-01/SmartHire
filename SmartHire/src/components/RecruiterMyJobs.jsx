import { useEffect, useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"

const RecruiterMyJobs = () => {
  const { api,token } = useAuth()

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const getMyJobs = async () => {
    try {
      const res = await api.get("/jobs/my-jobs", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
//   console.log(res)
      setJobs(res.data.jobs)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMyJobs()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        Loading jobs...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-10">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6">
          My Posted Jobs
        </h1>

        {jobs.length === 0 ? (
          <p className="text-gray-400">No jobs posted yet</p>
        ) : (
          <div className="grid gap-6">
            
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-semibold">
                    {job.title}
                  </h2>

                  <span
                    className={`px-3 py-1 text-sm rounded ${
                      job.active
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {job.active ? "Active" : "Closed"}
                  </span>
                </div>

                <p className="text-gray-400 mb-2">
                  {job.company} • {job.location}
                </p>

                <p className="text-gray-300 mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requiredSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 px-3 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    Experience: {job.experienceYears} yrs
                  </span>

                  <span>
                    Salary: {job.salaryRange}
                  </span>

                  <span>
                    Applications: {job.applicationsCount}
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

export default RecruiterMyJobs