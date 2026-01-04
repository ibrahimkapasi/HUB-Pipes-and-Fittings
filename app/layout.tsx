import type React from "react"
import type { Metadata } from "next"
import { ArrowUp, MessageCircle, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ScrollReveal from "@/components/ScrollReveal"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HUB Pipes & Fitting - Industrial Piping Solutions Since 2004",
  description:
    "Leading manufacturer, trader, and stockiest of industrial pipes and fittings. High-quality plates, flanges, olets, socket welds, buttweld fittings, and bars. Serving Oil & Gas, Petrochemical, Power Plants industries across India.",
  keywords: [
    "industrial pipes",
    "pipe fittings",
    "flanges",
    "buttweld fittings",
    "socket weld fittings",
    "stainless steel pipes",
    "olets",
    "steel plates",
    "tube fittings",
    "forged fittings",
    "induction bends",
    "manufacturing trader stockiest",
    "HUB Pipe Fitting",
    "Mumbai",
    "Thane",
    "India",
  ],
  authors: [{ name: "HUB Pipes & Fitting" }],
  creator: "HUB Pipes & Fitting",
  publisher: "HUB Pipes & Fitting",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hubpipes.com",
    title: "HUB Pipes & Fitting - Industrial Piping Solutions Since 2004",
    description:
      "Leading manufacturer, trader, and stockiest of industrial pipes and fittings in India. 20+ years of excellence.",
    siteName: "HUB Pipes & Fitting",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <div id="top" />
        <header className="fixed top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="bg-slate-950 text-slate-300">
            <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <a href="mailto:metalhpf@gmail.com" className="inline-flex items-center gap-1 hover:text-white"><Mail className="size-3.5" /> metalhpf@gmail.com</a>
                <a href="tel:+918976691734" className="inline-flex items-center gap-1 hover:text-white"><Phone className="size-3.5" /> +91 89766 91734</a>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-white"><Facebook className="size-3.5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-white"><Instagram className="size-3.5" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="size-3.5" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-white"><Twitter className="size-3.5" /></a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-3 text-xl font-bold text-foreground">
                <img src="/icon.svg" alt="HUB" className="h-6 w-6" />
                HUB Pipes & Fitting
              </a>
              <nav className="hidden items-center gap-6 md:flex">
                <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Home</a>
                <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">About</a>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="h-auto bg-transparent p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white dark:bg-slate-950 border shadow-lg">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/products/grating"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100"
                              >
                                <div className="text-sm font-medium leading-none">Grating</div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                                  High-quality grating solutions for industrial applications.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                href="/products?category=Pipes"
                                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-slate-50 dark:bg-slate-900 p-6 no-underline outline-none focus:shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors"
                              >
                                <div className="mb-2 text-lg font-medium text-slate-900 dark:text-slate-100">
                                  Pipes & Tubes
                                </div>
                                <p className="mb-4 text-sm leading-tight text-muted-foreground">
                                  Stainless steel and carbon steel pipes.
                                </p>
                                <ul className="grid gap-2 text-sm text-slate-500 dark:text-slate-400">
                                  <li>Stainless Steel Pipe Fitting Tee</li>
                                  <li>Stainless Steel Pipe Fitting Cross</li>
                                  <li>Stainless Steel Pipe Fitting Elbow</li>
                                  <li>IBR Approved SS Pipe Fittings</li>
                                  <li>Stainless Steel Tubes</li>
                                  <li>Seamless & ERW Pipes</li>
                                </ul>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/products?category=Flanges"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100"
                              >
                                <div className="text-sm font-medium leading-none">Flanges</div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                                  Slip-on, blind, and weld neck flanges.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/products"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100"
                              >
                                <div className="text-sm font-medium leading-none">View All</div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                                  Browse our complete product catalog.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</a>
              </nav>
              <a
                href="tel:+918976691734"
                className="hidden rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground md:inline-flex"
              >
                Call Now
              </a>
            </div>
          </div>
        </header>
        <ScrollReveal />
        {children}
        <FloatingActions />
        <Analytics />
      </body>
      </html>
  )
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button aria-label="Open actions" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 animate-float">
            <MessageCircle className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} className="w-56">
          <DropdownMenuItem asChild>
            <a href="https://wa.me/918976691734" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><MessageCircle className="size-4" /> WhatsApp</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="tel:+918976691734" className="flex items-center gap-2"><Phone className="size-4" /> Call</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="mailto:metalhpf@gmail.com" className="flex items-center gap-2"><Mail className="size-4" /> Mail</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/contact" className="flex items-center gap-2"><ArrowUp className="size-4 rotate-180" /> Request a Quote</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
