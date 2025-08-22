"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import { API_BASE_URL } from "@/lib/constants"
import type { Article } from "@/lib/types"
import Link from "next/link"


export default function ArticlesPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      setError(null)
      const apiUrl = `${API_BASE_URL}/articles`;
      try {
        console.log("Attempting to fetch articles from:", apiUrl); // Log the URL being fetched

        const response = await fetch(apiUrl);

        if (!response.ok) {
          // If response is not OK (e.g., 404, 500), try to read error from body
          let errorDetail = `Status: ${response.status} ${response.statusText}`;
          try {
            const errorJson = await response.json();
            errorDetail += ` - Message: ${errorJson.message || JSON.stringify(errorJson)}`;
          } catch (jsonError) {
            // If response is not JSON, just use the text
            const errorText = await response.text();
            errorDetail += ` - Response Text: ${errorText.substring(0, 200)}...`; // Limit length
          }
          throw new Error(`API Error: ${errorDetail}`);
        }

        const data: Article[] = await response.json();
        setArticles(data);
      } catch (err: any) {
        // This catch block handles network errors (like "Failed to fetch")
        // or errors thrown from the !response.ok check above.
        let errorMessage = "An unexpected error occurred.";
        if (err instanceof TypeError && err.message === "Failed to fetch") {
          errorMessage = "Network error: Could not connect to the API. Please ensure your Laravel backend is running and accessible at " + apiUrl + ". Also, check for CORS issues in your browser console.";
        } else {
          errorMessage = err.message || errorMessage;
        }
        setError(errorMessage);
        console.error("Detailed error fetching articles:", err); // Log the full error object
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const categories = [
    { id: "all", name: t("articles.categories.all") },
    { id: "neurology", name: t("articles.categories.neurology") },
    { id: "physiotherapy", name: t("articles.categories.physiotherapy") }, // Use hardcoded for now if not in translations
    { id: "development", name: t("articles.categories.development") },
    { id: "research", name: t("articles.categories.research") },
  ]

  const filteredArticles =
    selectedCategory === "all" ? articles : articles.filter((article) => article.category === selectedCategory)

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

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("articles.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("articles.subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600"
                  : "border-orange-300 text-orange-600 hover:bg-orange-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <Card className="mb-12 overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-orange-100 to-teal-100 border-2 border-orange-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={filteredArticles[0].image_url || "/placeholder.svg"} // Changed to image_url
                  alt={filteredArticles[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(filteredArticles[0].category)} border-2 font-semibold`}>
                    {getCategoryName(filteredArticles[0].category)}
                  </Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm text-orange-600 font-bold">{t("articles.featured")}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{filteredArticles[0].title}</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{filteredArticles[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{filteredArticles[0].author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">
                      {new Date(filteredArticles[0].published_at).toLocaleDateString("pt-BR")}
                    </span>{" "}
                    {/* Changed to published_at */}
                    <span>
                      {filteredArticles[0].read_time} {t("articles.readTime")} {/* Changed to read_time */}
                    </span>
                  </div>
                </div>
                <Button className="w-fit bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600">
                  <Link href={`/articles/${filteredArticles[0].id}`}>
                    {t("articles.readFull")}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <Card
              key={article.id}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br ${
                index % 3 === 0
                  ? "from-orange-50 to-orange-100 border-orange-200"
                  : index % 3 === 1
                    ? "from-teal-50 to-teal-100 border-teal-200"
                    : "from-blue-50 to-blue-100 border-blue-200"
              } border-2`}
            >
              <div className="relative h-48">
                <Image
                  src={article.image_url || "/placeholder.svg"} // Changed to image_url
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(article.category)} border-2 font-semibold`}>
                    {getCategoryName(article.category)}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(article.published_at).toLocaleDateString("pt-BR")}</span>{" "}
                    {/* Changed to published_at */}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    {article.read_time} {t("articles.readTime")} {/* Changed to read_time */}
                  </span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                    <Link href={`/articles/${article.id}`}>
                      {t("articles.readMore")}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <section className="mt-20 bg-gradient-to-r from-orange-500 to-teal-500 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">{t("articles.newsletter.title")}</h2>
            <p className="text-xl mb-8 opacity-95">{t("articles.newsletter.subtitle")}</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={t("articles.newsletter.placeholder")}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-2 border-white/30 focus:border-white focus:outline-none"
              />
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
              >
                {t("articles.newsletter.button")}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
