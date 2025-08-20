"use server"

import { revalidatePath } from "next/cache"
import { API_BASE_URL } from "@/lib/constants"
import type { Article } from "@/lib/types" // Import the new Article type

// Helper to create authenticated fetch requests
async function authenticatedFetch(url: string, options: RequestInit, token: string) {
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  try {
    const response = await fetch(url, { ...options, headers })
    if (!response.ok) {
      const errorData = await response.json()
      console.error(`API Error (${response.status} ${response.statusText}):`, errorData) // Detailed error log
      throw new Error(errorData.message || "API request failed")
    }
    return response.json()
  } catch (error: any) {
    console.error("Network or API call error:", error); // Log network errors
    throw error; // Re-throw to be caught by the calling action
  }
}

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      next: { tags: ["articles"] }, // Tag for revalidation
    })
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Public API Error (${response.status} ${response.statusText}):`, errorText); // Detailed error log
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }
    return response.json()
  } catch (error: any) {
    console.error("Error in getArticles (public fetch):", error); // Log network errors for public fetch
    throw new Error("Failed to fetch articles. Please check your network connection and API_BASE_URL.");
  }
}

export async function addArticle(formData: FormData, token: string) {
  const newArticle: Omit<Article, "id"> = {
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    body: formData.get("body") as string, // Added body
    category: formData.get("category") as string,
    author: formData.get("author") as string,
    published_at: formData.get("published_at") as string, // Renamed from date
    read_time: Number.parseInt(formData.get("read_time") as string), // Renamed from readTime, parsed to int
    image_url: formData.get("image_url") as string, // Renamed from image
  }

  try {
    await authenticatedFetch(
      `${API_BASE_URL}/articles`,
      {
        method: "POST",
        body: JSON.stringify(newArticle),
      },
      token,
    )
    revalidatePath("/articles/admin")
    revalidatePath("/articles")
    return { success: true, message: "Article added successfully!" }
  } catch (error: any) {
    console.error("Error in addArticle:", error); // Log error for addArticle
    return { success: false, message: error.message || "Failed to add article." }
  }
}

export async function updateArticle(article: Article, token: string) {
  try {
    await authenticatedFetch(
      `${API_BASE_URL}/articles/${article.id}`,
      {
        method: "PUT",
        body: JSON.stringify(article),
      },
      token,
    )
    revalidatePath("/articles/admin")
    revalidatePath("/articles")
    return { success: true, message: "Article updated successfully!" }
  } catch (error: any) {
    console.error("Error in updateArticle:", error); // Log error for updateArticle
    return { success: false, message: error.message || "Failed to update article." }
  }
}

export async function deleteArticle(id: string, token: string) {
  try {
    await authenticatedFetch(
      `${API_BASE_URL}/articles/${id}`,
      {
        method: "DELETE",
      },
      token,
    )
    revalidatePath("/articles/admin")
    revalidatePath("/articles")
    return { success: true, message: "Article deleted successfully!" }
  } catch (error: any) {
    console.error("Error in deleteArticle:", error); // Log error for deleteArticle
    return { success: false, message: error.message || "Failed to delete article." }
  }
}
