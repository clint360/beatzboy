"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Embedded gifted content data
const giftedContent = {
  title: "🎁 Gifted – The Album",
  platforms: [
  {
      name: "YouTube",
      link: "https://youtube.com/playlist?list=PLQftYvSOodaN3pjhVacGpuQFgFzr5QaaG&si=XbEQFTWKApMwwKae",
      color: "bg-red-500 hover:bg-red-600",
      icon: "📺",
    }
  ],
  support: {
    text: "Support The Gifted Album",
    link: "https://checkout.fapshi.com/donation/89659737",
  },
  quote: "Every line, every sound, every prayer — Gifted is my soul on a beat.",
  tracklist: [
  ],
}

// Animated Loader Component
function AnimatedLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-8xl mb-8"
        >
          🎁
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Loading Gifted...
        </motion.h1>

        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
          ))}
        </div>

        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-full w-1/3 bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default function GiftedPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <AnimatedLoader />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:text-yellow-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
          >
            {giftedContent.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="/images/gifted-cover.jpg"
                alt="Gifted Album Cover"
                width={400}
                height={400}
                className="mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl italic text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            "{giftedContent.quote}"
          </motion.blockquote>
        </div>
      </section>

      {/* Platform Buttons */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-white"
          >
            Listen Now
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {giftedContent.platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${platform.color} text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
              >
                <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="text-2xl">
                  {platform.icon}
                </motion.span>
                <span>{platform.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href={giftedContent.support.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-4 rounded-full transform transition-all duration-300">
                {giftedContent.support.text}
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tracklist */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Tracklist
          </motion.h2>

          <div className="space-y-3">
            {giftedContent.tracklist.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-lg text-gray-300">{track}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4"
          >
            © 2024 Beatzboy. All rights reserved.
          </motion.p>
          <Link href="/">
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              Back to Home
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
