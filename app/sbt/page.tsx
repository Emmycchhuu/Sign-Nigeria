"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Users, Zap } from "lucide-react"

export default function SBTPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-primary/30">
            {/* Navigation */}
            <nav className="absolute top-0 w-full p-6 z-50">
                <Link
                    href="/mint"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Minting</span>
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/huts/hut-3.jpeg"
                        alt="African Hut"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/20 text-primary-foreground text-sm font-bold mb-4 shadow-[0_0_15px_rgba(255,199,0,0.3)]">
                            The SIGN Soulbound Token
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight">
                            Digital Shelter for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
                                Your Identity
                            </span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            More than just a token. It's your permanent residence in the SIGNigeria ecosystem.
                            Immutable, non-transferable, and uniquely yours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative z-10 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Digital Heritage",
                                desc: "A permanent record of your early participation and contribution to the network."
                            },
                            {
                                icon: Users,
                                title: "Community Status",
                                desc: "Unlock exclusive access to governance, events, and future drops."
                            },
                            {
                                icon: Zap,
                                title: "Powered by Oranges",
                                desc: "Minting is exclusively available using Oranges, our community reputation token."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <feature.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-white/60">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Choose Your Heritage</h2>
                        <p className="text-white/60">Different styles representing diverse cultures.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/huts/hut-3.jpeg"
                                alt="Hut Variant 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <h3 className="text-2xl font-bold">The Elder's Hut</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/huts/hut-3.jpeg"
                                alt="Hut Variant 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <h3 className="text-2xl font-bold">The Gathering Place</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-b from-primary/20 to-transparent border border-primary/20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Mint?</h2>
                        <p className="text-xl text-white/80 mb-8">
                            Prepare your Oranges. The gates will open soon.
                        </p>
                        <Link
                            href="/mint"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,199,0,0.3)]"
                        >
                            Check Status
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
