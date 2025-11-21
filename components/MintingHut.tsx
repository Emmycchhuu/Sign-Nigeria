"use client"

import { motion } from "framer-motion"

export const MintingHut = () => {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
            {/* Glowing Background */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
            />

            {/* Hut Structure */}
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(255,199,0,0.5)]"
            >
                {/* Base */}
                <motion.path
                    d="M40 100 L40 180 Q100 190 160 180 L160 100"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Roof */}
                <motion.path
                    d="M20 110 L100 20 L180 110"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />

                {/* Door */}
                <motion.path
                    d="M85 180 L85 130 Q100 120 115 130 L115 180"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                />

                {/* Decorative Patterns */}
                <motion.path
                    d="M50 120 L150 120"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 2.5 }}
                />

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFC700" />
                        <stop offset="100%" stopColor="#FF6B00" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -100,
                        x: (i % 2 === 0 ? 1 : -1) * 50,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    )
}
