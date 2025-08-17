"use client"

import { useEffect, useState } from "react"
import { BeamsBackground } from "./ui/beams-background"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
   <BeamsBackground />
  )
}
