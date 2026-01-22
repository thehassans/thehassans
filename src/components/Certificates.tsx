"use client"

import { motion } from 'framer-motion'
import { Award, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageProvider'

const certificates = [
  {
    id: 1,
    title: "Complete Web Developer Bootcamp: Beginner to Advanced",
    issuer: "Udemy",
    instructor: "Fatah Gabrial",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-65de53fe-0c7e-4007-b264-9d531a3048f2.jpg",
    credentialUrl: "https://www.udemy.com/certificate/UC-65de53fe-0c7e-4007-b264-9d531a3048f2/",
    date: "Jan 2026",
    hours: "40.5"
  },
  {
    id: 2,
    title: "Complete Generative AI Course With Langchain and Huggingface",
    issuer: "Udemy",
    instructor: "Krish Naik",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-a1156e8c-b3b5-4e0e-97d2-f5b85ce83c88.jpg",
    credentialUrl: "https://www.udemy.com/certificate/UC-a1156e8c-b3b5-4e0e-97d2-f5b85ce83c88/",
    date: "July 2025",
    hours: "54"
  }
]

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
              {t('cert.badge')}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cert.title').split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              {t('cert.title').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('cert.subtitle')}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 transition-all duration-500 shadow-lg hover:shadow-amber-500/10">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Issuer Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-medium text-white">{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {t('cert.instructor')}: <span className="text-gray-700 dark:text-gray-300">{cert.instructor}</span>
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{cert.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    <span>{cert.hours} {t('cert.hours')}</span>
                  </div>
                  
                  {/* Verify Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-sm font-medium hover:from-amber-500/20 hover:to-yellow-500/20 transition-all duration-300 group/btn"
                  >
                    <span>{t('cert.verify')}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
