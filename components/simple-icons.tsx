"use client"

import type React from "react"

import {
  Users,
  Link2,
  Eye,
  Building2,
  Zap,
  BookOpen,
  ShoppingCart,
  Heart,
  Palette,
  Newspaper,
  Film,
  Github,
  Twitter,
  Youtube,
} from "lucide-react"

interface IconProps {
  type: string
  size?: string
  className?: string
}

export function SimpleIcon({ type, size = "w-6 h-6", className = "" }: IconProps) {
  const iconClass = `${size} ${className}`

  const icons: Record<string, React.ReactNode> = {
    community: <Users className={iconClass} />,
    link: <Link2 className={iconClass} />,
    eye: <Eye className={iconClass} />,
    building: <Building2 className={iconClass} />,
    lightning: <Zap className={iconClass} />,
    book: <BookOpen className={iconClass} />,
    shopping: <ShoppingCart className={iconClass} />,
    hospital: <Heart className={iconClass} />,
    palette: <Palette className={iconClass} />,
    newspaper: <Newspaper className={iconClass} />,
    filmstrip: <Film className={iconClass} />,
    github: <Github className={iconClass} />,
    twitter: <Twitter className={iconClass} />,
    youtube: <Youtube className={iconClass} />,
    discord: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
        className={iconClass}
      >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
    medium: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClass}
      >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    tiktok: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClass}
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.98 6.38-2.24 1.84-5.29 2.43-8.16 1.52-2.87-.91-5.01-3.5-5.35-6.49-.34-3 .89-5.99 3.14-7.92 1.87-1.6 4.39-2.16 6.77-1.51v4.08c-1.23-.47-2.65-.38-3.81.25-1.17.63-1.95 1.83-2.02 3.16-.06 1.34.62 2.6 1.72 3.3 1.09.7 2.48.74 3.61.12 1.13-.62 1.86-1.8 1.88-3.09V4.6c0-1.53.01-3.06.01-4.58z" />
      </svg>
    ),
    telegram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClass}
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  }

  return (icons[type] || icons.book) as React.ReactElement
}
