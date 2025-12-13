import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - HUB Pipes & Fitting | Get a Quote",
  description:
    "Contact HUB Pipe & Fitting for industrial piping solutions. Located in Mira Road East, Thane, Maharashtra. Call +91 89766 91734 or email metalhpf@gmail.com for quotes and inquiries.",
  keywords: [
    "contact HUB Pipes Fitting",
    "pipe fittings quote",
    "Mira Road pipe supplier",
    "Thane industrial pipes",
    "Mumbai pipe manufacturer contact",
  ],
  openGraph: {
    title: "Contact Us - HUB Pipes & Fitting",
    description: "Get in touch for quotes, technical assistance, and inquiries about our industrial piping solutions.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
