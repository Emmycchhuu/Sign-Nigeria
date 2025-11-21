"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { SimpleIcon } from "@/components/simple-icons"
import { SocialLinks } from "@/components/SocialLinks"
import { Sparkles } from "@/components/Sparkles"
import { HutIcon } from "@/components/icons/HutIcon"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <div className="w-full overflow-hidden bg-background selection:bg-primary/20">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 p-0.5 bg-gradient-to-br from-primary/20 to-transparent group-hover:border-primary/60 transition-colors">
              <Image
                src="/signigeria-logo.png"
                alt="SIGNigeria"
                width={40}
                height={40}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">SIGNigeria</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="#ecosystem" className="text-sm text-foreground/70 hover:text-accent transition-colors hidden sm:block">
              Platforms
            </Link>
            <Link
              href="/mint"
              className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              title="Mint SBT"
            >
              <HutIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/whitepaper"
              className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 font-medium text-sm"
            >
              Read Whitepaper
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <motion.div style={{ y: y2 }} className="absolute bottom-40 left-10 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Nigeria On-Chain
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1]">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Communities
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
              Preserving <Sparkles color="#FFC700">Culture</Sparkles>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Join SIGNigeria's decentralized ecosystem connecting commerce, health, education, culture, and
              entertainment on the blockchain.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/whitepaper"
                className="px-8 py-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
              >
                Start Reading
              </Link>
              <Link
                href="/mint"
                className="px-8 py-4 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 flex items-center gap-2"
              >
                <HutIcon className="w-5 h-5" />
                <span>Mint SBT</span>
              </Link>
              <a
                href="https://t.me/signigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300 font-semibold hover:-translate-y-1"
              >
                Join Community
              </a>
            </div>

            <div className="pt-8 flex items-center gap-12 border-t border-border/30">
              <div>
                <p className="text-3xl font-bold text-white">6+</p>
                <p className="text-sm text-foreground/50 uppercase tracking-wider">Platforms</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-foreground/50 uppercase tracking-wider">Decentralized</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl transform rotate-6 scale-105" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b9aff01-382f-4894-a738-f4b2fc815c86-SpTeuseoYUuaNyC9jjhBBUCXgk7iXX.jpeg"
                alt="SIGNigeria - Empowering Nigeria"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/90 font-medium italic">"Building the future of Nigeria, one block at a time."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-foreground/30" />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <SimpleIcon type="lightning" size="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To create a decentralized platform that empowers Nigerian communities by integrating their
                socio-economic, cultural, and historical assets into the blockchain economy.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <SimpleIcon type="eye" size="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-bold text-white">Our Vision</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                A fully decentralized Nigeria where blockchain connects businesses, education, healthcare, and heritage
                with global opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Values</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">The principles that guide our journey towards a decentralized future.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Community Driven", desc: "Power to the people", icon: "community" },
              { title: "Decentralization", desc: "Trustless systems", icon: "link" },
              { title: "Transparency", desc: "Open & auditable", icon: "eye" },
              { title: "Cultural Sovereignty", desc: "Preserving heritage", icon: "building" },
              { title: "Innovation", desc: "Solving real problems", icon: "lightning" },
              { title: "Inclusion", desc: "For everyone", icon: "book" },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card/40 border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-6 flex items-center justify-center text-foreground/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <SimpleIcon type={value.icon} size="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-foreground/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms */}
      <section id="ecosystem" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Ecosystem</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">A comprehensive suite of decentralized platforms building the new digital economy.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Marketplace", desc: "Peer-to-peer commerce using crypto assets", icon: "shopping", color: "from-orange-500/20" },
              { title: "Health Hub", desc: "Blockchain-based health records & consultations", icon: "hospital", color: "from-red-500/20" },
              { title: "EduChain", desc: "Smart learning platform with verified credentials", icon: "book", color: "from-blue-500/20" },
              { title: "CultureChain", desc: "NFT-based cultural artifacts & preservation", icon: "palette", color: "from-purple-500/20" },
              { title: "Media Network", desc: "Decentralized content & news platform", icon: "newspaper", color: "from-green-500/20" },
              { title: "Entertainment", desc: "Creator tools & token-gated experiences", icon: "filmstrip", color: "from-pink-500/20" },
            ].map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/20 transition-colors group"
              >
                <div className="h-full p-8 rounded-[1.4rem] bg-background/90 backdrop-blur-xl border border-white/5 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} to-transparent blur-2xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100`} />

                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-6 text-foreground/80 group-hover:text-white transition-colors">
                      <SimpleIcon type={platform.icon} size="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{platform.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{platform.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Join the <br />
              <span className="text-primary">Revolution</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Be part of a movement empowering communities and preserving culture through Web3.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <SocialLinks className="justify-center" iconSize="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 p-0.5">
                  <Image
                    src="/signigeria-logo.png"
                    alt="SIGNigeria"
                    width={32}
                    height={32}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="font-bold text-xl text-white">SIGNigeria</span>
              </Link>
              <p className="text-foreground/60 text-sm max-w-xs leading-relaxed">
                Bringing Nigeria on-chain through community-driven Web3 initiatives, preserving culture, and empowering the future.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Platform</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><Link href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</Link></li>
                <li><Link href="/whitepaper" className="hover:text-primary transition-colors">Whitepaper</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Community</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="https://t.me/signigeria" target="_blank" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="https://x.com/africasigngiant" target="_blank" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-primary/30 p-0.5 bg-gradient-to-br from-primary/20 to-transparent">
                <Image
                  src="/signigeria-logo.png"
                  alt="SIGNigeria"
                  width={32}
                  height={32}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p>&copy; 2025 SIGNigeria. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
