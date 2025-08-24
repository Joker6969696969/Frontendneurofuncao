"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import React from "react"

export default function WhatsAppFloat() {
  const { t } = useLanguage()

  // Put the phone number here as you want it stored (human readable)
  const rawPhone = "+55 54 99133-2323"

  // Remove any non-digit characters to build wa.me link
  const phoneDigits = rawPhone.replace(/\D/g, "") // => "+55 54 99133-2323"

  // Use translation key for message, fallback to English text if missing
  const messageText = t("home.whatsapp.message") || "Hello! I would like some information."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(messageText)
    // wa.me format expects country + number, no +, no spaces
    const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodedMessage}`

    // Open in new tab safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
