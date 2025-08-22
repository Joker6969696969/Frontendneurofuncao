// app/articles/[id]/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { API_BASE_URL } from "@/lib/constants"
import type { Article } from "@/lib/types"
import Link from "next/link"

export default function ArticlePage() {
  const { id } = useParams()
  const { t } = useLanguage()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchArticle = async () => {
      setLoading(true)
      setError(null)
      const apiUrl = `${API_BASE_URL}/articles/${id}`
      try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
          let errorDetail = `Status: ${response.status} ${response.statusText}`
          try {
            const errorJson = await response.clone().json()
            errorDetail += ` - Message: ${errorJson.message || JSON.stringify(errorJson)}`
          } catch (jsonError) {
            const errorText = await response.text()
            errorDetail += ` - Response Text: ${errorText.substring(0, 200)}...`
          }
          throw new Error(`API Error: ${errorDetail}`)
        }

        const data: Article = await response.json()
        setArticle(data)
      } catch (err: any) {
        let errorMessage = "An unexpected error occurred."
        if (err instanceof TypeError && err.message === "Failed to fetch") {
          errorMessage =
            "Network error: Could not connect to the API. Please ensure your Laravel backend is running and accessible at " +
            apiUrl +
            ". Also, check for CORS issues in your browser console."
        } else {
          errorMessage = err.message || errorMessage
        }
        setError(errorMessage)
        console.error("Detailed error fetching article:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [id])

  const getCategoryColor = (category: string) => {
    const colors = {
      neurology: "bg-blue-100 text-blue-800 border-blue-200",
      physiotherapy: "bg-green-100 text-green-800 border-green-200",
      development: "bg-purple-100 text-purple-800 border-purple-200",
      research: "bg-orange-100 text-orange-800 border-orange-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getCategoryName = (category: string) => {
    const names = {
      neurology: t("articles.categories.neurology"),
      physiotherapy: t("articles.categories.physiotherapy"),
      development: t("articles.categories.development"),
      research: t("articles.categories.research"),
    }
    return names[category as keyof typeof names] || category
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-gray-700 text-xl">{t("articles.loading")}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-red-500 text-xl text-center p-4">{error}</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-gray-700 text-xl">{t("articles.notFound")}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Back Button */}
        <div className="py-6">
          <Link href="/articles">
            <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("articles.backToAll")}
            </Button>
          </Link>
        </div>

        {/* Article Image */}
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(article.category)} border-2 font-semibold`}>
              {getCategoryName(article.category)}
            </Badge>
          </div>
        </div>

        {/* Article Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <User className="h-4 w-4 mr-2" />
          <span className="mr-4">{article.author}</span>
          <Calendar className="h-4 w-4 mr-2" />
          <span className="mr-4">{new Date(article.published_at).toLocaleDateString("pt-BR")}</span>
          <span>
            {article.read_time} {t("articles.readTime")}
          </span>
        </div>

        {/* Article Body (Full Content) */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    </div>
  )
}