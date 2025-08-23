"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SparkleProps {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

interface SparklesTextProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SparklesText({ children, className = "", style = {} }: SparklesTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sparkles, setSparkles] = useState<SparkleProps[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const newSparkles: SparkleProps[] = []

      // Generate 8-12 sparkles around the text
      const sparkleCount = Math.floor(Math.random() * 5) + 8

      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: Math.random(),
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 2,
        })
      }

      setSparkles(newSparkles)
    }

    // Generate initial sparkles
    generateSparkles()

    // Regenerate sparkles every 3 seconds
    const interval = setInterval(generateSparkles, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`} style={style}>
      {children}

      {/* Sparkles overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-sparkle"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: "2s",
            }}
          >
            <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none" className="text-yellow-400">
              <path
                d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"
                fill="currentColor"
                className="drop-shadow-sm"
              />
            </svg>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default SparklesText
