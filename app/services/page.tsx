"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Activity, Users, Stethoscope, Heart, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const servicesAnimatedIcons = [
    { icon: Brain, top: "10%", left: "5%", size: "h-16 w-16", delay: "delay-100" },
    { icon: Activity, top: "20%", right: "10%", size: "h-12 w-12", delay: "delay-300" },
    { icon: Users, bottom: "15%", left: "15%", size: "h-20 w-20", delay: "delay-500" },
    { icon: Stethoscope, top: "50%", left: "25%", size: "h-14 w-14", delay: "delay-700" },
    { icon: Heart, bottom: "5%", right: "20%", size: "h-18 w-18", delay: "delay-900" },
    { icon: Zap, top: "30%", right: "30%", size: "h-10 w-10", delay: "delay-1100" },
    { icon: Brain, top: "40%", left: "10%", size: "h-16 w-16", delay: "delay-200" },
    { icon: Activity, bottom: "25%", right: "5%", size: "h-12 w-12", delay: "delay-400" },
    { icon: Users, top: "60%", right: "15%", size: "h-20 w-20", delay: "delay-600" },
    { icon: Stethoscope, bottom: "10%", left: "30%", size: "h-14 w-14", delay: "delay-800" },
    { icon: Heart, top: "15%", left: "45%", size: "h-18 w-18", delay: "delay-1000" },
    { icon: Zap, bottom: "40%", right: "25%", size: "h-10 w-10", delay: "delay-1200" },
    { icon: Brain, top: "5%", right: "50%", size: "h-14 w-14", delay: "delay-100" },
    { icon: Activity, bottom: "20%", left: "40%", size: "h-16 w-16", delay: "delay-300" },
    { icon: Users, top: "70%", left: "50%", size: "h-12 w-12", delay: "delay-500" },
    { icon: Stethoscope, top: "25%", right: "25%", size: "h-18 w-18", delay: "delay-700" },
    { icon: Heart, bottom: "30%", left: "5%", size: "h-10 w-10", delay: "delay-900" },
    { icon: Zap, top: "80%", right: "5%", size: "h-16 w-16", delay: "delay-1100" },
    { icon: Brain, top: "45%", left: "60%", size: "h-12 w-12", delay: "delay-200" },
    { icon: Activity, bottom: "10%", right: "45%", size: "h-14 w-14", delay: "delay-400" },
    { icon: Users, top: "12%", left: "70%", size: "h-18 w-18", delay: "delay-150" },
    { icon: Stethoscope, bottom: "8%", right: "30%", size: "h-16 w-16", delay: "delay-350" },
    { icon: Heart, top: "65%", left: "5%", size: "h-14 w-14", delay: "delay-550" },
    { icon: Zap, bottom: "50%", right: "12%", size: "h-10 w-10", delay: "delay-750" },
    { icon: Brain, top: "28%", left: "80%", size: "h-20 w-20", delay: "delay-950" },
    { icon: Activity, bottom: "18%", left: "20%", size: "h-12 w-12", delay: "delay-1150" },
  ];

  const services = [
    {
      icon: Brain,
      title: "Exobots",
      titleEn: "Exobots",
      description: "Terapia com exoesqueletos robóticos para reabilitação motora e recuperação funcional.",
      descriptionEn: "Robotic exoskeleton therapy for motor rehabilitation and functional recovery.",
      image: "/1.jpg",
      features: ["Reabilitação de marcha", "Recuperação de força", "Treinamento funcional"],
      featuresEn: ["Gait rehabilitation", "Strength recovery", "Functional training"],
      bgColor: "from-orange-100 to-orange-200",
    },
    {
      icon: Activity,
      title: "Estimulação Visual e Terapia Ocular",
      titleEn: "Visual Stimulation & Ocular Therapy",
      description: "Estimulação visual e tratamento das disfunções oculomotoras e visuais.",
      descriptionEn: "Visual stimulation and treatment of oculomotor and visual dysfunctions.",
      image: "/2.avif",
      features: ["Treino oculomotor", "Reabilitação visual", "Terapia perceptiva"],
      featuresEn: ["Oculomotor training", "Visual rehabilitation", "Perceptual therapy"],
      bgColor: "from-teal-100 to-teal-200",
    },
    {
      icon: Users,
      title: "Fisioterapia Neurofuncional (Adulto/Idoso)",
      titleEn: "Neurofunctional Physiotherapy (Adult/Elderly)",
      description: "Fisioterapia neurofuncional para adultos e idosos, com foco em mobilidade, equilíbrio e independência.",
      descriptionEn: "Neurofunctional physiotherapy for adults and elderly, focused on mobility, balance and independence.",
      image: "/3.png",
      features: ["Treino de equilíbrio", "Reabilitação funcional", "Ganho de autonomia"],
      featuresEn: ["Balance training", "Functional rehabilitation", "Autonomy improvement"],
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia Neurofuncional (Criança/Adolescente)",
      titleEn: "Neurofunctional Physiotherapy (Child/Adolescent)",
      description: "Intervenções específicas para desenvolvimento motor em crianças e adolescentes.",
      descriptionEn: "Targeted interventions for motor development in children and adolescents.",
      image: "/4.jpg",
      features: ["Estimulação precoce", "Treino motor", "Apoio ao desenvolvimento"],
      featuresEn: ["Early stimulation", "Motor training", "Developmental support"],
      bgColor: "from-purple-100 to-purple-200",
    },
    {
      icon: Heart,
      title: "Fonoaudiologia",
      titleEn: "Speech-Language Pathology",
      description: "Avaliação e tratamento de fala, linguagem, deglutição e comunicação alternativa.",
      descriptionEn: "Assessment and treatment of speech, language, swallowing and alternative communication.",
      image: "/5.png",
      features: ["Avaliação da fala", "Intervenção em linguagem", "Reabilitação da deglutição"],
      featuresEn: ["Speech assessment", "Language intervention", "Swallowing rehabilitation"],
      bgColor: "from-green-100 to-green-200",
    },
    {
      icon: Zap,
      title: "Gameterapia",
      titleEn: "Gametherapy",
      description: "Uso de jogos interativos e tecnologia para estimular movimento, cognição e motivação ao tratamento.",
      descriptionEn: "Use of interactive games and technology to stimulate movement, cognition and treatment motivation.",
      image: "/6.jpg",
      features: ["Reabilitação lúdica", "Estímulo cognitivo", "Adesão ao tratamento"],
      featuresEn: ["Playful rehab", "Cognitive stimulation", "Treatment adherence"],
      bgColor: "from-yellow-100 to-yellow-200",
    },
    {
      icon: Brain,
      title: "Home Care",
      titleEn: "Home Care",
      description: "Atendimento multidisciplinar domiciliar para reabilitação, cuidados pós-alta e suporte contínuo.",
      descriptionEn: "Multidisciplinary home care for rehabilitation, post-discharge support and ongoing assistance.",
      image: "/7.png",
      features: ["Visitas domiciliares", "Cuidados personalizados", "Treinamento familiar"],
      featuresEn: ["Home visits", "Personalized care", "Family training"],
      bgColor: "from-orange-100 to-orange-200",
    },
    {
      icon: Activity,
      title: "Neuromodulação Não Invasiva",
      titleEn: "Non-Invasive Neuromodulation",
      description: "Terapias como tDCS, TMS, tACS e outras para reabilitação neurológica e controle da dor.",
      descriptionEn: "Therapies such as tDCS, TMS, tACS and others for neurological rehabilitation and pain control.",
      image: "/8.jpg",
      features: ["tDCS / TMS / tACS", "Reabilitação cognitiva", "Controle da dor"],
      featuresEn: ["tDCS / TMS / tACS", "Cognitive rehabilitation", "Pain management"],
      bgColor: "from-teal-100 to-teal-200",
    },
    {
      icon: Users,
      title: "Óculos de Realidade Virtual",
      titleEn: "Virtual Reality Glasses",
      description: "Terapias imersivas com realidade virtual para treino de marcha, equilíbrio e estimulação sensorial.",
      descriptionEn: "Immersive virtual reality therapies for gait training, balance and sensory stimulation.",
      image: "/9.jpg",
      features: ["Treino de marcha", "Estimulação sensorial", "Reabilitação motivadora"],
      featuresEn: ["Gait training", "Sensory stimulation", "Motivating rehab"],
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      icon: Stethoscope,
      title: "Programas para Lesão Medular, AVC e Doenças Neurodegenerativas",
      titleEn: "Programs for Spinal Cord Injury, Stroke & Neurodegenerative Diseases",
      description: "Programas especializados com protocolos de reabilitação e acompanhamento para recuperação funcional.",
      descriptionEn: "Specialized programs with rehabilitation protocols and follow-up for functional recovery.",
      image: "/10.jpg",
      features: ["Protocolos personalizados", "Reabilitação intensiva", "Acompanhamento multidisciplinar"],
      featuresEn: ["Personalized protocols", "Intensive rehabilitation", "Multidisciplinary follow-up"],
      bgColor: "from-purple-100 to-purple-200",
    },
    {
      icon: Heart,
      title: "Psicologia Clínica",
      titleEn: "Clinical Psychology",
      description: "Atendimento psicológico para pacientes e famílias, apoio emocional e intervenção psicoterapêutica.",
      descriptionEn: "Psychological care for patients and families, emotional support and psychotherapeutic intervention.",
      image: "/11.jpg",
      features: ["Apoio emocional", "Terapia individual", "Intervenção familiar"],
      featuresEn: ["Emotional support", "Individual therapy", "Family intervention"],
      bgColor: "from-green-100 to-green-200",
    },
    {
      icon: Zap,
      title: "Terapia Ocupacional",
      titleEn: "Occupational Therapy",
      description: "Intervenções para promover autonomia nas atividades diárias e reintegração funcional.",
      descriptionEn: "Interventions to promote autonomy in daily activities and functional reintegration.",
      image: "/12.jpg",
      features: ["Atividades diárias", "Adaptação do ambiente", "Treino de habilidades"],
      featuresEn: ["Daily activities", "Environmental adaptation", "Skills training"],
      bgColor: "from-yellow-100 to-yellow-200",
    },
    {
      icon: Brain,
      title: "Tratamento da Dor Crônica",
      titleEn: "Chronic Pain Treatment",
      description: "Abordagem multidisciplinar para avaliação e manejo da dor crônica, incluindo técnicas fisioterapêuticas.",
      descriptionEn: "Multidisciplinary approach for assessment and management of chronic pain, including physiotherapy techniques.",
      image: "/13.jpg",
      features: ["Avaliação da dor", "Terapias intervencionistas", "Reabilitação funcional"],
      featuresEn: ["Pain assessment", "Interventional therapies", "Functional rehabilitation"],
      bgColor: "from-orange-100 to-orange-200",
    },
    {
      icon: Activity,
      title: "Tratamento Especializado para Tonturas",
      titleEn: "Specialized Dizziness Treatment",
      description: "Avaliação vestibular e programas de reabilitação vestibular para tonturas e desequilíbrios.",
      descriptionEn: "Vestibular assessment and vestibular rehabilitation programs for dizziness and imbalance.",
      image: "/14.jpg",
      features: ["Avaliação vestibular", "Exercícios de equilíbrio", "Reabilitação vestibular"],
      featuresEn: ["Vestibular assessment", "Balance exercises", "Vestibular rehab"],
      bgColor: "from-teal-100 to-teal-200",
    },
    {
      icon: Users,
      title: "Treinamento Isoinercial",
      titleEn: "Isoinertial Training",
      description: "Treinamento de força e potência com dispositivos isoinerciais para melhora da performance funcional.",
      descriptionEn: "Strength and power training with isoinertial devices to improve functional performance.",
      image: "/15.jpg",
      features: ["Fortalecimento", "Potência muscular", "Prevenção de lesões"],
      featuresEn: ["Strengthening", "Muscle power", "Injury prevention"],
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      icon: Stethoscope,
      title: "Treinamento Locomotor em Esteira com Suspensão de Peso",
      titleEn: "Treadmill Locomotor Training with Body-Weight Support",
      description: "Treinamento de marcha assistido em esteira com suspensão de peso para recuperação da deambulação funcional.",
      descriptionEn: "Assisted treadmill gait training with body-weight support for recovery of functional ambulation.",
      image: "/16.jpg",
      features: ["Treino de marcha assistido", "Controle postural", "Progressão de carga"],
      featuresEn: ["Assisted gait training", "Postural control", "Load progression"],
      bgColor: "from-purple-100 to-purple-200",
    },
  ];
  

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 z-0 opacity-30">
        {servicesAnimatedIcons.map((item, index) => (
          <item.icon
            key={index}
            className={`absolute text-teal-400 animate-float-smooth ${item.size} ${item.delay}`}
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("services.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} border-2 group`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-full">
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
