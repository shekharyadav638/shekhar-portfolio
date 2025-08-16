"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  )
}
