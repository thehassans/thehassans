"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Bot, Globe, MessageSquare, Zap, Clock, Smartphone, FileText, Users, Settings, Sparkles, CheckCircle, Brain } from 'lucide-react'
import Link from 'next/link'

const howItWorks = [
  { icon: Brain, title: "Educate Your AI", description: "Enter your website URL and let AI Smartbot crawl and learn about your business automatically" },
  { icon: Settings, title: "Customize Your Bot", description: "Give it a name, choose an avatar, and upload additional knowledge like PDFs and FAQs" },
  { icon: Zap, title: "Deploy Instantly", description: "Copy the HTML code and paste it into your website - your AI assistant goes live immediately" },
]

const keyFeatures = [
  { icon: Clock, title: "24/7 Customer Support", description: "Always-on AI assistant that never sleeps" },
  { icon: MessageSquare, title: "Human Assistance Mode", description: "Seamlessly switch to live human support when needed" },
  { icon: Smartphone, title: "Mobile App Access", description: "Monitor and interact with customers on the go" },
  { icon: FileText, title: "Knowledge Upload", description: "Upload PDFs, spreadsheets, and FAQs to enrich the bot" },
  { icon: Globe, title: "Website Crawling", description: "Auto-learns from your website content" },
  { icon: Users, title: "Multi-Plan Support", description: "Free, Business, and Agency plans available" },
  { icon: Sparkles, title: "Real-Time Notifications", description: "Text and email alerts for new inquiries" },
  { icon: CheckCircle, title: "Easy Setup", description: "Get your AI chatbot running in minutes" },
]

const crawlOptions = [
  { title: "Home Page Only", description: "Quick setup with basic information" },
  { title: "Specific Sub-Pages", description: "Focus on FAQs, pricing, or services" },
  { title: "All Pages", description: "Comprehensive AI that knows everything" },
]

const techStack = [
  "React", "Next.js", "Node.js", "OpenAI API", "LangChain", 
  "Tailwind CSS", "MongoDB", "Web Crawling", "NLP", "RAG"
]

export default function AISmartbotProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />
        
        {/* Animated Background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
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
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black mb-6">
                <Bot size={40} />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                AI Smartbot
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-amber-600 dark:text-amber-400 font-semibold mb-6">
                Instant AI Chatbot for Your Website
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Create a <span className="font-semibold text-amber-600 dark:text-amber-400">FREE AI Chatbot</span> for your website instantly! Just enter your URL and the chatbot educates itself about your business. Your ultimate AI assistant for 24/7 customer support.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://sitesgptbot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-shadow"
                >
                  <Globe size={20} />
                  Visit Live Site
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Live Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-gray-200 dark:border-gray-800">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                      sitesgptbot.com
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://sitesgptbot.com"
                  className="w-full h-64 sm:h-80 lg:h-[400px]"
                  title="AI Smartbot Live Preview"
                />
              </div>
              
              {/* Stats Badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-black shadow-lg">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-xs font-medium">To Start</div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-amber-600 dark:text-amber-400">24/7</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              3 Simple Steps to Launch
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get your AI chatbot running in minutes, not hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-6 sm:p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {index + 1}
                </div>
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black mb-4 group-hover:scale-110 transition-transform">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crawl Options Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Crawling Options
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose how much of your website the AI should learn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {crawlOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-amber-500/50 transition-colors text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Features That Set Us Apart
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need for intelligent customer support
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
                className="group p-4 sm:p-5 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-amber-500/50 transition-colors"
              >
                <div className="inline-flex p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-3 group-hover:scale-110 transition-transform">
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

      {/* Tech Stack */}
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
              Powered by cutting-edge AI technologies
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Try AI Smartbot Now - It's Free!
            </h2>
            <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">
              Create your AI chatbot in minutes and transform your customer support experience.
            </p>
            <motion.a
              href="https://sitesgptbot.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-amber-400 font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
            >
              Create Free AI Chatbot
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/projects/maqder"
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </Link>
            <Link
              href="/projects/old-arcade"
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
