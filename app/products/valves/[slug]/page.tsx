import { notFound } from "next/navigation"

// Per-category valve detail pages (/products/valves/[slug]) are hidden for now: valves are browsed
// from the Products page "Valves" tab, where each category opens a modal. The full SEO page
// implementation is kept below; to restore it, delete the stub export and uncomment the code
// (it also needs ValveCategorySection uncommented in components/valves/ValvesCatalog.tsx).
export default function ValveCategoryPage() {
  notFound()
}

// import type { Metadata } from "next"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { ArrowRight, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { SiteFooter } from "@/components/SiteFooter"
// import { ValveCategorySection } from "@/components/valves/ValvesCatalog"
// import { getValveCategory, valveCategories, valveDetailHref, valvesTabHref } from "@/lib/valves"
//
// const SITE_URL = "https://www.hubpipes.com"
//
// type Props = { params: Promise<{ slug: string }> }
//
// export function generateStaticParams() {
//   return valveCategories.map((c) => ({ slug: c.slug }))
// }
//
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const category = getValveCategory((await params).slug)
//   if (!category) return {}
//   const url = `${SITE_URL}${valveDetailHref(category.slug)}`
//   return {
//     title: category.metaTitle,
//     description: category.metaDescription,
//     keywords: category.keywords,
//     alternates: { canonical: url },
//     openGraph: {
//       type: "website",
//       url,
//       title: category.metaTitle,
//       description: category.metaDescription,
//       siteName: "HUB Pipes & Fitting",
//       images: [{ url: `${SITE_URL}${category.image}`, width: 800, height: 800, alt: category.name }],
//     },
//   }
// }
//
// export default async function ValveCategoryPage({ params }: Props) {
//   const category = getValveCategory((await params).slug)
//   if (!category) notFound()
//
//   const pageUrl = `${SITE_URL}${valveDetailHref(category.slug)}`
//   const jsonLd = [
//     {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//         { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
//         { "@type": "ListItem", position: 3, name: "Valves", item: `${SITE_URL}${valvesTabHref()}` },
//         { "@type": "ListItem", position: 4, name: category.name, item: pageUrl },
//       ],
//     },
//     {
//       "@context": "https://schema.org",
//       "@type": "ItemList",
//       name: `${category.name} range`,
//       numberOfItems: category.products.length,
//       itemListElement: category.products.map((p, i) => ({
//         "@type": "ListItem",
//         position: i + 1,
//         name: p.name,
//         image: `${SITE_URL}${p.image}`,
//       })),
//     },
//     {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       mainEntity: category.faqs.map((f) => ({
//         "@type": "Question",
//         name: f.q,
//         acceptedAnswer: { "@type": "Answer", text: f.a },
//       })),
//     },
//   ]
//
//   return (
//     <div className="min-h-screen">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//
//       {/* Hero */}
//       <section className="relative text-white">
//         <div className="absolute inset-0">
//           <img src="/industrial-steel-pipes-texture.jpg" alt="" className="h-full w-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
//         </div>
//         <div className="relative mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center px-4 pb-8 pt-12 text-center sm:min-h-[360px] sm:px-6 lg:px-12">
//           <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{category.name}</h1>
//           <p className="mt-3 max-w-3xl text-pretty text-lg leading-relaxed text-blue-100">{category.summary}</p>
//           <Breadcrumb className="mt-4">
//             <BreadcrumbList className="justify-center text-white">
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/products">Products</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbLink href={valvesTabHref()}>Valves</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage className="text-gray-300">{category.name}</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </section>
//
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <ValveCategorySection
//           category={category}
//           detailed
//           heading={`${category.name} Supplier & Stockist in Mumbai, India`}
//           showDetailsLink={false}
//         />
//
//         {/* Other valve categories */}
//         <section className="mt-16 border-t pt-10">
//           <h2 className="text-2xl font-bold tracking-tight text-foreground">Explore Other Valves</h2>
//           <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
//             {valveCategories
//               .filter((c) => c.slug !== category.slug)
//               .map((c) => (
//                 <Link key={c.slug} href={valveDetailHref(c.slug)} className="group">
//                   <Card className="h-full overflow-hidden border bg-white p-0 shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md">
//                     <img src={c.image} alt={c.name} loading="lazy" className="aspect-square w-full object-contain" />
//                     <p className="px-3 pb-3 text-center text-sm font-medium text-foreground group-hover:text-primary">
//                       {c.name}
//                     </p>
//                   </Card>
//                 </Link>
//               ))}
//           </div>
//           <Button asChild variant="outline" className="mt-6">
//             <Link href={valvesTabHref()}>
//               View all valves
//               <ArrowRight className="ml-1 size-4" />
//             </Link>
//           </Button>
//         </section>
//       </div>
//
//       {/* CTA */}
//       <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 text-white">
//         <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
//           <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Need {category.name}?</h2>
//           <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
//             Share your size, end connection, material and pressure rating. Our team will confirm availability and send a
//             competitive quotation with test certificates.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
//               <Link href="/contact">Request a Quote</Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
//               <a href="tel:+918976691734">
//                 <Phone className="mr-2 size-4" />
//                 Call: +91 89766 91734
//               </a>
//             </Button>
//           </div>
//         </div>
//       </section>
//
//       <SiteFooter />
//     </div>
//   )
// }
