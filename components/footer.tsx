"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 elegant-text">Statt Inc.</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              AI-driven public policy, regulatory, and geopolitical insights and data to turbocharge your work.
            </p>
            <p className="text-gray-600 mb-2">© 2021 - 2024 Statt Inc. All rights reserved.</p>
            <p className="elegant-text font-medium">info@statt.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-800">Company</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Careers
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/news" className="text-gray-600 hover:text-primary-600 transition-colors">
                  News
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-gray-800">Legal</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Terms and Conditions
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/subscription" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Subscription Agreement
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0 flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-500 hover:text-primary-600"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-primary-600"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </div>
            <div className="flex space-x-6">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link href="/request-demo" className="elegant-text font-medium">
                  Request Demo
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link href="/learn-more" className="elegant-text font-medium">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
