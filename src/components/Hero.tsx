"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 dark:bg-yellow-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-300/15 dark:bg-amber-700/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Ultra Premium Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-12"
          >
            {/* Profile Image with Ultra Premium Effects */}
            <div className="relative mx-auto w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Pulsing Outer Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,102,0.22)_0%,rgba(245,158,11,0.14)_35%,rgba(245,158,11,0)_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,102,0.28)_0%,rgba(212,175,55,0.18)_35%,rgba(212,175,55,0)_70%)]"
              />
              {/* Spinning Outer Ring */}
              <motion.div
                animate={{ opacity: [0.45, 0.75, 0.45] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-full pointer-events-none border-2 border-amber-300/50 shadow-[0_0_18px_rgba(245,158,11,0.18),inset_0_0_14px_rgba(255,214,102,0.08)] dark:border-amber-400/35 dark:shadow-[0_0_24px_rgba(212,175,55,0.22),inset_0_0_18px_rgba(255,214,102,0.10)]"
              />
              {/* Counter-Spinning Inner Ring */}
              <motion.div
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-full pointer-events-none border border-amber-200/50 shadow-[0_0_10px_rgba(245,158,11,0.12),inset_0_0_8px_rgba(255,214,102,0.06)] dark:border-amber-300/25 dark:shadow-[0_0_14px_rgba(212,175,55,0.14),inset_0_0_10px_rgba(255,214,102,0.08)]"
              />
              {/* Solid Gold Border */}
              <div
                className="absolute -inset-1 rounded-full pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#fff3b0_0%,#f4d03f_35%,#d4af37_70%,#b8860b_100%)]"
              />
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-[#0d0d0d] shadow-2xl shadow-amber-500/40">
                <Image
                  src="/profile.jpg"
                  alt="Hassan Sarwar"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Decorative Corner Accents */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-amber-400/60 rounded-tl-full" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-full" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 rounded-bl-full" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-amber-400/60 rounded-br-full" />
            </div>
          </motion.div>

          {/* Name with Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                Hassan Sarwar
              </span>
            </h1>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              AI/ML/Gen-AI Developer
            </h2>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Generative AI Engineer • LLM Specialist • Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Building intelligent systems powered by LangChain, Hugging Face, and RAG. 
            Passionate about applying cutting-edge AI tools to solve real-world problems 
            efficiently and at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-shadow overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/thehassans', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/hassanscode', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:hassan.sarwar21@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
