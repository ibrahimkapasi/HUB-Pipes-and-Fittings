"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Gauge, Layers, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { getValveCategory, valveCategories, valveProductCount, valvesHeroImage } from "@/lib/valves"

/** Value of `activeType` when no category modal is open */
export const ALL_VALVES = "all"

const heroTiles = ["needle-valves", "ball-valves", "manifold-valves", "monoflange-valves"]
  .map((slug) => getValveCategory(slug))
  .filter((c) => c !== undefined)

/**
 * Valves tab of the Products page: hero, then every valve category as a card.
 * Clicking a card opens a modal listing the valves in that category.
 * `activeType` is the slug of the category whose modal is open (from ?type=), or ALL_VALVES.
 */
export function ValvesCatalog({
  activeType,
  onTypeChange,
}: {
  activeType: string
  onTypeChange: (type: string) => void
}) {
  const active = getValveCategory(activeType)

  return (
    <div className="mt-8 space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl text-white shadow-lg">
        <img src={valvesHeroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-blue-950/75" />
        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Valves Range</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Industrial &amp; Instrumentation Valves
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-slate-200">
              HUB Pipes &amp; Fittings supplies a complete range of stainless steel instrumentation valves from Mumbai
              to customers across India: needle valves, 2, 3 &amp; 5 valve manifolds, monoflange and double block &amp;
              bleed valves, ball valves, check valves (NRV), high pressure valves and pressure relief valves. Available
              in SS 304/316, Monel, Hastelloy, Inconel and Duplex, with NPT, BSP, tube-end and flanged connections,
              rated up to 10,000 PSI.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 text-sm">
              {[
                { icon: Layers, label: `${valveCategories.length} valve categories` },
                { icon: CheckCircle2, label: `${valveProductCount}+ variants` },
                { icon: Gauge, label: "Up to 10,000 PSI" },
                { icon: ShieldCheck, label: "100% hydro-tested" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-medium backdrop-blur"
                >
                  <Icon className="size-4 text-blue-300" /> {label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a href="tel:+918976691734">
                  <Phone className="mr-2 size-4" />
                  +91 89766 91734
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroTiles.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => onTypeChange(c.slug)}
                className="group rounded-xl bg-white p-3 text-left shadow-lg ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-semibold text-slate-800 sm:text-sm">{c.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All valve categories */}
      <section aria-labelledby="valve-categories-heading">
        <div className="mb-6">
          <h3 id="valve-categories-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            All Valves
          </h3>
          <p className="mt-2 text-muted-foreground">Select a category to see every valve we supply in that range.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valveCategories.map((c) => (
            <Card
              key={c.slug}
              className="group flex cursor-pointer flex-col overflow-hidden border bg-white p-0 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              onClick={() => onTypeChange(c.slug)}
            >
              <div className="relative aspect-square bg-white p-4">
                <img
                  src={c.image}
                  alt={`${c.name} - HUB Pipes & Fittings`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {c.products.length} variants
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 border-t px-4 pb-4 pt-3">
                <h4 className="text-lg font-semibold text-foreground">{c.name}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-auto hover:bg-primary hover:text-primary-foreground"
                  onClick={(e) => {
                    e.stopPropagation()
                    onTypeChange(c.slug)
                  }}
                >
                  View {c.name}
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Category modal: list of valve names */}
      <Dialog open={!!active} onOpenChange={(open) => !open && onTypeChange(ALL_VALVES)}>
        {active && (
          <DialogContent className="max-h-[90vh] sm:max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-4 text-left">
                <img
                  src={active.image}
                  alt=""
                  className="size-16 shrink-0 rounded-lg border bg-white object-contain p-1 sm:size-20"
                />
                <div>
                  <DialogTitle className="text-xl sm:text-2xl">{active.name}</DialogTitle>
                  <DialogDescription className="mt-1">{active.summary}</DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <p className="text-sm font-semibold text-foreground">
              {active.products.length} {active.name} available
            </p>
            <div className="-mr-2 max-h-[50vh] overflow-y-auto pr-2">
              <ul className="grid gap-2 sm:grid-cols-2">
                {active.products.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-start gap-3 rounded-lg border bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-800"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{p.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 border-t pt-4">
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+918976691734">
                  <Phone className="mr-2 size-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

/*
 * Detailed category section (intro copy, specs table, variant cards, features, applications, FAQs).
 * Hidden for now; the data it uses is still kept in lib/valves.ts. To restore it, uncomment this
 * component (plus its imports: Accordion*, valveDetailHref, ValveCategory) and render it per category.
 *
export function ValveCategorySection({
  category: c,
  detailed = false,
  heading = c.name,
  showDetailsLink = true,
}: {
  category: ValveCategory
  detailed?: boolean
  heading?: string
  showDetailsLink?: boolean
}) {
  return (
    <section id={c.slug} aria-labelledby={`${c.slug}-heading`} className="scroll-mt-28 border-t pt-10">
      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
        <Card className="mx-auto h-fit w-full max-w-xs overflow-hidden border bg-white p-0 shadow-sm lg:max-w-none">
          <img
            src={c.image}
            alt={`${c.name} supplier in Mumbai, India`}
            loading="lazy"
            className="aspect-square w-full object-contain"
          />
        </Card>
        <div>
          <h2 id={`${c.slug}-heading`} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
          <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
            {(detailed ? c.intro : c.intro.slice(0, 1)).map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-lg border bg-muted/40 p-4 text-sm sm:grid-cols-2">
            {c.specs.map((s) => (
              <div key={s.label}>
                <dt className="font-semibold text-foreground">{s.label}</dt>
                <dd className="text-muted-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            {showDetailsLink && (
              <Button asChild variant="outline">
                <Link href={valveDetailHref(c.slug)}>
                  {c.name} details
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-lg font-semibold text-foreground">
        {c.name} Range <span className="text-muted-foreground">({c.products.length})</span>
      </h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {c.products.map((p) => (
          <li key={p.name}>
            <Card className="flex h-full flex-row items-center gap-3 border bg-white p-3 shadow-sm">
              <img src={p.image} alt={p.name} loading="lazy" className="size-16 shrink-0 rounded border object-contain" />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug text-foreground">{p.name}</p>
                <Link href="/contact" className="mt-1 inline-block text-xs font-medium text-primary hover:underline">
                  Enquire now
                </Link>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      {detailed && (
        <>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Key Features</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Applications</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.applications.map((a) => (
                  <li key={a} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-foreground">{c.name} FAQs</h3>
          <Accordion type="single" collapsible className="mt-2 rounded-lg border bg-white px-4">
            {c.faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </section>
  )
}
*/
