"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from "lucide-react"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <SectionHeading title="Contact Me" subtitle="Let's connect and discuss potential opportunities" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-indigo-500/20">
                <Mail className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-zinc-400">
                  <a href="mailto:shekharyadav638@gmail.com" className="hover:text-indigo-400 transition-colors">
                    shekharyadav638@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-indigo-500/20">
                <Phone className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-zinc-400">
                  <a href="tel:+917536067974" className="hover:text-indigo-400 transition-colors">
                    +91-7536067974
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium text-white mb-4">Social Profiles</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shekharryadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-indigo-500/20 transition-colors"
                >
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-indigo-500/20 transition-colors"
                >
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-medium text-white mb-4">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900 border-zinc-700 focus:border-indigo-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900 border-zinc-700 focus:border-indigo-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900 border-zinc-700 focus:border-indigo-500 min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
