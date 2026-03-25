import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import HOme from './pages/HOme'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOme />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default App