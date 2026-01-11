"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const courses = [
    "Machine Learning",
    "Deep Learning", 
    "Natural Language Processing (NLP)",
    "Internet of Things (IoT)",
    "Human-Computer Interaction",
    "Programming for AI",
    "Data Structures & Algorithms",
    "Database Systems",
    "Design & Analysis of Algorithms"
  ]

  return (
    <section id="about" className="relative py-16 sm:py-20 overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0d0d0d] dark:via-[#0a0a0a] dark:to-[#0d0d0d]" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Crafting AI Solutions
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Transforming ideas into intelligent applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="max-w-none">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a <span className="text-amber-700 dark:text-amber-400 font-semibold">Generative AI Engineer</span> with hands-on experience building LLM-powered applications using LangChain, Hugging Face, and Retrieval-Augmented Generation (RAG).
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Skilled in developing and deploying intelligent systems for text, image, and video generation. I'm passionate about applying cutting-edge AI tools to solve real-world problems efficiently and at scale.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond AI, I have extensive experience in full-stack development with the MERN stack, enabling me to build complete, production-ready applications from conception to deployment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-8">
              {[
                { value: "3+", label: "Projects Deployed" },
                { value: "13", label: "Countries Served" },
                { value: "2025", label: "Graduation Year" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
                >
                  <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-500 dark:to-yellow-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
              
              <div className="relative p-4 sm:p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src="/tuf-logo.png"
                      alt="The University of Faisalabad"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
                      Bachelor in Artificial Intelligence
                    </h3>
                    <p className="text-sm sm:text-base text-amber-700 dark:text-amber-400 font-medium">
                      The University of Faisalabad
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <span>Faisalabad, Pakistan</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Award size={18} className="text-amber-500" />
                    <span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {[...courses, ...courses].map((course, index) => (
                        <span
                          key={`${course}-${index}`}
                          className="inline-block mx-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-900/20 dark:to-yellow-900/20 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
