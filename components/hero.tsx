"use client"

import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-6"
      >
        {/* <div className="flex justify-center">
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Avatar className="h-24 w-24 border-2 border-zinc-900">
              <AvatarImage src="/placeholder-user.jpg" alt="Shekhar Yadav" />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
          </div>
        </div> */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Shekhar Yadav
        </h1>

        <div className="h-16 sm:h-20">
          <TypeAnimation
            sequence={["Associate Software Developer", 2000, "Frontend Developer", 2000, "Full-Stack Engineer", 2000]}
            wrapper="h2"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-xl sm:text-3xl font-bold text-zinc-200"
          />
        </div>

        <p className="max-w-2xl mx-auto text-lg text-zinc-400">
          Building modern web applications with Next.js, React, and Node.js
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/shekharryadav/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>   
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}
