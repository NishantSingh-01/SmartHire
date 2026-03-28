import { useState } from "react";
import { useAuth } from "../context/Authcontext/Authcontext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateJob = () => {
  const { api } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    requiredSkills: "",
    experienceYears: "",
    salaryRange: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      await api.post("/jobs/create", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      toast.success("Job posted successfully")
      navigate("/recruiter");

      setForm({
        title: "",
        description: "",
        company: "",
        location: "",
        requiredSkills: "",
        experienceYears: "",
        salaryRange: "",
      });
    } catch (error) {
         toast.error(
      err.response?.data?.message || "Failed to post job"
    )
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-slate-800"></div>

      <form
        onSubmit={submitHandler}
        className="relative w-full max-w-5xl bg-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Create New Job
          </h2>
          <p className="text-gray-400 mt-2">Post a new opportunity for candidates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Job Title
            </label>
            <input
              autoComplete="off"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="Senior Java Developer"
              required
            />
          </div>

          <div className="group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Company
            </label>
            <input
              autoComplete="off"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="Tech Solutions Pvt Ltd"
              required
            />
          </div>

          <div className="group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Location
            </label>
            <input
              autoComplete="off"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="Bangalore, India"
              required
            />
          </div>

          <div className="group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Experience Years
            </label>
            <input
              autoComplete="off"
              type="number"
              name="experienceYears"
              value={form.experienceYears}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="5"
              required
            />
          </div>

          <div className="md:col-span-2 group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Required Skills
            </label>
            <input
              autoComplete="off"
              name="requiredSkills"
              value={form.requiredSkills}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="Java,Spring Boot,Microservices,MySQL"
              required
            />
          </div>

          <div className="md:col-span-2 group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Salary Range
            </label>
            <input
              autoComplete="off"
              name="salaryRange"
              value={form.salaryRange}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500"
              placeholder="15-20 LPA"
            />
          </div>

          <div className="md:col-span-2 group">
            <label className="text-gray-300 text-sm font-medium block mb-2">
              Job Description
            </label>
            <textarea
              autoComplete="off"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              className="w-full bg-slate-900 border border-white/20 text-white p-3 rounded-xl outline-none focus:border-indigo-500 focus:bg-black/60 transition-all duration-300 placeholder:text-gray-500 resize-y"
              placeholder="Looking for experienced Java developer with Spring Boot knowledge"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Job...
            </span>
          ) : (
            "Create Job"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;