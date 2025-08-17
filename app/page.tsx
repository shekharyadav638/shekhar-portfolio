import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-full mx-auto">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}
