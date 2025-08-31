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
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const { t } = useLanguage()
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "", // Laravel Sanctum expects password_confirmation
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    if (formData.password !== formData.password_confirmation) {
      setError(t("register.errors.passwordMismatch"))
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        login(data.token, data.is_admin, { name: formData.name, email: formData.email })
        toast({
          title: t("register.successTitle") || "Registration Successful!",
          description: t("register.successMessage") || "Your account has been created successfully.",
        })
        // Delay redirect so user can see the toast
        setTimeout(() => {
          if (data.is_admin) {
            router.push("/articles/admin")
          } else {
            router.push("/") // Redirect non-admin users to home
          }
        }, 1500) // 1.5 seconds
      } else {
        // Laravel validation errors are often nested under 'errors'
        if (data.errors) {
          const errorMessages = Object.values(data.errors).flat().join(" ")
          setError(errorMessages || t("register.errors.registrationFailed"))
        } else {
          setError(data.message || t("register.errors.registrationFailed"))
        }
        console.error("Registration failed response:", data)
      }
    } catch (err) {
      setError(t("register.errors.networkError"))
      console.error("Registration error (catch block):", err)
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
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl border-2 border-teal-200">
        <CardHeader className="flex flex-col items-center pt-8 pb-4">
          <Image src="/logo.png" alt="Neurofunção" width={200} height={60} className="h-16 w-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-gray-900">{t("register.title")}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t("register.form.name")}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-teal-200 focus:border-teal-500"
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("register.form.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-teal-200 focus:border-teal-500"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t("register.form.password")}
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border-teal-200 focus:border-teal-500"
              />
            </div>

            <div>
              <Label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                {t("register.form.confirmPassword")}
              </Label>
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full border-teal-200 focus:border-teal-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? t("register.form.registering") : t("register.form.submit")}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {t("register.haveAccount")}{" "}
            <Link href="/login" className="font-medium text-teal-600 hover:text-teal-700">
              {t("register.loginNow")}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
