"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function WhatsAppFloat() {
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("home.whatsapp.message"))
    const whatsappUrl = `https://wa.me/[NUMERO_WHATSAPP]?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse z-50"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
