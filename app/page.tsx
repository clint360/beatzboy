"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Embedded site content data
const siteContent = {
  hero: {
    title: "🎧 Beatzboy – Feel the Frequency",
    subtitle: "Producer. Visionary. Storyteller. Dive into the sound that defines a generation.",
    ctaText: "🎁 Listen to Gifted",
    ctaLink: "/gifted",
    backgroundImage: "/images/hero-bg.jpg",
  },
  about: {
    title: "About Beatzboy",
    text: "From Cameroon to the world, Beatzboy crafts sonic stories born from struggle, prayer, and persistence. Every beat tells a story, every melody carries a message, and every track is a testament to the power of faith and creativity.",
    image: "/images/beatzboy-portrait.jpg",
  },
  discography: ["/images/gifted-cover.jpg", "/images/cover2.jpg", "/images/cover3.jpg", "/images/cover4.jpg"],
  footer: {
    socials: [
      { name: "Instagram", link: "https://instagram.com/beatzboy", icon: "📷" },
      { name: "Twitter", link: "https://twitter.com/beatzboy", icon: "🐦" },
      { name: "YouTube", link: "https://youtube.com/beatzboy", icon: "📺" },
      { name: "SoundCloud", link: "https://soundcloud.com/beatzboy", icon: "☁️" },
    ],
  },
}

// Animated Loader Component
function AnimatedLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
      <div className="text-center">
        {/* Pulsing Logo */}
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
          🎧
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Beatzboy
        </motion.h1>

        {/* Animated Dots */}
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

        {/* Loading Bar */}
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

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/80 mt-4 text-lg"
        >
          Feel the Frequency...
        </motion.p>
      </div>

      {/* Background Musical Notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-6xl"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: typeof window !== "undefined" ? window.innerHeight + 100 : 800,
              rotate: 0,
            }}
            animate={{
              y: -100,
              rotate: 360,
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {["♪", "♫", "♬", "🎵", "🎶"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <AnimatedLoader />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-red-600/20" />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
          >
            {siteContent.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href={siteContent.hero.ctaLink}>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
                {siteContent.hero.ctaText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating musical notes animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/30 text-4xl"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: typeof window !== "undefined" ? window.innerHeight + 100 : 800,
                rotate: 0,
              }}
              animate={{
                y: -100,
                rotate: 360,
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {siteContent.about.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">{siteContent.about.text}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="text-6xl"
                >
                  🎧
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Discography
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteContent.discography.map((cover, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative group cursor-pointer"
              >
                {index === 0 ? (
                  <Image
                    src="/images/gifted-cover.jpg"
                    alt="Gifted Album Cover"
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.2, rotate: 180 }} className="text-4xl">
                      🎵
                    </motion.div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} className="text-white font-bold text-lg">
                    Listen Now
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Connect with Beatzboy
            </h3>
            <div className="flex justify-center space-x-6 mb-8">
              {siteContent.footer.socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl hover:text-yellow-400 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-gray-400"
            >
              © 2024 Beatzboy. All rights reserved. | Feel the Frequency.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
