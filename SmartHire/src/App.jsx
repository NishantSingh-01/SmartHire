import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/Authcontext/Authcontext'
import { Toaster } from "react-hot-toast"
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
import RecruiterApplications from './components/RecruiterApplications'
import ApplicantDetails from './components/ApplicantDetails'
import MyApplications from './components/MyApplications'

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
    
    <>
       <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1f2937",
          color: "#fff",
        }
      }}
    />
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
      <Route path="/recruiter/applicants" element={
        <PrivateRoute>
          <RecruiterApplications />
        </PrivateRoute>
      } />
      <Route   path="/recruiter/applications/:id" element={
        <PrivateRoute>
          <ApplicantDetails />
        </PrivateRoute>
      } />
      <Route   path="/candidate/applications" element={
        <PrivateRoute>
          <MyApplications />
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
    </>
  )
}

export default App