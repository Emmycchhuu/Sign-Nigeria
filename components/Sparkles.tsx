"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min

type Sparkle = {
    id: string
    createdAt: number
    color: string
    size: number
    style: {
        top: string
        left: string
        zIndex: number
    }
}

const DEFAULT_COLOR = "#FFC700"

const generateSparkle = (color: string = DEFAULT_COLOR): Sparkle => {
    return {
        id: Math.random().toString(36).slice(2, 9) + Date.now().toString(36),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + "%",
            left: random(0, 100) + "%",
            zIndex: 2,
        },
    }
}

export const Sparkles = ({ color = DEFAULT_COLOR, children, ...props }: { color?: string; children: React.ReactNode }) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now()
            const sparkle = generateSparkle(color)

            setSparkles(currentSparkles => {
                const nextSparkles = currentSparkles.filter((sp) => {
                    const delta = now - sp.createdAt
                    return delta < 750
                })
                nextSparkles.push(sparkle)
                return nextSparkles
            })
        }, 50)

        return () => clearInterval(interval)
    }, [color])

    return (
        <span className="relative inline-block" {...props}>
            {sparkles.map((sparkle) => (
                <SparkleInstance key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
            ))}
            <strong className="relative z-10 font-bold">{children}</strong>
        </span>
    )
}

const SparkleInstance = ({ color, size, style }: { color: string; size: number; style: any }) => {
    return (
        <motion.span
            className="absolute block pointer-events-none"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 180 }}
            exit={{ scale: 0, rotate: 0 }}
            transition={{ duration: 0.75 }}
            style={style}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    fill={color}
                />
            </svg>
        </motion.span>
    )
}
