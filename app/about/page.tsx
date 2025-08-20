"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Target, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t("about.title") === "About Us" ? "Humanized Care" : "Cuidado Humanizado",
      description:
        t("about.title") === "About Us"
          ? "We treat each patient with care, respect and individual dedication."
          : "Tratamos cada paciente com carinho, respeito e dedicação individual.",
      bgColor: "from-pink-100 to-pink-200",
    },
    {
      icon: Award,
      title: t("about.title") === "About Us" ? "Professional Excellence" : "Excelência Profissional",
      description:
        t("about.title") === "About Us"
          ? "We constantly seek to update and improve our knowledge."
          : "Buscamos constantemente a atualização e aperfeiçoamento de nossos conhecimentos.",
      bgColor: "from-yellow-100 to-yellow-200",
    },
    {
      icon: Users,
      title: t("about.title") === "About Us" ? "Teamwork" : "Trabalho em Equipe",
      description:
        t("about.title") === "About Us"
          ? "We believe in the power of multidisciplinary collaboration for better results."
          : "Acreditamos na força da colaboração multidisciplinar para melhores resultados.",
      bgColor: "from-blue-100 to-blue-200",
    },
    {
      icon: Target,
      title: t("about.title") === "About Us" ? "Focus on Results" : "Foco no Resultado",
      description:
        t("about.title") === "About Us"
          ? "Our goal is always to provide the best quality of life for our patients."
          : "Nosso objetivo é sempre proporcionar a melhor qualidade de vida aos nossos pacientes.",
      bgColor: "from-green-100 to-green-200",
    },
  ]

  const achievements =
    t("about.title") === "About Us"
      ? [
          "More than 1000 patients served",
          "15 years of combined experience",
          "International certifications",
          "State-of-the-art equipment",
          "Partnerships with renowned hospitals",
          "Continuing education program",
        ]
      : [
          "Mais de 1000 pacientes atendidos",
          "15 anos de experiência combinada",
          "Certificações internacionais",
          "Equipamentos de última geração",
          "Parcerias com hospitais renomados",
          "Programa de educação continuada",
        ]

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("about.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl border-2 border-orange-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.mission.title")}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t("about.mission.description1")}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t("about.mission.description2")}</p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Equipe médica"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("about.values.title")}</h2>
            <p className="text-lg text-gray-600">{t("about.values.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${value.bgColor} border-2`}
              >
                <CardContent className="p-8">
                  <div className="bg-white/50 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                    <value.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Doctor Profiles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("about.team.title")}</h2>
            <p className="text-lg text-gray-600">{t("about.team.subtitle")}</p>
          </div>

          <div className="space-y-12">
            {/* Doctor 1 */}
            <Card className="overflow-hidden shadow-2xl bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt={t("home.founders.doctor1.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor1.name")}</h3>
                  <p className="text-orange-600 font-semibold mb-4 text-lg">{t("home.founders.doctor1.specialty")}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t("about.title") === "About Us"
                      ? "Graduated from the Federal University of São Paulo (UNIFESP), with residency in Pediatric Neurology at Hospital das Clínicas. Has specialization in Childhood Epilepsy from Harvard Medical School and is a member of the Brazilian Society of Pediatric Neurology."
                      : "Formado pela Universidade Federal de São Paulo (UNIFESP), com residência em Neurologia Pediátrica no Hospital das Clínicas. Possui especialização em Epilepsia Infantil pela Harvard Medical School e é membro da Sociedade Brasileira de Neurologia Pediátrica."}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• {t("about.title") === "About Us" ? "Childhood Epilepsy" : "Epilepsia Infantil"}</li>
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "Neurodevelopmental Disorders"
                          : "Transtornos do Neurodesenvolvimento"}
                      </li>
                      <li>• {t("about.title") === "About Us" ? "Headache in Children" : "Cefaleia em Crianças"}</li>
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "Pediatric Sleep Disorders"
                          : "Distúrbios do Sono Pediátrico"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Doctor 2 */}
            <Card className="overflow-hidden shadow-2xl bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt={t("home.founders.doctor2.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor2.name")}</h3>
                  <p className="text-teal-600 font-semibold mb-4 text-lg">{t("home.founders.doctor2.specialty")}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t("about.title") === "About Us"
                      ? "Graduated in Physiotherapy from PUC-SP, with specialization in Neurological Physiotherapy from AACD. Has a master's degree in Rehabilitation Sciences and international certification in the Bobath Concept for treating neurological patients."
                      : "Graduada em Fisioterapia pela PUC-SP, com especialização em Fisioterapia Neurológica pela AACD. Possui mestrado em Ciências da Reabilitação e certificação internacional em Conceito Bobath para tratamento de pacientes neurológicos."}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • {t("about.title") === "About Us" ? "Neurological Rehabilitation" : "Reabilitação Neurológica"}
                      </li>
                      <li>
                        • {t("about.title") === "About Us" ? "Respiratory Physiotherapy" : "Fisioterapia Respiratória"}
                      </li>
                      <li>• {t("about.title") === "About Us" ? "Early Stimulation" : "Estimulação Precoce"}</li>
                      <li>• {t("about.title") === "About Us" ? "Bobath Concept" : "Conceito Bobath"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Doctor 3 */}
            <Card className="overflow-hidden shadow-2xl bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt={t("home.founders.doctor3.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor3.name")}</h3>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{t("home.founders.doctor3.specialty")}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t("about.title") === "About Us"
                      ? "Psychologist graduated from USP, with specialization in Neuropsychology from Hospital das Clínicas. PhD in Developmental Psychology from UNICAMP and specialist in Autism Spectrum Disorders from the University of Barcelona."
                      : "Psicólogo formado pela USP, com especialização em Neuropsicologia pelo Hospital das Clínicas. Doutor em Psicologia do Desenvolvimento pela UNICAMP e especialista em Transtornos do Espectro Autista pela Universidade de Barcelona."}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "Neuropsychological Assessment"
                          : "Avaliação Neuropsicológica"}
                      </li>
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "Autism Spectrum Disorders"
                          : "Transtornos do Espectro Autista"}
                      </li>
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "ADHD and Learning Difficulties"
                          : "TDAH e Dificuldades de Aprendizagem"}
                      </li>
                      <li>
                        •{" "}
                        {t("about.title") === "About Us"
                          ? "Cognitive Behavioral Therapy"
                          : "Terapia Cognitivo-Comportamental"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("about.achievements.title")}</h2>
              <p className="text-lg opacity-95">{t("about.achievements.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30"
                >
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("about.facility.title")}</h2>
            <p className="text-lg text-gray-600">{t("about.facility.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Recepção da clínica"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6 bg-gradient-to-br from-orange-100 to-teal-100 p-8 rounded-2xl border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("about.title") === "About Us" ? "Complete Structure" : "Estrutura Completa"}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t("about.facility.description")}</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us"
                      ? "Air-conditioned consultation rooms"
                      : "Salas de consulta climatizadas"}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us"
                      ? "Modern physiotherapy equipment"
                      : "Equipamentos de fisioterapia modernos"}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us" ? "Magnetic stimulation room" : "Sala de estimulação magnética"}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us" ? "Children's recreation area" : "Área de recreação infantil"}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us" ? "Private parking" : "Estacionamento próprio"}
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    {t("about.title") === "About Us" ? "Full accessibility" : "Acessibilidade completa"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
