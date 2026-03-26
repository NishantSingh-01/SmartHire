import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

const api = axios.create({
  baseURL: "https://smarthire-wz65.onrender.com/api",
  withCredentials: true
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    const savedToken = localStorage.getItem("token")

    if (savedUser && savedToken) {
      setUser(savedUser)
      setToken(savedToken)
    }
  }, [])

  const login = (data) => {
    setUser(data.user)
    setToken(data.token)

    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem("token", data.token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)

    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }


  useEffect(() => {
  const getuser = async () => {
    try {
      const token = localStorage.getItem("token")

      const res = await api.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)
      setUser(res.data)

    } catch (err) {
     console.log("FULL ERROR:", err)
  console.log("STATUS:", err.response?.status)
  console.log("DATA:", err.response?.data)
    }
  }

  getuser()
}, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setToken,
        setUser,
        login,
        logout,
        api,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)