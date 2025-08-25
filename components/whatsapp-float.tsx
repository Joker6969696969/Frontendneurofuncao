"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function WhatsAppFloat() {
  const { t } = useLanguage()

  // Human-readable phone number (change if you need)
  const rawPhone = "+55 54 99133-2323"

  // Remove non-digits to build wa.me link (wa.me expects digits only, no + or spaces)
  const phoneDigits = rawPhone.replace(/\D/g, "") // -> "5554991332323"

  // Message text (uses translation key if available)
  const messageText = t("home.whatsapp.message") || "Hello! I would like some information."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="WhatsApp"
      title="Chat with us on WhatsApp"
      type="button"
    >
      <Image
        src="/Whatsapp.png"
        alt="WhatsApp"
        width={36}
        height={36}
        className="object-contain"
        priority
      />
    </button>
  )
}
