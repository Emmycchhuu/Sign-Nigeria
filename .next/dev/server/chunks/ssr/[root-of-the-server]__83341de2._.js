module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/mint/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

```typescript
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { VillageScene } from "@/components/VillageScene"

export default function MintPage() {
  return (
    <div className="min-h-screen bg-[#1a0505] text-white overflow-hidden relative selection:bg-primary/30">
      {/* Animated Village Background */}
      <VillageScene />

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8 bg-black/30 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/20 text-primary-foreground text-sm font-bold mb-4 shadow-[0_0_15px_rgba(255,199,0,0.3)]">
            Limited Edition SBT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            Mint Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
              Digital Heritage
            </span>
          </h1>

          <p className="text-lg text-white/90 leading-relaxed max-w-xl mx-auto drop-shadow-md">
            Secure your place in the SIGNigeria ecosystem. A living, breathing community on the blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] hover:scale-105 transition-all duration-300">
              Connect Wallet
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Minting Live</span>
            </div>
            <div>
              <span>0.00 ETH + Gas</span>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
```;
}),
"[project]/app/mint/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/mint/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__83341de2._.js.map