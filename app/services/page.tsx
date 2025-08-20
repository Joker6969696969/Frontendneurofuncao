"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Activity, Users, Stethoscope, Heart, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Brain,
      title: "Neurologia Pediátrica",
      titleEn: "Pediatric Neurology",
      description: "Diagnóstico e tratamento de distúrbios neurológicos em crianças e adolescentes.",
      descriptionEn: "Diagnosis and treatment of neurological disorders in children and adolescents.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Epilepsia", "Transtornos do Desenvolvimento", "Cefaleia", "Distúrbios do Sono"],
      featuresEn: ["Epilepsy", "Developmental Disorders", "Headache", "Sleep Disorders"],
      bgColor: "from-orange-100 to-orange-200",
    },
    {
      icon: Activity,
      title: "Fisioterapia Neurológica",
      titleEn: "Neurological Physiotherapy",
      description: "Reabilitação especializada para pacientes com lesões neurológicas.",
      descriptionEn: "Specialized rehabilitation for patients with neurological injuries.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Reabilitação Motora", "Fisioterapia Respiratória", "Estimulação Precoce", "Terapia Ocupacional"],
      featuresEn: ["Motor Rehabilitation", "Respiratory Physiotherapy", "Early Stimulation", "Occupational Therapy"],
      bgColor: "from-teal-100 to-teal-200",
    },
    {
      icon: Users,
      title: "Psicologia do Desenvolvimento",
      titleEn: "Developmental Psychology",
      description: "Avaliação e intervenção em distúrbios do desenvolvimento infantil.",
      descriptionEn: "Assessment and intervention in childhood developmental disorders.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Avaliação Neuropsicológica", "Terapia Comportamental", "Orientação Familiar", "Intervenção Precoce"],
      featuresEn: ["Neuropsychological Assessment", "Behavioral Therapy", "Family Guidance", "Early Intervention"],
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      icon: Stethoscope,
      title: "Neurologia Adulto",
      titleEn: "Adult Neurology",
      description: "Tratamento de distúrbios neurológicos em adultos e idosos.",
      descriptionEn: "Treatment of neurological disorders in adults and elderly.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["AVC", "Parkinson", "Alzheimer", "Esclerose Múltipla"],
      featuresEn: ["Stroke", "Parkinson", "Alzheimer", "Multiple Sclerosis"],
      bgColor: "from-purple-100 to-purple-200",
    },
    {
      icon: Heart,
      title: "Reabilitação Cardiorrespiratória",
      titleEn: "Cardiorespiratory Rehabilitation",
      description: "Fisioterapia especializada para pacientes com problemas cardiorrespiratórios.",
      descriptionEn: "Specialized physiotherapy for patients with cardiorespiratory problems.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Fisioterapia Respiratória", "Reabilitação Cardíaca", "Exercícios Terapêuticos", "Condicionamento"],
      featuresEn: ["Respiratory Physiotherapy", "Cardiac Rehabilitation", "Therapeutic Exercises", "Conditioning"],
      bgColor: "from-green-100 to-green-200",
    },
    {
      icon: Zap,
      title: "Estimulação Magnética",
      titleEn: "Magnetic Stimulation",
      description: "Tratamento não invasivo com estimulação magnética transcraniana.",
      descriptionEn: "Non-invasive treatment with transcranial magnetic stimulation.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Depressão", "Ansiedade", "Dor Crônica", "Reabilitação Cognitiva"],
      featuresEn: ["Depression", "Anxiety", "Chronic Pain", "Cognitive Rehabilitation"],
      bgColor: "from-yellow-100 to-yellow-200",
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("services.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} border-2`}
            >
              <div className="relative h-64">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <service.icon className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  {t("services.title") === "Our Services" ? service.titleEn : service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 font-medium">
                  {t("services.title") === "Our Services" ? service.descriptionEn : service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">
                    {t("services.title") === "Our Services" ? "Specialties:" : "Especialidades:"}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {(t("services.title") === "Our Services" ? service.featuresEn : service.features).map(
                      (feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700 flex items-center font-medium">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("services.process.title")}</h2>
            <p className="text-lg opacity-95">{t("services.process.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t("services.process.step1.title"),
                description: t("services.process.step1.description"),
              },
              {
                step: "02",
                title: t("services.process.step2.title"),
                description: t("services.process.step2.description"),
              },
              {
                step: "03",
                title: t("services.process.step3.title"),
                description: t("services.process.step3.description"),
              },
              {
                step: "04",
                title: t("services.process.step4.title"),
                description: t("services.process.step4.description"),
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-white/30">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
