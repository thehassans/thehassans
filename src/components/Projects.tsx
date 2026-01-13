"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ExternalLink, ShoppingCart, Cloud, Plane, Sparkles, Bot, Gamepad2, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const projects = [
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
  },
  {
    id: "magnetic-clouds",
    title: "Magnet Clouds",
    description: "A comprehensive cloud services company offering 13+ different services including cutting-edge AI solutions like Nobot AI for intelligent chatbots and Magnetic ShieldX for security.",
    link: "https://magnetic-clouds.com",
    icon: Cloud,
    stats: "13+ Services",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-600 via-blue-600 to-cyan-700",
    features: ["Nobot AI chatbots", "Web hosting", "SSL & Security"],
    tech: ["Next.js", "AWS", "Docker", "AI/ML"],
    allowsIframe: true,
  },
  {
    id: "explore-holidays",
    title: "Explore Holidays",
    description: "Complete travel agency website providing seamless travel experiences with hotel booking, car rental, and tour planning services with personalized recommendations.",
    link: "https://exploreholidays.hassanscode.com",
    icon: Plane,
    stats: "Full Service",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-600 via-teal-600 to-emerald-700",
    features: ["Hotel booking", "Car rental", "Tour packages"],
    tech: ["Next.js", "Tailwind", "Stripe", "Google Maps"],
    allowsIframe: true,
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Featured Work</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Real-world applications powering businesses globally
          </p>
        </motion.div>

        {/* Projects - One per row */}
        <div className="space-y-8">
          {projects.map((project, index) => (
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
                            className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 bg-white"
                            title={`${project.title} Live Preview`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Premium Placeholder for sites that block iframes */
                      <div className="absolute inset-0 flex flex-col">
                        {/* Browser Chrome */}
                        <div className="bg-gray-900 px-3 py-2 flex items-center gap-2">
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
                        {/* Content Preview */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                          <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4`}>
                            <project.icon size={48} className="text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                          <p className="text-white/70 text-sm mb-4 max-w-xs">Click to view the live website</p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-gray-900 hover:bg-amber-400 transition-colors"
                          >
                            <Globe size={16} />
                            Open Live Site
                          </a>
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
                          Visit Live Site
                        </a>
                        <Link
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-sm font-semibold text-black hover:shadow-lg transition-shadow"
                        >
                          View Details
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
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
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
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                            {t}
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
          ))}
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
            View more on GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
