// app/articles/admin/actions.ts
// CLIENT-SIDE helpers for the Admin UI (fetch the Laravel API)
import { API_BASE_URL } from "@/lib/constants"; // make sure this resolves to the public URL or use process.env.NEXT_PUBLIC_API_BASE_URL
import type { Article } from "@/lib/types";

function getBaseUrl() {
  // Prefer env var exposed to client
  return (process.env.NEXT_PUBLIC_API_BASE_URL ?? API_BASE_URL) as string;
}

async function handleResponse(response: Response) {
  const text = await response.text();
  try {
    const json = JSON.parse(text);
    if (!response.ok) throw new Error(json.message || JSON.stringify(json));
    return json;
  } catch (err) {
    // If not JSON, rethrow a useful error containing the raw text
    if (!response.ok) {
      throw new Error(text || `Request failed with status ${response.status}`);
    }
    // else parse succeeded earlier
    return JSON.parse(text);
  }
}

async function authenticatedFetch(url: string, options: RequestInit = {}, token?: string) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const response = await fetch(url, { ...options, headers });
    return await handleResponse(response);
  } catch (error: any) {
    console.error("Network/API error in authenticatedFetch:", error);
    throw error;
  }
}

export async function getArticles(): Promise<Article[]> {
  const base = getBaseUrl();
  try {
    const res = await fetch(`${base}/articles`, {
      // avoid caching in dev; remove next option for pure client fetch
      cache: "no-cache",
    });
    return (await handleResponse(res)) as Article[];
  } catch (err: any) {
    console.error("getArticles error:", err);
    throw new Error("Failed to fetch articles. " + (err.message || ""));
  }
}

export async function addArticle(formData: FormData | Omit<Article, "id">, token?: string) {
  // Accept either FormData (from old code) or a plain JS object
  const base = getBaseUrl();
  const payload =
    formData instanceof FormData
      ? JSON.parse(
          JSON.stringify(
            Object.fromEntries(
              Array.from(formData.entries()).map(([k, v]) => [k, typeof v === "string" ? v : String(v)])
            )
          )
        )
      : formData;

  try {
    await authenticatedFetch(`${base}/articles`, {
      method: "POST",
      body: JSON.stringify(payload),
    }, token);
    // caller handles re-fetching / UI changes
    return { success: true, message: "Article added successfully!" };
  } catch (err: any) {
    console.error("addArticle error:", err);
    return { success: false, message: err.message || "Failed to add article." };
  }
}

export async function updateArticle(article: Article, token?: string) {
  const base = getBaseUrl();
  try {
    await authenticatedFetch(`${base}/articles/${article.id}`, {
      method: "PUT",
      body: JSON.stringify(article),
    }, token);
    return { success: true, message: "Article updated successfully!" };
  } catch (err: any) {
    console.error("updateArticle error:", err);
    return { success: false, message: err.message || "Failed to update article." };
  }
}

export async function deleteArticle(id: string, token?: string) {
  const base = getBaseUrl();
  try {
    await authenticatedFetch(`${base}/articles/${id}`, {
      method: "DELETE",
    }, token);
    return { success: true };
  } catch (err: any) {
    console.error("deleteArticle error:", err);
    return { success: false, message: err.message || "Failed to delete article." };
  }
}
