import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext/Authcontext'

const Login = () => {
    const { api, setUser, setToken } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

   const submitHandler = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await api.post("/auth/login", {
      email,
      password
    },
)

    const data = res.data
    //  console.log(data)
    setToken(data.token)
    console.log(data)
    localStorage.setItem("token", data.token)

if (data.userType === "RECRUITER") {
  navigate("/recruiter")
} else {
  navigate("/candidate")
}

  } catch (error) {
    console.log(error.response?.data || error.message)
  } finally {
    setLoading(false)
  }
}

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <form
                onSubmit={submitHandler}
                className="flex flex-col gap-5 bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center text-white tracking-wide mb-6">
                    Login to your account
                </h2>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl"
                />

                <button
                    disabled={loading}
                    className="bg-indigo-600 text-white py-3 rounded-xl"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-400"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login