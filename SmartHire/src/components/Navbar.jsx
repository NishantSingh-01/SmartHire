import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext/Authcontext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { token, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-white font-bold text-lg">
              SmartHire
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/candidate" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/jobs" className="text-gray-300 hover:text-white">Jobs</Link>
            <Link to="/companies" className="text-gray-300 hover:text-white">Companies</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">

            {token && (
              <Link
                to="/profile"
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

            <Link to="/" className="block text-gray-300">Home</Link>
            <Link to="/jobs" className="block text-gray-300">Jobs</Link>
            <Link to="/companies" className="block text-gray-300">Companies</Link>
            <Link to="/about" className="block text-gray-300">About</Link>

            {token && (
              <Link
                to="/profile"
                className="block bg-gray-800 text-white text-center py-2 rounded-lg"
              >
                {user?.name || "Profile"}
              </Link>
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