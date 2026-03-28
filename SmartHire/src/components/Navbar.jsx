import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext/Authcontext"
import toast from "react-hot-toast"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [resumeExists, setResumeExists] = useState(false)

  const { token, user, logout, api } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const checkResume = async () => {
      try {
        if (!token) return

        const res = await api.get("/resume/exists", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setResumeExists(res.data.hasResume)

      } catch (error) {
        console.log(error)
      }
    }

    checkResume()
  }, [token])

  const handleLogout = () => {
    logout()
    toast.success("Logout successfull")
    navigate("/login")
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          <Link className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v1h-4V6a2 2 0 012-2z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">
              SmartHireg
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/candidate" className="text-gray-300 hover:text-white">
              Home
            </Link>

            <Link to="/jobs" className="text-gray-300 hover:text-white">
              Jobs
            </Link>
            <Link to="/candidate/applications" className="text-gray-300 hover:text-white">
              My Application
            </Link>

            {token && !resumeExists && (
              <Link
                to="/resume"
                className="text-yellow-400 hover:text-white"
              >
                Upload Resume
              </Link>
            )}

            {token && resumeExists && (
              <Link
                to="/resume-analysis"
                className="text-green-400 hover:text-white"
              >
                Resume Analysis
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">

            {token && (
              <Link

                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                {user?.name || "Profile"}
              </Link>
            )}

            {!token ? (
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            )}

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-xl"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">

            <Link to="/candidate" className="block text-gray-300">
              Home
            </Link>

            <Link to="/jobs" className="block text-gray-300">
              Jobs
            </Link>

            {token && !resumeExists && (
              <Link
                to="/upload-resume"
                className="block text-yellow-400"
              >
                Upload Resume
              </Link>
            )}

            {token && resumeExists && (
              <Link
                to="/resume-analysis"
                className="block text-green-400"
              >
                Resume Analysis
              </Link>
            )}

            {token && (
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-sm">
                👤 {user?.name || "Profile"}
              </div>
            )}

            {!token ? (
              <Link
                to="/login"
                className="block bg-indigo-600 text-white text-center py-2 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar