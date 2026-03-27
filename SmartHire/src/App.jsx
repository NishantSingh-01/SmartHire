import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/Authcontext/Authcontext'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Candidate from './pages/Candidate'
import Recruiter from './pages/Recruiter'
import CreateJob from './pages/CreateJob'
import Applicant from './pages/Applicant'
import Jobs from './pages/Jobs'
import ResumeAnalysis from './components/ResumeAnalysis'
import RecruiterMyJobs from './components/RecruiterMyJobs'

function App() {
  const { user, token } = useAuth()

  const PrivateRoute = ({ children }) => {
    if (!token) return <Navigate to="/login" />
    return children
  }

  const loginRedirect = () => {
    if (!token) return <Login />

    if (!user) return null

    if (user.userType === "RECRUITER") {
      return <Navigate to="/recruiter" />
    }

    if (user.userType === "CANDIDATE") {
      return <Navigate to="/candidate" />
    }

    return <Login />
  }

  return (
    <Routes>

      <Route path="/" element={loginRedirect()} />

      <Route path="/login" element={loginRedirect()} />

      <Route path="/register" element={<Register />} />

      <Route path="/resume" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />

      <Route path="/resume-analysis" element={
        <PrivateRoute>
          <ResumeAnalysis />
        </PrivateRoute>
      } />  
      <Route path="/recruiter/jobs-created" element={
        <PrivateRoute>
          <RecruiterMyJobs />
        </PrivateRoute>
      } />

      <Route path="/post-job" element={
        <PrivateRoute>
          <CreateJob />
        </PrivateRoute>
      } />

      <Route path="/recruiter/applicants" element={
        <PrivateRoute>
          <Applicant />
        </PrivateRoute>
      } />

      <Route path="/jobs" element={
        <PrivateRoute>
          <Jobs />
        </PrivateRoute>
      } />

      <Route path="/candidate" element={
        <PrivateRoute>
          <Candidate />
        </PrivateRoute>
      } />

      <Route path="/recruiter" element={
        <PrivateRoute>
          <Recruiter />
        </PrivateRoute>
      } />

    </Routes>
  )
}

export default App