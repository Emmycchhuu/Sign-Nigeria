"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronUp, Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { whitepaperContent } from "./data"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "@/components/Sparkles"
import { SocialLinks } from "@/components/SocialLinks"
import * as Collapsible from "@radix-ui/react-collapsible"

export default function WhitepaperPage() {
  const [scrollToTop, setScrollToTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let current = ""
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || ""
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    // Initialize open sections with the first few
    setOpenSections(whitepaperContent.map(s => s.id))

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Adjust for fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleSection = (id: string) => {
    setOpenSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const expandAll = () => setOpenSections(whitepaperContent.map(s => s.id))
  const collapseAll = () => setOpenSections([])

  return (
    <div className="w-full min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            SIGNigeria
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Back to Home
            </Link>
            <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="pb-4 border-b border-border/50">
                <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">Contents</h3>
                <div className="space-y-2">
                  {whitepaperContent.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${activeSection === section.id ? "text-primary font-medium" : "text-foreground/70"
                        }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="/"
                className="block py-3 text-foreground/70 hover:text-white border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider">Contents</h3>
                  <div className="flex gap-2 text-xs">
                    <button onClick={expandAll} className="text-primary hover:underline">Expand</button>
                    <span className="text-foreground/30">|</span>
                    <button onClick={collapseAll} className="text-foreground/50 hover:text-foreground hover:underline">Collapse</button>
                  </div>
                </div>
                <nav className="space-y-1 border-l border-border/50">
                  {whitepaperContent.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left pl-4 py-2 text-sm border-l-2 transition-all duration-200 ${activeSection === section.id
                        ? "border-primary text-primary font-medium bg-primary/5"
                        : "border-transparent text-foreground/60 hover:text-foreground hover:border-foreground/20"
                        }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm"
              >
                <h4 className="font-semibold text-white mb-2">Join the Community</h4>
                <p className="text-xs text-foreground/60 mb-4">Be part of the Nigeria On-Chain movement.</p>
                <SocialLinks />
              </motion.div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-16">
            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 border-b border-border/50 pb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                <span>Draft 1.0</span>
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <span>Comprehensive</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                SIGNigeria
                <span className="block mt-2">
                  <Sparkles color="#FFC700">Whitepaper</Sparkles>
                </span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
                Bringing Nigeria On-Chain • Building Web3 Communities • Empowering the Future
              </p>
            </motion.div>

            {/* Dynamic Content Rendering */}
            <div className="space-y-8">
              {whitepaperContent.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="scroll-mt-32"
                >
                  <Collapsible.Root
                    open={openSections.includes(section.id)}
                    onOpenChange={() => toggleSection(section.id)}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection(section.id)}>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3 group-hover:text-primary transition-colors">
                        {section.title}
                        <div className="h-px flex-1 bg-border/50 ml-4 group-hover:bg-primary/30 transition-colors"></div>
                      </h2>
                      <div className={`p-2 rounded-full hover:bg-white/5 transition-colors ${openSections.includes(section.id) ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-foreground/50" />
                      </div>
                    </div>

                    <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                      <div className="pb-12 space-y-8">
                        {section.content && (
                          <p className="text-lg text-foreground/80 leading-relaxed text-justify">
                            {section.content}
                          </p>
                        )}

                        {section.subsections && (
                          <div className="space-y-12">
                            {section.subsections.map((sub, idx) => (
                              <div key={idx} className="space-y-4">
                                {sub.title && (
                                  <h3 className="text-xl font-semibold text-accent">
                                    {sub.title}
                                  </h3>
                                )}

                                {sub.content && (
                                  <p className="text-foreground/80 leading-relaxed">
                                    {sub.content}
                                  </p>
                                )}

                                {sub.items && (
                                  <div className="grid gap-6 mt-6">
                                    {sub.items.map((item, i) => (
                                      <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-6 rounded-xl bg-card/40 border border-border/50 hover:border-primary/30 transition-colors"
                                      >
                                        <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                                        {item.desc && <p className="text-foreground/70 text-sm">{item.desc}</p>}
                                        {item.features && (
                                          <ul className="mt-3 space-y-2">
                                            {item.features.map((feature, f) => (
                                              <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{feature}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {section.list && (
                          <ul className="grid gap-4 sm:grid-cols-2">
                            {section.list.map((item, idx) => (
                              <motion.li
                                key={idx}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                              >
                                <span className="text-primary font-bold">✓</span>
                                <span className="text-foreground/80">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Collapsible.Content>
                  </Collapsible.Root>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-12 px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full border border-primary/30 p-0.5 bg-gradient-to-br from-primary/20 to-transparent">
              <Image
                src="/signigeria-logo.png"
                alt="SIGNigeria"
                width={32}
                height={32}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-foreground/60 text-sm">&copy; 2025 SIGNigeria. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-foreground/50">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
