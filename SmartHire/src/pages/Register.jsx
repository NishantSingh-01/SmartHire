import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext/Authcontext'
import toast from "react-hot-toast"

const Register = () => {
    const { api, setUser, login, setToken } = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('CANDIDATE')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await api.post(
                "/auth/signup",
                {
                    name,
                    email,
                    password,
                    userType: role
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            const data = res.data
            console.log(data)

            setToken(data.token)
            localStorage.setItem("token", data.token)
            toast.success("Register Succesfully ,pls Verify Email to Login")
            navigate("/login")

        } catch (error) {
            console.log(error.response?.data || error.message)
            toast.error(error.response?.data?.message || "Signup failed")
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
                    Create your account
                </h2>

                <div className="flex gap-4 p-1 bg-gray-800/50 rounded-xl border border-gray-700">
                    <button
                        type="button"
                        onClick={() => setRole('CANDIDATE')}
                        className={`flex-1 py-3 rounded-lg ${role === 'CANDIDATE'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400'
                            }`}
                    >
                        👤 Candidate
                    </button>

                    <button
                        type="button"
                        onClick={() => setRole('RECRUITER')}
                        className={`flex-1 py-3 rounded-lg ${role === 'RECRUITER'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400'
                            }`}
                    >
                        💼 Recruiter
                    </button>
                </div>

                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl"
                />

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
                    {loading ? 'Creating account...' : 'Sign Up'}
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-400">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register