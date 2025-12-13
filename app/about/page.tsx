import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ShieldCheck, Target, Lightbulb, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-0 text-white">
          <div className="absolute inset-0">
            <img src="/steel-metal-plates-industrial.jpg" alt="About hero background" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 text-white hover:bg-white/10 hover:text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 data-animate className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">About Us</h1>
            <p data-animate className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-blue-100">
              Two decades of engineering excellence as Manufacturing–Trader–Stockiest for industrial piping solutions.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-8">
                <h2 data-animate className="text-balance text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent sm:text-5xl">Our Story</h2>
                <div className="mt-3 h-1 w-16 rounded bg-primary" />
                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Since 2004</span>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    HUB Pipe & Fitting was established in 2004 and can look back on a success story of over 20 years
                    full of stability, reliability and growth. From trading to Manufacturing-Trader-Stockiest
                    value-added steel products, we have occupied a significant position in importing, storing and
                    supplying long steel in India.
                  </p>
                  <p>
                    Accepting challenges and ensuring customer satisfaction has been the hallmark of our group. Over the
                    past 20 years, the Group has grown into a multi-product, multi-location company providing
                    comprehensive plumbing solutions to a range of industries.
                  </p>
                  <p>
                    HUB Pipe & Fitting has identified India as a priority growth region. As part of this initiative, we
                    have set up a state-of-the-art Manufacturing-Trader-Stockiest facility in India to manufacture
                    seamless and welded pipes or fittings and hoses in stainless steel and high nickel alloys, offering
                    world-class Made in India products to meet the diverse needs of almost all emerging sectors.
                  </p>
                  <p>
                    <span className="font-semibold">Hub Pipes & Fittings</span> is a
                    <span className="font-semibold"> reliable</span> and
                    <span className="font-semibold"> leading manufacturer and supplier</span> in India, recognized for
                    delivering <span className="font-semibold">top-quality industrial metal components</span> with
                    <span className="font-semibold"> accuracy</span> and
                    <span className="font-semibold"> trustworthiness</span>. We specialize in manufacturing a broad
                    range of products like <span className="font-semibold text-primary">Pipes</span>,
                    <span className="font-semibold text-primary"> Tubes</span>,
                    <span className="font-semibold text-primary"> Flanges</span>, and
                    <span className="font-semibold text-primary"> Plates</span>, made of the best materials such as
                    <span className="font-semibold"> Stainless Steel</span>,
                    <span className="font-semibold"> Alloy Steel</span>,
                    <span className="font-semibold"> Carbon Steel</span>, and
                    <span className="font-semibold"> High Nickel Alloys</span>. Equipped with
                    <span className="font-semibold"> industry knowledge</span>,
                    <span className="font-semibold"> state-of-the-art production facilities</span>, and
                    <span className="font-semibold"> rigorous quality checks</span>, we have established our name as a
                    <span className="font-semibold"> trusted flange manufacturer in India</span>, producing products
                    that deliver <span className="font-semibold"> performance</span>,
                    <span className="font-semibold"> durability</span>, and conform to
                    <span className="font-semibold"> industry standards</span>.
                  </p>
                  <p>
                    As a responsible <span className="font-semibold">buttweld fitting manufacturer</span>, we provide
                    a <span className="font-semibold">complete range of fittings and metal solutions</span> designed
                    to cater to the requirements of <span className="font-semibold">various sectors</span> across the
                    country. Strong bonds with <span className="font-semibold">dependable mills and suppliers</span>
                    enable us to maintain <span className="font-semibold">good stock levels</span>, ensure
                    <span className="font-semibold">smooth operations</span>, and meet
                    <span className="font-semibold"> delivery timelines</span> for every order. Hub Pipes & Fittings is
                    <span className="font-semibold"> quality</span>,
                    <span className="font-semibold"> service</span>, and
                    <span className="font-semibold"> long-term value</span> oriented, making us a
                    <span className="font-semibold"> trusted partner</span> for customers in need of
                    <span className="font-semibold"> high-performance</span>
                    <span className="font-semibold text-primary"> Pipes</span>,
                    <span className="font-semibold text-primary"> Tubes</span>,
                    <span className="font-semibold text-primary"> Flanges</span>,
                    <span className="font-semibold text-primary"> Plates</span>, and
                    <span className="font-semibold text-primary"> Buttweld Fittings</span>.
                  </p>
                </div>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Mission</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To provide world-class industrial piping solutions that meet the highest standards of quality,
                    reliability, and performance while ensuring customer satisfaction through innovation and expert
                    support.
                  </p>
                </Card>

                <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Values</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Integrity, innovation, and customer-centricity guide every decision we make. We believe in long-term
                    partnerships built on trust, transparency, and consistent delivery of superior outcomes.
                  </p>
                </Card>

                <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Our Vision</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To be recognized as India's leading manufacturer and supplier of industrial piping products, setting
                    benchmarks in quality, service excellence, and technological advancement.
                  </p>
                </Card>

                <Card data-animate="fade-up" className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Quality Commitment</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Our state-of-the-art manufacturing facilities and rigorous quality control processes ensure that
                    every product we produce meets international standards of performance and reliability.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="bg-muted/50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Goals</h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">
                Committed to excellence in every aspect of our business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card data-animate="fade-up" className="border-2 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">High Quality</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Products manufactured to the highest industry standards. We ensure that every item undergoes rigorous
                  quality control and meets international specifications including ASTM, ASME, and other relevant
                  standards.
                </p>
              </Card>

              <Card data-animate="fade-up" className="border-2 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">Cost-Effective Solutions</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Competitive pricing without compromising on quality. We leverage our extensive network and efficient
                  operations to deliver maximum value, helping you optimize project costs while maintaining superior
                  product standards.
                </p>
              </Card>

              <Card data-animate="fade-up" className="border-2 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">Expert Support</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Our team of experts is always ready to provide technical assistance and support. With decades of
                  combined experience, we offer guidance on product selection, specifications, and application to ensure
                  optimal results for your projects.
                </p>
              </Card>

              <Card data-animate="fade-up" className="border-2 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">Needs Assessment</h3>
                <p className="leading-relaxed text-muted-foreground">
                  We take the time to understand more about your current projects and how we can assist you. Our
                  consultative approach ensures tailored solutions that precisely match your requirements and
                  specifications.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Industries We Serve
              </h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">
                Delivering specialized solutions to meet the demands of diverse sectors
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Oil & Gas", description: "Upstream, midstream, and downstream applications" },
                { name: "Petrochemical", description: "Chemical processing and refinement facilities" },
                { name: "Power Plants", description: "Thermal, nuclear, and renewable energy systems" },
                { name: "Water Supply", description: "Municipal and industrial water distribution" },
                { name: "Refining", description: "Petroleum refining and processing plants" },
                { name: "Process Industries", description: "Manufacturing and industrial processing" },
                { name: "Manufacturing", description: "General industrial and fabrication sectors" },
                { name: "Construction", description: "Infrastructure and building projects" },
              ].map((industry) => (
                <Card data-animate="fade-up" key={industry.name} className="p-6 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 font-semibold text-foreground">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Why Choose HUB Pipe & Fitting?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "20+ years of industry experience",
                "State-of-the-art manufacturing facility",
                "Comprehensive product portfolio",
                "World-class Made in India products",
                "Rigorous quality control processes",
                "Expert technical support team",
                "Competitive and transparent pricing",
                "On-time delivery commitment",
                "Multi-location presence across India",
              ].map((point) => (
                <div data-animate="fade-up" key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 data-animate className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Partner With Us Today</h2>
            <p data-animate className="mt-6 text-pretty text-xl leading-relaxed text-blue-100">
              Experience unmatched expertise and service in the piping and fitting industry
            </p>
            <div data-animate className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/products">View Our Products</Link>
              </Button>
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
