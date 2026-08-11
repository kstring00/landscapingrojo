export const site = {
  previewMode: true,
  businessName: "Rojo Tree Service & Landscaping Design",
  shortName: "ROJO",
  descriptor: "Tree Service · Landscaping Design",
  city: "League City",
  state: "TX",
  phone: "+1 (940) 235-6709",
  tel: "+19402356709",
  address: "301 South Gulf Freeway, League City, TX 77573",
  addressVerified: true,
  reviewCount: null as number | null,
  rating: null as number | null,
  hours: null as string | null,
  colors: {
    parchment: "#f2ede2",
    forest: "#173b2d",
    evergreen: "#285b3b",
    sage: "#aebd9c",
    stone: "#d3c7b4",
    clay: "#b8603e",
    ink: "#1e271f",
    cream: "#fffaf1"
  },
  services: [
    {
      id: "tree-care",
      number: "01",
      title: "Tree Care",
      kicker: "Shape · Remove · Restore",
      description: "Tree pruning and trimming, tree removal, stump removal, and tree planting for properties that need a cleaner, safer, more intentional canopy.",
      prompt: "A tree needs attention"
    },
    {
      id: "landscape-design",
      number: "02",
      title: "Landscape Design",
      kicker: "Plan · Place · Transform",
      description: "Landscape and greenscape design focused on turning outdoor space into a property feature rather than an afterthought.",
      prompt: "I want to redesign the landscaping"
    },
    {
      id: "pavers",
      number: "03",
      title: "Pavers & Hardscape",
      kicker: "Structure · Texture · Finish",
      description: "Paver installations, including driveway and interlocking paver work, for outdoor spaces that need structure and a finished edge.",
      prompt: "I have a paver or hardscape project"
    }
  ],
  problems: [
    "A tree needs attention",
    "A tree needs to come down",
    "I want to redesign the landscaping",
    "I have a paver or hardscape project",
    "I want to improve the whole property",
    "I have a project — not sure what to call it"
  ],
  proofPoints: [
    "League City based",
    "Tree care",
    "Landscape design",
    "Paver installation"
  ],
  confirmations: [
    "Preferred customer-facing business name",
    "Whether the published Gulf Freeway address should appear on the final site",
    "Current business hours",
    "Whether customers may text the published phone number",
    "Exact current service menu and which work Rojo wants more of",
    "Estimate process and whether estimates are free",
    "Current service area",
    "Residential vs. commercial focus",
    "Insurance, licenses, certifications, emergency/storm work",
    "Owner/team names and story",
    "Logo/signage/brand colors",
    "Permission to use Facebook and project photography",
    "Pricing, payment methods, warranties or guarantees if they want them published"
  ]
} as const;

export const cleanPhone = site.tel.replace(/\D/g, "");
