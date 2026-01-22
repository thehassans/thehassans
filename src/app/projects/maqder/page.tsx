"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Globe, Users, DollarSign, Package, BarChart3, Shield, Settings, FileText, Truck, Clock, Building, Calculator } from 'lucide-react'
import Link from 'next/link'

const modules = [
  { icon: Users, title: "HR Management", description: "Employee records, attendance, payroll, and leave management" },
  { icon: DollarSign, title: "Finance & Accounting", description: "General ledger, accounts payable/receivable, and financial reports" },
  { icon: Package, title: "Inventory Control", description: "Stock management, warehousing, and item tracking" },
  { icon: Truck, title: "Sales & Distribution", description: "Order processing, invoicing, and delivery management" },
  { icon: Building, title: "Purchase Management", description: "Vendor management, purchase orders, and procurement" },
  { icon: Calculator, title: "Payroll System", description: "Salary calculation, GOSI integration, and WPS compliance" },
]

const keyFeatures = [
  { icon: Globe, title: "Arabic & English Support", description: "Full RTL support with bilingual interface" },
  { icon: Shield, title: "Saudi Compliance", description: "VAT, ZATCA, and local regulatory compliance" },
  { icon: BarChart3, title: "Real-time Analytics", description: "Dashboards and reports for business insights" },
  { icon: Users, title: "Multi-User Access", description: "Role-based permissions and access control" },
  { icon: Clock, title: "Cloud-Based", description: "Access from anywhere, anytime with secure cloud hosting" },
  { icon: FileText, title: "Document Management", description: "Digital storage and organization of business documents" },
  { icon: Settings, title: "Customizable", description: "Adaptable workflows to match business processes" },
  { icon: DollarSign, title: "Multi-Currency", description: "Support for SAR, USD, and other currencies" },
]

const techStack = [
  "React", "Next.js", "Node.js", "MongoDB", "Express.js",
  "Tailwind CSS", "REST API", "JWT Auth", "AWS", "Redis"
]

export default function MaqderProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />
        
        {/* Animated Background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
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
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-6">
                <Globe size={32} />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Maqder{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  ERP
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A complete enterprise resource planning solution designed specifically for Saudi Arabian businesses. 
                Maqder streamlines operations across HR, finance, inventory, sales, and more with full Arabic language support and local compliance.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://maqder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  <ExternalLink size={20} />
                  Visit Website
                </a>
              </div>
            </motion.div>

            {/* Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-700 rounded-lg px-4 py-1.5 text-sm text-gray-400 text-center">
                      maqder.com
                    </div>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Globe size={80} className="mb-4 opacity-90" strokeWidth={1.5} />
                    <span className="text-3xl font-bold opacity-90">Maqder ERP</span>
                    <span className="text-lg opacity-70 mt-2">maqder.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ERP Modules
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive business management in one integrated platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white w-fit mb-4 group-hover:scale-110 transition-transform">
                  <module.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Built for Saudi Arabian business requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white dark:bg-[#111] rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to streamline your business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Discover how Maqder ERP can transform your operations
            </p>
            <a
              href="https://maqder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              <ExternalLink size={20} />
              Visit Maqder.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/projects/khayyatos"
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </Link>
            <Link
              href="/projects/ai-smartbot"
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
