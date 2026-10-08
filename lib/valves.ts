// Single source of truth for the Valves range. Used by the navbar, the Products page "Valves" tab,
// the homepage stock carousel and the per-category SEO pages under /products/valves/[slug].

export type ValveProduct = {
  name: string
  image: string
}

export type ValveCategory = {
  slug: string
  name: string
  image: string
  /** One-line summary for cards and the navbar dropdown */
  summary: string
  /** Long-form, keyword-rich copy for the category section and SEO page */
  intro: string[]
  specs: { label: string; value: string }[]
  features: string[]
  applications: string[]
  products: ValveProduct[]
  faqs: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

const IMG = "/products/valves"

/** Products page URL for the Valves tab. Without a slug it opens "All Valves". */
export const valvesTabHref = (slug?: string) =>
  slug ? `/products?category=Valves&type=${slug}` : "/products?category=Valves"

export const valveDetailHref = (slug: string) => `/products/valves/${slug}`

/** Background photo for the Valves hero (CC0, rawpixel) */
export const valvesHeroImage = `${IMG}/valve-station-hero.jpg`
/** Photo for the homepage "Wide Range of Product Stock" card (CC0, rawpixel) */
export const valvesStockImage = `${IMG}/industrial-valve-handwheel.jpg`

const commonMaterials = "SS 304 / 304L, SS 316 / 316L, Monel 400, Hastelloy C276, Inconel 625, Duplex & Super Duplex"

export const valveCategories: ValveCategory[] = [
  {
    slug: "needle-valves",
    name: "Needle Valves",
    image: `${IMG}/needle-valve.jpg`,
    summary: "Precision flow-control and isolation valves for instrumentation lines up to 10,000 PSI.",
    intro: [
      "HUB Pipes & Fittings is a trusted supplier and stockist of stainless steel needle valves in Mumbai, India. A needle valve uses a finely tapered stem that seats into a conical orifice, giving operators precise, repeatable control over the flow of liquids and gases in instrumentation, sampling and gauge lines.",
      "Our range covers screwed bonnet, single (integral) bonnet and union bonnet designs in straight, angle and 3-way patterns, with female NPT, male NPT and double-ferrule tube (OD) end connections. Every needle valve is forged from bar stock, fitted with adjustable PTFE or graphite packing, and hydro-tested before dispatch for leak-free performance in oil & gas, petrochemical, power and process plants.",
    ],
    specs: [
      { label: "Working Pressure", value: "6,000 PSI (414 bar) & 10,000 PSI (690 bar) @ 38°C" },
      { label: "Temperature", value: "-54°C to 240°C (PTFE packing), up to 450°C with graphite packing" },
      { label: "Sizes", value: '1/4", 3/8", 1/2", 3/4", 1" NPT / BSP; 6 mm to 25 mm tube OD' },
      { label: "End Connections", value: "Female x Female, Male x Female, Male x Male, OD x OD, OD x Female, OD x Male" },
      { label: "Body Materials", value: commonMaterials },
      { label: "Testing", value: "100% hydro-tested at 1.5x working pressure; NACE MR0175 sour-gas option" },
    ],
    features: [
      "Fine-pitch stem threads for accurate throttling and flow metering",
      "Rolled and lubricated stem threads that resist galling",
      "Adjustable gland packing below the threads for longer service life",
      "Bonnet lock pin prevents accidental bonnet removal under pressure",
      "Panel-mount, angle and 3-way patterns for compact instrument panels",
    ],
    applications: [
      "Pressure gauge and transmitter isolation",
      "Sampling and analyser systems",
      "Hydraulic and pneumatic test benches",
      "Chemical injection and dosing lines",
    ],
    products: [
      { name: "Needle Valve Screwed Bonnet (Female x Female)", image: `${IMG}/needle-valve.jpg` },
      { name: "Panel Mount Needle Valve Screwed Ends (Female x Female)", image: `${IMG}/needle-valve.jpg` },
      { name: "Needle Valve Screwed Bonnet Double Ferrule Tube Ends (Tube x Tube)", image: `${IMG}/needle-valve.jpg` },
      { name: "Needle Valve Screwed Bonnet (Male x Male)", image: `${IMG}/needle-valve.jpg` },
      { name: "Angle Needle Valve Screwed Bonnet (Male x Female)", image: `${IMG}/needle-valve.jpg` },
      { name: "Angle Needle Valve Screwed Bonnet (Female x Female)", image: `${IMG}/needle-valve.jpg` },
      { name: "Needle Valve Single Bonnet (Female x Female)", image: `${IMG}/round-body-needle-valve.jpg` },
      { name: "Needle Valve Single Bonnet (Male x Female)", image: `${IMG}/round-body-needle-valve.jpg` },
      { name: "Union Bonnet Needle Valve (OD x OD)", image: `${IMG}/needle-valve-handwheel.jpg` },
      { name: "Union Bonnet Needle Valve (Female x Female)", image: `${IMG}/needle-valve-handwheel.jpg` },
      { name: "Union Bonnet Needle Valve (Male x Male)", image: `${IMG}/needle-valve-handwheel.jpg` },
      { name: "Needle Valve Screwed Bonnet (OD x Female)", image: `${IMG}/needle-valve.jpg` },
      { name: "Needle Valve Screwed Bonnet (OD x Male)", image: `${IMG}/needle-valve.jpg` },
      { name: "3 Way Needle Valve Screwed Bonnet (Female)", image: `${IMG}/multi-port-gauge-valve.jpg` },
      { name: "3 Way Needle Valve Screwed Bonnet (OD)", image: `${IMG}/multi-port-gauge-valve.jpg` },
      { name: "3 Way Needle Valve Screwed Bonnet (Male)", image: `${IMG}/multi-port-gauge-valve.jpg` },
    ],
    faqs: [
      {
        q: "What is the difference between a needle valve and a ball valve?",
        a: "A needle valve throttles flow precisely using a tapered stem and needs several turns to open or close, while a ball valve is a quarter-turn on/off valve. Needle valves suit gauge isolation and metering; ball valves suit fast shut-off.",
      },
      {
        q: "Which needle valve material should I choose?",
        a: "SS 316 suits most process and instrumentation lines. For seawater, sour gas or aggressive chemicals, choose Monel 400, Hastelloy C276, Inconel 625 or Duplex. Our team can recommend a grade for your media and temperature.",
      },
    ],
    metaTitle: "Needle Valves Supplier in Mumbai, India | SS 316 Instrumentation Needle Valves",
    metaDescription:
      "Buy SS 304/316 needle valves up to 10,000 PSI from HUB Pipes & Fittings, Mumbai. Screwed, single and union bonnet, angle and 3-way needle valves with NPT, BSP and tube ends.",
    keywords: [
      "needle valve supplier Mumbai",
      "SS 316 needle valve",
      "instrumentation needle valve",
      "high pressure needle valve",
      "angle needle valve",
      "3 way needle valve",
      "needle valve 6000 psi",
    ],
  },
  {
    slug: "manifold-valves",
    name: "Manifold Valves",
    image: `${IMG}/five-valve-manifold.jpg`,
    summary: "2, 3 and 5 valve manifolds plus block & bleed gauge valves for pressure and DP transmitters.",
    intro: [
      "Instrument manifold valves combine isolation, equalising and vent functions in one compact forged block, reducing leak points and installation time for pressure and differential-pressure (DP) transmitters. HUB Pipes & Fittings supplies a complete range of 2 valve, 3 valve and 5 valve manifolds, multi-port gauge valves, and single or double block & bleed gauge valves from stock in Mumbai.",
      "Choose remote-mount (pipe x pipe), direct-mount T type, H type, R type, slant, bar type and coplanar configurations to suit Rosemount-style and conventional transmitters. All manifolds are machined from solid bar, fitted with non-rotating stem tips for bubble-tight shut-off, and tested to 1.5x rated pressure.",
    ],
    specs: [
      { label: "Working Pressure", value: "Up to 6,000 PSI (414 bar) @ 38°C; 10,000 PSI on request" },
      { label: "Temperature", value: "-54°C to 240°C (PTFE), up to 450°C with graphite packing" },
      { label: "Configurations", value: "2 valve, 3 valve, 5 valve, multi-port, single & double block and bleed" },
      { label: "Mounting", value: "Remote mount, direct mount (T, H, R, slant, bar type), coplanar" },
      { label: "End Connections", value: '1/4" & 1/2" NPT (F), pipe x pipe, pipe x flange, flange x flange' },
      { label: "Body Materials", value: commonMaterials },
    ],
    features: [
      "Solid forged body minimises potential leak paths",
      "Non-rotating stem tip for repeatable, bubble-tight shut-off",
      "Colour-coded handles for isolate, equalise and vent functions",
      "Integral drain / vent plugs on coplanar and block & bleed models",
      "Direct-mount designs eliminate tubing between manifold and transmitter",
    ],
    applications: [
      "Differential pressure and flow transmitters",
      "Static pressure transmitters and gauges",
      "Level measurement on tanks and vessels",
      "Orifice plate and venturi flow metering",
    ],
    products: [
      { name: "Multi-Port Gauge Valve", image: `${IMG}/multi-port-gauge-valve.jpg` },
      { name: "Single Block & Bleed Gauge Valve", image: `${IMG}/block-and-bleed-valve.jpg` },
      { name: "Single Block & Bleed Gauge Valve (Female x Female)", image: `${IMG}/block-and-bleed-valve.jpg` },
      { name: "Double Block & Bleed Gauge Valve (Female x Female)", image: `${IMG}/block-and-bleed-valve.jpg` },
      { name: "Two Valve (Three-Way) Manifold for Pressure Instruments", image: `${IMG}/two-valve-angle-manifold.jpg` },
      { name: "Two Valve Manifold Remote Mount (Pipe x Pipe)", image: `${IMG}/two-valve-manifold.jpg` },
      { name: 'Two Valve "T" Type Manifold (Pipe x Flange)', image: `${IMG}/two-valve-manifold.jpg` },
      { name: 'Two Valve "R" Type Manifold (Pipe x Pipe)', image: `${IMG}/two-valve-angle-manifold.jpg` },
      { name: 'Two Valve "Slant" Type Manifold (Pipe x Flange)', image: `${IMG}/two-valve-manifold.jpg` },
      { name: "Three Valve Manifold Remote Mount (Pipe x Pipe)", image: `${IMG}/three-valve-manifold.jpg` },
      { name: "Three Valve Manifold Direct Mount T Type (Pipe x Flange)", image: `${IMG}/three-valve-manifold.jpg` },
      { name: "Three Valve Manifold Bar Type Direct Mount (Pipe x Pipe)", image: `${IMG}/three-valve-manifold.jpg` },
      { name: "Three Valve Manifold Direct Mount H Type (Flange x Flange)", image: `${IMG}/three-valve-manifold.jpg` },
      { name: "Coplanar Three Valve Manifold with Drain Plugs (Pipe x Flange)", image: `${IMG}/three-valve-manifold.jpg` },
      { name: "Five Valve Manifold Remote Mount (Pipe x Pipe)", image: `${IMG}/five-valve-manifold.jpg` },
      { name: "Five Valve Manifold Bar Type Direct Mount (Pipe x Flange)", image: `${IMG}/five-valve-manifold-direct-mount.jpg` },
      { name: "Five Valve Manifold Direct Mount T Type (Pipe x Flange)", image: `${IMG}/five-valve-manifold.jpg` },
      { name: "Five Valve Manifold Direct Mount H Type (Flange x Flange)", image: `${IMG}/five-valve-manifold-direct-mount.jpg` },
      { name: "Five Valve Manifold Coplanar Mount (Pipe x Flange)", image: `${IMG}/five-valve-manifold-direct-mount.jpg` },
    ],
    faqs: [
      {
        q: "When should I use a 3 valve vs a 5 valve manifold?",
        a: "A 3 valve manifold (two isolation + one equalising valve) is standard for DP transmitters. A 5 valve manifold adds two vent/test valves, allowing calibration and venting without disturbing the impulse lines, which is common in gas and steam flow service.",
      },
      {
        q: "What is a double block and bleed (DBB) gauge valve?",
        a: "A DBB valve has two isolation valves in series with a bleed valve between them, giving positive isolation of the instrument from the process so it can be removed or calibrated safely.",
      },
    ],
    metaTitle: "Manifold Valves Supplier in India | 2, 3 & 5 Valve Instrument Manifolds",
    metaDescription:
      "SS 316 2 valve, 3 valve and 5 valve manifolds, multi-port gauge valves and block & bleed valves up to 6,000 PSI. Remote, direct and coplanar mount. Stockist in Mumbai, India.",
    keywords: [
      "manifold valve supplier India",
      "3 valve manifold",
      "5 valve manifold",
      "2 valve manifold",
      "block and bleed valve",
      "instrument manifold Mumbai",
      "coplanar manifold",
    ],
  },
  {
    slug: "monoflange-valves",
    name: "Monoflange Valves",
    image: `${IMG}/monoflange-dbb-valve.jpg`,
    summary: "Compact flanged single isolation, block & bleed and DBB valves for process-to-instrument interfaces.",
    intro: [
      "Monoflange valves replace a conventional assembly of a flanged gate or ball valve, spool and instrument valve with a single, compact flanged body. The result is a lighter, shorter and safer process-to-instrument interface with far fewer leak points, which is why monoflange valves are specified widely on offshore platforms, refineries and LNG plants.",
      "HUB Pipes & Fittings supplies monoflange single isolation valves, block & bleed and double block & bleed (DBB) monoflanges, key block DBB valves, and monoflange gate and globe (OS & Y) valves with flanged and socket-weld ends. Flanges are available to ASME B16.5 in classes 150# to 2500# with RF and RTJ facings.",
    ],
    specs: [
      { label: "Flange Rating", value: "ASME B16.5 Class 150# to 2500# (RF / RTJ)" },
      { label: "Sizes", value: '1/2" to 2" flange; 1/2" NPT (F) instrument outlet' },
      { label: "Configurations", value: "Single isolation, block & bleed, double block & bleed, key block DBB" },
      { label: "Valve Types", value: "Needle, ball, gate and globe (OS & Y) isolation elements" },
      { label: "End Connections", value: "Flange x Flange, Flange x NPT, Socket Weld ends" },
      { label: "Body Materials", value: commonMaterials },
    ],
    features: [
      "Up to 70% lighter and shorter than a conventional multi-valve assembly",
      "Fewer joints mean fewer potential leak paths",
      "Fire-safe and fugitive-emission designs available",
      "Anti-tamper and lockable handles on request",
      "Ideal where space and weight are limited, such as offshore modules",
    ],
    applications: [
      "Primary isolation for pressure instruments",
      "Chemical injection and sampling points",
      "Offshore platforms and FPSOs",
      "Refinery, LNG and petrochemical process lines",
    ],
    products: [
      { name: "Monoflange Single Isolation Valve", image: `${IMG}/monoflange-single-isolation-valve.jpg` },
      { name: "Monoflange Block & Bleed Valve", image: `${IMG}/monoflange-dbb-valve.jpg` },
      { name: "Monoflange Double Block & Bleed (DBB) Valve", image: `${IMG}/monoflange-dbb-valve.jpg` },
      { name: "Key Block DBB Valve", image: `${IMG}/monoflange-valves.jpg` },
      { name: "Key Block Double Block & Bleed Valve", image: `${IMG}/monoflange-valves.jpg` },
      { name: "Gate Valve (Flange x Flange)", image: `${IMG}/monoflange-valves.jpg` },
      { name: "Gate Valve (Socket Weld Ends)", image: `${IMG}/monoflange-single-isolation-valve.jpg` },
      { name: "Globe Valve (OS & Y Type)", image: `${IMG}/monoflange-single-isolation-valve.jpg` },
    ],
    faqs: [
      {
        q: "What is a monoflange valve used for?",
        a: "It provides primary isolation between the process pipe and an instrument such as a pressure gauge or transmitter, in a single compact flanged body instead of several separate valves and fittings.",
      },
      {
        q: "Which flange classes are available?",
        a: "Monoflange valves are available in ASME B16.5 classes 150# through 2500# with raised-face (RF) or ring-type-joint (RTJ) facings.",
      },
    ],
    metaTitle: "Monoflange Valves Supplier in India | Single Isolation, Block & Bleed, DBB",
    metaDescription:
      "Monoflange single isolation, block & bleed and double block & bleed valves in SS 316, Duplex and Inconel, ASME 150# to 2500#. Supplier and stockist in Mumbai, India.",
    keywords: [
      "monoflange valve supplier",
      "double block and bleed monoflange",
      "DBB valve India",
      "monoflange single isolation valve",
      "key block DBB valve",
    ],
  },
  {
    slug: "ball-valves",
    name: "Ball Valves",
    image: `${IMG}/three-way-ball-valve.jpg`,
    summary: "Quarter-turn 2 way, 3 way, 5 way, panel-mount and high-pressure instrumentation ball valves.",
    intro: [
      "Ball valves provide fast, quarter-turn shut-off with very low pressure drop, making them the preferred on/off valve for instrumentation, hydraulic and process tubing systems. HUB Pipes & Fittings stocks stainless steel ball valves in round body, square body, mini and single-piece designs in 2 way, 3 way and 5 way flow patterns.",
      "Panel-mount versions simplify control-panel installation, while high-pressure ball valves are rated up to 6,000 PSI for hydraulic and gas service. End connections include female and male NPT and double-ferrule tube (OD) ends from 1/8\" to 1\", with PTFE, reinforced PTFE or PEEK seats to suit your media and temperature.",
    ],
    specs: [
      { label: "Working Pressure", value: "Up to 3,000 PSI standard; 6,000 PSI (414 bar) high-pressure series" },
      { label: "Temperature", value: "-20°C to 200°C depending on seat material" },
      { label: "Sizes", value: '1/8" to 1" NPT; 3 mm to 25 mm tube OD' },
      { label: "Flow Patterns", value: "2 way, 3 way (L / T port), 5 way" },
      { label: "Seat Materials", value: "PTFE, Reinforced PTFE, PEEK, Devlon" },
      { label: "Body Materials", value: "SS 304, SS 316, Brass, Carbon Steel, Duplex" },
    ],
    features: [
      "Quarter-turn operation with clear open / closed handle position",
      "Low-torque, bi-directional shut-off",
      "Blow-out-proof stem design for safety",
      "Panel-mount nuts for neat installation on instrument panels",
      "3 way and 5 way patterns for diverting and switching flows",
    ],
    applications: [
      "Instrument and sample line isolation",
      "Hydraulic and pneumatic systems",
      "Analyser switching and diverting",
      "Gas distribution and test rigs",
    ],
    products: [
      { name: "Round Body Ball Valve", image: `${IMG}/round-body-ball-valve.jpg` },
      { name: "Round Body Ball Valve (Male x Female)", image: `${IMG}/round-body-ball-valve.jpg` },
      { name: "High Pressure Ball Valve", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "High Pressure Ball Valve (3 Way)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "High Pressure Ball Valve (Male x Female)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "High Pressure Ball Valve (Male x Male)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Panel Mount Ball Valve", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Panel Mount Ball Valve 2 Way (OD x OD)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Panel Mount Ball Valve 2 Way (Female)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Panel Mount Ball Valve 3 Way (OD)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "Panel Mount Ball Valve 3 Way (Female)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "2 Way Ball Valve", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "3 Way Ball Valve", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "5 Way Ball Valve", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "Square Ball Valve", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Square Ball Valve (Male x Female)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Square Ball Valve (Male x Male)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Square Ball Valve (OD x OD)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Square Ball Valve 3 Way (OD)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "Square Ball Valve 3 Way (NPT)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "Single Piece Design Ball Valve (OD x OD)", image: `${IMG}/tube-end-ball-valve.jpg` },
      { name: "Single Piece Design Ball Valve (Female)", image: `${IMG}/round-body-ball-valve.jpg` },
    ],
    faqs: [
      {
        q: "What is the difference between a 2 way and a 3 way ball valve?",
        a: "A 2 way ball valve simply opens or closes one flow path. A 3 way ball valve has three ports and an L or T bored ball, so it can divert flow from one inlet to either of two outlets or mix two inlets.",
      },
      {
        q: "Can ball valves be used for throttling?",
        a: "Ball valves are designed for on/off service. For precise throttling or metering, use a needle valve instead.",
      },
    ],
    metaTitle: "Ball Valves Supplier in Mumbai | SS 316 2 Way, 3 Way & High Pressure Ball Valves",
    metaDescription:
      "Instrumentation ball valves in SS 304/316: round body, square, mini, panel-mount, 2 way, 3 way, 5 way and 6,000 PSI high-pressure ball valves. Supplier in Mumbai, India.",
    keywords: [
      "ball valve supplier Mumbai",
      "SS 316 ball valve",
      "3 way ball valve",
      "panel mount ball valve",
      "high pressure ball valve",
      "instrumentation ball valve India",
    ],
  },
  {
    slug: "check-valves",
    name: "Check Valves",
    image: `${IMG}/check-valve.jpg`,
    summary: "Poppet-type non-return valves (NRV) rated 3,000 to 10,000 PSI that stop reverse flow automatically.",
    intro: [
      "Check valves, also called non-return valves (NRV), allow fluid to flow in one direction only and close automatically when flow reverses. HUB Pipes & Fittings supplies spring-loaded poppet check valves that protect pumps, compressors, gauges and instruments from back-flow and pressure surges.",
      "Our instrumentation check valves are available in 3K (3,000 PSI), 6K (6,000 PSI) and 10K (10,000 PSI) pressure classes with female x female, male x female, male x male and inch OD tube ends. Selectable cracking pressures and Viton, Nitrile or PTFE seals let you match the valve precisely to your system.",
    ],
    specs: [
      { label: "Pressure Class", value: "3,000 PSI (3K), 6,000 PSI (6K), 10,000 PSI (10K)" },
      { label: "Cracking Pressure", value: "1/3 PSI to 25 PSI (other springs on request)" },
      { label: "Sizes", value: '1/8" to 1" NPT / BSP; 1/8" to 1" tube OD' },
      { label: "End Connections", value: "Female x Female, Male x Female, Male x Male, OD x OD" },
      { label: "Seals", value: "Viton, Nitrile (Buna-N), PTFE, EPDM" },
      { label: "Body Materials", value: "SS 304, SS 316, Brass, Monel, Hastelloy" },
    ],
    features: [
      "Spring-loaded poppet for fast, positive closing",
      "Low cracking pressure and minimal pressure drop",
      "Works in any mounting orientation",
      "Flow direction arrow stamped on the body",
      "Hex body for easy installation",
    ],
    applications: [
      "Pump and compressor discharge protection",
      "Chemical injection skids",
      "Hydraulic power packs",
      "Gas and air supply lines",
    ],
    products: [
      { name: "Check Valve (Female x Female) 3K", image: `${IMG}/female-check-valve.jpg` },
      { name: "Check Valve (Female x Female) 6K", image: `${IMG}/check-valve.jpg` },
      { name: "Check Valve (Female x Female) 10K", image: `${IMG}/inline-check-valve.jpg` },
      { name: "Check Valve (Male x Male)", image: `${IMG}/male-male-check-valve.jpg` },
      { name: "Check Valve (Inch OD Tubes)", image: `${IMG}/female-check-valve.jpg` },
    ],
    faqs: [
      {
        q: "What is cracking pressure in a check valve?",
        a: "Cracking pressure is the minimum upstream pressure at which the valve begins to open and allow flow. Choosing the right spring ensures the valve opens reliably without leaking at low differential pressure.",
      },
      {
        q: "Is a check valve the same as a non-return valve (NRV)?",
        a: "Yes. Check valve and non-return valve (NRV) are two names for the same function: allowing flow in only one direction.",
      },
    ],
    metaTitle: "Check Valves / NRV Supplier in India | 3K, 6K & 10K SS Poppet Check Valves",
    metaDescription:
      "Stainless steel poppet check valves (NRV) in 3,000, 6,000 and 10,000 PSI classes with NPT and tube ends. Instrumentation check valve supplier in Mumbai, India.",
    keywords: [
      "check valve supplier India",
      "non return valve NRV",
      "SS poppet check valve",
      "high pressure check valve",
      "instrumentation check valve Mumbai",
    ],
  },
  {
    slug: "high-pressure-valves",
    name: "High Pressure Valves",
    image: `${IMG}/needle-valve-handwheel.jpg`,
    summary: "Ball, needle, check and flow-control valves engineered for 10,000 PSI-plus hydraulic service.",
    intro: [
      "High pressure valves are built for hydraulic, test-bench and oil & gas wellhead applications where standard instrumentation valves would be overstressed. HUB Pipes & Fittings supplies high pressure ball valves, needle valves, check valves and flow control valves with heavy-wall forged bodies and hardened stems rated to 10,000 PSI and beyond.",
      "Flow control valves are available with or without an integral check valve, giving precise speed control of hydraulic cylinders in one direction and free flow in the other. All high pressure valves are pressure-tested and supplied with test certificates and material traceability.",
    ],
    specs: [
      { label: "Working Pressure", value: "Up to 10,000 PSI (690 bar); higher ratings on request" },
      { label: "Temperature", value: "-20°C to 200°C (seal dependent)" },
      { label: "Sizes", value: '1/4" to 1" NPT / BSP; SAE and metric threads available' },
      { label: "Valve Types", value: "2 way & 3 way ball, needle, check (NRV), flow control" },
      { label: "Body Materials", value: "SS 316, Carbon Steel (zinc plated), Alloy Steel" },
      { label: "Documentation", value: "Hydro-test certificate and EN 10204 3.1 MTC" },
    ],
    features: [
      "Heavy-wall forged bodies for high safety margins",
      "Hardened stems and seats for long service life",
      "Integral check option on flow control valves",
      "Compatible with hydraulic oils, water-glycol and gases",
      "Certified pressure testing on every valve",
    ],
    applications: [
      "Hydraulic presses and power packs",
      "Hydrostatic test pumps and benches",
      "Wellhead control panels",
      "High-pressure gas and chemical injection",
    ],
    products: [
      { name: "Ball Valve 3 Way (High Pressure)", image: `${IMG}/three-way-ball-valve.jpg` },
      { name: "High Pressure Check Valve / NRV", image: `${IMG}/inline-check-valve.jpg` },
      { name: "Flow Control Valve with Check Valve", image: `${IMG}/needle-valve-handwheel.jpg` },
      { name: "Flow Control Valve without Check Valve", image: `${IMG}/needle-valve-handwheel.jpg` },
      { name: "High Pressure Needle Valve Screwed Bonnet", image: `${IMG}/needle-valve-handwheel.jpg` },
    ],
    faqs: [
      {
        q: "What pressure counts as 'high pressure' for valves?",
        a: "In instrumentation and hydraulics, valves rated above roughly 6,000 PSI (414 bar) are generally classed as high pressure. Our high pressure range is rated up to 10,000 PSI (690 bar).",
      },
      {
        q: "What does a flow control valve with check valve do?",
        a: "It throttles flow precisely in one direction, for example to set a hydraulic cylinder's speed, while the built-in check valve lets flow return freely in the opposite direction.",
      },
    ],
    metaTitle: "High Pressure Valves Supplier in India | 10,000 PSI Ball, Needle & Check Valves",
    metaDescription:
      "High pressure ball, needle, check and flow control valves rated up to 10,000 PSI for hydraulics, test benches and oil & gas. Supplier and stockist in Mumbai, India.",
    keywords: [
      "high pressure valves India",
      "10000 psi needle valve",
      "high pressure ball valve",
      "hydraulic flow control valve",
      "high pressure check valve",
    ],
  },
  {
    slug: "pressure-relief-valves",
    name: "Pressure Relief Valves",
    image: `${IMG}/pressure-relief-valve.jpg`,
    summary: "Adjustable spring-loaded relief valves that protect instruments and lines from over-pressure.",
    intro: [
      "Pressure relief valves (PRV) automatically open when system pressure exceeds a set point and reseat once pressure returns to normal, protecting instruments, tubing and equipment from damaging over-pressure. HUB Pipes & Fittings supplies compact, adjustable, spring-loaded proportional relief valves for instrumentation and hydraulic systems.",
      "Choose from female x female, male x female, male x male, female x OD, male x OD and OD x OD connections. Interchangeable springs cover a wide range of set pressures, and the set point can be locked and sealed to prevent tampering.",
    ],
    specs: [
      { label: "Set Pressure Range", value: "10 PSI to 6,000 PSI (spring selectable)" },
      { label: "Temperature", value: "-20°C to 200°C (seal dependent)" },
      { label: "Sizes", value: '1/4" to 1" NPT / BSP; 6 mm to 25 mm tube OD' },
      { label: "End Connections", value: "Female x Female, Male x Female, Male x Male, Female x OD, Male x OD, OD x OD" },
      { label: "Seals", value: "Viton, Nitrile (Buna-N), EPDM, PTFE" },
      { label: "Body Materials", value: "SS 304, SS 316, Brass, Monel" },
    ],
    features: [
      "Proportional opening in line with over-pressure",
      "External set-pressure adjustment with lock nut",
      "Lock-wire / seal option to prevent tampering",
      "Repeatable reseating after relief",
      "Angle-pattern body for compact installation",
    ],
    applications: [
      "Over-pressure protection for gauges and transmitters",
      "Hydraulic circuits and test benches",
      "Gas cylinders and regulator outlets",
      "Chemical injection and dosing skids",
    ],
    products: [
      { name: "Pressure Relief Valve (Female x Female)", image: `${IMG}/pressure-relief-valve.jpg` },
      { name: "Pressure Relief Valve (Male x Female)", image: `${IMG}/pressure-relief-valve.jpg` },
      { name: "Pressure Relief Valve (Male x Male)", image: `${IMG}/pressure-relief-valve.jpg` },
      { name: "Pressure Relief Valve (Female x OD)", image: `${IMG}/pressure-relief-valve.jpg` },
      { name: "Pressure Relief Valve (Male x OD)", image: `${IMG}/pressure-relief-valve.jpg` },
      { name: "Pressure Relief Valve (OD x OD)", image: `${IMG}/pressure-relief-valve.jpg` },
    ],
    faqs: [
      {
        q: "What is the difference between a relief valve and a safety valve?",
        a: "A relief valve opens gradually in proportion to over-pressure and is typically used for liquids and instrumentation. A safety valve pops fully open at its set point and is used mainly for steam and gas protection on vessels and boilers.",
      },
      {
        q: "Can the set pressure be adjusted?",
        a: "Yes. The set pressure is adjusted with an external screw and lock nut within the range of the installed spring, and can be sealed to prevent unauthorised changes.",
      },
    ],
    metaTitle: "Pressure Relief Valves Supplier in India | Adjustable SS Relief Valves (PRV)",
    metaDescription:
      "Adjustable spring-loaded pressure relief valves in SS 316 with NPT and tube ends, set pressures up to 6,000 PSI. Instrumentation PRV supplier in Mumbai, India.",
    keywords: [
      "pressure relief valve supplier India",
      "PRV valve Mumbai",
      "SS relief valve",
      "proportional relief valve",
      "instrumentation relief valve",
    ],
  },
]

export type StandaloneValve = {
  slug: string
  name: string
  image: string
  /** Short label shown on the card badge */
  type: string
  summary: string
  specs: { label: string; value: string }[]
}

/** Individual valves listed as their own cards in the "All Valves" section, next to the categories */
export const standaloneValves: StandaloneValve[] = [
  {
    slug: "ball-valves-2-way-high-pressure",
    name: "Ball Valves 2 Way (High Pressure)",
    image: `${IMG}/tube-end-ball-valve.jpg`,
    type: "Ball Valve",
    summary:
      "Quarter-turn 2 way ball valve with a heavy-wall body for high-pressure hydraulic, gas and instrumentation lines, giving fast and positive shut-off.",
    specs: [
      { label: "Working Pressure", value: "6,000 PSI (414 bar); 10,000 PSI on request" },
      { label: "End Connections", value: "Tube OD x OD, Female NPT, Male x Female" },
      { label: "Sizes", value: '1/4" to 1" NPT; 6 mm to 25 mm tube OD' },
      { label: "Materials", value: "SS 304, SS 316, Duplex" },
    ],
  },
  {
    slug: "check-valve-male-x-female",
    name: "Check Valve (Male x Female)",
    image: `${IMG}/male-female-check-valve.jpg`,
    type: "Check Valve",
    summary:
      "Spring-loaded poppet check valve (NRV) with male x female threaded ends that allows flow in one direction and closes automatically on reverse flow.",
    specs: [
      { label: "Pressure Class", value: "3,000 PSI, 6,000 PSI and 10,000 PSI" },
      { label: "End Connections", value: "Male NPT / BSP x Female NPT / BSP" },
      { label: "Sizes", value: '1/8" to 1"' },
      { label: "Seals & Materials", value: "Viton, Nitrile, PTFE seals; SS 304 / SS 316 body" },
    ],
  },
  {
    slug: "double-block-bleed-gauge-valves",
    name: "Double Block & Bleed Gauge Valves",
    image: `${IMG}/block-and-bleed-valve.jpg`,
    type: "Gauge Valve",
    summary:
      "Two isolation valves in series with a bleed valve between them, giving positive isolation so pressure gauges can be removed or calibrated safely.",
    specs: [
      { label: "Working Pressure", value: "Up to 6,000 PSI (414 bar) @ 38°C" },
      { label: "End Connections", value: '1/2" NPT Male x Female; Female x Female' },
      { label: "Temperature", value: "-54°C to 240°C (PTFE), up to 450°C with graphite" },
      { label: "Materials", value: "SS 316, Monel 400, Hastelloy C276, Duplex" },
    ],
  },
  {
    slug: "needle-valves-screwed-bonnet-male-x-female",
    name: "Needle Valves Screwed Bonnet (Male x Female)",
    image: `${IMG}/male-female-needle-valve.jpg`,
    type: "Needle Valve",
    summary:
      "Screwed bonnet needle valve with male x female NPT ends for precise flow control and isolation of gauges, transmitters and sample lines.",
    specs: [
      { label: "Working Pressure", value: "6,000 PSI (414 bar) & 10,000 PSI (690 bar)" },
      { label: "End Connections", value: "Male NPT / BSP x Female NPT / BSP" },
      { label: "Sizes", value: '1/4", 3/8", 1/2", 3/4", 1"' },
      { label: "Materials", value: "SS 304 / 316, Monel 400, Hastelloy C276, Inconel 625" },
    ],
  },
  {
    slug: "mini-ball-valve",
    name: "Mini Ball Valve",
    image: `${IMG}/mini-ball-valve.jpg`,
    type: "Ball Valve",
    summary:
      "Compact quarter-turn ball valve for tight spaces on air, water, oil and instrument lines, with a short lever for quick on/off operation.",
    specs: [
      { label: "Pressure Rating", value: "PN63 (63 bar / approx. 900 PSI)" },
      { label: "End Connections", value: "Male x Female, Female x Female" },
      { label: "Sizes", value: '1/8", 1/4", 3/8", 1/2"' },
      { label: "Materials", value: "SS 304, SS 316" },
    ],
  },
]

export const getStandaloneValve = (slug: string | null | undefined) => standaloneValves.find((v) => v.slug === slug)

/** True for any slug that opens a modal in the Valves tab (a category or a standalone valve) */
export const isValveSlug = (slug: string | null | undefined) => !!(getValveCategory(slug) || getStandaloneValve(slug))

export const valveProductCount =
  valveCategories.reduce((n, c) => n + c.products.length, 0) + standaloneValves.length

export const getValveCategory = (slug: string | null | undefined) => valveCategories.find((c) => c.slug === slug)
