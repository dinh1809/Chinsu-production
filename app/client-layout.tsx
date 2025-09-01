"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
