"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            {/* Please upload the image you want to use here */}
            <Image
              src="/logo.png" // Reverted to original logo until new image is provided
              alt="Neurofunção"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">{t("home.hero.description")}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">{t("contact.title")}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t("contact.info.address")}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 text-sm">{t("contact.info.phone")}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 text-sm">{t("contact.info.email")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300 text-sm">{t("contact.info.hours")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">{t("footer.quickLinks")}</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t("nav.services")}
              </Link>
              <Link href="/articles" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t("nav.articles")}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t("nav.about")}
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t("nav.contact")}
              </Link>
              <Link
                href="/login"
                className="block text-orange-300 font-bold hover:text-orange-200 transition-colors text-sm"
              >
                {t("nav.login")}
              </Link>
              <Link
                href="/register"
                className="block text-orange-300 font-bold hover:text-orange-200 transition-colors text-sm"
              >
                {t("nav.register")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Neurofunção. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
