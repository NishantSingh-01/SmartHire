import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('candidate')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        console.log('Register attempt:', { name, email, password, role })
        
        setTimeout(() => {
            setLoading(false)
        }, 1500)
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
                        onClick={() => setRole('candidate')}
                        className={`flex-1 py-3 rounded-lg font-medium transition-all duration-200 ${
                            role === 'candidate'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40'
                                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                    >
                        👤 Candidate
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('recruiter')}
                        className={`flex-1 py-3 rounded-lg font-medium transition-all duration-200 ${
                            role === 'recruiter'
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40'
                                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                    >
                        💼 Recruiter
                    </button>
                </div>

                <input
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-500"
                />

                <input
                   autoComplete="new-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-500"
                />
                
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800 text-white border border-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-500"
                />

                <button
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-50 text-white font-semibold py-3 rounded-xl mt-3 transition-all duration-200 shadow-lg shadow-indigo-900/40"
                >
                    {loading ? 'Creating account...' : 'Sign Up'}
                </button>
                
                <p className="text-center text-gray-400 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                    >
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register