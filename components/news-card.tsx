"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface NewsCardProps {
  title: string
  content: string
}

export default function NewsCard({ title, content }: NewsCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="h-full flex flex-col border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-500">
        <CardContent className="pt-6 flex-grow p-6">
          <div className="mb-3 elegant-text text-sm font-medium">News</div>
          <h3 className="text-lg font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{content}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button
            variant="link"
            className="p-0 h-auto text-primary-600 hover:text-primary-700 font-medium group"
            asChild
          >
            <Link href="#" className="flex items-center gap-1">
              Read More{" "}
              <motion.div className="inline-block" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={16} />
              </motion.div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
