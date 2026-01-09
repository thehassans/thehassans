"use client"

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thehassans', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hassanscode', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hassan.sarwar21@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">HS</span>
              </span>
              <span className="h-6 w-px bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              AI/ML/Gen-AI Developer building intelligent solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-gray-200 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              © {currentYear} Hassan Sarwar. Made with{' '}
              <Heart size={14} className="text-red-500 fill-red-500" /> and Next.js
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Designed & Developed by Hassan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
