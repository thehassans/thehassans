"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Cloud, Bot, Shield, Bug, Server, Database, Lock, Cpu, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bot,
    title: "Nobot AI",
    description: "Intelligent chatbot solution powered by advanced NLP and LLMs. Provides 24/7 automated customer support with natural conversation capabilities.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Magnetic ShieldX",
    description: "Enterprise-grade security solution offering DDoS protection, WAF, and real-time threat detection powered by AI algorithms.",
    highlight: true
  },
  {
    icon: Bug,
    title: "Bug Smash",
    description: "Automated debugging and code analysis tool that identifies vulnerabilities, bugs, and performance issues using machine learning.",
    highlight: true
  },
  {
    icon: Server,
    title: "Web Hosting",
    description: "High-performance web hosting with SSD storage, 99.9% uptime guarantee, and automatic scaling capabilities."
  },
  {
    icon: Globe,
    title: "Domain Services",
    description: "Complete domain registration and management with support for 500+ TLDs and privacy protection."
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Secure and scalable cloud storage solutions with automatic backups and global CDN distribution."
  },
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "Free and premium SSL certificates with automatic renewal and wildcard support."
  },
  {
    icon: Cpu,
    title: "VPS Hosting",
    description: "Virtual Private Servers with dedicated resources, full root access, and multiple OS options."
  },
  {
    icon: Zap,
    title: "CDN Services",
    description: "Global content delivery network with edge caching for lightning-fast content delivery worldwide."
  }
]

const techStack = [
  "React", "Node.js", "Python", "TensorFlow", "Docker", "Kubernetes",
  "Redis", "PostgreSQL", "MongoDB", "AWS", "CloudFlare", "OpenAI API"
]

export default function MagneticCloudsProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />
        
        {/* Animated Background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], y: [0, 30, 0] }}
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
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
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
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white mb-6">
                <Cloud size={40} />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Magnetic Clouds
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Domain & Hosting Company
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A comprehensive cloud services company offering <span className="font-semibold text-blue-600 dark:text-blue-400">13+ different services</span> including 
                cutting-edge AI solutions like Nobot AI for intelligent chatbots, Magnetic ShieldX for advanced security, 
                and Bug Smash for automated debugging.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://magnet-clouds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                >
                  <Globe size={20} />
                  Visit Live Site
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-80 lg:h-[450px] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border-2 border-white/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-80 h-80 border border-white/10 rounded-full"
                  />
                  <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl">
                    <Cloud size={100} className="text-white" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                  <div className="text-3xl font-bold">13+</div>
                  <div className="text-sm opacity-80">Services</div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                  <div className="text-lg font-bold">AI Powered</div>
                  <div className="text-sm opacity-80">Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services & AI Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive cloud services with cutting-edge AI capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 bg-white dark:bg-gray-800 rounded-2xl border ${
                  service.highlight 
                    ? 'border-blue-200 dark:border-blue-800 ring-2 ring-blue-500/20' 
                    : 'border-gray-100 dark:border-gray-700'
                } shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold rounded-bl-xl">
                    AI Powered
                  </div>
                )}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                  service.highlight ? 'from-blue-600 to-cyan-600' : 'from-gray-600 to-gray-700'
                } text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Enterprise-grade infrastructure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 text-lg font-medium rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Power Your Business with Cloud Solutions
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover how our AI-powered services can transform your digital infrastructure.
            </p>
            <motion.a
              href="https://magnet-clouds.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Visit Magnet-Clouds.com
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/projects/buysial"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              ← Previous: Buysial Commerce
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </Link>
            <Link
              href="/projects/explore-holidays"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Next: Explore Holidays →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
