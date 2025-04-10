"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
  glareColor?: string
  rotateXAmount?: number
  rotateYAmount?: number
  perspective?: number
}

export default function Card3D({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.4)",
  rotateXAmount = 10,
  rotateYAmount = 10,
  perspective = 1000,
}: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const percentX = (mouseX - centerX) / (rect.width / 2)
    const percentY = (mouseY - centerY) / (rect.height / 2)

    setRotateX(-percentY * rotateXAmount)
    setRotateY(percentX * rotateYAmount)

    // Update glare position
    setGlarePosition({
      x: (mouseX - rect.left) / rect.width,
      y: (mouseY - rect.top) / rect.height,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x * 100}% ${
              glarePosition.y * 100
            }%, ${glareColor} 0%, rgba(255, 255, 255, 0) 70%)`,
            opacity: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
}
