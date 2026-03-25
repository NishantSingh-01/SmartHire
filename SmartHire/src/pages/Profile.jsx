import { useState } from "react"

const Profile = () => {
  const [resume, setResume] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("resume", resume)
// todos add resume logic there>>
    console.log("Resume:", resume)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex justify-center items-start py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-white mb-8">
          Upload Resume
        </h2>

        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">
            UPLOAD RESUME
          </label>

          <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-700 bg-gray-800/40 hover:bg-gray-800/60 transition p-10 rounded-2xl cursor-pointer">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center">
              📄
            </div>

            <p className="text-white font-medium">
              {resume ? resume.name : "Drop your CV here"}
            </p>

            <p className="text-gray-500 text-sm">
              PDF or DOCX, max 5MB
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </label>

          {resume && (
            <p className="text-green-400 text-sm mt-2">
              Uploaded: {resume.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-indigo-900/40"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile