"use client"
import { useEffect, useState, useRef, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Phone, ArrowRight, ShieldCheck, Truck, Globe, Target } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Fade from "embla-carousel-fade"

export default function HomePage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [quickFormData, setQuickFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [quickSubmitting, setQuickSubmitting] = useState(false)
  const [quickStatus, setQuickStatus] = useState<"idle" | "success" | "error">("idle")
  const fadePlugins = useMemo(() => [Fade()], [])
  const [industriesApi, setIndustriesApi] = useState<CarouselApi | null>(null)
  const [productsApi, setProductsApi] = useState<CarouselApi | null>(null)
  const [otherProductsApi, setOtherProductsApi] = useState<CarouselApi | null>(null)

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setQuickSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quickFormData),
      })
      if (res.ok) {
        setQuickStatus("success")
        setQuickFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setQuickStatus("error")
      }
    } catch {
      setQuickStatus("error")
    } finally {
      setQuickSubmitting(false)
    }
  }
  useEffect(() => {
    if (!carouselApi) return
    setActiveIndex(carouselApi.selectedScrollSnap())
    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap())
    carouselApi.on("select", onSelect)
    const interval = setInterval(() => {
      carouselApi.scrollNext()
    }, 5000)
    return () => {
      clearInterval(interval)
      carouselApi.off("select", onSelect)
    }
  }, [carouselApi])
  useEffect(() => {
    if (!industriesApi) return
    const interval = setInterval(() => {
      industriesApi.scrollNext()
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [industriesApi])

  useEffect(() => {
    if (!productsApi) return
    const interval = setInterval(() => {
      productsApi.scrollNext()
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [productsApi])

  useEffect(() => {
    if (!otherProductsApi) return
    const interval = setInterval(() => {
      otherProductsApi.scrollNext()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [otherProductsApi])

  const productCategories = [
    {
      name: "Pipes & Tubes",
      image: "/industrial-steel-pipes-texture.jpg",
      items: [
        "Stainless Steel Pipe Fitting Tee",
        "Stainless Steel Pipe Fitting Cross",
        "Stainless Steel Pipe Fitting Elbow",
        "IBR Approved SS Pipe Fittings",
        "Stainless Steel Tubes",
        "Seamless & ERW Pipes"
      ]
    },
    {
      name: "Sheet and Plate",
      image: "/steel-metal-plates-industrial.jpg",
      items: [
        "Stainless Steel Plate",
        "Inconel Plates",
        "Hot & Cold Rolled Plates",
        "Super Duplex Steel Plates",
        "Alloy Steel Sheet",
        "Titanium Sheet"
      ]
    },
    {
      name: "Flanges",
      image: "/industrial-pipe-flanges.jpg",
      items: [
        "Stainless Steel Flange",
        "Slip On Flange",
        "Blind Flange",
        "Weld Neck Flange",
        "Socket Weld Flange",
        "Threaded Flange"
      ]
    },
    {
      name: "Buttweld Fittings",
      image: "/buttweld-pipe-fittings.jpg",
      items: [
        "Buttweld Fitting",
        "Buttweld Cross",
        "Buttweld End Caps",
        "Buttweld Elbows",
        "Buttweld Tees",
        "Buttweld Reducers"
      ]
    },
    {
      name: "Forged Fittings",
      image: "/socket-weld-pipe-fittings.jpg",
      items: [
        "Forged Fitting",
        "Forged Elbow",
        "Forged Tee",
        "Forged Cross",
        "Forged Coupling",
        "Forged Union"
      ]
    },
    {
      name: "Round Bar",
      image: "/steel-bars-industrial.jpg",
      items: [
        "Stainless Steel Round Bar",
        "Aluminum Bronze Round Bar",
        "Manganese Bronze Round Bar",
        "Phosphor Bronze Round Bar",
        "Lead Tin Bronze Round Bar",
        "Duplex Steel Round Bar"
      ]
    },
    {
      name: "Olets",
      image: "/pipe-olets-fittings.jpg",
      items: [
        "Olets",
        "Carbon Steel Olets",
        "Duplex Steel Olets",
        "Weldolets",
        "Threadolets",
        "Sockolets"
      ]
    }
  ]

  const industries = [
    { name: "Chemical industry", image: "https://rajkrupametal.com/wp-content/uploads/2022/10/chemical-industry.jpg" },
    { name: "Oil & Gas Industry", image: "https://rajkrupametal.com/wp-content/uploads/2022/10/oil-gas-industry.jpg" },
    { name: "Mechanical Industry", image: "https://rajkrupametal.com/wp-content/uploads/2022/10/mechanical-industry.jpg" },
    { name: "Marine Industry", image: "https://rajkrupametal.com/wp-content/uploads/2022/10/marine-industry.jpg" },
  ]

  const otherProducts = [
    {
      name: "Stainless Steel Pipe Fitting Tee",
      category: "Pipes",
      description: "Strong, leak-resistant branching for high-pressure lines.",
      image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F4992981-01",
    },
    {
      name: "Stainless Steel Pipe Fitting Cross",
      category: "Pipes",
      description: "Four-way flow distribution engineered in 304/304L and 316/316L grades.",
      image: "https://5.imimg.com/data5/NO/CQ/RM/SELLER-761146/cross-pipe-fitting.jpg",
    },
    {
      name: "Stainless Steel Pipe Fitting Elbow",
      category: "Pipes",
      description: "Efficient, reliable directional change unit with smooth flow.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/429994015/XP/PB/OZ/23289747/stainless-steel-pipe-fitting-elbow-500x500.jpg",
    },
    {
      name: "IBR Approved SS Pipe Fittings",
      category: "Pipes",
      description: "Machined using solid forgings. High‑quality IBR Approved.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326304044/UX/MT/XZ/21573024/stainless-steel-ibr-pipe-fittings.jpg",
    },
    {
      name: "Inconel Plates",
      category: "Plates",
      description: "UNS N06625 high‑performance plates manufactured with cutting‑edge processes.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/392600502/VY/NL/GQ/2062242/inconel-plates-1000x1000.jpg",
    },
    {
      name: "Hot & Cold Rolled Plates",
      category: "Plates",
      description: "Superior strength and versatility with finishes for structural applications.",
      image: "https://5.imimg.com/data5/ZH/AG/GG/SELLER-94159982/stainless-steel-hot-rolled-plate-1000x1000.jpg",
    },
    {
      name: "Super Duplex Steel Plates",
      category: "Plates",
      description: "High‑strength, corrosion‑resistant plates for demanding applications.",
      image: "https://stindia.com/img/nickel-alloy-sheet-supplier.jpg",
    },
    {
      name: "Stainless Steel Plate",
      category: "Plates",
      description: "Very strong, corrosion‑resistant and versatile for construction.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024053118270894084/cms/image/f9927636-81d8-4434-a9c1-6b4bb75d3b6b.jpg_560xaf.jpg",
    },
    {
      name: "Stainless Steel Flange",
      category: "Flanges",
      description: "Safe, corrosion‑free connections for chemical and petrochemical services.",
      image: "https://www.viraj.com/wp-content/uploads/2018/05/blog.jpg",
    },
    {
      name: "Slip On Flange",
      category: "Flanges",
      description: "Trusted slip‑on flanges designed for reliable performance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7niFJbCMm6OTYLpT6HSCLE4i5JPf2JLAwA&s",
    },
    {
      name: "Blind Flange",
      category: "Flanges",
      description: "Accurate sealing for pipeline ends; safe pressure containment.",
      image: "https://steelflangemfg.com/wp-content/uploads/2020/10/blind-flanges-manufacturer.jpg",
    },
    {
      name: "Weld Neck Flange",
      category: "Flanges",
      description: "Strong, high‑pressure connections with smooth flow transition.",
      image: "https://www.fittingservice.it/wp-content/uploads/2018/05/346.png?v=1721054899",
    },
    {
      name: "Buttweld Fitting",
      category: "Fitting",
      description: "Clean, accurate pipe connections with superior structural strength.",
      image: "https://nandigrammetal.com/images/buttweld-fitting/buttwelded-fitting-manufacturers-in-india.jpg",
    },
    {
      name: "Buttweld Cross",
      category: "Fitting",
      description: "Seamlessly strong, reliable four‑way connections.",
      image: "https://www.micronsteel.com/wp-content/uploads/image/buttweld-equal-cross.jpg",
    },
    {
      name: "Buttweld End Caps",
      category: "Fitting",
      description: "Robust components to securely seal pipe ends.",
      image: "https://petromatco.com/wp-content/uploads/image/buttweld/asme-b16-9-buttweld-end-cap.jpg",
    },
    {
      name: "Forged Fitting",
      category: "Fitting",
      description: "High‑grade, non‑leak pipe connections with high durability.",
      image: "https://cpimg.tistatic.com/06354023/b/4/Ss-Forged-Fittings.jpg",
    },
    {
      name: "Forged Elbow",
      category: "Fitting",
      description: "Directional flow transitions with high strength.",
      image: "https://dhanwantmetal.com/images/forged-fitting-manufacturers-in-india/forged-elbow/forged-elbow-90-deg-manufacturers-in-india.jpg",
    },
    {
      name: "Forged Tee",
      category: "Fitting",
      description: "Superior branch connections in rigid high‑pressure piping systems.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402748354/TM/YN/TF/7690867/stainless-steel-forged-tee2-500x500.jpg",
    },
    {
      name: "Aluminum Bronze Round Bar",
      category: "Round Bar",
      description: "High tensile aluminum bronze rods suited for heavy‑duty applications.",
      image: "https://cpimg.tistatic.com/4014708/b/5/aluminium-bronze-rods.jpg",
    },
    {
      name: "Manganese Bronze Round Bar",
      category: "Round Bar",
      description: "C67600 high tensile manganese bronze rod for robust requirements.",
      image: "https://2.wlimg.com/product_images/bc-full/2024/5/12802800/c67600-high-tensile-manganese-bronze-rod-1715602025-7425903.jpg",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <div className="pt-16 relative z-10">
        <section className="relative min-h-[90vh] overflow-hidden text-white">
          <Carousel setApi={setCarouselApi} opts={{ loop: true, duration: 45 }} plugins={fadePlugins as any} className="w-full">
            <CarouselContent className="min-h-[90vh]">
              {[
                {
                  title: "Industrial Piping Solutions",
                  subtitle: "Engineering Excellence, One Pipe at a Time",
                  image: "/industrial-steel-pipes-texture.jpg",
                },
                {
                  title: "Manufacturing • Trader • Stockiest",
                  subtitle: "World-class Made in India products",
                  image: "/industrial-pipe-flanges.jpg",
                },
                {
                  title: "Quality • Reliability • Performance",
                  subtitle: "Serving Oil & Gas, Petrochemical, Power",
                  image: "/steel-metal-plates-industrial.jpg",
                },
              ].map((slide, i) => (
                <CarouselItem key={slide.title} className="h-full">
                  <div className="relative h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:py-24 h-[91vh] flex flex-col items-center justify-center mt-2">
                        <h1 className={`text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl ${activeIndex === i ? "animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200" : ""
                          }`}>
                          {slide.title}
                        </h1>
                        <p className={`mt-6 text-pretty text-xl leading-relaxed text-blue-100 sm:text-2xl ${activeIndex === i ? "animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200" : ""
                          }`}>
                          {slide.subtitle}
                        </p>
                        <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 ${activeIndex === i ? "animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200" : ""
                          }`}>
                          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/contact">
                              <Phone className="mr-2 h-5 w-5" />
                              Contact Us
                            </Link>
                          </Button>
                          <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                          >
                            <a href="/catalogue.pdf" target="_blank" rel="noopener noreferrer" download>
                              <Download className="mr-2 h-5 w-5" />
                              Download Catalogue
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full bg-white/70 text-black shadow hover:bg-white hover:text-black" />
            <CarouselNext className="right-6 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full bg-white/70 text-black shadow hover:bg-white hover:text-black" />
          </Carousel>
        </section>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>

        <section className="py-16 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
              HUB Pipes & Fittings — Industrial Pipes, Flanges, Plates & Fittings
            </h3>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Hub​‍​‌‍​‍‌​‍​‌‍​‍‌ Pipes & Fittings is a diversified and dominant source of industrial products of top-notch quality and with very strong and reliable manufacturing standards. We cover the spectrum with our offerings from Carbon Steel Flanges, Mild Steel Flanges, to Sheets, Plates, and intricately designed Buttweld Fittings that are crafted for the wide-ranging usage of various industries. Accuracy is the hallmark of each of these products, and they are also tested for superior performance.
              </p>
              <p>
                By having robust manufacturing capabilities and being very committed to excellence, we guarantee that every single unit that results from our production process is strong, durable, and has a long service life. Being a manufacturer and supplier that is trusted by the industry, we are only concerned with the quality and delivery that is on time for Pipes, Tubes, Flanges, Plates, and fittings components of the kind that you get from us. What makes us stand out from the rest of the players in the market is our firm resolve to be ​‍​‌‍​‍‌​‍​‌‍​‍‌reliable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Solution Focused",
                  icon: Target,
                  desc:
                    "We always provide clients a complete solution for their required products and services.",
                },
                {
                  title: "Assured Quality",
                  icon: ShieldCheck,
                  desc:
                    "Quality has always been a key component of our business, and we've worked hard to ensure it in all of our products.",
                },
                {
                  title: "Express Delivery",
                  icon: Truck,
                  desc:
                    "Our products are delivered on time, in an airtight and secure manner to your door step.",
                },
                {
                  title: "Worldwide Trusted",
                  icon: Globe,
                  desc:
                    "We have vast experience in international business and can help you with all of your product export needs to your country.",
                },
              ].map((f) => (
                <Card
                  data-animate="fade-up"
                  key={f.title}
                  className="group rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary ">
                    <f.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>

        <section className="relative py-20 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  20+ Years of Excellence
                </h2>
                <div data-animate className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <span className="font-semibold">Hub Pipes & Fittings</span> is a
                    <span className="font-semibold"> diversified</span> and
                    <span className="font-semibold"> dominant source</span> of industrial products of
                    <span className="font-semibold"> top-notch quality</span> with very
                    <span className="font-semibold"> strong</span> and
                    <span className="font-semibold"> reliable manufacturing standards</span>. We cover the spectrum
                    with our offerings from <span className="font-semibold text-primary">Carbon Steel Flanges</span>,
                    <span className="font-semibold text-primary"> Mild Steel Flanges</span>, to
                    <span className="font-semibold text-primary"> Sheets</span>,
                    <span className="font-semibold text-primary"> Plates</span>, and intricately designed
                    <span className="font-semibold text-primary"> Buttweld Fittings</span> crafted for the wide-ranging
                    usage of various industries. <span className="font-semibold">Accuracy</span> is the hallmark of
                    each of these products, and they are tested for
                    <span className="font-semibold"> superior performance</span>.
                  </p>
                  <p>
                    With <span className="font-semibold">robust manufacturing capabilities</span> and a strong
                    <span className="font-semibold"> commitment to excellence</span>, we guarantee that every unit from
                    our production process is <span className="font-semibold">strong</span>,
                    <span className="font-semibold"> durable</span>, and built for a
                    <span className="font-semibold"> long service life</span>. As a manufacturer and supplier
                    <span className="font-semibold"> trusted by the industry</span>, we focus on
                    <span className="font-semibold"> quality</span> and
                    <span className="font-semibold"> on‑time delivery</span> for
                    <span className="font-semibold text-primary"> Pipes</span>,
                    <span className="font-semibold text-primary"> Tubes</span>,
                    <span className="font-semibold text-primary"> Flanges</span>,
                    <span className="font-semibold text-primary"> Plates</span>, and fittings components. What sets us
                    apart is our firm resolve to be <span className="font-semibold">reliable</span>.
                  </p>
                </div>
                <Button data-animate asChild size="lg" className="mt-8">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <Card className="overflow-hidden border-2 p-0 shadow-sm">
                <div className="relative h-64 sm:h-80 lg:h-[28rem]">
                  <img
                    src="https://wallpapers.com/images/hd/hd-engineering-industrial-pipes-dieiu2lmx32sa9ni.jpg"
                    alt="Industrial facility"
                    className="h-[750px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>



        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Wide Range of Product Stock</h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">Comprehensive, ready-to-ship inventory across categories</p>
            </div>
            <Carousel
              setApi={setProductsApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {productCategories.map((category) => (
                  <CarouselItem key={category.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="flex flex-col h-full overflow-hidden border-none shadow-sm transition-all hover:shadow-md">
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-4 text-2xl font-bold text-primary">{category.name}</h3>
                        <ul className="space-y-3">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/products"
                                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-10 text-center">
              <Button data-animate asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>


        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Statistics</h2>
                <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">Why we are best</p>
                <p data-animate className="mt-2 text-lg leading-relaxed text-muted-foreground">Take a look at our statistics</p>
                <p data-animate className="mt-4 text-lg leading-relaxed text-muted-foreground">We are regarded as a major <span className="font-semibold">Stainless Steel Sheet & Plate</span> and <span className="font-semibold">SS Round Bar Supplier</span> in India, supplied to various cities like <span className="font-semibold">Mumbai</span>, <span className="font-semibold">Gujarat</span>, <span className="font-semibold">Bhosari</span>, <span className="font-semibold">Coimbatore</span>.</p>
                <div className="mt-6">
                  <Button data-animate asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { label: "Years of Experience", value: 20, suffix: "+" },
                  { label: "Quality Assured", value: 100, suffix: "%" },
                  { label: "Product Categories", value: 10, suffix: "+" },
                  { label: "Customer Support", value: 24, suffix: "/7" },
                ].map((stat) => (
                  <Card
                    key={stat.label}
                    data-animate="fade-up"
                    className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Other Products</h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">Explore our extensive range of industrial products</p>
            </div>
            <Carousel setApi={setOtherProductsApi} opts={{ loop: true, align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {otherProducts.map((product, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Card className="flex h-full flex-col overflow-hidden border-2 bg-white p-0 shadow-sm transition-all hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/placeholder.jpg" }}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{product.category}</div>
                        <h3 className="mb-2 text-lg font-bold text-foreground line-clamp-1" title={product.name}>{product.name}</h3>
                        <p className="mb-4 text-sm text-muted-foreground line-clamp-2" title={product.description}>{product.description}</p>
                        <Button asChild size="sm" className="mt-auto w-full bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200 shadow-sm">
                          <Link href="/products" target="_blank" rel="noopener noreferrer">View Details</Link>
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="my-6 border-t border-muted/50" />
        </div>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Industries We Serve
              </h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">
                Delivering specialized solutions across diverse sectors
              </p>
            </div>
            <Carousel setApi={setIndustriesApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {Array.from({ length: Math.ceil(industries.length / 4) }).map((_, idx) => {
                  const start = idx * 4
                  const end = start + 4
                  const chunk = industries.slice(start, end)
                  return (
                    <CarouselItem key={`industries-${idx}`}>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {chunk.map((industry) => (
                          <Card
                            key={industry.name}
                            data-animate="fade-up"
                            className="group overflow-hidden border-2 bg-white p-0 shadow-sm hover:shadow-lg"
                          >
                            <div className="relative aspect-square">
                              <img
                                src={industry.image}
                                alt={industry.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
                              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                                Industry
                              </span>
                            </div>
                            <div className="p-5">
                              <h3 className="text-center text-lg font-semibold text-foreground">{industry.name}</h3>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="left-6 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full bg-white/70 text-black shadow hover:bg-white hover:text-black" />
              <CarouselNext className="right-6 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full bg-white/70 text-black shadow hover:bg-white hover:text-black" />
            </Carousel>
          </div>
        </section>



        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Global Presence</h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">Supplying across India and exporting worldwide</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
              {[
                { name: "Mumbai", image: "https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?cs=srgb&dl=pexels-illuseenator-3893788.jpg&fm=jpg" },

                { name: "Gujarat", image: "https://images.pexels.com/photos/2409361/pexels-photo-2409361.jpeg?cs=srgb&dl=pexels-mukund-patel-1264723-2409361.jpg&fm=jpg" },

                { name: "Hyderabad", image: "https://i.pinimg.com/736x/6f/65/be/6f65be65df7d422493344a00b97ad6cb.jpg" },

                { name: "Bengaluru", image: "https://images.pexels.com/photos/17443349/pexels-photo-17443349.jpeg?cs=srgb&dl=pexels-raks-1713783-17443349.jpg&fm=jpg" },

              ].map((city) => (
                <Card key={city.name} className="overflow-hidden border-2 bg-white !p-0 !gap-0 shadow-sm hover:shadow-lg">
                  <div className="relative h-48 sm:h-56 lg:h-64">
                    <img src={city.image} alt={city.name} loading="lazy" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/placeholder.jpg" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded bg-white/80 px-3 py-1 text-sm font-medium text-foreground">
                      {city.name}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p data-animate className="text-sm text-muted-foreground">Exports to multiple countries. Contact us for documentation and logistics support.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Button data-animate asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button data-animate asChild variant="outline">
                  <a href="/catalogue.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Catalogue
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>









        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <h3 data-animate className="text-xl font-semibold text-muted-foreground">Our Valuable Clients</h3>
            </div>
            <div className="marquee border-y py-6">
              <div className="marquee-inner flex items-center gap-12">
                {[
                  "https://dummyimage.com/120x40/ddd/000&text=Acme+Corp",
                  "https://dummyimage.com/120x40/ddd/000&text=Globex",
                  "https://dummyimage.com/120x40/ddd/000&text=Initech",
                  "https://dummyimage.com/120x40/ddd/000&text=Umbrella",
                  "https://dummyimage.com/120x40/ddd/000&text=Wayne+Enterprises",
                  "https://dummyimage.com/120x40/ddd/000&text=Stark+Industries",
                  "https://dummyimage.com/120x40/ddd/000&text=Soylent",
                  "https://dummyimage.com/120x40/ddd/000&text=Hooli",
                  "https://dummyimage.com/120x40/ddd/000&text=Massive+Dynamic",
                  "https://dummyimage.com/120x40/ddd/000&text=Wonka",
                  "https://dummyimage.com/120x40/ddd/000&text=Tyrell",
                  "https://dummyimage.com/120x40/ddd/000&text=Octan",
                  "https://dummyimage.com/120x40/ddd/000&text=Cyberdyne",
                  "https://dummyimage.com/120x40/ddd/000&text=Vandelay",
                  "https://dummyimage.com/120x40/ddd/000&text=Blue+Sun",
                  "https://dummyimage.com/120x40/ddd/000&text=Duff",
                  "https://dummyimage.com/120x40/ddd/000&text=MomCorp",
                  "https://dummyimage.com/120x40/ddd/000&text=Nakatomi",
                  "https://dummyimage.com/120x40/ddd/000&text=Prestige",
                  "https://dummyimage.com/120x40/ddd/000&text=Dunder+Mifflin",
                ].map((src, i) => (
                  <img data-animate="fade-up" key={`logo-${i}`} src={src} alt="Client Logo" className="h-10 w-auto opacity-80" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-animate className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Why Choose Us</h2>
              <p data-animate className="mt-4 text-pretty text-lg text-muted-foreground">Our core strengths and commitments</p>
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
                "Pan-India presence",
              ].map((point) => (
                <Card
                  key={point}
                  data-animate="fade-up"
                  className="border-2 bg-gradient-to-br from-white to-muted/40 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                </Card>
              ))}
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

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = counterRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !started) {
          setStarted(true)
          let raf = 0
          const duration = 1500
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * end))
            if (progress < 1) raf = requestAnimationFrame(step)
            else io.unobserve(el)
          }
          raf = requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, started])

  return <div ref={counterRef} className="mb-2 text-4xl font-bold text-primary">{value}{suffix}</div>
}
