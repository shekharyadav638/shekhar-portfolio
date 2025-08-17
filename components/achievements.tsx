"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Award, Code } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const achievementsData = [
  {
    icon: Code,
    title: "800+ DSA Problems on Leetcode",
    description: "Consistently solved complex algorithms and data structure problems.",
  },
  {
    icon: Award,
    title: "Knight on Leetcode (1900+ rating)",
    description: "Ranked in the top 4.5% of Leetcode users globally.",
  },
  {
    icon: Code,
    title: "440+ Problems on GeeksforGeeks",
    description: "Solved numerous problems on GeeksforGeeks platform.",
  },
  {
    icon: Award,
    title: "Top 15 in Ideathon",
    description: "Ranked among the top 15 participants in Ideathon organized by ACIC Rise Association.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionHeading title="Achievements" subtitle="Recognition of my skills and dedication" />

      <div className="grid gap-6 md:grid-cols-2">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
    </section>
  )
}

function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = achievement.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm h-full hover:border-indigo-500/50 transition-colors duration-300">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-lg text-white">{achievement.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400">{achievement.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
