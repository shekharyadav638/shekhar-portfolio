import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shekhar Yadav | Portfolio",
  description:
    "Professional portfolio of Shekhar Yadav, a Full-Stack Developer specializing in Next.js, React, and Node.js",
    generator: 'v0.dev',
    icons: {
      icon: "/placeholder-user.jpg",
      shortcut: "/placeholder-user.jpg",
      apple: "/placeholder-user.jpg",
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
