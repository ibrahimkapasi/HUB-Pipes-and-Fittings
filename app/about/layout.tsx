import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - HUB Pipe & Fitting | 20+ Years of Excellence",
  description:
    "Learn about HUB Pipe & Fitting's 20+ year journey in industrial piping solutions. Established in 2004, we are a leading Manufacturing-Trader-Stockiest serving Oil & Gas, Petrochemical, and Power Plant industries.",
  keywords: [
    "about HUB Pipe Fitting",
    "company history",
    "manufacturing facility",
    "industrial piping company",
    "20 years experience",
    "Mumbai pipe manufacturer",
  ],
  openGraph: {
    title: "About Us - HUB Pipe & Fitting",
    description: "Discover our 20+ year journey in delivering excellence in industrial piping solutions across India.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
