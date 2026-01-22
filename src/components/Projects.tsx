"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ExternalLink, ShoppingCart, Sparkles, Bot, Gamepad2, Globe, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageProvider'

type Project = {
  id: string
  title: string
  description: string
  link: string
  icon: LucideIcon
  stats: string
  gradient: string
  bgGradient: string
  features: string[]
  tech: string[]
  allowsIframe: boolean
  iframeScale?: number
}

const projects: Project[] = [
  {
    id: "maqder",
    title: "Maqder ERP",
    description: "A complete enterprise resource planning (ERP) solution built for Saudi Arabia. Streamlines business operations including HR, finance, inventory, sales, and more with full Arabic support.",
    link: "https://maqder.com",
    icon: Globe,
    stats: "Full ERP",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-600 via-teal-600 to-emerald-700",
    features: ["HR Management", "Finance & Accounting", "Inventory Control"],
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    allowsIframe: true,
  },
  {
    id: "ai-smartbot",
    title: "AI Smartbot",
    description: "Create a FREE AI Chatbot for your website instantly. Just enter your URL and the chatbot educates itself about your business. Your ultimate AI assistant for 24/7 customer support.",
    link: "https://sitesgptbot.com",
    icon: Bot,
    stats: "FREE AI Bot",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-600 via-indigo-600 to-purple-700",
    features: ["Auto-learns from website", "24/7 Support", "Human handoff mode"],
    tech: ["React", "OpenAI", "LangChain", "RAG"],
    allowsIframe: true,
  },
  {
    id: "old-arcade",
    title: "Old Arcade",
    description: "A comprehensive gaming e-commerce platform offering a wide range of gaming products including consoles, peripherals, accessories, and PC components. Built for gamers, by gamers.",
    link: "https://old-arcade.com",
    icon: Gamepad2,
    stats: "500+ Products",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-600 via-orange-600 to-red-700",
    features: ["Gaming consoles", "PC components", "Secure payments"],
    tech: ["Next.js", "MongoDB", "Stripe", "Redux"],
    allowsIframe: true,
  },
  {
    id: "buysial",
    title: "Buysial Commerce",
    description: "A multi-role B2B/B2C e-commerce system for managing orders, logistics, and finances across multiple GCC countries. Complete with WhatsApp integration and multi-currency support.",
    link: "https://buysial.com",
    icon: ShoppingCart,
    stats: "13 Countries",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-600 via-yellow-600 to-amber-700",
    features: ["Multi-country ops", "WhatsApp integration", "Role-based access"],
    tech: ["React", "Node.js", "MongoDB", "WhatsApp API"],
    allowsIframe: true,
    iframeScale: 0.6,
  },
  {
    id: "khayyatos",
    title: "Khayyatos",
    description: "A premium brand website designed to showcase services, build trust, and drive conversions with a modern, responsive user experience.",
    link: "https://khayyatos.com",
    icon: Globe,
    stats: "Brand Site",
    gradient: "from-fuchsia-500 to-purple-500",
    bgGradient: "from-fuchsia-600 via-purple-600 to-fuchsia-700",
    features: ["Modern UI", "Responsive design", "Fast performance"],
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    allowsIframe: true,
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0d0d0d] dark:via-[#080808] dark:to-[#0d0d0d]" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">{t('projects.badge')}</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title').split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              {t('projects.title').split(' ').slice(1).join(' ') || t('projects.title')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects - One per row */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const iframeScale = project.iframeScale ?? 0.5
            const iframeSize = `${(1 / iframeScale) * 100}%`

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group"
              >
              <div className="relative bg-white dark:bg-[#111] rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Preview Area - Left Side */}
                  <div className={`relative h-64 sm:h-80 lg:h-auto lg:min-h-[320px] overflow-hidden bg-gradient-to-br ${project.bgGradient}`}>
                    {/* Gradient Fallback Background */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon size={100} className="text-white/10" strokeWidth={0.8} />
                    </div>
                    
                    {project.allowsIframe ? (
                      /* Live iframe Preview */
                      <div className="absolute inset-0 flex flex-col">
                        {/* Browser Chrome */}
                        <div className="bg-gray-900 px-3 py-2 flex items-center gap-2 flex-shrink-0">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 mx-2">
                            <div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 text-center truncate">
                              {project.link.replace('https://', '')}
                            </div>
                          </div>
                        </div>
                        {/* Scaled iframe container */}
                        <div className="flex-1 overflow-hidden relative">
                          <iframe
                            src={project.link}
                            className="absolute top-0 left-0 bg-white"
                            style={{
                              transform: `scale(${iframeScale})`,
                              transformOrigin: 'top left',
                              width: iframeSize,
                              height: iframeSize,
                            }}
                            title={`${project.title} Live Preview`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Screenshot Preview for sites that block iframes */
                      <div className="absolute inset-0 flex flex-col">
                        {/* Browser Chrome */}
                        <div className="bg-gray-900 px-3 py-2 flex items-center gap-2 flex-shrink-0">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 mx-2">
                            <div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 text-center truncate">
                              {project.link.replace('https://', '')}
                            </div>
                          </div>
                        </div>
                        {/* Screenshot Preview */}
                        <div className="flex-1 overflow-hidden relative bg-gray-900">
                          <img
                            src={`https://image.thum.io/get/width/800/crop/600/${project.link}`}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay with Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-sm font-semibold text-gray-900 hover:bg-amber-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                          {t('projects.visit')}
                        </a>
                        <Link
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-sm font-semibold text-black hover:shadow-lg transition-shadow"
                        >
                          {t('projects.details')}
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                        <project.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{t('projects.features')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-medium">
                            <CheckCircle size={14} />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{t('projects.tech')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techItem) => (
                          <span key={techItem} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/thehassans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-amber-500 hover:text-black font-medium transition-all duration-300"
          >
            {t('projects.github')}
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
