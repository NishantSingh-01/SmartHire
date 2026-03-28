import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext/Authcontext"

const RecruiterNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-gradient-to-r from-slate-700 to-slate-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link to="/recruiter" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">
              Recruiter Panel
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/recruiter" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>

            <Link to="/post-job" className="text-gray-300 hover:text-white">
              Post Job
            </Link>

            <Link to="/recruiter/applicants" className="text-gray-300 hover:text-white">
              Applicants
            </Link>

            <Link to="/recruiter/jobs-created" className="block text-gray-300">
              Jobs Posted
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">



            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">

            <Link to="/recruiter" className="block text-gray-300">
              Dashboard
            </Link>

            <Link to="/recruiter/post-job" className="block text-gray-300">
              Post Job
            </Link>

            <Link to="/recruiter/applicants" className="block text-gray-300">
              Applicants
            </Link>

            <Link to="/recruiter/jobs-created" className="block text-gray-300">
              Jobs Posted
            </Link>

            <Link
              to="/profile"
              className="block bg-gray-800 text-white text-center py-2 rounded-lg"
            >
              {user?.name || "Profile"}
            </Link>

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded-lg"
            >
              Logout
            </button>

          </div>
        </div>
      )}
    </nav>
  )
}

export default RecruiterNavbar