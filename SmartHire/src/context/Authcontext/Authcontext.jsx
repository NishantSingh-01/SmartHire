import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

const api = axios.create({
  baseURL: "https://smarthire-wz65.onrender.com/api",
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token") || null)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) setUser(JSON.parse(savedUser))
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
    const getUser = async () => {
      if (!token) return 

      try {
        const res = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        // console.log(res)
        setUser(res.data)
      } catch (err) {
        console.log("FULL ERROR:", err)
        console.log("STATUS:", err.response?.status)
        console.log("DATA:", err.response?.data)
        // Optional: auto logout if token is invalid
        if (err.response?.status === 403) logout()
      }
    }

    getUser()
  }, [token]) 

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