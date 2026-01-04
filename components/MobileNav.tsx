"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto p-6">
        <SheetHeader>
          <SheetTitle className="text-left flex items-center gap-2">
            <img src="/icon.svg" alt="HUB" className="h-6 w-6" />
            HUB Pipes & Fitting
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-primary"
          >
            About
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="products" className="border-none">
              <AccordionTrigger className="text-lg font-medium hover:text-primary py-0 pb-4">
                Products
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 pl-4">
                <Link
                  href="/products/grating"
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Grating
                </Link>
                <Link
                  href="/products?category=Pipes"
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Pipes & Tubes
                </Link>
                <Link
                  href="/products?category=Flanges"
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Flanges
                </Link>
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  View All Products
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        
        <div className="mt-auto pt-6 border-t">
            <div className="flex flex-col gap-3">
                <a href="tel:+918976691734" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Phone className="h-4 w-4" />
                    +91 89766 91734
                </a>
                <a href="mailto:metalhpf@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                    metalhpf@gmail.com
                </a>
            </div>
            <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary"><Facebook className="h-4 w-4" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary"><Instagram className="h-4 w-4" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary"><Twitter className="h-4 w-4" /></a>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
