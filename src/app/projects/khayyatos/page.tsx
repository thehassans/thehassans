"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Globe, ShieldCheck, Zap, Layout, Sparkles } from 'lucide-react'
import Link from 'next/link'

const keyFeatures = [
  { icon: Layout, title: "Premium UI/UX", description: "Modern layout with clean typography and conversion-focused sections" },
  { icon: Zap, title: "Fast Performance", description: "Optimized experience with smooth transitions and responsive behavior" },
  { icon: ShieldCheck, title: "Trust & Branding", description: "Clear messaging, credibility design patterns, and strong brand presence" },
  { icon: Sparkles, title: "Polished Animations", description: "Subtle motion to enhance the feel without distracting the user" },
]

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
]

export default function KhayyatosProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/50 via-white to-purple-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white mb-6">
                <Globe size={40} />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Khayyatos
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-6">
                Premium Brand Website
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A premium brand website designed to showcase services, build trust, and drive conversions with a modern, responsive user experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://khayyatos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/35 transition-shadow"
                >
                  <Globe size={20} />
                  Visit Live Site
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-fuchsia-500/10 border border-gray-200 dark:border-gray-800">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                      khayyatos.com
                    </div>
                  </div>
                </div>
                <div className="w-full h-64 sm:h-80 lg:h-[420px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-fuchsia-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Globe size={80} className="mb-4 opacity-90" strokeWidth={1.5} />
                    <span className="text-3xl font-bold opacity-90">Khayyatos</span>
                    <span className="text-lg opacity-70 mt-2">khayyatos.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built for premium presentation and conversion-focused storytelling
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-4 sm:p-5 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-fuchsia-500/40 transition-colors"
              >
                <div className="inline-flex p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
              Modern tools for a high-quality experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-lg sm:rounded-xl bg-gray-50 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-300 transition-colors border border-gray-100 dark:border-gray-800"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Visit Khayyatos
            </h2>
            <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">
              Explore the full experience on the live website.
            </p>
            <motion.a
              href="https://khayyatos.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-amber-400 font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
            >
              Open Khayyatos.com
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/projects/buysial"
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </Link>
            <Link
              href="/projects/maqder"
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <span>Next Project</span>
              <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
