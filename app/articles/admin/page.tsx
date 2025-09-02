"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getArticles, deleteArticle } from "./actions"
import { ArticleForm } from "@/components/article-form"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context" // Import useAuth
import Image from "next/image"
import { Pencil, Trash2, PlusCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Article } from "@/lib/types" // Import the new Article type

const articlesAdminAnimatedIcons = [
  { icon: Pencil, top: "10%", left: "5%", size: "h-16 w-16", delay: "delay-100" },
  { icon: Trash2, top: "20%", right: "10%", size: "h-12 w-12", delay: "delay-300" },
  { icon: PlusCircle, bottom: "15%", left: "15%", size: "h-20 w-20", delay: "delay-500" },
  { icon: Pencil, top: "50%", left: "25%", size: "h-14 w-14", delay: "delay-700" },
  { icon: Trash2, bottom: "5%", right: "20%", size: "h-18 w-18", delay: "delay-900" },
  { icon: PlusCircle, top: "30%", right: "30%", size: "h-10 w-10", delay: "delay-1100" },
  { icon: Pencil, top: "40%", left: "10%", size: "h-16 w-16", delay: "delay-200" },
  { icon: Trash2, bottom: "25%", right: "5%", size: "h-12 w-12", delay: "delay-400" },
  { icon: PlusCircle, top: "60%", right: "15%", size: "h-20 w-20", delay: "delay-600" },
  { icon: Pencil, bottom: "10%", left: "30%", size: "h-14 w-14", delay: "delay-800" },
];

export default function AdminArticlesPageWrapper() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const { t } = useLanguage()

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      router.push("/login") // Redirect to login if not authorized
    }
  }, [isLoading, isAuthenticated, isAdmin, router])

  if (isLoading || !isAuthenticated || !isAdmin) {
    // Show a loading state or a message while redirecting
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 z-0 opacity-30">
          {articlesAdminAnimatedIcons.map((item, index) => (
            <item.icon
              key={index}
              className={`absolute text-purple-400 animate-float-smooth ${item.size} ${item.delay}`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                animationDuration: `${3 + index * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <p className="text-gray-700 text-xl">{t("admin.articles.loading")}</p>
        </div>
      </div>
    )
  }

  return <AdminArticlesContent />
}

// Client component to handle interactivity and data fetching
function AdminArticlesContent() {
  "use client"
  const { t } = useLanguage()
  const { token } = useAuth() // Get token from auth context
  const [articles, setArticles] = useState<Article[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [loadingArticles, setLoadingArticles] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoadingArticles(true)
      setError(null)
      try {
        const fetchedArticles = await getArticles()
        setArticles(fetchedArticles)
      } catch (err: any) {
        setError(err.message || "Failed to load articles.")
        console.error("Error fetching articles:", err)
      } finally {
        setLoadingArticles(false)
      }
    }
    fetchArticles()
  }, []) // Fetch articles on component mount

  const handleDelete = async (id: string) => {
    if (!token) {
      alert("Authentication token missing. Please log in again.")
      return
    }
    if (confirm(t("admin.articles.confirmDelete"))) {
      try {
        await deleteArticle(id, token)
        setArticles(articles.filter((article) => article.id !== id))
      } catch (err: any) {
        alert(err.message || "Failed to delete article.")
        console.error("Delete article error:", err)
      }
    }
  }

  const handleAddSuccess = async () => {
    setIsAddDialogOpen(false)
    setLoadingArticles(true) // Show loading while re-fetching
    try {
      const updatedArticles = await getArticles()
      setArticles(updatedArticles)
    } catch (err: any) {
      setError(err.message || "Failed to re-fetch articles after add.")
      console.error("Error re-fetching articles after add:", err)
    } finally {
      setLoadingArticles(false)
    }
  }

  const handleEditSuccess = async () => {
    setEditingArticle(null) // Close dialog
    setLoadingArticles(true) // Show loading while re-fetching
    try {
      const updatedArticles = await getArticles()
      setArticles(updatedArticles)
    } catch (err: any) {
      setError(err.message || "Failed to re-fetch articles after edit.")
      console.error("Error re-fetching articles after edit:", err)
    } finally {
      setLoadingArticles(false)
    }
  }

  if (loadingArticles) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <p className="text-gray-700 text-xl">{t("admin.articles.loadingArticles")}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 z-0 opacity-30">
        {articlesAdminAnimatedIcons.map((item, index) => (
          <item.icon
            key={index}
            className={`absolute text-purple-400 animate-float-smooth ${item.size} ${item.delay}`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animationDuration: `${3 + index * 0.5}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-12 sm:mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("admin.articles.title")}</h1>
          <p className="text-xl text-gray-600">{t("admin.articles.subtitle")}</p>
        </div>

        <div className="mb-8 flex justify-center">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg rounded-lg"
              >
                <PlusCircle className="h-5 sm:h-6 w-5 sm:w-6 mr-2 sm:mr-3" />
                {t("admin.articles.addArticle")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{t("admin.articles.addArticle")}</DialogTitle>
                <DialogDescription>{t("admin.articles.addArticleDescription")}</DialogDescription>
              </DialogHeader>
              <ArticleForm onSuccess={handleAddSuccess} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image src={article.image_url || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{article.author}</span>
                  <span>{new Date(article.published_at).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2">
                  <Dialog
                    open={editingArticle?.id === article.id}
                    onOpenChange={(open) => setEditingArticle(open ? article : null)}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Pencil className="h-4 w-4 mr-2" />
                        {t("admin.articles.edit")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>{t("admin.articles.editArticle")}</DialogTitle>
                        <DialogDescription>{t("admin.articles.editArticleDescription")}</DialogDescription>
                      </DialogHeader>
                      <ArticleForm initialData={editingArticle ?? undefined} onSuccess={handleEditSuccess} />
                    </DialogContent>
                  </Dialog>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDelete(article.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    {t("admin.articles.delete")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
