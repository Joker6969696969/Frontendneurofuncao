"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Heart,
  Users,
  Award,
  Star,
  Stethoscope,
  Activity,
  Target,
  Briefcase,
  GraduationCap,
  User,
  Syringe,
  Microscope,
  Pill,
  Thermometer,
  Dna,
  FlaskRoundIcon as Flask,
  Monitor,
  Clipboard,
  MessageSquare,
  Smile,
  CheckCircle,
} from "lucide-react" // Added more icons
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { t } = useLanguage()

  const galleryImages = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Recepção" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Sala de Tratamento 1" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Sala de Fisioterapia" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Sala de Tratamento Pediátrico" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Sala de Espera" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Fachada da Clínica" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroBackgroundImages = [
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const foundersAnimatedIcons = [
    { icon: User, top: "10%", left: "5%", size: "h-16 w-16", delay: "delay-100" },
    { icon: Briefcase, top: "20%", right: "10%", size: "h-12 w-12", delay: "delay-300" },
    { icon: GraduationCap, bottom: "15%", left: "15%", size: "h-20 w-20", delay: "delay-500" },
    { icon: Stethoscope, top: "50%", left: "25%", size: "h-14 w-14", delay: "delay-700" },
    { icon: Award, bottom: "5%", right: "20%", size: "h-18 w-18", delay: "delay-900" },
    { icon: Brain, top: "30%", right: "30%", size: "h-10 w-10", delay: "delay-1100" },
    { icon: Heart, top: "40%", left: "10%", size: "h-16 w-16", delay: "delay-200" },
    { icon: Users, bottom: "25%", right: "5%", size: "h-12 w-12", delay: "delay-400" },
    { icon: Activity, top: "60%", right: "15%", size: "h-20 w-20", delay: "delay-600" },
    { icon: Target, bottom: "10%", left: "30%", size: "h-14 w-14", delay: "delay-800" },
  ]

  const galleryAnimatedIcons = [
    { icon: Syringe, top: "10%", left: "10%", size: "h-16 w-16", delay: "delay-100" },
    { icon: Microscope, top: "25%", right: "15%", size: "h-12 w-12", delay: "delay-300" },
    { icon: Pill, bottom: "20%", left: "5%", size: "h-20 w-20", delay: "delay-500" },
    { icon: Thermometer, top: "50%", left: "40%", size: "h-14 w-14", delay: "delay-700" },
    { icon: Dna, bottom: "10%", right: "10%", size: "h-18 w-18", delay: "delay-900" },
    { icon: Flask, top: "30%", right: "5%", size: "h-10 w-10", delay: "delay-1100" },
    { icon: Monitor, top: "5%", right: "30%", size: "h-16 w-16", delay: "delay-200" },
    { icon: Clipboard, bottom: "30%", left: "25%", size: "h-12 w-12", delay: "delay-400" },
    { icon: Stethoscope, top: "60%", left: "5%", size: "h-20 w-20", delay: "delay-600" },
    { icon: Brain, bottom: "5%", right: "30%", size: "h-14 w-14", delay: "delay-800" },
    { icon: Activity, top: "15%", left: "45%", size: "h-18 w-18", delay: "delay-1000" },
    { icon: Heart, bottom: "40%", right: "25%", size: "h-10 w-10", delay: "delay-1200" },
  ]

  const testimonialsAnimatedIcons = [
    { icon: User, top: "10%", left: "5%", size: "h-16 w-16", delay: "delay-100" },
    { icon: MessageSquare, top: "20%", right: "10%", size: "h-12 w-12", delay: "delay-300" },
    { icon: Smile, bottom: "15%", left: "15%", size: "h-20 w-20", delay: "delay-500" },
    { icon: CheckCircle, top: "50%", left: "25%", size: "h-14 w-14", delay: "delay-700" },
    { icon: Heart, bottom: "5%", right: "20%", size: "h-18 w-18", delay: "delay-900" },
    { icon: Star, top: "30%", right: "30%", size: "h-10 w-10", delay: "delay-1100" },
    { icon: Users, top: "40%", left: "10%", size: "h-16 w-16", delay: "delay-200" },
    { icon: MessageSquare, bottom: "25%", right: "5%", size: "h-12 w-12", delay: "delay-400" },
    { icon: Smile, top: "60%", right: "15%", size: "h-20 w-20", delay: "delay-600" },
    { icon: CheckCircle, bottom: "10%", left: "30%", size: "h-14 w-14", delay: "delay-800" },
    { icon: User, top: "15%", left: "45%", size: "h-18 w-18", delay: "delay-1000" },
    { icon: Star, bottom: "40%", right: "25%", size: "h-10 w-10", delay: "delay-1200" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Orange Gradient Background */}
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {heroBackgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-30" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-teal-500/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{t("home.hero.title")}</h1>
              <h2 className="text-xl md:text-2xl font-medium opacity-95">{t("home.hero.subtitle")}</h2>
              <p className="text-lg leading-relaxed opacity-90">{t("home.hero.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
                  {t("home.hero.cta1")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  {t("home.hero.cta2")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Equipe Médica"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Light Teal Background */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 z-0">
          {foundersAnimatedIcons.map((item, index) => (
            <item.icon
              key={index}
              className={`absolute text-orange-400 opacity-50 animate-float-smooth ${item.size} ${item.delay}`}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("home.founders.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.founders.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor 1 */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("home.founders.doctor1.name")}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("home.founders.doctor1.name")}</h3>
                <p className="text-teal-600 font-semibold mb-4">{t("home.founders.doctor1.specialty")}</p>
                <p className="text-gray-600">{t("home.founders.doctor1.description")}</p>
              </CardContent>
            </Card>

            {/* Doctor 2 */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("home.founders.doctor2.name")}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("home.founders.doctor2.name")}</h3>
                <p className="text-teal-600 font-semibold mb-4">{t("home.founders.doctor2.specialty")}</p>
                <p className="text-gray-600">{t("home.founders.doctor2.description")}</p>
              </CardContent>
            </Card>

            {/* Doctor 3 */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("home.founders.doctor3.name")}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("home.founders.doctor3.name")}</h3>
                <p className="text-teal-600 font-semibold mb-4">{t("home.founders.doctor3.specialty")}</p>
                <p className="text-gray-600">{t("home.founders.doctor3.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section - Orange Gradient Background */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 z-0">
          {galleryAnimatedIcons.map((item, index) => (
            <item.icon
              key={index}
              className={`absolute text-teal-300 opacity-50 animate-float-smooth ${item.size} ${item.delay}`}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("home.gallery.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.gallery.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Teal Background */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("home.features.specialization.title")}</h3>
              <p className="text-white/90 text-sm">{t("home.features.specialization.description")}</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("home.features.personalized.title")}</h3>
              <p className="text-white/90 text-sm">{t("home.features.personalized.description")}</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("home.features.experienced.title")}</h3>
              <p className="text-white/90 text-sm">{t("home.features.experienced.description")}</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("home.features.excellence.title")}</h3>
              <p className="text-white/90 text-sm">{t("home.features.excellence.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Light Background with Colorful Cards */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 z-0">
          {testimonialsAnimatedIcons.map((item, index) => (
            <item.icon
              key={index}
              className={`absolute text-orange-200 opacity-50 animate-float-smooth ${item.size} ${item.delay}`}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("home.testimonials.title")}</h2>
            <p className="text-xl text-gray-600">{t("home.testimonials.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { bg: "bg-gradient-to-br from-orange-100 to-orange-200", border: "border-orange-300" },
              { bg: "bg-gradient-to-br from-teal-100 to-teal-200", border: "border-teal-300" },
              { bg: "bg-gradient-to-br from-blue-100 to-blue-200", border: "border-blue-300" },
            ].map((style, i) => (
              <Card
                key={i}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${style.bg} ${style.border} border-2`}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 font-medium">
                    "Excelente atendimento e profissionais muito competentes. Meu filho teve uma melhora significativa
                    após o tratamento."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&query=patient testimonial portrait ${i + 1}`}
                      alt="Paciente"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Maria Silva</p>
                      <p className="text-sm text-gray-600">Mãe de paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Orange to Teal Gradient */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-95">{t("home.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              {t("home.hero.cta1")}
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                {t("nav.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
