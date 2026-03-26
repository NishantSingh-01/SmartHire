import { useState } from "react"
import { useAuth } from "../context/Authcontext/Authcontext"
import { useNavigate } from "react-router-dom"

const CreateJob = () => {
  const { api } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    requiredSkills: "",
    experienceYears: "",
    salaryRange: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem("token")

      await api.post("/jobs/create", form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      navigate("/recruiter")

      setForm({
        title: "",
        description: "",
        company: "",
        location: "",
        requiredSkills: "",
        experienceYears: "",
        salaryRange: ""
      })

    } catch (error) {
      console.log(error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10">

      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 to-slate-900/95"></div>

      <form
        onSubmit={submitHandler}
        className="relative w-full max-w-5xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Create New Job
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="text-slate-300 text-sm">Job Title</label>
            <input
             autoComplete="off"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="Senior Java Developer"
              required
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm">Company</label>
            <input
             autoComplete="off"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="Tech Solutions Pvt Ltd"
              required
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm">Location</label>
            <input
             autoComplete="off"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="Bangalore, India"
              required
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm">Experience Years</label>
            <input
             autoComplete="off"
              type="number"
              name="experienceYears"
              value={form.experienceYears}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="5"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Required Skills</label>
            <input
             autoComplete="off"
              name="requiredSkills"
              value={form.requiredSkills}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="Java,Spring Boot,Microservices,MySQL"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Salary Range</label>
            <input
             autoComplete="off"
              name="salaryRange"
              value={form.salaryRange}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="15-20 LPA"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Job Description</label>
            <textarea
             autoComplete="off"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              className="w-full mt-1 bg-slate-800 border border-slate-700 text-white p-3 rounded-lg outline-none focus:border-indigo-500"
              placeholder="Looking for experienced Java developer with Spring Boot knowledge"
              required
            />
          </div>

        </div>

        <button
          disabled={loading}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Creating Job..." : "Create Job"}
        </button>

      </form>
    </div>
  )
}

export default CreateJob