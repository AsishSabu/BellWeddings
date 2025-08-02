"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#contact", label: "Contact" },
    ],
    services: [
      { href: "#", label: "Wedding Planning" },
      { href: "#", label: "Destination Weddings" },
      { href: "#", label: "Floral Design" },
      { href: "#", label: "Photography" },
      { href: "#", label: "Entertainment" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-32 h-32 border border-rose-400/20 rounded-full opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <Image src="/logo.png" alt="Bell Wedding Planners" width={200} height={120} className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Creating magical wedding experiences with personalized planning, stunning decorations, and flawless
              execution. Your perfect day is our passion and commitment.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="icon"
                    className="bg-gray-800 border border-gray-700 hover:border-rose-400 hover:bg-rose-500 rounded-xl"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-rose-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-rose-400 transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-rose-400 mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-400" />
                <span className="text-gray-300">hello@bellweddingplanners.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-1" />
                <span className="text-gray-300">
                  Luxury Plaza, MG Road
                  <br />
                  Bangalore, Karnataka
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Bell Wedding Planners. All rights reserved. | Crafting magical love stories since 2010.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
