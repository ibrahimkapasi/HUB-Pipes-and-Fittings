import Link from "next/link"

const productLinks = [
  "Pipes",
  "Tubes",
  "Plates",
  "Flanges",
  "Buttweld Fittings",
  "Socket Weld Fittings",
  "Olets",
  "Bars",
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-950 py-10 text-slate-400 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(9rem,0.75fr)_minmax(15rem,1fr)_minmax(13rem,0.9fr)] xl:gap-x-12">
          <div className="max-w-xl sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo/logo.png" alt="HUB" className="h-10 w-10 shrink-0 rounded-full object-cover" />
              <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">HUB Pipe & Fitting</h3>
            </div>
            <p className="text-sm leading-6">
              Hub Pipes & Fittings is a leading Plates, Buttweld Fittings, and Round Bar manufacturer and supplier in
              India. We are a metal products wholesaler of premium grades, and a complete range of metals is readily
              available in large quantities in major cities like Gujarat, Maharashtra, and Rajasthan.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block leading-6 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="block leading-6 hover:text-white">
                About Us
              </Link>
              <Link href="/products" className="block leading-6 hover:text-white">
                Products
              </Link>
              <Link href="/contact" className="block leading-6 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Products</h4>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm min-[420px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {productLinks.map((product) => (
                <Link key={product} href="/products" className="block break-words leading-6 hover:text-white">
                  {product}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact Info</h4>
            <div className="space-y-2 text-sm leading-6">
              <p>23 Bharti Park, Mira Road East</p>
              <p>Thane, Maharashtra 401107</p>
              <a href="tel:+918976691734" className="block break-words hover:text-white">
                +91 89766 91734
              </a>
              <a href="https://www.hubpipes.com" className="block break-words hover:text-white">
                www.hubpipes.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs leading-6 text-slate-500 sm:text-sm">
          <p>© 2025 HUB Pipe & Fitting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
