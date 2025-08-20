// This file defines shared types for your application
export interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  body: string // Full content
  author: string
  published_at: string // Date field, renamed from 'date'
  read_time: number // Estimated read time (min), renamed from 'readTime'
  image_url?: string // Optional image URL, renamed from 'image'
}
