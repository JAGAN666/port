"use client"

import { motion } from "framer-motion"

export default function ClientLogos() {
  const logos = [
    { name: "Microsoft", width: "180px" },
    { name: "FTI", width: "120px" },
    { name: "Avoq", width: "150px" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-16">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center"
            style={{ width: logo.width, height: "80px" }}
          >
            <div className="text-center font-semibold text-gray-500">{logo.name}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
