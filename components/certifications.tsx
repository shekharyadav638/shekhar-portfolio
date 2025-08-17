"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck } from "@/components/icons"

const certificationsData = [
  {
    title: "C++",
    issuer: "LinkedIn",
    date: "Jan 2023",
  },
  {
    title: "Data Structures",
    issuer: "UC San Diego",
    date: "Sept 2022",
  },
  {
    title: "OOPs",
    issuer: "LinkedIn",
    date: "Sept 2023",
  },
  {
    title: "React JS",
    issuer: "LinkedIn",
    date: "Sept 2023",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionHeading title="Certifications" subtitle="Professional development and continuous learning" />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {certificationsData.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ certification, index }: { certification: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:border-indigo-500/50 transition-colors duration-300">
        <CardHeader className="flex flex-row items-center space-x-4">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
            <FileCheck className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg text-white">{certification.title}</CardTitle>
            <CardDescription className="text-zinc-400">
              {certification.issuer} • {certification.date}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
