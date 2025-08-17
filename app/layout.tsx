import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shekhar Yadav — Associate Software Developer",
  description:
    "Shekhar Yadav • Associate Software Developer. Portfolio, projects, and contact.",
  generator: 'v0.dev',
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
  openGraph: {
    title: "Shekhar Yadav — Associate Software Developer",
    description: "Shekhar Yadav • Associate Software Developer. Portfolio, projects, and contact.",
    type: "website",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Shekhar Yadav — Associate Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shekhar Yadav — Associate Software Developer",
    description: "Shekhar Yadav • Associate Software Developer. Portfolio, projects, and contact.",
    images: ["/home.png"],
  },
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
