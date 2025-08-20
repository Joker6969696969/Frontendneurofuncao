import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { AuthProvider } from "@/contexts/auth-context" // Import AuthProvider
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neurofunção - Clínica Especializada em Distúrbios Neurológicos",
  description:
    "Cuidado especializado para crianças e adultos com distúrbios neurológicos, do desenvolvimento e fisioterapia.",
  keywords: "neurologia, fisioterapia, desenvolvimento, clínica, Brasil",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            {" "}
            {/* Wrap with AuthProvider */}
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </AuthProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  )
}
