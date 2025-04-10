"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="elegant-text">Statt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Careers
            </Link>
            <Button
              asChild
              variant="outline"
              className="mr-2 border-primary-600 text-primary-600 hover:bg-primary-50 elegant-button"
            >
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 space-y-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/careers"
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 elegant-button"
                >
                  <Link href="/request-demo" onClick={toggleMenu}>
                    Request Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
