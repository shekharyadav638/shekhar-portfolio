"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School } from "@/components/icons"

const educationData = [
  {
    institution: "Chandigarh University",
    degree: "Bachelors of Engineering in Computer Science",
    location: "Mohali, IN",
    period: "July 2020 – June 2024",
    gpa: "7.64/10.0",
    icon: GraduationCap,
  },
  {
    institution: "John Milton Public School",
    degree: "XII – All India Senior School Certificate Examination (CBSE)",
    location: "Agra, UP, IN",
    period: "April 2017 – March 2019",
    gpa: "80.40%",
    icon: School,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionHeading title="Education" subtitle="My academic background and qualifications" />

      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} index={index} />
        ))}
      </div>
    </section>
  )
}

function EducationCard({ education, index }: { education: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = education.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm h-full">
        <CardHeader className="flex flex-row items-start space-x-4 pb-2">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl text-white">{education.institution}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-zinc-300">
            <p className="font-medium">{education.degree}</p>
            <p className="text-zinc-400">{education.location}</p>
            <p className="text-zinc-400">{education.period}</p>
            <p className="text-indigo-400">GPA: {education.gpa}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
