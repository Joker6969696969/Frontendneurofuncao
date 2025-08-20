"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "@/lib/constants"

interface AuthContextType {
  token: string | null
  isAdmin: boolean
  user: { name: string; email: string } | null
  login: (token: string, isAdmin: boolean, user: { name: string; email: string }) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Attempt to load token and admin status from localStorage on mount
    const storedToken = localStorage.getItem("authToken")
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true"
    const storedUserString = localStorage.getItem("authUser")

    if (storedToken && storedUserString) {
      try {
        const storedUser = JSON.parse(storedUserString);
        setToken(storedToken)
        setIsAdmin(storedIsAdmin)
        setUser(storedUser)
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        // Clear corrupted data if parsing fails
        localStorage.removeItem("authToken");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("authUser");
      }
    }
    setIsLoading(false)
  }, [])

  const login = (newToken: string, newIsAdmin: boolean, newUser: { name: string; email: string }) => {
    setToken(newToken)
    setIsAdmin(newIsAdmin)
    setUser(newUser)
    localStorage.setItem("authToken", newToken)
    localStorage.setItem("isAdmin", String(newIsAdmin))
    localStorage.setItem("authUser", JSON.stringify(newUser))
  }

  const logout = async () => {
    // Optional: Call backend logout endpoint if implemented
    try {
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        console.error("Logout failed on backend:", await response.json())
      }
    } catch (error) {
      console.error("Error during backend logout:", error)
    } finally {
      setToken(null)
      setIsAdmin(false)
      setUser(null)
      localStorage.removeItem("authToken")
      localStorage.removeItem("isAdmin")
      localStorage.removeItem("authUser")
      router.push("/login") // Redirect to login page after logout
    }
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, isAdmin, user, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
