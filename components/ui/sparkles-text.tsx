"use client"

import type React from "react"
import { GradualSpacing } from "./gradual-spacing"

interface SparklesTextProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SparklesText({ children, className = "", style = {} }: SparklesTextProps) {
  const textContent = typeof children === "string" ? children : children?.toString() || ""

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
        fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        ...style,
      }}
    >
      <GradualSpacing
        text={textContent}
        duration={0.6}
        delayMultiple={0.08}
        className="text-inherit"
        framerProps={{
          hidden: { opacity: 0, x: -20, scale: 0.8 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }}
      />
    </div>
  )
}

export default SparklesText
