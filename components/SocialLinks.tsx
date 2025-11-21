"use client"

import { SimpleIcon } from "@/components/simple-icons"
import { motion } from "framer-motion"

const socialLinks = [
    {
        name: "Twitter",
        icon: "twitter",
        url: "https://x.com/africasigngiant?s=21",
        color: "hover:bg-black hover:text-white",
    },
    {
        name: "Telegram",
        icon: "telegram",
        url: "https://t.me/signigeria",
        color: "hover:bg-[#0088cc] hover:text-white",
    },

    {
        name: "Medium",
        icon: "medium",
        url: "https://medium.com/@AfricaSIGNGiant",
        color: "hover:bg-black hover:text-white",
    },
    {
        name: "YouTube",
        icon: "youtube",
        url: "https://youtube.com/@africasigngiant?si=CgsYxqbJyLt_7Dfm",
        color: "hover:bg-[#FF0000] hover:text-white",
    },
    {
        name: "TikTok",
        icon: "tiktok",
        url: "https://www.tiktok.com/@africasigngiant?_r=1&_t=ZS-91BMyCJ5BDj",
        color: "hover:bg-black hover:text-white",
    },
]

export const SocialLinks = ({ className = "", iconSize = "w-5 h-5" }: { className?: string; iconSize?: string }) => {
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {socialLinks.map((link) => (
                <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-card/50 border border-border/50 text-foreground/70 transition-colors ${link.color}`}
                    title={link.name}
                >
                    <SimpleIcon type={link.icon} size={iconSize} />
                </motion.a>
            ))}
        </div>
    )
}
