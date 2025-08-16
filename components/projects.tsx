"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    title: "Codershouse",
    description:
      "A real-time voice communication platform where users can create or join rooms for voice communication. Features include OTP-based authentication and real-time voice chat.",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#", // Update with real link
    github: "#", // Update with real GitHub link
    technologies: ["React JS", "Node JS", "Redux", "Express JS", "MongoDB", "APIs"],
  },
  {
    title: "Moviesflix",
    description:
      "A user-friendly interface showcasing a diverse collection of movies and shows. Employed React components for smooth UI rendering and integrated real-time data retrieval through TMDB API.",
    image: "/placeholder.svg?height=600&width=1200",
    link: "#", // Update with real link
    github: "#", // Update with real GitHub link
    technologies: ["React JS", "TMDB API", "CSS"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionHeading title="Projects" subtitle="Showcasing my technical skills and creativity" />

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group"
    >
      <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm overflow-hidden h-full">
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-white">{project.title}</CardTitle>
          <CardDescription className="text-zinc-400">{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-4">
          <Button variant="default" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
