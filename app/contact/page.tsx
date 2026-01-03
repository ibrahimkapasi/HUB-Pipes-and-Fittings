"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { ArrowLeft, Mail, Phone, MapPin, Globe, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-0 text-white">
          <div className="absolute inset-0">
            <img src="/industrial-pipe-flanges.jpg" alt="Contact hero background" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[320px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col items-center justify-center text-center">
            <h1 data-animate className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p data-animate className="mt-3 max-w-3xl text-pretty text-lg leading-relaxed text-blue-100">
              Get in touch with our team for inquiries, quotes, or technical assistance. We're here to help with your industrial piping needs.
            </p>
            <div className="mt-4 inline-flex px-3 py-2">
              <Breadcrumb>
                <BreadcrumbList className="justify-center text-white">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-400">Contact Us</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 data-animate className="mb-6 text-3xl font-bold tracking-tight text-foreground">Send Us a Message</h2>
                <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                    </div>

                    <Button data-animate type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-sm text-green-600">Message sent successfully! We'll get back to you soon.</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-600">Failed to send message. Please try calling us directly.</p>
                    )}
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 data-animate className="mb-6 text-3xl font-bold tracking-tight text-foreground">Contact Information</h2>

                <div className="grid gap-6 md:grid-cols-2">
              <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-foreground">Reach Us</h3>
                    <div className="mt-4 space-y-5">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+918976691734" className="text-sm text-muted-foreground hover:text-primary hover:underline">
                          +91 89766 91734
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <a
                          href="mailto:metalhpf@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary hover:underline"
                        >
                          metalhpf@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-primary" />
                        <a
                          href="https://www.hubpipes.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary hover:underline"
                        >
                          www.hubpipes.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-foreground">Address & Hours</h3>
                    <div className="mt-4 space-y-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <div className="text-sm text-muted-foreground">
                          23 Bharti Park
                          <br />
                          Mira Road East
                          <br />
                          Thane, Maharashtra 401107
                          <br />
                          India
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <div className="text-sm text-muted-foreground">
                          <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Google Map */}
        <section className="bg-muted/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg border">
              <div className="aspect-[21/9]">
                <iframe
                  title="HUB Pipe & Fitting Location"
                  aria-label="Map showing HUB Pipe & Fitting address"
                  src="https://www.google.com/maps?q=23+Bharti+Park+Mira+Road+East+Thane+401107&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=23+Bharti+Park+Mira+Road+East+Thane+401107"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t bg-slate-950 py-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">HUB Pipe & Fitting</h3>
                <p className="text-sm leading-relaxed">
                  Hub‍‌‍‍‌‍‌‍‍‌ Pipes & Fittings is a leading Plates, Buttweld Fittings, and Round Bar manufacturer and supplier in India. We are a metal products wholesaler of premium grades, and a complete range of metals is readily available in large quantities in major cities like Gujarat, Maharashtra, and ‍‌‍‍‌‍‌‍‍‌Rajasthan.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/" className="block hover:text-white">
                    Home
                  </Link>
                  <Link href="/about" className="block hover:text-white">
                    About Us
                  </Link>
                  <Link href="/products" className="block hover:text-white">
                    Products
                  </Link>
                  <Link href="/contact" className="block hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Products</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Pipes",
                    "Tubes",
                    "Plates",
                    "Flanges",
                    "Buttweld Fittings",
                    "Socket Weld Fittings",
                    "Olets",
                    "Bars",
                  ].map((p) => (
                    <Link key={p} href="/products" className="hover:text-white">
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Contact Info</h4>
                <div className="space-y-2 text-sm">
                  <p>23 Bharti Park, Mira Road East</p>
                  <p>Thane, Maharashtra 401107</p>
                  <a href="tel:+918976691734" className="block hover:text-white">
                    +91 89766 91734
                  </a>
                  <a href="https://www.hubpipes.com" className="block hover:text-white">
                    www.hubpipes.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
              <p>© 2025 HUB Pipe & Fitting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
