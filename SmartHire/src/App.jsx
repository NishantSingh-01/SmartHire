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

function App() {
  const { user, token } = useAuth()

  const PrivateRoute = ({ children }) => {
    if (!token) return <Navigate to="/login" />
    return children
  }

  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={
        token
          ? user?.userType === "RECRUITER"
            ? <Navigate to="/recruiter" />
            : <Navigate to="/candidate" />
          : <Login />
      } />

      <Route path="/register" element={<Register />} />

      <Route path="/resume" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route path="/resume-analysis" element={<ResumeAnalysis />} />
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