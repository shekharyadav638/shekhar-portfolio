"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    title: "Associate Software Developer",
    company: "Opensense Labs",
    location: "Delhi",
    period: "July 2024 - Present",
    description: [
      "Contributed to Drupalfit's full-stack web application using Next.js and Chakra UI for frontend, with Node.js for backend APIs.",
      "Implemented team creation via email invitations, enabling seamless collaboration.",
      "Developed NFC card functionality for personalized URL redirection with custom animations.",
      "Created an interactive Mapbox component for AES using Leaflet and React.js.",
      "Designed a personalized search experience for VisitNC using Algolia Search.",
      "Built frontend components for Washington DC 250 using Storybook and Drupal.",
      "Developed custom image slider with Vanilla JavaScript for optimized performance.",
    ],
    skills: ["Next.js", "React.js", "Node.js", "Chakra UI", "Leaflet", "Algolia", "Storybook", "Drupal", "JavaScript"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionHeading title="Work Experience" subtitle="My professional journey and contributions" />

      <div className="space-y-8">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <CardTitle className="text-xl text-white">{experience.title}</CardTitle>
              <CardDescription className="text-zinc-400 mt-1">
                {experience.company} • {experience.location} • {experience.period}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            {experience.description.map((item: string, i: number) => (
              <li key={i} className="text-zinc-300 flex gap-2">
                <span className="text-indigo-400 mt-1 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill: string, i: number) => (
              <Badge key={i} className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
