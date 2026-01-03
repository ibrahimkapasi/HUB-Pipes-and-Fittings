import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - HUB Pipe & Fitting | Pipes, Flanges, Fittings & More",
  description:
    "Comprehensive range of industrial piping products: Pipes, Tubes, Plates, Flanges, Buttweld Fittings, Socket Weld, Olets, Bars, Tube Fittings, and Induction Bends. All products meet ASTM, ASME international standards.",
  keywords: [
    "pipes ASTM A312",
    "flanges ANSI B16.5",
    "buttweld fittings ASME B16.9",
    "socket weld fittings",
    "olets MSS SP-97",
    "stainless steel 304 316",
    "duplex steel",
    "nickel alloys",
    "industrial fittings India",
  ],
  openGraph: {
    title: "Products - HUB Pipe & Fitting",
    description:
      "Explore our comprehensive range of high-quality industrial piping products manufactured to international standards.",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/003/076/840/small/seamless-pattern-of-fasteners-bolts-screws-and-nuts-in-doodle-style-vector.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
