"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionHeading title="About Me" subtitle="Get to know more about my background and skills" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-lg text-zinc-400 max-w-3xl mx-auto"
      >
        <p>
          I am an Associate Software Developer at Opensense Labs with expertise in building modern web applications
          using React, Next.js, and Node.js. My focus is on creating responsive, user-friendly interfaces and robust
          backend systems.
        </p>
        <p>
          With a strong foundation in Data Structures & Algorithms, I enjoy solving complex problems and optimizing code
          performance. I have completed my Bachelors of Engineering in Computer Science from Chandigarh University with
          a GPA of 7.64/10.0.
        </p>
        <p>
          I am passionate about continuous learning and staying updated with the latest web technologies. In my free
          time, I contribute to open-source projects and practice competitive programming on platforms like Leetcode and
          GeeksforGeeks.
        </p>
      </motion.div>
    </section>
  )
}
