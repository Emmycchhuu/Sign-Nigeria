"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function LearnMorePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative selection:bg-primary/30">
            {/* Navigation */}
            <nav className="absolute top-0 w-full p-6 z-50">
                <Link href="/sbt" className="inline-flex items-center gap-2 text-foreground/60 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to SBT</span>
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/huts/hut-2.jpeg"
                    alt="Gathering Place"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Learn More about the SIGN SBT
                    </h1>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
                        Discover how the Soulbound Token preserves your digital heritage and what the future holds.
                    </p>
                    <button
                        disabled
                        className="px-8 py-4 rounded-full bg-white/10 text-white/50 font-bold text-lg cursor-not-allowed border border-white/5"
                    >
                        Coming Soon
                    </button>
                </motion.div>
            </section>

            {/* Gallery of Hut Images */}
            <section className="py-16 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Explore the Huts</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {["hut-1.jpeg", "hut-2.jpeg", "hut-3.jpeg"].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative rounded-3xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={`/huts/${src}`}
                                    alt={`Hut ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
