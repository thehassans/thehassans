"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Plane, Hotel, Car, Map, Calendar, CreditCard, Globe, Star, Users, Clock } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Browse and book from thousands of hotels worldwide with real-time availability, competitive pricing, and instant confirmation.",
    features: ["24/7 Support", "Best Price Guarantee", "Free Cancellation Options"]
  },
  {
    icon: Car,
    title: "Car Rental",
    description: "Wide selection of vehicles for every need - from economy to luxury. Pick up and drop off at convenient locations.",
    features: ["Airport Pickup", "GPS Included", "Full Insurance Coverage"]
  },
  {
    icon: Map,
    title: "Tour Planning",
    description: "Curated tour packages and custom itineraries designed by travel experts to create unforgettable experiences.",
    features: ["Expert Guides", "Custom Itineraries", "Group Discounts"]
  }
]

const features = [
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Easy modification and cancellation policies for peace of mind."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security encryption."
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Authentic reviews from real travelers to help you decide."
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer support in multiple languages."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Destinations and services available in countries worldwide."
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description: "Get immediate booking confirmations via email and SMS."
  }
]

const techStack = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "Redis",
  "Stripe", "Google Maps API", "SendGrid", "AWS", "Vercel"
]

export default function ExploreHolidaysProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/50 dark:from-[#0d0d0d] dark:via-[#0d0d0d] dark:to-[#111111]" />
        
        {/* Animated Background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
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
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-8"
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
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white mb-6">
                <Plane size={40} />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Holidays
              </h1>
              <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                Complete Travel Agency Platform
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A comprehensive travel agency website providing seamless travel experiences with 
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> hotel booking</span>, 
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> car rental</span>, and 
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> tour planning</span> services. 
                Integrated booking systems with personalized recommendations for unforgettable journeys.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://exploreholidays.hassanscode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
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
              <div className="relative h-80 lg:h-[450px] bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/30">
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
                    <Plane size={100} className="text-white" />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm opacity-80">Core Services</div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                  <div className="text-lg font-bold">Full Service</div>
                  <div className="text-sm opacity-80">Travel Agency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
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
              Core Travel Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need for the perfect journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl h-full">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white mb-6 group-hover:scale-110 transition-transform">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with travelers in mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
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
              Modern technologies for seamless experiences
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
                className="px-6 py-3 text-lg font-medium rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors shadow-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover amazing destinations and plan your perfect holiday with ease.
            </p>
            <motion.a
              href="https://exploreholidays.hassanscode.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore Holidays
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/projects/magnetic-clouds"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              ← Previous: Magnetic Clouds
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </Link>
            <Link
              href="/projects/buysial"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              Next: Buysial Commerce →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
