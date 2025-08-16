"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Code, Database, Globe, Laptop, Settings } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ElementType
  skills: string[]
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: ["C++", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Frontend",
    icon: Globe,
    skills: ["React JS", "Next JS", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node JS", "Express JS", "APIs"],
  },
  {
    name: "Database",
    icon: Database,
    skills: ["SQL", "MongoDB"],
  },
  {
    name: "Tools & Technologies",
    icon: Laptop,
    skills: ["VS Code", "Android Studio", "Git", "Linux"],
  },
  {
    name: "Core Subjects",
    icon: Settings,
    skills: ["Operating Systems", "DBMS", "Computer Networking", "SDLC", "Data Structures & Algorithms", "OOPs"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = category.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-zinc-800/40 hover:bg-zinc-800/60 border border-zinc-700 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              className="bg-zinc-700/50 hover:bg-indigo-500/20 text-zinc-300 hover:text-indigo-300 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}
