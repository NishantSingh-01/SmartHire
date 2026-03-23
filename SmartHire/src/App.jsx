import { Routes, Route } from 'react-router-dom'
import Login from './Auth/pages/Login'
import HOme from './Auth/pages/HOme'
import Register from './Auth/pages/Register'
 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOme />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App