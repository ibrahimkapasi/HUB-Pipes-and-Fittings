"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ImageIcon, Info, ArrowRight, Phone, MapPin, Star, Download, ShieldCheck, Check } from "lucide-react"

export default function GratingPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-16">
        <section className="relative py-0 text-white">
          <div className="absolute inset-0">
            <img src="/Grating image.png" alt="Grating banner" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[320px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col items-center justify-center text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Grating Trays</h1>
            <p className="mt-3 max-w-3xl text-pretty text-lg leading-relaxed text-blue-100">Manufacturer & Exporter in India</p>
            <div className="mt-4 inline-flex px-3 py-2">
              <Breadcrumb>
                <BreadcrumbList className="justify-center text-white">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-400">Grating</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[8fr_3fr] lg:gap-8">
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Hub Pipes & Fittings – Leading Grating Tray Manufacturer & Exporter in India</h1>
              <p className="mt-6 max-w-5xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Hub Pipes and Fittings is a trusted Grating Tray manufacturer in Mumbai, India that provides powerful and stable Grating solutions to industries. Our Grating Trays come in varying sizes, designs, and materials to suit various demands. We provide high-quality production standards that are strict in the industry. Tailor-made Grating Trays are also provided to address the needs of a particular client.
              </p>
              <div className="mt-8 w-full overflow-hidden rounded-xl">
                <img
                  src="https://gratingpacific.com/wp-content/uploads/2025/11/Welded-Steel-Grating-1024x683.jpg"
                  alt="Welded Steel Grating"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.onerror = null
                    t.src = "/placeholder.jpg"
                  }}
                />
              </div>

              <div className="mt-12">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Premium Grating Tray for Industrial Use</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Hub Pipes & Fittings is widely recognized for delivering high-performance Grating Trays designed for strength, safety, and long-term durability. Our Grating products are trusted across various industries due to their superior build quality and precision manufacturing. We offer a complete range of Electroforged Gratings, Stainless Steel Gratings, and Welded/Custom Gratings, ensuring clients receive the perfect solution for their structural and industrial needs.
                  </p>
                  <p>
                    Understanding diverse project requirements, we focus on producing Grating Trays with excellent load-bearing capacity, corrosion resistance, and long service life. Every product is crafted to match strict industry standards while meeting customer-specific expectations. With consistent quality and reliable service, we have become a preferred Grating Tray supplier in India, serving both domestic and international clients with pride.
                  </p>
                  <p>
                    Hub​‍​‌‍​‍‌​‍​‌‍​‍‌ Pipes & Fittings is known as the one who offers highly efficient Grating Trays that are built for power, safety, and prolonged use. Our Grating items have been the choice of different industries because of their excellent physicals and precise engineering. We have a full line of Electroforged Gratings, Stainless Steel Gratings, and Welded/Custom Gratings to ensure that the clients get the right solution for their structural and industrial needs.
                  </p>
                  <p>
                    Knowing the different project requirements, we are concentrating on creating Grating Trays that have high loading capacity, are resistant to corrosion, and have a long service life. Each product is designed to conform to tightly defined industry standards and also meet customer-specific requirements. By maintaining quality and providing customer satisfaction, we have become a leading Grating Trays Supplier in India to both local and foreign ​‍​‌‍​‍‌​‍​‌‍​‍‌clients.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Heavy-Duty Grating Trays</h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Our​‍​‌‍​‍‌​‍​‌‍​‍‌ Grating Trays have been built with features that include maximum strength, long life, and efficient load distribution, which ensures that the safety of the personnel on the industrial platforms and walkways is maintained. The following are the detailed specifications along with the material grades that are available for our heavy-duty grating ​‍​‌‍​‍‌​‍​‌‍​‍‌solutions.
                </p>
                <h3 className="mt-8 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Specifications & Details</h3>
                <Card className="mt-4 p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 font-semibold">Parameter</th>
                          <th className="px-4 py-3 font-semibold">Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-3">Standards</td>
                          <td className="px-4 py-3">ASTM, BS, IS Standards & International Industrial Norms</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Types Available</td>
                          <td className="px-4 py-3">Electroforged Gratings, Stainless Steel Gratings, Welded / Custom Gratings</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Sizes & Dimensions</td>
                          <td className="px-4 py-3">Custom lengths, widths, and thickness options available as per project requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Bearing Bar Pitch</td>
                          <td className="px-4 py-3">20 mm to 50 mm (custom spacing available)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Cross Bar Pitch</td>
                          <td className="px-4 py-3">50 mm to 100 mm</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Load Capacity</td>
                          <td className="px-4 py-3">Light Duty to Heavy Duty load-bearing configurations</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Surface Finish</td>
                          <td className="px-4 py-3">Plain, Serrated, Galvanized, Painted, or Mill Finish</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>

                <h3 className="mt-10 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Material Grades</h3>
                <Card className="mt-4 p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 font-semibold">Material</th>
                          <th className="px-4 py-3 font-semibold">Grades</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-3">Stainless Steel</td>
                          <td className="px-4 py-3">304, 304L, 316, 316L, 310, 321, 347</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Carbon Steel</td>
                          <td className="px-4 py-3">ASTM A36, IS 2062, Grade 43A</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Mild Steel</td>
                          <td className="px-4 py-3">Standard MS Grades (including Hot-Dip Galvanized options)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Aluminium</td>
                          <td className="px-4 py-3">6061, 6063 (on request)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              <div className="mt-16">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore Our Range of Grating Tray Types</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Electroforged Gratings",
                      image: "https://www.chinasteelgrating.com/img/light-duty-stainless-steel-grating.jpg",
                      paragraphs: [
                        "Electroforged​‍​‌‍​‍‌​‍​‌‍​‍‌ Gratings are made by using technically advanced, PLC-controlled equipment that not only applies very high hydraulic pressure but also a strong electrical current. These two things together weld the bearing bars and the cross bars to each other in one solid, integrated structure. What you get is a very tightly sealed joint with remarkable uniformity, where there are no fissures, weak spots, or open connections.",
                        "The strength of the bearing bar is kept the same during the electro-forging operation, while the twisted square cross bar provides excellent anti-slip property. This production method leads to higher trustworthiness, correct positioning, and almost zero-defect output, thus customers receive perfectly uniform grating panels every time.",
                        "We have the equipment that makes it possible to have quicker production cycles, better precision, and a long service life even in harsh industrial environments. In this instance, the cross bars are being heat-bonded directly to the bearing bars without the intervention of the welding method, thus giving rise to a metallurgically strong, visually attractive, and high-load-bearing industrial flooring, platforms, and structural application ​‍​‌‍​‍‌​‍​‌‍​‍‌product."
                      ]
                    },
                    {
                      title: "Stainless Steel Gratings",
                      image: "https://cpimg.tistatic.com/7776324/b/4/stainless-steel-grating.jpg",
                      paragraphs: [
                        "Stainless​‍​‌‍​‍‌​‍​‌‍​‍‌ Steel Gratings are essentially made for such industries that require high corrosion resistance, great durability over a long period of time, and a neat, attractive kind of appearance. With exact bar spacing and good stainless steel grades, they provide high strength and stability of the structure. Their sleek surface makes them perfect for hygienic and very wet kinds of areas.",
                        "These gratings are very resistant to the mentioned chemical, marine, and heavy load situations, thus they are capable of delivering good performance all the time. Every panel is made with precise dimensions, thereby providing uniformity and a very reliable slip resistance. Being of low maintenance and having excellent rust protection, they are the right choice for platforms, walkways, drainage systems, and industrial ​‍​‌‍​‍‌​‍​‌‍​‍‌flooring."
                      ]
                    },
                    {
                      title: "Welded / Custom Grating",
                      image: "https://www.chinasteelgrating.com/img/stainless-steel-welded-steel-grating.jpg",
                      paragraphs: [
                        "Welded​‍​‌‍​‍‌​‍​‌‍​‍‌ and Custom Gratings are designed for projects that need specific sizes, different bar patterns, or special load capacities. In order to get the maximum strength, durability, and stability, each panel is produced with high-precision welding methods for the welds that are strong and reliable, thus making them the most suitable ones for complex layouts and tailored industrial applications.",
                        "There are practically no limitations for the range of bar sizes, the options for spacing, the materials, and the finishes that can be chosen so as to be able to achieve the exact configuration that is required. These gratings are the perfect ones to deliver reliable performance under heavy loads and in severe conditions, thus guaranteeing their long-term use.",
                        "Moreover, they are extensively implemented in such sectors as chemical plants, power stations, the food industry, wastewater treatment facilities, and manufacturing units. Besides, they are used for mezzanine flooring, platforms, walkways, and stair treads. Being fully customizable in terms of design, they remain equally safe for different applications, and at the same time, they are versatile and ​‍​‌‍​‍‌​‍​‌‍​‍‌accurate."
                      ]
                    },
                  ].map((p) => (
                    <Dialog key={p.title}>
                      <DialogTrigger asChild>
                        <div className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm transition hover:shadow-lg">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                const t = e.currentTarget
                                t.onerror = null
                                t.src = "/placeholder.jpg"
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-2">
                            <h3 className="flex-1 min-w-0 truncate text-sm font-medium text-foreground">{p.title}</h3>
                            <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/85 text-foreground ring-1 ring-border backdrop-blur-sm">
                              <ArrowRight className="size-4" />
                            </span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{p.title}</DialogTitle>
                          <DialogDescription />
                        </DialogHeader>
                        <ScrollArea className="max-h-[65vh]">
                          <div className="space-y-4 px-1 text-lg leading-relaxed text-muted-foreground">
                            {Array.isArray((p as any).paragraphs)
                              ? (p as any).paragraphs.map((txt: string, i: number) => (<p key={i}>{txt}</p>))
                              : <p>{(p as any).description}</p>}
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Grating Tray Dimensions & Load Chart</h2>
                <Card className="mt-8 p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 font-semibold">Nominal Size</th>
                          <th className="px-4 py-3 font-semibold">B (mm)</th>
                          <th className="px-4 py-3 font-semibold">H (mm)</th>
                          <th className="px-4 py-3 font-semibold">S (mm)</th>
                          <th className="px-4 py-3 font-semibold">W (mm)</th>
                          <th className="px-4 py-3 font-semibold">L (mm)</th>
                          <th className="px-4 py-3 font-semibold">Load (kg/m²)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {[
                          ["500 x 1000", 25, 5, 50, 500, 1000, 2000],
                          ["600 x 1200", 30, 5, 50, 600, 1200, 2500],
                          ["800 x 1200", 40, 6, 50, 800, 1200, 3000],
                          ["1000 x 1500", 50, 6, 50, 1000, 1500, 3500],
                          ["1200 x 2000", 60, 8, 50, 1200, 2000, 4000],
                          ["1500 x 2000", 75, 8, 50, 1500, 2000, 5000],
                        ].map((r) => (
                          <tr key={r[0]}>
                            <td className="px-4 py-3">{r[0]}</td>
                            <td className="px-4 py-3">{r[1]}</td>
                            <td className="px-4 py-3">{r[2]}</td>
                            <td className="px-4 py-3">{r[3]}</td>
                            <td className="px-4 py-3">{r[4]}</td>
                            <td className="px-4 py-3">{r[5]}</td>
                            <td className="px-4 py-3">{r[6]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              <div className="mt-5">
                <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Hub Pipes & Fittings: Innovative Uses of Grating Trays in Industry</h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Chemical & Petrochemical Industry",
                      image: "https://thumbs.dreamstime.com/b/oil-refinery-petrochemical-industry-plant-20674317.jpg",
                      description: "Corrosion-resistant gratings designed for harsh chemical exposure and extreme temperatures, ensuring safety in refineries and petrochemical plants."
                    },
                    {
                      title: "Pharmaceutical & Food Processing",
                      image: "https://cleanroomtechnology.com/article-image-alias/pharmaceuticals-and-food-same-hygienic-principles.jpeg",
                      description: "Hygienic, easy-to-clean stainless steel gratings meeting strict sanitary standards for pharmaceutical labs and food processing facilities."
                    },
                    {
                      title: "Water Treatment Plants",
                      image: "https://www.kelvinindia.in/blog/wp-content/uploads/2024/09/industrial-waste-waer-treatment-plant.jpg",
                      description: "Slip-resistant, durable gratings offering superior rust protection for walkways and platforms in high-moisture water treatment plants."
                    },
                    {
                      title: "Power & Energy Plants",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR008xESna0mM_k4oamJ8T3lWMXjZBAOEZ2lw&s",
                      description: "Heavy-duty gratings supporting massive loads and equipment, ensuring safe access in power generation and energy facilities."
                    },
                    {
                      title: "Mining & Metallurgy",
                      image: "https://media.istockphoto.com/id/1070302804/photo/mining.jpg?s=612x612&w=0&k=20&c=p5HlP37aBh83z7Px7gRVoE-g9qMPge3kGqQIBZtOwtI=",
                      description: "Rugged, high-strength gratings engineered to endure impact and vibration in demanding mining and metallurgical operations."
                    },
                    {
                      title: "Construction & Infrastructure",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_QbzdaQPAhedkmmIw1xkksgr9UqF6L6m6w&s",
                      description: "Versatile structural gratings for bridges and infrastructure, combining aesthetic appeal with robust load-bearing performance."
                    },
                  ].map((item) => (
                    <Card
                      key={item.title}
                      className="group relative overflow-hidden rounded-lg p-6 ring-1 ring-border transition duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:ring-primary/30 min-h-[260px] flex flex-col justify-center"
                    >
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/50" />
                      </div>
                      
                      <div className="relative z-10 flex flex-col gap-4">
                        <ImageIcon className="size-8 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                          <div className="h-[3.5rem] flex items-end">
                            <div className="font-bold text-white text-xl leading-tight transition-colors duration-300 line-clamp-2">{item.title}</div>
                          </div>
                          <div className="h-[4.5rem] mt-2">
                            <div className="text-sm text-white/80 transition-colors duration-300 line-clamp-4 leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <aside className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <Star className="size-4" />
                      <span className="text-sm font-semibold">Popular Products</span>
                    </div>
                  </div>
                  <div className="p-4 grid gap-3">
                    {[
                      "Stainless Steel Pipe Fitting Elbow",
                      "IBR Approved SS Pipe Fittings",
                      "Carbon Steel Flanges",
                      "Round Bar (SS 304/316)",
                      "Plates & Sheets",
                      "Socket Weld Fittings",
                    ].map((item) => (
                      <Link key={item} href="/products" className="group flex items-center justify-between rounded-md border px-3 py-2 hover:bg-muted">
                        <span className="text-sm font-medium">{item}</span>
                        <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="size-4" />
                      <span className="text-sm font-semibold">Other Categories</span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3">
                    {[
                      "Pipes",
                      "Tubes",
                      "Plates",
                      "Flanges",
                      "Fitting",
                      "Round Bar",
                    ].map((cat) => (
                      <Link key={cat} href="/products" className="rounded-md bg-muted px-3 py-2 text-center text-xs font-medium hover:bg-muted/70">
                        {cat}
                      </Link>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span className="text-sm font-semibold">Cities We Supply</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {[
                      "Mumbai",
                      "Thane",
                      "Gujarat",
                      "Hyderabad",
                      "Bengaluru",
                      "Delhi",
                      "Chennai",
                      "Pune",
                      "Kolkata",
                      "Ahmedabad",
                      "Surat",
                      "Jaipur",
                    ].map((city) => (
                      <span key={city} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        {city}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <Phone className="size-4" />
                      <span className="text-sm font-semibold">Contact Info</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Info className="size-4 text-muted-foreground" />
                      <h4 className="text-sm font-semibold">Reach Us</h4>
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <p>23 Bharti Park, Mira Road East</p>
                      <p>Thane, Maharashtra 401107</p>
                      <a href="tel:+918976691734" className="block font-medium text-foreground hover:underline">+91 89766 91734</a>
                      <a href="https://www.hubpipes.com" className="block hover:underline">www.hubpipes.com</a>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button asChild size="sm">
                        <a href="tel:+918976691734">Call Us</a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href="/contact">Contact Page</Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-4" />
                      <span className="text-sm font-semibold">Certifications & Standards</span>
                    </div>
                  </div>
                  <div className="p-4 grid gap-2 text-sm text-muted-foreground">
                    {[
                      "ASTM A312 / A213",
                      "ASME B16.9",
                      "ANSI B16.5",
                      "MSS SP-97",
                      "ISO 9001:2015",
                    ].map((std) => (
                      <div key={std} className="flex items-center justify-between rounded-md border px-3 py-2">
                        <span className="font-medium text-foreground">{std}</span>
                        <ArrowRight className="size-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <Download className="size-4" />
                      <span className="text-sm font-semibold">Downloads</span>
                    </div>
                  </div>
                  <div className="p-4 grid gap-3">
                    <Link href="/catalogue.pdf" className="group flex items-center justify-between rounded-md border px-3 py-2" target="_blank" rel="noopener noreferrer">
                      <span className="text-sm font-medium">Company Catalogue</span>
                      <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="size-4" />
                      <span className="text-sm font-semibold">Industries We Serve</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {[
                      "Oil & Gas",
                      "Petrochemical",
                      "Power",
                      "Water Supply",
                      "Refining",
                      "Process",
                      "Construction",
                    ].map((i) => (
                      <span key={i} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        {i}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-muted px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                      <Info className="size-4" />
                      <span className="text-sm font-semibold">Quick Links</span>
                    </div>
                  </div>
                  <div className="p-4 grid gap-2">
                    {[
                      { label: "About Us", href: "/about" },
                      { label: "Products", href: "/products" },
                      { label: "Contact", href: "/contact" },
                      { label: "Request a Quote", href: "/contact" },
                    ].map((l) => (
                      <Link key={l.label} href={l.href} className="group flex items-center justify-between rounded-md border px-3 py-2 hover:bg-muted">
                        <span className="text-sm font-medium">{l.label}</span>
                        <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </section>



        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Cities We Supply Grating Trays</h2>
                <p className="mt-4 max-w-5xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  We supply Grating Trays to major cities across India to meet diverse project requirements. Our network covers top cities such as New Delhi, Hyderabad, Ahmedabad, Jaipur and more, ensuring timely deliveries and consistent product quality.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Bangalore",
                    "Delhi",
                    "Coimbatore",
                    "Agra",
                    "Moradabad",
                    "Salem",
                    "Kannur",
                    "Bhagalpur",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="size-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                </div>

                <div>
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Countries We Export Grating Trays</h2>
                <p className="mt-4 max-w-5xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  We export high-quality Grating Trays to the UAE, Saudi Arabia, Qatar, South Africa, the USA, and other countries. Our team collaborates closely with customers to deliver reliable products and tailored solutions that meet international standards.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "UK",
                    "USA",
                    "Qatar",
                    "Canada",
                    "Iran",
                    "Russia",
                    "Brazil",
                    "Europe",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="size-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t bg-slate-950 py-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">HUB Pipe & Fitting</h3>
                <p className="text-sm leading-relaxed">
                  Leading manufacturer, trader, and stockiest of industrial piping solutions since 2004.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/" className="block hover:text-white">Home</Link>
                  <Link href="/about" className="block hover:text-white">About Us</Link>
                  <Link href="/products" className="block hover:text-white">Products</Link>
                  <Link href="/contact" className="block hover:text-white">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Contact Info</h4>
                <div className="space-y-2 text-sm">
                  <p>23 Bharti Park, Mira Road East</p>
                  <p>Thane, Maharashtra 401107</p>
                  <a href="tel:+918976691734" className="block hover:text-white">+91 89766 91734</a>
                  <a href="https://www.hubpipes.com" className="block hover:text-white">www.hubpipes.com</a>
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
