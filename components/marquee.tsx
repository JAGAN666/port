"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({
  children,
  direction = "left",
  speed = 25,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -2000] : [-2000, 0],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 100 / speed,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate="animate"
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {children}
      </motion.div>
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate="animate"
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {children}
      </motion.div>
    </div>
  )
}
