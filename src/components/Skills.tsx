"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, Brain, Database, Cloud, Cpu, Sparkles, Zap, MessageSquare,
  Terminal, Globe, Server, Box, GitBranch, Layers, Workflow, FileJson,
  BarChart3, Table2, BookOpen, Container, Rocket, Settings
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageProvider'

const skillsWithIcons = [
  { name: "Python", icon: Code },
  { name: "JavaScript", icon: Terminal },
  { name: "TypeScript", icon: FileJson },
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Globe },
  { name: "TensorFlow", icon: Brain },
  { name: "PyTorch", icon: Cpu },
  { name: "Scikit-learn", icon: BarChart3 },
  { name: "Keras", icon: Workflow },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Rocket },
  { name: "MongoDB", icon: Database },
  { name: "OpenAI", icon: Sparkles },
  { name: "LangChain", icon: Brain },
  { name: "Hugging Face", icon: Sparkles },
  { name: "NumPy", icon: Table2 },
  { name: "Pandas", icon: BarChart3 },
  { name: "Jupyter", icon: BookOpen },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
  { name: "AWS", icon: Cloud },
  { name: "Vercel", icon: Rocket },
  { name: "Netlify", icon: Globe },
  { name: "LLMs", icon: Cpu },
  { name: "RAG", icon: Database },
  { name: "NLP", icon: MessageSquare },
  { name: "Prompt Engineering", icon: Zap },
  { name: "REST APIs", icon: Settings },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0d0d0d] dark:via-[#0a0a0a] dark:to-[#0d0d0d]" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div ref={ref} className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-sm font-medium mb-4">
            {t('skills.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t('skills.title')}
          </h2>
        </motion.div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1a1a1a] rounded-full border border-gray-200 dark:border-gray-800 shadow-sm hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-amber-500/10 transition-all cursor-default group"
                >
                  <skill.icon className="w-5 h-5 text-amber-500 group-hover:text-amber-400 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
