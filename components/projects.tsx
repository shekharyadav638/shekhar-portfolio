"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "@/components/icons"

const projectsData = [
  {
    title: "DrupalFit",
    description:
      "Website auditing platform that analyzes entire sites for performance across all URLs, flags accessibility issues, and surfaces SEO issues using Semrush. Includes 24/7 health monitoring and a team feature to share site data.",
    image: "/projects/drupalfit.jpg",
    link: "https://drupalfit.com/",
    technologies: ["Next.js", "Node.js", "Chakra UI", "Serverless", "AWS" , "Stripe"],
  },
  {
    title: "AES – Interactive Map",
    description:
      "Built an interactive mapping experience using Leaflet with Mapbox tiles to visualize AES initiatives and locations.",
    image: "/projects/aes.jpg",
    link: "https://www.aes.com/",
    technologies: ["React.js", "Leaflet", "Mapbox"],
  },
  {
    title: "Washington DC 250",
    description:
      "Developed frontend components and UI patterns using Storybook integrated with a Drupal-powered site.",
    image: "/projects/dc250.jpg",
    link: "https://dc250.us/",
    technologies: ["Drupal", "Storybook", "React.js"],
  },
  {
    title: "Visit North Carolina – Search",
    description:
      "Implemented a personalized search experience leveraging Algolia for fast, relevant results.",
    image: "/projects/visitnc.jpg",
    link: "https://www.visitnc.com/",
    technologies: ["Algolia", "React.js"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
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
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement
              if (img.src.indexOf('/placeholder.jpg') === -1) {
                img.src = '/placeholder.jpg'
              }
            }}
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
          {project.github ? (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
