import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beatzboy - Feel the Frequency",
  description: "Producer. Visionary. Storyteller. Dive into the sound that defines a generation.",
  keywords: "beatzboy, music producer, beats, hip hop, rap, gifted album",
  authors: [{ name: "Beatzboy" }],
  openGraph: {
    title: "Beatzboy - Feel the Frequency",
    description: "Producer. Visionary. Storyteller. Dive into the sound that defines a generation.",
    type: "website",
    url: "https://beatzboy.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beatzboy - Feel the Frequency",
    description: "Producer. Visionary. Storyteller. Dive into the sound that defines a generation.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
