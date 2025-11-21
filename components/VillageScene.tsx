"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

// --- Sub-components for Scene Elements ---

const Hut = ({ className = "", scale = 1 }) => (
    <svg viewBox="0 0 100 100" className={className} style={{ transform: `scale(${scale})` }}>
        {/* Base */}
        <path d="M20 50 L20 90 Q50 95 80 90 L80 50" fill="#4A3B2A" />
        {/* Roof */}
        <path d="M10 55 L50 10 L90 55" fill="#8B5A2B" />
        <path d="M10 55 L50 10 L90 55" fill="none" stroke="#654321" strokeWidth="2" />
        {/* Door */}
        <path d="M40 90 L40 60 Q50 55 60 60 L60 90" fill="#2A2A2A" />
        {/* Decor */}
        <path d="M25 60 L75 60" stroke="#D4A017" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
)

const Human = ({ delay = 0, duration = 10 }) => (
    <motion.svg
        viewBox="0 0 50 100"
        className="absolute bottom-0 w-12 h-24 text-black/80"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: "120vw", opacity: 1 }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear",
        }}
    >
        {/* Head */}
        <circle cx="25" cy="15" r="8" fill="currentColor" />
        {/* Body */}
        <line x1="25" y1="23" x2="25" y2="60" stroke="currentColor" strokeWidth="4" />
        {/* Arms */}
        <motion.path
            d="M25 30 L10 50"
            stroke="currentColor"
            strokeWidth="3"
            animate={{ d: ["M25 30 L10 50", "M25 30 L40 50", "M25 30 L10 50"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
            d="M25 30 L40 50"
            stroke="currentColor"
            strokeWidth="3"
            animate={{ d: ["M25 30 L40 50", "M25 30 L10 50", "M25 30 L40 50"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Legs */}
        <motion.path
            d="M25 60 L15 90"
            stroke="currentColor"
            strokeWidth="4"
            animate={{ d: ["M25 60 L15 90", "M25 60 L35 90", "M25 60 L15 90"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
            d="M25 60 L35 90"
            stroke="currentColor"
            strokeWidth="4"
            animate={{ d: ["M25 60 L35 90", "M25 60 L15 90", "M25 60 L35 90"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
    </motion.svg>
)

const Bird = ({ y, duration, delay }) => (
    <motion.svg
        viewBox="0 0 20 10"
        className="absolute w-6 h-3 text-black/60"
        style={{ top: y }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: "120vw", opacity: 1 }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
        <motion.path
            d="M0 5 Q10 10 20 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ d: ["M0 5 Q10 10 20 5", "M0 5 Q10 0 20 5"] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
    </motion.svg>
)

export const VillageScene = () => {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 100])
    const y2 = useTransform(scrollY, [0, 500], [0, 50])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Sky Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF8C00] via-[#FF4500] to-[#2E0854] opacity-80" />

            {/* Sun */}
            <motion.div
                className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-[#FFD700] blur-xl opacity-80"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Distant Mountains (Parallax Layer 1) */}
            <motion.div style={{ y: y1 }} className="absolute bottom-0 left-0 w-full h-1/2">
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full text-[#2E0854]/50 fill-current">
                    <path d="M0 300 L0 100 Q200 50 400 150 T800 100 L1000 200 L1000 300 Z" />
                </svg>
            </motion.div>

            {/* Midground Hills (Parallax Layer 2) */}
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-full h-1/3">
                <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full text-[#4B0082]/60 fill-current">
                    <path d="M0 200 L0 50 Q300 0 600 80 T1000 40 L1000 200 Z" />
                </svg>
            </motion.div>

            {/* Village Layer */}
            <div className="absolute bottom-[10%] left-0 w-full h-64 flex items-end justify-around px-10">
                <Hut className="w-32 h-32 text-black/80 drop-shadow-lg" scale={0.8} />
                <Hut className="w-48 h-48 text-black/90 drop-shadow-2xl z-10" scale={1.2} />
                <Hut className="w-36 h-36 text-black/80 drop-shadow-lg" scale={0.9} />
                <Hut className="w-24 h-24 text-black/70 drop-shadow-md" scale={0.6} />
            </div>

            {/* Animated Life */}
            <div className="absolute inset-0">
                {/* Birds */}
                <Bird y="20%" duration={15} delay={0} />
                <Bird y="25%" duration={18} delay={2} />
                <Bird y="22%" duration={16} delay={5} />

                {/* Humans */}
                <Human delay={0} duration={20} />
                <Human delay={5} duration={25} />
                <Human delay={10} duration={18} />
            </div>

            {/* Foreground Vegetation */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20" />
        </div>
    )
}
