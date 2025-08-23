"use client"

import type React from "react"

interface GlowingEffectProps {
  children: React.ReactNode
  className?: string
}

export function GlowingEffect({ children, className = "" }: GlowingEffectProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 blur-sm animate-pulse"></div>
      <div className="absolute inset-0 rounded-lg border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
