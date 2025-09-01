"use client"

import type React from "react"
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-body",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-heading",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()

  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
