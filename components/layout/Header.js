"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Bell Wedding Planners" width={140} height={90} className="h-20 w-auto py-1" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-medium text-base transition-all duration-300 group ${
                    isScrolled ? "text-gray-800 hover:text-rose-600" : "text-white hover:text-rose-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-rose-600" : "bg-rose-300"
                    }`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <Button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isScrolled ? "bg-rose-500 hover:bg-rose-600 text-white" : "bg-white hover:bg-gray-100 text-rose-900"
              }`}
            >
              Get Quote
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-800 hover:text-rose-600 font-medium py-2 text-base transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-2 font-medium text-sm mt-4">
              Get Quote
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
