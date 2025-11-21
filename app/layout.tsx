import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SIGNigeria - Bringing Nigeria On-Chain",
  description: "Empowering Communities. Preserving Culture. Building Web3 Nigeria.",
  openGraph: {
    title: "SIGNigeria - Bringing Nigeria On-Chain",
    description: "Empowering Communities. Preserving Culture. Building Web3 Nigeria.",
    images: [
      {
        url: "/signigeria-logo.png",
        width: 1200,
        height: 630,
        alt: "SIGNigeria Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGNigeria - Bringing Nigeria On-Chain",
    description: "Empowering Communities. Preserving Culture. Building Web3 Nigeria.",
    images: ["/signigeria-logo.png"],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
