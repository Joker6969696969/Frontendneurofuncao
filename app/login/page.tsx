"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "@/lib/constants"

export default function LoginPage() {
  const { t } = useLanguage()
  const { login } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        login(data.token, data.is_admin, { name: data.user?.name || "Admin", email: formData.email })
        if (data.is_admin) {
          router.push("/articles/admin")
        } else {
          router.push("/") // Redirect non-admin users to home
        }
      } else {
        setError(data.message || t("login.errors.invalidCredentials"))
      }
    } catch (err) {
      setError(t("login.errors.networkError"))
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl border-2 border-orange-200">
        <CardHeader className="flex flex-col items-center pt-8 pb-4">
          <Image src="/logo.png" alt="Neurofunção" width={200} height={60} className="h-16 w-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-gray-900">{t("login.title")}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("login.form.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-orange-200 focus:border-orange-500"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t("login.form.password")}
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border-orange-200 focus:border-orange-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? t("login.form.loggingIn") : t("login.form.submit")}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {t("login.noAccount")}{" "}
            <Link href="/register" className="font-medium text-orange-600 hover:text-orange-700">
              {t("login.registerNow")}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
