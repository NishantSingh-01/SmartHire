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

  useEffect(() => {
    getDetails()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg">

        <h1 className="text-2xl font-bold mb-6">
          Applicant Details
        </h1>

        {/* Candidate */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Candidate Info
          </h2>

          <p>Name: {data.candidateName}</p>
          <p>Email: {data.candidateEmail}</p>
        </div>

        {/* Job */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Job Info
          </h2>

          <p>Title: {data.jobTitle}</p>
          <p>Company: {data.company}</p>
          <p>Location: {data.location}</p>
        </div>

        {/* Match */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Match Details
          </h2>

          <p>Match: {data.matchPercentage}%</p>
          <p>Matching Skills: {data.matchingSkills}</p>

          {data.missingSkills && (
            <p className="text-red-400">
              Missing Skills: {data.missingSkills}
            </p>
          )}
        </div>

        {/* Status */}
        <div className="flex justify-between items-center mt-6">
          <span className="bg-yellow-600 px-4 py-2 rounded">
            {data.status}
          </span>

          <span className="text-gray-400 text-sm">
            Applied: {new Date(data.appliedAt).toLocaleDateString()}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">

          <button
            disabled={updating}
            onClick={() => updateStatus("SHORTLISTED")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Shortlist
          </button>

          <button
            disabled={updating}
            onClick={() => updateStatus("ACCEPTED")}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            Accept
          </button>

          <button
            disabled={updating}
            onClick={() => updateStatus("REJECTED")}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Reject
          </button>

        </div>

      </div>
    </div>
  )
}

export default ApplicantDetails