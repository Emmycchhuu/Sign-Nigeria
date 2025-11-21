"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function MintPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative selection:bg-primary/30">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 container mx-auto px-4 h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            Limited Edition SBT
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Mint Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Digital Heritage
            </span>
          </h1>

          <p className="text-lg text-foreground/60 leading-relaxed">
            Secure your place in the SIGNigeria ecosystem with a Soulbound Token. Your immutable proof of early participation and cultural preservation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button disabled className="px-8 py-4 rounded-full bg-white/10 text-white/50 font-bold text-lg cursor-not-allowed border border-white/5">
              Coming Soon
            </button>
            <Link href="/sbt" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center">
              Learn More
            </Link>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-sm text-foreground/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-500 font-medium">Minting Soon</span>
            </div>
            <div>
              <span className="text-orange-500 font-bold text-lg">Cost: Oranges</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual - static hut image */}
        <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image src="/huts/hut-3.jpeg" alt="The Gathering Place" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </main>
    </div>
  )
}
