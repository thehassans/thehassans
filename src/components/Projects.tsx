"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ShoppingCart, Cloud, Plane, Sparkles, Bot, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: "ai-smartbot",
    title: "AI Smartbot",
    description: "Instant AI chatbot for websites - auto-learns from your business",
    link: "https://sitesgptbot.com",
    icon: Bot,
    stats: "FREE AI Bot",
  },
  {
    id: "old-arcade",
    title: "Old Arcade",
    description: "Gaming products e-commerce platform with consoles & peripherals",
    link: "https://old-arcade.com",
    icon: Gamepad2,
    stats: "500+ Products",
  },
  {
    id: "buysial",
    title: "Buysial Commerce",
    description: "E-commerce platform with AI automation running in 13 countries",
    link: "https://buysial.com",
    icon: ShoppingCart,
    stats: "13 Countries",
  },
  {
    id: "magnetic-clouds",
    title: "Magnetic Clouds",
    description: "Domain & hosting with 13+ services including Nobot AI",
    link: "https://magnetic-clouds.com",
    icon: Cloud,
    stats: "13+ Services",
  },
  {
    id: "explore-holidays",
    title: "Explore Holidays",
    description: "Complete travel agency with hotel, car rental & tour booking",
    link: "https://exploreholidays.hassanscode.com",
    icon: Plane,
    stats: "Full Service",
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-[#0d0d0d] dark:to-[#080808]" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Real-world applications powering businesses globally
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="group block">
                <div className="relative p-6 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800/50 hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                  <div className="flex items-center justify-between gap-4">
                    {/* Left */}
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-black transition-all duration-300">
                        <project.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Right */}
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:block px-3 py-1.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        {project.stats}
                      </span>
                      <motion.div
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/thehassans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-500 font-medium transition-colors"
          >
            View more on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
