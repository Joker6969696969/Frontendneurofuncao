"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import type { Article } from "@/lib/types"
import { useAuth } from "@/contexts/auth-context"
import { API_BASE_URL } from "@/lib/constants"

interface ArticleFormProps {
  initialData?: Article | null
  onSuccess?: () => void
}

export function ArticleForm({ initialData = null, onSuccess }: ArticleFormProps) {
  const { t } = useLanguage()
  const { token } = useAuth()
  const router = useRouter()
  const isEditing = Boolean(initialData)

  const [formData, setFormData] = useState<Omit<Article, "id" | "image_url"> & { file?: File | null }>({
    title: "",
    excerpt: "",
    body: "",
    category: "neurology",
    author: "",
    published_at: new Date().toISOString().split("T")[0],
    read_time: 5,
    file: null,
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title ?? "",
        excerpt: initialData.excerpt ?? "",
        body: initialData.body ?? "",
        category: initialData.category ?? "neurology",
        author: initialData.author ?? "",
        published_at:
          initialData.published_at?.split?.("T")?.[0] ??
          initialData.published_at ??
          new Date().toISOString().split("T")[0],
        read_time: Number(initialData.read_time ?? 5),
        file: null,
      })
    }
  }, [initialData])

  const [isPending, setIsPending] = useState(false)
  const [state, setState] = useState<{ success: boolean; message?: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "read_time") {
      setFormData((s) => ({ ...s, [name]: Number(value) } as any))
    } else {
      setFormData((s) => ({ ...s, [name]: value } as any))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setFormData((s) => ({ ...s, file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    setState(null)

    if (!token) {
      setState({ success: false, message: "Authentication required." })
      setIsPending(false)
      return
    }

    try {
      const fd = new FormData()
      fd.append("title", formData.title)
      fd.append("excerpt", formData.excerpt)
      fd.append("body", formData.body)
      fd.append("category", formData.category)
      fd.append("author", formData.author)
      fd.append("published_at", String(formData.published_at))
      fd.append("read_time", String(formData.read_time))

      if (formData.file) {
        fd.append("image", formData.file)
      }

      // Determine URL & method. For update we use method override (_method=PUT).
      let url = `${API_BASE_URL}/articles`
      let method = "POST"
      if (isEditing && initialData) {
        url = `${API_BASE_URL}/articles/${initialData.id}`
        // Laravel supports method override in form-data
        fd.append("_method", "PUT")
      }

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          // DO NOT set 'Content-Type' here. Browser will set it to multipart/form-data with boundary.
        },
        body: fd,
      })

      const result = await response.json()

      if (response.ok) {
        setState({ success: true, message: isEditing ? t("admin.articles.form.saving") : t("admin.articles.form.added") || "Success" })
        if (onSuccess) onSuccess()
        // Reset if creating
        if (!isEditing) {
          setFormData({
            title: "",
            excerpt: "",
            body: "",
            category: "neurology",
            author: "",
            published_at: new Date().toISOString().split("T")[0],
            read_time: 5,
            file: null,
          })
        }
        // refresh or navigate
        router.refresh()
      } else {
        setState({ success: false, message: result.message || "Failed to save article." })
        console.error("Save error", result)
      }
    } catch (err: any) {
      console.error("submit error", err)
      setState({ success: false, message: err.message || "Unexpected error" })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">{t("admin.articles.form.title")}</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="excerpt">{t("admin.articles.form.excerpt")}</Label>
        <Textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="body">{t("admin.articles.form.body")}</Label>
        <Textarea id="body" name="body" value={formData.body} onChange={handleChange} required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="category">{t("admin.articles.form.category")}</Label>
        <select id="category" name="category" value={formData.category} onChange={handleChange as any} required className="w-full mt-1 border px-3 py-2 rounded-md">
          <option value="neurology">{t("articles.categories.neurology")}</option>
          <option value="physiotherapy">{t("articles.categories.physiotherapy")}</option>
          <option value="development">{t("articles.categories.development")}</option>
          <option value="research">{t("articles.categories.research")}</option>
        </select>
      </div>

      <div>
        <Label htmlFor="author">{t("admin.articles.form.author")}</Label>
        <Input id="author" name="author" value={formData.author} onChange={handleChange} required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="published_at">{t("admin.articles.form.date")}</Label>
        <Input id="published_at" name="published_at" type="date" value={formData.published_at} onChange={handleChange} required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="image">{t("admin.articles.form.image")}</Label>
        <input id="image" name="image" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
      </div>

      <div>
        <Label htmlFor="read_time">{t("admin.articles.form.readTime")}</Label>
        <Input id="read_time" name="read_time" type="number" value={String(formData.read_time)} onChange={handleChange} required className="mt-1" />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (isEditing ? t("admin.articles.form.saving") : t("admin.articles.form.adding")) : (isEditing ? t("admin.articles.form.save") : t("admin.articles.form.add"))}
      </Button>

      {state?.message && (
        <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </form>
  )
}
