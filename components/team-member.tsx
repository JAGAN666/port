"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
}

export default function TeamMember({ name, title, bio }: TeamMemberProps) {
  // Get initials for avatar
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="p-8 border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-500">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Avatar className="h-28 w-28 border-4 border-white shadow-md">
                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="elegant-text font-medium mb-4">{title}</p>
            <p className="elegant-paragraph leading-relaxed">{bio}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
