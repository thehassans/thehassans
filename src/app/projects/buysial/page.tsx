"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, ShoppingCart, Globe, Users, Zap, Shield, BarChart3, Package, MessageSquare, Truck, DollarSign, PieChart, Warehouse, Settings } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigationFeatures = [
  { icon: BarChart3, title: "Dashboard", description: "Business overview - orders, revenue, costs, profit/loss, delivery rates" },
  { icon: MessageSquare, title: "Inbox", description: "WhatsApp integration for customer communication" },
  { icon: Users, title: "Create", description: "User management - Agents, Managers, Drivers, Dropshippers, Investors" },
  { icon: ShoppingCart, title: "Commerce", description: "Orders, Shopify Integration, Website Settings, Coupons, Products" },
  { icon: DollarSign, title: "Amount Office", description: "Financial settlements - Driver/Manager/Agent payments, Salaries" },
  { icon: PieChart, title: "Insights", description: "Analytics - Driver tracking, Business reports, Profit & Loss" },
]

const keyFeatures = [
  { icon: Globe, title: "Multi-Country Operations", description: "UAE, KSA, Oman, Bahrain, Kuwait, Qatar, UK, USA and more" },
  { icon: DollarSign, title: "Multi-Currency Support", description: "AED, SAR, GBP, EUR, and more currencies supported" },
  { icon: Users, title: "Role-Based Access", description: "Owner, Manager, Agent, Driver, Dropshipper, Confirmer, Investor" },
  { icon: ShoppingCart, title: "E-commerce Storefront", description: "Product catalog, cart, checkout with full order lifecycle" },
  { icon: Truck, title: "Order Management", description: "Pending → Confirmed → Shipped → Delivered workflow" },
  { icon: MessageSquare, title: "WhatsApp Integration", description: "Real-time customer communication via WhatsApp" },
  { icon: Warehouse, title: "Warehouse Management", description: "Complete inventory and warehouse tracking system" },
  { icon: Settings, title: "Financial Tracking", description: "Complete financial settlements and expense tracking" },
]

const techStack = [
  "React", "Next.js", "Node.js", "MongoDB", "Express.js", 
  "Tailwind CSS", "WhatsApp API", "Shopify API", "Redis", "AWS"
]

export default function BuysialProject() {
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
                <ShoppingCart size={40} />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                BuySial
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-amber-600 dark:text-amber-400 font-semibold mb-6">
                E-commerce & Order Management Platform
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A multi-role <span className="font-semibold text-amber-600 dark:text-amber-400">B2B/B2C e-commerce system</span> for managing orders, logistics, and finances across multiple GCC countries. Complete with WhatsApp integration, multi-currency support, and role-based access control.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://buysial.com"
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
                      buysial.com
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://buysial.com"
                  className="w-full h-64 sm:h-80 lg:h-[400px]"
                  title="BuySial Live Preview"
                />
              </div>
              
              {/* Stats Badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-black shadow-lg">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-xs font-medium">GCC Countries</div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-amber-600 dark:text-amber-400">B2B/B2C</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Platform</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Structure Section */}
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
              Platform Navigation
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete admin panel with comprehensive management features
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {navigationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-4 sm:p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0d0d0d]">
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
              Comprehensive e-commerce and order management capabilities
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
                className="group p-4 sm:p-5 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-amber-500/50 transition-colors"
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
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a]">
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
              Built with cutting-edge technologies
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
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-lg sm:rounded-xl bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-300 transition-colors border border-gray-100 dark:border-gray-800"
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
              Experience Complete E-Commerce Management
            </h2>
            <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">
              Managing orders, logistics, and finances across GCC countries.
            </p>
            <motion.a
              href="https://buysial.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-amber-400 font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
            >
              Visit Buysial.com
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
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </Link>
            <div className="flex gap-4">
              <Link
                href="/projects/magnetic-clouds"
                className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >
                Next: Magnetic Clouds →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
