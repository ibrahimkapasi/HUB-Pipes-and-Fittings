"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"
import { ArrowLeft, Download, Info } from "lucide-react"

export default function ProductsPage() {
  const categories = ["All", "Pipes", "Tubes", "Plates", "Flanges", "Fitting", "Round Bar", "Pipe Bends", "Olets"]
  const sanitizeUrl = (url: string) => url?.replace(/\)+$/g, "")
  const rawProducts = [
    {
      name: "Stainless Steel Pipe Fitting Tee",
      category: "Pipes",
      description:
        "Strong, leak-resistant branching for high-pressure lines. SS 304/304L and 316/316L grades across industrial sizes.",
      image: "https://riddhisiddhimetal.com/buttweld-pipe-fittings-tee-manufacturer-india/index.php)",
    },
    {
      name: "Stainless Steel Pipe Fitting Cross",
      category: "Pipes",
      description:
        "Four-way flow distribution engineered in 304/304L and 316/316L grades and supplied in all industrial sizes.",
      image: "https://5.imimg.com/data5/NO/CQ/RM/SELLER-761146/cross-pipe-fitting.jpg)",
    },
    {
      name: "Stainless Steel Pipe Fitting Elbow",
      category: "Pipes",
      description:
        "Efficient, reliable directional change unit with smooth flow and pressure control in corrosion‑resistant grades.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/429994015/XP/PB/OZ/23289747/stainless-steel-pipe-fitting-elbow-500x500.jpg)",
    },
    {
      name: "IBR Approved Stainless Steel Pipe Fittings",
      category: "Pipes",
      description:
        "Machined using solid forgings. High‑quality IBR Approved Stainless Steel Pipe Fittings.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326304044/UX/MT/XZ/21573024/stainless-steel-ibr-pipe-fittings.jpg)",
    },
    {
      name: "Inconel Plates",
      category: "Plates",
      description:
        "UNS N06625 high‑performance plates manufactured with cutting‑edge processes and premium raw materials.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/392600502/VY/NL/GQ/2062242/inconel-plates-1000x1000.jpg)",
    },
    {
      name: "Hot & Cold Rolled Plates",
      category: "Plates",
      description:
        "Superior strength and versatility with finishes for structural, fabrication, and industrial applications.",
      image: "https://5.imimg.com/data5/ZH/AG/GG/SELLER-94159982/stainless-steel-hot-rolled-plate-1000x1000.jpg)",
    },
    {
      name: "Super Duplex Steel UNS S32750 Plates",
      category: "Plates",
      description:
        "High‑strength, corrosion‑resistant plates recognized across demanding industrial applications.",
      image: "https://stindia.com/img/nickel-alloy-sheet-supplier.jpg)",
    },
    {
      name: "Stainless Steel Plate",
      category: "Plates",
      description:
        "Very strong, corrosion‑resistant and versatile for construction, fabrication, and building industries.",
      image: "https://omo-oss-image.thefastimg.com/portal-saas/pg2024053118270894084/cms/image/f9927636-81d8-4434-a9c1-6b4bb75d3b6b.jpg_560xaf.jpg)",
    },
    {
      name: "Stainless Steel Flange",
      category: "Flanges",
      description:
        "Safe, corrosion‑free connections for chemical, petrochemical, construction and industrial services.",
      image: "https://www.viraj.com/wp-content/uploads/2018/05/blog.jpg)",
    },
    {
      name: "Slip On Flange",
      category: "Flanges",
      description:
        "Trusted slip‑on flanges designed for reliable performance across critical industries.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7niFJbCMm6OTYLpT6HSCLE4i5JPf2JLAwA&s)",
    },
    {
      name: "Blind Flange",
      category: "Flanges",
      description:
        "Accurate sealing for pipeline ends; safe pressure containment across energy, marine, and industrial systems.",
      image: "https://steelflangemfg.com/wp-content/uploads/2020/10/blind-flanges-manufacturer.jpg)",
    },
    {
      name: "Weld Neck Flange",
      category: "Flanges",
      description:
        "Strong, high‑pressure connections with smooth flow transition ideal for demanding pipeline systems.",
      image: "https://www.fittingservice.it/wp-content/uploads/2018/05/346.png?v=1721054899)",
    },
    {
      name: "Buttweld Fitting",
      category: "Fitting",
      description:
        "Clean, accurate pipe connections with superior structural strength across hygienic process pipelines.",
      image: "https://nandigrammetal.com/images/buttweld-fitting/buttwelded-fitting-manufacturers-in-india.jpg)",
    },
    {
      name: "Buttweld Cross",
      category: "Fitting",
      description:
        "Seamlessly strong, reliable four‑way connections for fluid distribution networks.",
      image: "https://www.micronsteel.com/wp-content/uploads/image/buttweld-equal-cross.jpg)",
    },
    {
      name: "Buttweld End Caps",
      category: "Fitting",
      description:
        "Robust components to securely seal pipe ends, leak‑proof and pressure‑resistant.",
      image: "https://petromatco.com/wp-content/uploads/image/buttweld/asme-b16-9-buttweld-end-cap.jpg)",
    },
    {
      name: "Forged Fitting",
      category: "Fitting",
      description:
        "High‑grade, non‑leak pipe connections with high durability for pressure‑sensitive processes.",
      image: "https://cpimg.tistatic.com/06354023/b/4/Ss-Forged-Fittings.jpg)",
    },
    {
      name: "Forged Elbow",
      category: "Fitting",
      description:
        "Directional flow transitions with high strength and pressure endurance for dependable operation.",
      image: "https://dhanwantmetal.com/images/forged-fitting-manufacturers-in-india/forged-elbow/forged-elbow-90-deg-manufacturers-in-india.jpg)",
    },
    {
      name: "Forged Tee",
      category: "Fitting",
      description:
        "Superior branch connections in rigid high‑pressure piping systems for durable flow distribution.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402748354/TM/YN/TF/7690867/stainless-steel-forged-tee2-500x500.jpg)",
    },
    {
      name: "Aluminum Bronze Round Bar",
      category: "Round Bar",
      description:
        "High tensile aluminum bronze rods suited for heavy‑duty mechanical and wear applications.",
      image: "https://cpimg.tistatic.com/4014708/b/5/aluminium-bronze-rods.jpg",
    },
    {
      name: "Manganese Bronze Round Bar",
      category: "Round Bar",
      description:
        "C67600 high tensile manganese bronze rod for robust industrial requirements.",
      image: "https://2.wlimg.com/product_images/bc-full/2024/5/12802800/c67600-high-tensile-manganese-bronze-rod-1715602025-7425903.jpg",
    },
    {
      name: "Aluminum Bronze Round Bar",
      category: "Round Bar",
      description:
        "Copper–aluminum alloys (C95400, C95500, C95800) with high strength, wear and corrosion resistance. Used in marine components, pump parts, bushings, and heavy-duty industrial applications.",
      image: "https://5.imimg.com/data5/OM/OQ/MY-15521074/aluminium-bronze-round-bar-500x500.jpg)",
    },
    {
      name: "Phosphor Bronze Round Bar",
      category: "Round Bar",
      description:
        "Copper–tin–phosphorus alloys (PB1, PB2, PB102) offering excellent elasticity, fatigue resistance, and low friction. Ideal for bearings, electrical and spring components, and precision engineering parts.",
      image: "https://www.samaterials.com/images/sc/1731042977-CM3599.jpg)",
    },
    {
      name: "Lead Tin Bronze Round Bar",
      category: "Round Bar",
      description:
        "Lead–tin bronze (e.g., SAE 660) known for superior machinability and wear resistance. Commonly used for bushings, bearings, and heavy‑duty machine components.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319872132/KI/UV/OQ/57775261/bronze-round-bar.jpeg)",
    },
    {
      name: "Stainless Steel Round Bar",
      category: "Round Bar",
      description:
        "Grades 304, 316, and 410 providing high strength and corrosion resistance. Suitable for shafts, fasteners, and precision components.",
      image: "https://lntsufin.com/storage/mediafiles/catalog/live/16592-1307/original/16592-1307_image_0.jpg)",
    },
    {
      name: "Stainless Steel Tubes",
      category: "Tubes",
      description:
        "Grades 304, 316, and 321 delivering superior strength and corrosion resistance for structural work, heat exchangers, and fluid transport systems.",
      image: "https://www.astmsteelpipes.com/uploaded_files/category_images/Stainless-Steel-Pipes-and-Tubes-manufacturers-in-mumbai-02_09_05.jpg)",
    },
    {
      name: "Pipe Bends",
      category: "Pipe Bends",
      description:
        "Available in SS 304/316 and CS ASTM A234 WPB; multiple radius options and custom sizes for smooth flow redirection in industrial piping systems.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/CQ/OC/GE/89336736/ss-long-radius-bend.jpg)",
    },
    {
      name: "Olets",
      category: "Olets",
      description:
        "Branch connections in SS 304/316, CS A105, and alloy grades. Types include weldolets, threadolets, and sockolets for leak‑proof performance in high‑pressure systems.",
      image: "/pipe-olets-fittings.jpg",
    },
    {
      name: "Carbon Steel Olets",
      category: "Olets",
      description:
        "Manufactured using ASTM A105, A350 LF2, and A182 F11/F22 materials for strong, corrosion‑resistant branch connections in oil, gas, and high‑pressure industrial services.",
      image: "https://www.marcelpiping.com/wp-content/uploads/2016/06/carbon-steel-olet-fittings.jpg)",
    },
    {
      name: "Duplex Steel Olets",
      category: "Olets",
      description:
        "High tensile strength with excellent resistance to stress corrosion and erosion. Suited for seawater systems, desalination plants, and chemical processing lines.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/331220929/KW/XD/UU/1913761/stainless-steel-and-duplex-steel-olets-500x500.jpg)",
    },
  ]
  const catalog = rawProducts.map((p) => ({ ...p, image: sanitizeUrl(p.image) }))
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const filtered = activeCategory === "All" ? catalog : catalog.filter((p) => p.category === activeCategory)
  // const products = [
  //   {
  //     name: "Pipes",
  //     description:
  //       "Engineered for durability and performance in diverse applications. We manufacture seamless and welded pipes in stainless steel and high nickel alloys for various industrial applications.",
  //     details: [
  //       "Seamless and ERW welded pipes",
  //       "ASTM A312, A358, A790 standards",
  //       'Sizes: 1/8" NB to 48" NB',
  //       "Schedules: SCH 5, 10, 40, 80, 160, XXS",
  //       "Materials: SS 304, 316, 321, Duplex, Super Duplex",
  //       "Applications: Oil & Gas, Petrochemical, Power generation",
  //     ],
  //     image: "/industrial-steel-pipes-texture.jpg",
  //   },
  //   {
  //     name: "Tubes",
  //     description:
  //       "Precision-crafted to deliver reliability and versatility. Our tubes are manufactured to exact specifications for fluid and gas systems.",
  //     details: [
  //       "Seamless and welded tubing",
  //       "ASTM A213, A269, A789 standards",
  //       "OD Range: 6mm to 114mm",
  //       "Wall thickness: 0.5mm to 6mm",
  //       "Materials: SS 304, 316, 317L, Alloy 625, 825",
  //       "Heat exchanger and instrumentation tubes",
  //     ],
  //     image: "/socket-weld-pipe-fittings.jpg",
  //   },
  //   {
  //     name: "Plates",
  //     description:
  //       "Steel plates are flat, thick pieces of steel used in various construction and manufacturing applications. They come in different grades and thicknesses, tailored to meet specific strength, durability, and resistance requirements.",
  //     details: [
  //       "Hot rolled and cold rolled plates",
  //       "ASTM A240, A480 standards",
  //       "Thickness: 3mm to 100mm",
  //       "Width: up to 2500mm",
  //       "Materials: SS 304, 316, 310, 904L",
  //       "Pressure vessel and structural applications",
  //     ],
  //     image: "/steel-metal-plates-industrial.jpg",
  //   },
  //   {
  //     name: "Flanges",
  //     description:
  //       "A flange is a mechanical component used to connect pipes, valves, pumps, and other equipment in piping systems. Designed to ensure a tight, leak-proof seal in any assembly.",
  //     details: [
  //       "ANSI B16.5, B16.47, MSS SP-44",
  //       "Types: Weld Neck, Slip On, Blind, Lap Joint, Socket Weld, Threaded",
  //       "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500#",
  //       'Sizes: 1/2" to 60" NB',
  //       "Materials: Carbon Steel, SS 304/316, Alloy Steel",
  //       "Face type: RF, FF, RTJ",
  //     ],
  //     image: "/industrial-pipe-flanges.jpg",
  //   },
  //   {
  //     name: "Buttweld Fittings",
  //     description:
  //       "Buttweld fittings are critical components used in piping systems to join sections of pipes or change the direction of flow. Essential for seamless, high-pressure applications.",
  //     details: [
  //       "ASME B16.9, B16.28 standards",
  //       "Types: 90° Elbows, 45° Elbows, Tees, Reducers, Caps, Stub Ends",
  //       'Sizes: 1/2" to 48" NB',
  //       "Schedule: SCH 10, 40, 80, 160, XXS",
  //       "Materials: SS 304, 316, Duplex, Carbon Steel, Alloy Steel",
  //       "Seamless and welded construction",
  //     ],
  //     image: "/buttweld-pipe-fittings.jpg",
  //   },
  //   {
  //     name: "Socket Weld Fittings",
  //     description:
  //       "Socket weld is a method of connecting pipes and fittings by inserting the pipe into a recessed area of the fitting and then welding around the joint. Commonly used for small-diameter piping, typically 2 inches or smaller.",
  //     details: [
  //       "ASME B16.11 standards",
  //       "Types: Elbows, Tees, Couplings, Unions, Caps, Bushings",
  //       'Size Range: 1/8" to 4" NB',
  //       "Pressure rating: 3000#, 6000#, 9000#",
  //       "Materials: SS 304/316, Carbon Steel, Alloy Steel",
  //       "Class 3000 and Class 6000 available",
  //     ],
  //     image: "/socket-weld-pipe-fittings.jpg",
  //   },
  //   {
  //     name: "Forged Fittings",
  //     description:
  //       "High-strength components for secure and efficient connections. Manufactured using forging process for superior mechanical properties.",
  //     details: [
  //       "ASME B16.11 Socket Weld & Threaded",
  //       "Types: Elbows, Tees, Crosses, Couplings, Unions, Plugs",
  //       'Size: 1/8" to 4" NB',
  //       "Pressure Class: 2000#, 3000#, 6000#",
  //       "Materials: SS 304/316, Duplex, Alloy 625/825",
  //       "NPT and BSP threaded options",
  //     ],
  //     image: "/buttweld-pipe-fittings.jpg",
  //   },
  //   {
  //     name: "Olets",
  //     description:
  //       "Olets are a type of pipe fitting used in piping systems to branch off a pipeline. They allow for the creation of a branch line from a main pipeline, providing a means to connect different pipe sizes or to divert flow.",
  //     details: [
  //       "MSS SP-97 standards",
  //       "Types: Weldolet, Sockolet, Threadolet, Latrolet, Elbolet",
  //       'Size Range: 1/2" to 24" NB',
  //       "Branch sizes smaller than or equal to header size",
  //       "Materials: SS 304/316, Carbon Steel, Duplex",
  //       "Full penetration weld design",
  //     ],
  //     image: "/pipe-olets-fittings.jpg",
  //   },
  //   {
  //     name: "Bars",
  //     description:
  //       "Bars, often referred to as reinforcing bars or rebar, are critical components in the construction industry. Versatile and durable, suited for various manufacturing needs.",
  //     details: [
  //       "Round, Square, Flat, and Hex bars",
  //       "ASTM A276, A479 standards",
  //       "Diameter: 10mm to 300mm",
  //       "Length: up to 6 meters (custom lengths available)",
  //       "Materials: SS 304, 316, 310, 904L, Duplex",
  //       "Hot rolled, cold drawn, and bright finish",
  //     ],
  //     image: "/steel-bars-industrial.jpg",
  //   },
  //   {
  //     name: "Tube Fittings",
  //     description:
  //       "Innovative solutions for fluid and gas systems. Compression and instrumentation fittings for leak-proof connections.",
  //     details: [
  //       "Compression fittings and bite-type fittings",
  //       'Sizes: 1/8" to 2" tube OD',
  //       "Types: Unions, Elbows, Tees, Bulkheads, Adapters",
  //       "Materials: SS 316, SS 304, Brass",
  //       "Working pressure: up to 10,000 PSI",
  //       "Instrumentation and process applications",
  //     ],
  //     image: "/socket-weld-pipe-fittings.jpg",
  //   },
  //   {
  //     name: "Induction Bends",
  //     description:
  //       "Custom bends and angles to meet specific design requirements. Hot induction bending for large diameter pipes.",
  //     details: [
  //       "Hot induction bending process",
  //       'Sizes: 2" to 56" NB',
  //       "Bend radius: 3D, 5D, 7D, 10D",
  //       "Bend angles: up to 180°",
  //       "Materials: Carbon Steel, SS 304/316, Alloy Steel",
  //       "Wall thickness maintained throughout bend",
  //     ],
  //     image: "/industrial-steel-pipes-texture.jpg",
  //   },
  // ]

  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-0 text-white">
          <div className="absolute inset-0">
            <img src="/industrial-steel-pipes-texture.jpg" alt="Products hero background" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 text-white hover:bg-white/10 hover:text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Our Products</h1>
            <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-blue-100">
              Comprehensive range of high-quality industrial piping solutions designed to meet the demands of various
              industries. All products manufactured to international standards.
            </p>
            <Button asChild size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
              <a href="/catalogue.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" />
                Download Complete Catalogue
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <Button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`${activeCategory === c ? "bg-primary text-primary-foreground" : "bg-white text-foreground"} border px-4 py-2`}
                >
                  {c}
                </Button>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((item) => (
                <Dialog key={`${item.category}-${item.name}`}>
                  <Card className="group overflow-hidden border bg-white p-0 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="relative h-48 sm:h-56 lg:h-64">
                      <img
                        src={item.image || "/placeholder.jpg"}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        onError={(e) => {
                          const t = e.currentTarget
                          t.onerror = null
                          t.src = "/placeholder.jpg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      <div className="absolute left-3 top-3 rounded bg-white/80 px-3 py-1 text-xs font-medium text-foreground">
                        {item.category}
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2">
                      <h3 className="text-sm font-semibold text-foreground truncate">{item.name}</h3>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">View Details</Button>
                      </DialogTrigger>
                    </div>
                  </Card>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{item.name}</DialogTitle>
                      <DialogDescription>{item.category}</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[65vh]">
                      <div className="space-y-4 px-1">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={item.image || "/placeholder.jpg"}
                            alt={item.name}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                            onError={(e) => {
                              const t = e.currentTarget
                              t.onerror = null
                              t.src = "/placeholder.jpg"
                            }}
                          />
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Products List */}
        {/* <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover opacity-80"
                        />
                      </div>
                    </Card>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{product.name}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{product.description}</p>

                    <div className="mt-6">
                      <h3 className="mb-3 text-lg font-semibold text-foreground">Specifications & Features:</h3>
                      <ul className="space-y-2">
                        {product.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Additional Product Info */}
        <section className="bg-muted/50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Material Standards
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                All products available in multiple material grades
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <h3 className="mb-3 font-semibold text-foreground">Stainless Steel</h3>
                <p className="text-sm text-muted-foreground">304, 304L, 316, 316L, 316Ti, 317L, 321, 310, 347, 904L</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 font-semibold text-foreground">Duplex & Super Duplex</h3>
                <p className="text-sm text-muted-foreground">UNS S31803, S32205, S32750, S32760, S32950</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 font-semibold text-foreground">Nickel Alloys</h3>
                <p className="text-sm text-muted-foreground">Alloy 200, 400, 600, 625, 800, 825, C276, Hastelloy</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 font-semibold text-foreground">Carbon & Alloy Steel</h3>
                <p className="text-sm text-muted-foreground">A105, A350 LF2, A182 F11, F22, F5, F9, F91</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Need a Custom Solution?</h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-blue-100">
              Our team can help you find the right products for your specific requirements. Contact us for technical
              specifications, pricing, and availability.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <a href="tel:+918976691734">Call: +91 89766 91734</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-slate-950 py-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
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
