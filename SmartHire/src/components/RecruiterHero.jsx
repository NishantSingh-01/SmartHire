const RecruiterHero = () => {
  return (
    <div className="min-h-[60vh] bg-gradient-to-r from-slate-700 to-slate-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-gray-400 text-lg mb-3">
          Recruiter Panel
        </p>

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Manage your hiring
          <br />
          and find top talent faster
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg">
          Create jobs, track applicants, and manage your company hiring
          pipeline in one place. Build your team with better visibility
          and smarter recruiting tools.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl">
            Post a Job
          </button>

          <button className="border border-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl">
            View Applicants
          </button>
        </div>

      </div>
    </div>
  )
}

export default RecruiterHero