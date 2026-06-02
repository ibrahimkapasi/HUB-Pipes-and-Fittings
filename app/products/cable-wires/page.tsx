"use client"

import Link from "next/link"
import { ArrowRight, Check, Download, FileText, ImageIcon, Info, MapPin, Phone, ShieldCheck, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const subProducts = [
  {
    title: "FR & FRLS House Wires",
    image: "/products/cable-wires/house-wires.png",
    summary:
      "Flame retardant copper wires for residential, commercial, control panel, and lighting circuits.",
    details: [
      "FR and FRLS house wires are used for concealed wiring, lighting circuits, socket points, distribution boards, and everyday building electrification.",
      "These wires are selected for stable conductivity, flexible routing, and safer insulation behavior in residential and commercial installations.",
    ],
    specs: ["Copper conductor", "PVC / FR / FRLS insulation", "Single core options", "Building and panel wiring"],
  },
  {
    title: "Flexible Multicore Cables",
    image: "/products/cable-wires/power-cables.png",
    summary:
      "Flexible control and power cables for machines, equipment, motors, panels, and industrial wiring.",
    details: [
      "Flexible multicore cables help reduce wiring clutter in panels, machines, control rooms, and compact industrial layouts.",
      "They are useful where multiple conductors must be routed together for control, signal, motor, or auxiliary power connections.",
    ],
    specs: ["2 core to multicore options", "Flexible copper conductors", "PVC sheath", "Control and machine wiring"],
  },
  {
    title: "Armoured Power Cables",
    image: "/products/cable-wires/product-armoured-cable.png",
    summary:
      "Heavy-duty LT power cables for safer power distribution in factories, sites, and outdoor runs.",
    details: [
      "Armoured power cables are used for LT distribution, feeder lines, outdoor cable runs, factories, sites, and electrical rooms.",
      "The armoured construction provides additional mechanical protection where cable routes need durability and consistent current carrying performance.",
    ],
    specs: ["LT power distribution", "Mechanical protection", "Copper / aluminium options", "Indoor and outdoor runs"],
  },
  {
    title: "Solar DC Cables",
    image: "/products/cable-wires/product-solar-dc-cable.png",
    summary:
      "Solar project cables and connector accessories for rooftop and ground-mounted renewable systems.",
    details: [
      "Solar DC cables are used between solar modules, combiner boxes, inverters, and distribution equipment.",
      "They support clean project wiring for renewable installations where cable glands, lugs, and protected routing are important.",
    ],
    specs: ["Solar DC routing", "Red and black cable options", "Connector accessories", "Rooftop and site wiring"],
  },
  {
    title: "CCTV & Coaxial Cables",
    image: "/products/cable-wires/product-cctv-coaxial-cable.png",
    summary:
      "Low-voltage coaxial and CCTV wiring support for surveillance and security installations.",
    details: [
      "CCTV and coaxial cables are used for camera wiring, video signal routing, DVR/NVR installations, and low-voltage security projects.",
      "They are commonly supplied with connectors and accessories for neat termination and maintenance-friendly installation.",
    ],
    specs: ["CCTV camera wiring", "Coaxial cable options", "Connector support", "Security and surveillance systems"],
  },
  {
    title: "LAN & Data Cables",
    image: "/products/cable-wires/product-lan-data-cable.png",
    summary:
      "Networking cables, patch cords, and data wiring products for offices and communication rooms.",
    details: [
      "LAN and data cables are used for office networks, server rooms, patch panels, routers, switches, and structured cabling work.",
      "They support reliable low-voltage communication wiring for commercial buildings and IT infrastructure projects.",
    ],
    specs: ["Ethernet cable options", "Patch cord support", "RJ45 connector accessories", "Networking and IT rooms"],
  },
  {
    title: "Telephone & Communication Cables",
    image: "/products/cable-wires/product-telephone-cable.png",
    summary:
      "Communication cables for telephone lines, intercoms, access control, and low-voltage systems.",
    details: [
      "Telephone and communication cables are used in intercom systems, telecom points, access control panels, and building communication wiring.",
      "They are selected for organized signal routing and practical installation in residential, commercial, and facility projects.",
    ],
    specs: ["Telephone wiring", "Communication panels", "Low-voltage circuits", "Intercom and access control"],
  },
  {
    title: "Submersible Pump Cables",
    image: "/products/cable-wires/product-submersible-cable.png",
    summary:
      "Pump cable solutions for borewell, water systems, motor connections, and utility applications.",
    details: [
      "Submersible pump cables are used for pump motors, borewell connections, water supply systems, and utility installations.",
      "They are chosen where cable flexibility, insulation reliability, and protected termination are important for pump wiring.",
    ],
    specs: ["Pump motor wiring", "Flat cable options", "Water-system use", "Glands and termination support"],
  },
  {
    title: "Switchgear & Protection",
    image: "/products/cable-wires/switchgear.png",
    summary:
      "MCBs, isolators, terminal blocks, and distribution accessories for complete electrical panels.",
    details: [
      "Switchgear and protection products are used in distribution boards, electrical panels, control cabinets, and site power systems.",
      "The range supports MCBs, isolators, terminal blocks, DIN rail accessories, and practical components for panel builders and contractors.",
    ],
    specs: ["MCB and isolator range", "DIN rail accessories", "Terminal blocks", "Panel-ready components"],
  },
  {
    title: "Cable Glands & Lugs",
    image: "/products/cable-wires/accessories.png",
    summary:
      "Cable glands, copper lugs, ferrules, crimp terminals, and wiring accessories for clean terminations.",
    details: [
      "Cable glands, lugs, ferrules, terminals, and heat shrink sleeves help protect cable entries and improve connection quality.",
      "These accessories are used across distribution boards, panel wiring, field wiring, power cables, and control wire terminations.",
    ],
    specs: ["Brass cable glands", "Copper lugs", "Ferrules and terminals", "Heat-shrink and ties"],
  },
  {
    title: "PVC Conduit & Wiring Accessories",
    image: "/products/cable-wires/product-conduit-accessories.png",
    summary:
      "Conduits, junction boxes, elbows, couplers, clips, and accessories for protected cable routing.",
    details: [
      "PVC conduit and wiring accessories are used to route and protect cable wires in buildings, sites, workshops, and electrical rooms.",
      "They help keep cable runs organized, serviceable, and protected from accidental damage in surface and concealed wiring layouts.",
    ],
    specs: ["PVC conduits", "Junction boxes", "Elbows and couplers", "Cable clips and saddles"],
  },
]

const industryApplications = [
  {
    title: "Residential & Commercial Buildings",
    description: "FR and FRLS house wires for lighting, concealed wiring, sockets, DBs, and everyday electrical loads.",
    image: "/products/cable-wires/industry-buildings.png",
  },
  {
    title: "Electrical Panel Builders",
    description: "Flexible wires, ferrules, lugs, MCBs, terminal blocks, and control cables for clean panel wiring.",
    image: "/products/cable-wires/industry-panel-builders.png",
  },
  {
    title: "Factories & Workshops",
    description: "Power cables, control wiring, switchgear, and termination accessories for machines and shop floors.",
    image: "/products/cable-wires/industry-factories-workshops.png",
  },
  {
    title: "Machinery & Automation",
    description: "Flexible multicore cables for motors, sensors, drives, control cabinets, and equipment connections.",
    image: "/products/cable-wires/industry-machinery-automation.png",
  },
  {
    title: "Solar & Renewable Projects",
    description: "Cable glands, lugs, power cables, and distribution accessories for solar rooms and site wiring.",
    image: "/products/cable-wires/industry-solar-renewable.png",
  },
  {
    title: "Data, CCTV & Low-Voltage Systems",
    description: "Wiring support for networking, CCTV, access control, communication panels, and low-voltage circuits.",
    image: "/products/cable-wires/industry-data-cctv.png",
  },
]

const advantages = [
  "Product selection based on project load, installation method, and safety requirement.",
  "Supply support for wires, cables, switchgear, glands, lugs, and accessories in one place.",
  "SEO-focused cable wire product range for contractors, builders, panel makers, and industries.",
  "Reliable sourcing for Mumbai, Thane, Maharashtra, and pan-India electrical requirements.",
]

export default function CableWiresPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/products/cable-wires/hero.png"
            alt="Cable wires, electrical cables and switchgear products"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <Breadcrumb>
            <BreadcrumbList className="text-white/80">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Cable Wires</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur">
              <Zap className="size-4" />
              Electrical wires, cables and accessories
            </div>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Cable Wires Manufacturer, Supplier & Exporter in India
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-200">
              HUB Pipes & Fittings supplies electrical cable wires, FRLS house wires, flexible multicore cables,
              armoured power cables, switchgear accessories, cable glands, lugs, ferrules, and wiring hardware for
              industrial, commercial, and project requirements.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href="tel:+918976691734">
                  <Phone className="size-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-[url('/seamless-pattern.jpg')] bg-[length:400px] bg-repeat opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[8fr_3fr] lg:gap-8">
          <div className="min-w-0">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Complete Cable Wire Solutions for Electrical Projects
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Cable wires are the backbone of any electrical installation. The right wire or cable improves safety,
                  current flow, insulation performance, and long-term service reliability. We supply practical electrical
                  products for builders, contractors, panel manufacturers, factories, maintenance teams, and turnkey
                  project companies.
                </p>
                <p>
                  Our cable wire range is built around common project needs: house wiring, industrial control wiring,
                  flexible machine cabling, armoured power distribution, switchgear protection, and clean cable
                  termination. The product mix is inspired by electrical brochure categories such as wires, cables,
                  switchgear, cable glands, lugs, ferrules, and panel wiring accessories.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Explore Our Range of Cable Wire Products
                  </h2>
                </div>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="mt-8 min-w-0"
              >
                <CarouselContent>
                  {subProducts.map((product) => (
                    <CarouselItem key={product.title} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="group block w-full cursor-pointer text-left">
                            <div className="relative overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-lg">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between gap-3">
                              <h3 className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{product.title}</h3>
                              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-foreground ring-1 ring-border backdrop-blur-sm transition group-hover:bg-primary group-hover:text-white">
                                <ArrowRight className="size-4" />
                              </span>
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{product.title}</DialogTitle>
                            <DialogDescription>{product.summary}</DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="max-h-[68vh]">
                            <div className="space-y-5 px-1">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="aspect-[16/9] w-full rounded-lg object-cover"
                                loading="lazy"
                              />
                              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                                {product.details.map((text) => (
                                  <p key={text}>{text}</p>
                                ))}
                              </div>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {product.specs.map((spec) => (
                                  <div key={spec} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                                    <Check className="size-4 text-primary" />
                                    <span>{spec}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 z-10 bg-white/95 shadow-md hover:bg-white" />
                <CarouselNext className="right-0 z-10 bg-white/95 shadow-md hover:bg-white" />
              </Carousel>
            </div>

            <div className="mt-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Cable Wire Specifications
              </h2>
              <Card className="mt-6 p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 font-semibold">Parameter</th>
                        <th className="px-4 py-3 font-semibold">Available Options</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Product Types", "House wires, flexible cables, armoured cables, control cables, switchgear and accessories"],
                        ["Conductors", "Copper and aluminium options based on project requirement"],
                        ["Insulation", "PVC, FR, FRLS and application-specific insulation options"],
                        ["Core Options", "Single core, twin core, three core and multicore cable configurations"],
                        ["Accessories", "Cable glands, lugs, ferrules, terminals, heat shrink sleeves and cable ties"],
                        ["Applications", "Buildings, factories, panels, machines, distribution boards and site wiring"],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="px-4 py-3 font-medium text-foreground">{label}</td>
                          <td className="px-4 py-3 text-muted-foreground">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <div className="mt-16">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Hub Pipes & Fittings: Innovative Uses of Cable Wires in Industry
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {industryApplications.map((item) => (
                    <Card
                      key={item.title}
                      className="group relative min-h-[260px] overflow-hidden rounded-lg p-6 ring-1 ring-border transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/30"
                    >
                      <div className="absolute inset-0 z-0 bg-black">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45" />
                      </div>
                      <div className="relative z-10 flex h-full flex-col justify-end gap-5">
                        <ImageIcon className="size-9 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                          <h3 className="text-balance text-2xl font-bold leading-tight text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/85">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                  Why Choose Us
                </h2>
                <div className="mt-5 grid gap-3 lg:grid-cols-2">
                  {advantages.map((item) => (
                    <div key={item} className="flex gap-3 rounded-md border bg-card px-4 py-3">
                      <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Cities We Supply Cable Wires
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We support electrical cable wire requirements across Mumbai, Thane, Navi Mumbai, Pune, Gujarat,
                Hyderabad, Bengaluru, Delhi, Chennai, Kolkata, Ahmedabad, Surat, Jaipur, and other project locations.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["Mumbai", "Thane", "Pune", "Gujarat", "Hyderabad", "Bengaluru", "Delhi", "Chennai"].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    <span className="text-sm font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Card className="overflow-hidden p-0">
                <div className="border-b bg-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Star className="size-4" />
                    <span className="text-sm font-semibold">Cable Wire Range</span>
                  </div>
                </div>
                <div className="grid gap-3 p-4">
                  {subProducts.map((item) => (
                    <Link key={item.title} href="/contact" className="group flex items-center justify-between rounded-md border px-3 py-2 hover:bg-muted">
                      <span className="text-sm font-medium">{item.title}</span>
                      <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="border-b bg-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Info className="size-4" />
                    <span className="text-sm font-semibold">Need Selection Help?</span>
                  </div>
                </div>
                <div className="p-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Share cable type, voltage, conductor preference, core count, quantity, and site application. Our
                    team will help shortlist the right electrical product range.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button asChild size="sm">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="tel:+918976691734">Call +91 89766 91734</a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="border-b bg-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4" />
                    <span className="text-sm font-semibold">Related Products</span>
                  </div>
                </div>
                <div className="grid gap-2 p-4">
                  {[
                    { label: "Grating", href: "/products/grating" },
                    { label: "Flanges", href: "/products?category=Flanges" },
                    { label: "Pipes & Tubes", href: "/products?category=Pipes" },
                    { label: "View All Products", href: "/products" },
                  ].map((item) => (
                    <Link key={item.label} href={item.href} className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="border-b bg-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Download className="size-4" />
                    <span className="text-sm font-semibold">Downloads</span>
                  </div>
                </div>
                <div className="p-4">
                  <Link href="/catalogue.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-md border px-3 py-2">
                    <span className="text-sm font-medium">Company Catalogue</span>
                    <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
