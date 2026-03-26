import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/Authcontext/Authcontext'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import HOme from './pages/HOme'
import Candidate from './pages/Candidate'
import Recruiter from './pages/Recruiter'
import CreateJob from './pages/CreateJob'
import Applicant from './pages/Applicant'
import Jobs from './pages/Jobs'

function App() {
  const { user, token } = useAuth()

  const getHome = () => {
    if (!token) return <HOme />

    if (user?.userType === "RECRUITER") {
      return <Navigate to="/recruiter" />
    }

    if (user?.userType === "CANDIDATE") {
      return <Navigate to="/candidate" />
    }

    return <HOme />
  }

  return (
    <Routes>
      <Route path="/" element={getHome()} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post-job" element={<CreateJob />} />
      <Route path="/recruiter/applicants" element={<Applicant />} />
      <Route path="/jobs" element={<Jobs />} />

      <Route path="/candidate" element={<Candidate />} />
      <Route path="/recruiter" element={<Recruiter />} />
    </Routes>
  )
}

export default App