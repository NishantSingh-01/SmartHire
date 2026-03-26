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

          {/* Logo */}
          <Link to="/recruiter" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
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

            <Link to="/recruiter/company" className="text-gray-300 hover:text-white">
              Company
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/profile"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              {user?.name || "Profile"}
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

          {/* Mobile Button */}
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

      {/* Mobile Menu */}
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

            <Link to="/recruiter/company" className="block text-gray-300">
              Company
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