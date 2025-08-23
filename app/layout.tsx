import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google"
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

export const metadata: Metadata = {
  title: "ChinSu: Đam Mê Trọn Vị",
  description: "Modern concept website for ChinSu Vietnamese condiments",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
