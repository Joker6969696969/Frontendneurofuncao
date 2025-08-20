"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import type { Article } from "@/lib/types" // Import the new Article type
import { useActionState, useState } from "react"
import { addArticle, updateArticle } from "@/app/articles/admin/actions"
import { useAuth } from "@/contexts/auth-context"

interface ArticleFormProps {
  initialData?: Article
  onSuccess?: () => void
}

export function ArticleForm({ initialData, onSuccess }: ArticleFormProps) {
  const { t } = useLanguage()
  const { token } = useAuth() // Get token from auth context
  const isEditing = !!initialData

  const [state, formAction, isPending] = useActionState(
    isEditing
      ? async (_: any, formData: FormData) => {
          if (!token) return { success: false, message: "Authentication required." }
          const updatedArticle: Article = {
            id: initialData.id,
            title: formData.get("title") as string,
            excerpt: formData.get("excerpt") as string,
            body: formData.get("body") as string, // Added body
            category: formData.get("category") as string,
            author: formData.get("author") as string,
            published_at: formData.get("published_at") as string, // Renamed from date
            read_time: Number.parseInt(formData.get("read_time") as string), // Renamed from readTime
            image_url: formData.get("image_url") as string, // Renamed from image
          }
          const result = await updateArticle(updatedArticle, token)
          if (result.success && onSuccess) {
            onSuccess()
          }
          return result
        }
      : async (_: any, formData: FormData) => {
          if (!token) return { success: false, message: "Authentication required." }
          const result = await addArticle(formData, token)
          if (result.success && onSuccess) {
            onSuccess()
          }
          return result
        },
    null,
  )

  const [formData, setFormData] = useState<Omit<Article, "id">>(
    initialData || {
      title: "",
      excerpt: "",
      body: "", // Default for new article
      category: "neurology",
      author: "",
      published_at: new Date().toISOString().split("T")[0], // Default to current date
      read_time: 5, // Default read time
      image_url: "/placeholder.svg?height=300&width=400",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="title">{t("admin.articles.form.title")}</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="excerpt">{t("admin.articles.form.excerpt")}</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="body">{t("admin.articles.form.body")}</Label> {/* New field */}
        <Textarea id="body" name="body" value={formData.body} onChange={handleChange} required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="category">{t("admin.articles.form.category")}</Label>
        <Select
          name="category"
          value={formData.category}
          onValueChange={(value) => handleSelectChange("category", value)}
          required
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder={t("admin.articles.form.selectCategory")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="neurology">{t("articles.categories.neurology")}</SelectItem>
            <SelectItem value="physiotherapy">{t("articles.categories.physiotherapy")}</SelectItem>
            <SelectItem value="development">{t("articles.categories.development")}</SelectItem>
            <SelectItem value="research">{t("articles.categories.research")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="author">{t("admin.articles.form.author")}</Label>
        <Input id="author" name="author" value={formData.author} onChange={handleChange} required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="published_at">{t("admin.articles.form.date")}</Label> {/* Renamed from date */}
        <Input
          id="published_at"
          name="published_at"
          type="date"
          value={formData.published_at}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="image_url">{t("admin.articles.form.image")}</Label> {/* Renamed from image */}
        <Input
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="read_time">{t("admin.articles.form.readTime")}</Label> {/* Renamed from readTime */}
        <Input
          id="read_time"
          name="read_time"
          type="number" // Changed to number type
          value={formData.read_time}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending
          ? isEditing
            ? t("admin.articles.form.saving")
            : t("admin.articles.form.adding")
          : isEditing
            ? t("admin.articles.form.save")
            : t("admin.articles.form.add")}
      </Button>
      {state?.message && (
        <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </form>
  )
}
