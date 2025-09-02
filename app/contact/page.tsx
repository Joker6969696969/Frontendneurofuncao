"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const contactAnimatedIcons = [
    { icon: MapPin, top: "10%", left: "5%", size: "h-16 w-16", delay: "delay-100" },
    { icon: Phone, top: "20%", right: "10%", size: "h-12 w-12", delay: "delay-300" },
    { icon: Mail, bottom: "15%", left: "15%", size: "h-20 w-20", delay: "delay-500" },
    { icon: Clock, top: "50%", left: "25%", size: "h-14 w-14", delay: "delay-700" },
    { icon: Send, bottom: "5%", right: "20%", size: "h-18 w-18", delay: "delay-900" },
    { icon: MapPin, top: "30%", right: "30%", size: "h-10 w-10", delay: "delay-1100" },
    { icon: Phone, top: "40%", left: "10%", size: "h-16 w-16", delay: "delay-200" },
    { icon: Mail, bottom: "25%", right: "5%", size: "h-12 w-12", delay: "delay-400" },
    { icon: Clock, top: "60%", right: "15%", size: "h-20 w-20", delay: "delay-600" },
    { icon: Send, bottom: "10%", left: "30%", size: "h-14 w-14", delay: "delay-800" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 z-0 opacity-30">
        {contactAnimatedIcons.map((item, index) => (
          <item.icon
            key={index}
            className={`absolute text-blue-300 animate-float-smooth ${item.size} ${item.delay}`}
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-orange-200 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-orange-200 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-orange-200 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-orange-200 focus:border-orange-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-to-br from-teal-100 to-teal-200 border-2 border-teal-300 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">{t("contact.info.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t("contact.title") === "Get in Touch" ? "Address" : "Endereço"}
                    </h3>
                    <p className="text-gray-700">{t("contact.info.address")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t("contact.title") === "Get in Touch" ? "Phone" : "Telefone"}
                    </h3>
                    <p className="text-gray-700">{t("contact.info.phone")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">E-mail</h3>
                    <p className="text-gray-700">{t("contact.info.email")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">
                      {t("contact.title") === "Get in Touch" ? "Business Hours" : "Horário de Funcionamento"}
                    </h3>
                    <p className="text-gray-700">{t("contact.info.hours")}</p>
                    <p className="text-gray-700">
                      {t("contact.title") === "Get in Touch" ? "Saturday: 8am to 12pm" : "Sábado: 8h às 12h"}
                    </p>
                    <p className="text-gray-700">
                      {t("contact.title") === "Get in Touch" ? "Sunday: Closed" : "Domingo: Fechado"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-xl">
             <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">{t("contact.info.location")}</CardTitle>
             </CardHeader>
             <CardContent className="p-0">
              <div className="h-64 w-full">
              <iframe
                title="Neurofunção - Location (satellite)"
                // center on given coords, t=k for satellite, z=18 for zoom, output=embed
                src="https://www.google.com/maps?q=-28.2679507,-52.418854&z=18&t=k&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
              </div>
             </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">{t("contact.info.emergency")}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-red-800 mb-2 font-medium">
                  {t("contact.title") === "Get in Touch"
                    ? "For medical emergencies, call immediately:"
                    : "Para emergências médicas, ligue imediatamente para:"}
                </p>
                <p className="text-2xl font-bold text-red-900">192 (SAMU)</p>
                <p className="text-red-700 text-sm mt-2">
                  {t("contact.title") === "Get in Touch"
                    ? "Or go to the nearest hospital"
                    : "Ou dirija-se ao hospital mais próximo"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
