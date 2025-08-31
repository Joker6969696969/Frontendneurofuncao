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
                src="/Team.jpg?height=500&width=600"
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
                    src="/Founder.jpg?height=400&width=400"
                    alt={t("home.founders.doctor1.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor1.name")}</h3>
  <p className="text-orange-600 font-semibold mb-4 text-lg">{t("home.founders.doctor1.specialty")}</p>

  {/* Multi-line description (each line is its own <p>, no semicolons) */}
  <div className="text-gray-700 mb-6 leading-relaxed">
    {(() => {
      const engLines = [
        "Graduated in Physiotherapy from the Methodist University Center of IPA (2011).",
        "Postgraduate degree in Health and Sports Sciences from PUCRS (2013).",
        "Training in the Basic and Advanced Adult Bobath Concept (2014/2015/2017/2018/2020/2023).",
        "Training in the Mulligan Concept (2015).",
        "Training in Ophthalmic Physiotherapy (2015).",
        "Training in the Kinesio Taping Method - KT1 and KT2 (2016).",
        "Training in the PNF Concept (2016) Specialist in Neurofunctional Physiotherapy by Abrafin (2016).",
        "Visual Therapy Training - IPEC - AR (2018).",
        "Postgraduate degree in Ophthalmic Physiotherapy and Visual Rehabilitation FG Faculdades (2018).",
        "Screener enabled by the H'Olhos foundation (2018).",
        "Training in Non-invasive Neuromodulation by USP (2019/2023).",
        "Master in Human Aging from UPF (2022).",
        "Postgraduate student in orthoptics (2023).",
        "He is the creator and content producer of the Neurofunção portal.",
        "Professor of Training Courses in Ocular Physiotherapy with emphasis on oculomotor and visual dysfunctions after brain injury.",
        "Professor of the Physiotherapy Course at ATITUS EDUCAÇÃO and at the Multiprofessional Residency in Neurology and Neurosurgery at the Hospital de Clínicas de Passo Fundo/RS.",
        "Experience in Neurofunctional Physiotherapy, Vestibular Physiotherapy and Ocular Physiotherapy, with an emphasis on Human Motor Behavior."
      ];

      const ptLines = [
        "Possui graduação em Fisioterapia pelo Centro Universitário Metodista do IPA (2011).",
        "Pós-graduação em Ciências da Saúde e do Esporte pela PUCRS (2013).",
        "Formação no Conceito Bobath Adulto Básico e Avançado (2014/2015/2017/2018/2020/2023).",
        "Formação no Conceito Mulligan (2015).",
        "Formação em Fisioterapia Oftálmica (2015).",
        "Formação no Método Kinesio Taping - KT1 e KT2 (2016).",
        "Formação no Conceito PNF (2016) Especialista em Fisioterapia Neurofuncional pela Abrafin (2016).",
        "Treinamento em Terapia Visual - IPEC - AR (2018).",
        "Pós-graduação em Fisioterapia Oftálmica e Reabilitação Visual FG Faculdades (2018).",
        "Screener habilitado pela fundação H'Olhos (2018).",
        "Treinamento em Neuromodulação não invasiva pela USP (2019/2023).",
        "Mestre em Envelhecimento Humano pela UPF (2022).",
        "Pós-graduando em ortóptica (2023).",
        "É Idealizador e produtor de conteúdo do portal Neurofunção.",
        "Professor de Cursos de Formação em Fisioterapia Ocular com ênfase nas disfunções oculomotoras e visuais após lesão encefálica.",
        "Docente do Curso de Fisioterapia da ATITUS EDUCAÇÃO e na Residência Multiprofissional em Neurologia e Neurocirurgia do Hospital de Clínicas de Passo Fundo/RS.",
        "Experiência em Fisioterapia Neurofuncional, Fisioterapia Vestibular e Fisioterapia Ocular, com ênfase no Comportamento Motor Humano."
      ];

      const lines = t("about.title") === "About Us" ? engLines : ptLines;

      return lines.map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ));
    })()}
  </div>

  <div className="space-y-2">
    <h4 className="font-semibold text-gray-900">
      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
    </h4>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>• {t("about.title") === "About Us" ? "Childhood Epilepsy" : "Epilepsia Infantil"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Neurodevelopmental Disorders" : "Transtornos do Neurodesenvolvimento"}
      </li>
      <li>• {t("about.title") === "About Us" ? "Headache in Children" : "Cefaleia em Crianças"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Pediatric Sleep Disorders" : "Distúrbios do Sono Pediátrico"}
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
                    src="/Founder22.jpg?height=400&width=400"
                    alt={t("home.founders.doctor2.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor2.name")}</h3>
  <p className="text-orange-600 font-semibold mb-4 text-lg">{t("home.founders.doctor2.specialty")}</p>

  {/* Multi-line description (each line is its own <p>, blank lines preserved) */}
  <div className="text-gray-700 mb-6 leading-relaxed">
    {(() => {
      const engLines = [
        "Graduated from the University of Passo Fundo.",
        "Improving in Childhood Apraxia of Speech ABRAPRAXIA.",
        "Specialist in Rehabilitation Applied to Child Neurology FCM/UNICAMP.",
        "Specialist in Speech-Language Pathology in Autism Spectrum Disorder CBI of MIAMI.",
        "",
        "Multigesture Speech Method Training.",
        "Training in Childhood Apraxia of Speech Assessment and Intervention-PG Health.",
        "Advanced Training in Childhood Apraxia of Speech-PG Health.",
        "Motor Speech Disorders Training-ABRAPRAXIA.",
        "Rest Treatment Training-ABRAPRAXIA.",
        "Introduction to the DTTC Method-ABRAPRAXIA.",
        "Therapy Training for Childhood Apraxia of Speech-ABRAPRAXIA.",
        "",
        "Professional Qualification in APRAXIA.",
        "Training in Autism, Language Construction, and the Social Brain – CBI of Miami.",
        "Training in Speech-Language Pathology Intervention for ASD based on ABA-LUNA EDUCATION.",
        "Training in Psychomotricity.",
        "Training in Applied Behavior Analysis and Autism Spectrum Disorder.",
        "ABA Training.",
        "",
        "Applied Behavior Analysis (ABA) Training.",
        "Picture Exchange Communication System (PECS) Training.",
        "Bobath Neuroevolutionary Concept Training: Basic, Baby, and Advanced.",
        "Sensory Integration Training.",
        "Augmentative and Alternative Communication Training.",
        "Childhood Dysphagia Training.",
        "International Neuromuscular Taping Training.",
        "Get Permission Approach Training."
      ];

      const ptLines = [
        "Formada pela Universidade de Passo Fundo.",
        "Aprimoranda em Apraxia de Fala na Infância ABRAPRAXIA.",
        "Especialista em Reabilitação Aplicada a Neurologia Infantil FCM/UNICAMP.",
        "Especialista em Fonoaudiologia no Transtorno do Espectro Autista CBI of MIAMI.",
        "",
        "Formação Método Multigestos Fala.",
        "Formação em Apraxia de Fala na infância avaliação e intervenção-PG Saúde.",
        "Formação Avançada em Apraxia de fala na infância-PG Saúde.",
        "Formação Transtornos Motores da Fala–ABRAPRAXIA.",
        "Formação Rest Treatment-ABRAPRAXIA.",
        "Formação Introdução ao Método DTTC-ABRAPRAXIA.",
        "Formação Terapia para Apraxia da Fala na Infância-ABRAPRAXIA.",
        "",
        "Qualificação Profissional em APRAXIA.",
        "Formação Autismo Construção da Linguagem e o Cérebro Social–CBI of Miami.",
        "Formação Intervenção Fonoaudiologica para TEA baseado em ABA-LUNA EDUCAÇÃO.",
        "Formação em Psicomotricidade.",
        "Formação em Analise do Comportamento Aplicada e Transtorno do Espectro Autista Capacitação em ABA.",
        "",
        "Treinamento em Análise Comportamental Aplicada (ABA).",
        "Formação Picture Exchange Communication System (PECS).",
        "Formação Conceito Neuroevolutivo Bobath Básico, Baby e Avançado.",
        "Formação em Integração Sensorial.",
        "Formação em Comunicação Suplementar e Alternativa.",
        "Formação em Disfagia Infantil.",
        "Formação Internacional em Tapyng Neuromuscular.",
        "Formação Get Permission Approach."
      ];

      const lines = t("about.title") === "About Us" ? engLines : ptLines;
      return lines.map((line, i) => (
        // empty string will render an empty <p> to preserve blank lines
        <p key={i} className="mb-2">
          {line}
        </p>
      ));
    })()}
  </div>

  <div className="space-y-2">
    <h4 className="font-semibold text-gray-900">
      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
    </h4>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>• {t("about.title") === "About Us" ? "Childhood Epilepsy" : "Epilepsia Infantil"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Neurodevelopmental Disorders" : "Transtornos do Neurodesenvolvimento"}
      </li>
      <li>• {t("about.title") === "About Us" ? "Headache in Children" : "Cefaleia em Crianças"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Pediatric Sleep Disorders" : "Distúrbios do Sono Pediátrico"}
      </li>
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
                    src="/Founder3.jpg?height=400&width=400"
                    alt={t("home.founders.doctor3.name")}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("home.founders.doctor3.name")}</h3>
  <p className="text-orange-600 font-semibold mb-4 text-lg">{t("home.founders.doctor3.specialty")}</p>

  {/* Multi-line description (each line is its own <p>, exact lines provided) */}
  <div className="text-gray-700 mb-6 leading-relaxed">
    {(() => {
      const engLines = [
        "Specialist in Autism Spectrum Disorder IPPEO.",
        "Training in the Bobath Neuroevolutionary Concept.",
        "International Training in Sensory Processing in ASD.",
        "International Training in Sensory Changes in Eating in ASD.",
        "Training in Naturalistic Teaching Strategies Based on the Denver Model of Early Intervention Training in PROTEA-R application.",
        "Specialized Educational Assistance, focusing on ASD.",
        "Training in Applied Behavior Analysis (ABA).",
        "In International Certification Training in Ayres Sensory Integration by Clasi."
      ];

      const ptLines = [
        "Especialista em Transtorno do Espectro do Autismo IPPEO.",
        "Formação no Conceito Neuroevolutivo Bobath.",
        "Formação Internacional em Processamento Sensorial em TEA.",
        "Formação Internacional em Alterações Sensoriais na Alimentação em TEA.",
        "Formação em Estratégias de Ensino Naturalistas Baseadas no Modelo Denver de Intervenção Precoce Formação em aplicação PROTEA-R.",
        "Atendimento Educacional Especializado, enfoque em TEA.",
        "Treinamento em Análise Comportamental Aplicada (ABA).",
        "Em Formação de Certificação Internacional em Integração Sensorial de Ayres pela Clasi."
      ];

      const lines = t("about.title") === "About Us" ? engLines : ptLines;
      return lines.map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ));
    })()}
  </div>

  <div className="space-y-2">
    <h4 className="font-semibold text-gray-900">
      {t("about.title") === "About Us" ? "Specializations:" : "Especializações:"}
    </h4>
    <ul className="text-sm text-gray-700 space-y-1">
      <li>• {t("about.title") === "About Us" ? "Childhood Epilepsy" : "Epilepsia Infantil"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Neurodevelopmental Disorders" : "Transtornos do Neurodesenvolvimento"}
      </li>
      <li>• {t("about.title") === "About Us" ? "Headache in Children" : "Cefaleia em Crianças"}</li>
      <li>
        •{" "}
        {t("about.title") === "About Us" ? "Pediatric Sleep Disorders" : "Distúrbios do Sono Pediátrico"}
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
                src="/Kid.jpg?height=400&width=600"
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
