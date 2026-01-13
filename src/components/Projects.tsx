"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ExternalLink, ShoppingCart, Cloud, Plane, Sparkles, Bot, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: "ai-smartbot",
    title: "AI Smartbot",
    description: "Instant AI chatbot for websites that auto-learns from your business content",
    link: "https://sitesgptbot.com",
    icon: Bot,
    stats: "FREE AI Bot",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "old-arcade",
    title: "Old Arcade",
    description: "Gaming products e-commerce platform with consoles & peripherals",
    link: "https://old-arcade.com",
    icon: Gamepad2,
    stats: "500+ Products",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "buysial",
    title: "Buysial Commerce",
    description: "E-commerce platform with AI automation running in 13 countries",
    link: "https://buysial.com",
    icon: ShoppingCart,
    stats: "13 Countries",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: "magnetic-clouds",
    title: "Magnet Clouds",
    description: "Domain & hosting with 13+ services including Nobot AI",
    link: "https://magnet-clouds.com",
    icon: Cloud,
    stats: "13+ Services",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "explore-holidays",
    title: "Explore Holidays",
    description: "Complete travel agency with hotel, car rental & tour booking",
    link: "https://exploreholidays.hassanscode.com",
    icon: Plane,
    stats: "Full Service",
    gradient: "from-emerald-500 to-teal-500",
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

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid with Live Previews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                {/* Live Preview */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 z-10 bg-gray-200 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="bg-white dark:bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-500 dark:text-gray-400 text-center truncate">
                        {project.link.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  {/* iframe Preview */}
                  <iframe
                    src={project.link}
                    className="w-full h-full pt-8 pointer-events-none"
                    title={`${project.title} Preview`}
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Quick Actions on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-900 dark:text-white hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      <ExternalLink size={12} />
                      Live Site
                    </a>
                    <Link
                      href={`/projects/${project.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg text-xs font-medium text-black hover:shadow-lg transition-shadow"
                    >
                      Details
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <Link href={`/projects/${project.id}`} className="block p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      <project.icon size={20} />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {project.stats}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </Link>

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
