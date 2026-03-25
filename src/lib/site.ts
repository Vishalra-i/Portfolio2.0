export const siteConfig = {
  name: "VR Web Solutions",
  legalName: "VR Web Solutions",
  description:
    "VR Web Solutions builds fast, SEO-ready websites for local businesses, stores, and service brands that want more leads, calls, and WhatsApp inquiries.",
  baseUrl: "https://vrwebsolution.site",
  email: "vishalrai0392@gmail.com",
  phone: "+91 8964936883",
  phoneHref: "tel:+918964936883",
  whatsappHref:
    "https://wa.me/918964936883?text=Hi%20VR%20Web%20Solutions%2C%20I%20want%20a%20business%20website%20demo",
  location: "India",
  social: {
    instagram: "https://www.instagram.com/vishal____rai",
    x: "https://x.com/Vishal____rai",
    linkedin: "https://www.linkedin.com/in/vishalrai07/",
    github: "https://github.com/Vishalra-i",
  },
};

export const primaryCta = {
  label: "Get Website @ ₹7999",
  href: "/get-quote",
};

export const secondaryCta = {
  label: "Book Free Consultation",
  href: siteConfig.whatsappHref,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const cities = ["raipur", "bangalore", "ranchi", "delhi"] as const;

export const cityIntroMap: Record<(typeof cities)[number], string> = {
  raipur:
    "Raipur businesses need websites that build trust quickly, load fast on mobile data, and convert search traffic into phone calls and WhatsApp inquiries.",
  bangalore:
    "Bangalore brands compete in crowded markets, so we focus on sharper messaging, local intent SEO, and clean UX that turns visitors into qualified leads.",
  ranchi:
    "For Ranchi store owners and local service providers, a modern website becomes a 24/7 sales asset that captures discovery traffic and inquiry intent.",
  delhi:
    "Delhi businesses benefit from strong service pages, location targeting, and premium visual presentation that supports credibility at scale.",
};

export const trustBadges = [
  "Fast-loading Next.js websites",
  "Mobile-first UI/UX",
  "SEO-ready information architecture",
  "WhatsApp and lead capture integration",
];

export const servicePackages = [
  {
    slug: "starter-pack",
    name: "Starter Pack",
    price: "₹7,999",
    summary: "Best for new local businesses that need a quick, credible online presence.",
    idealFor: ["Salons", "gyms", "cafes", "freelancers"],
    features: [
      "1-page high-converting website",
      "Mobile responsive design",
      "WhatsApp click-to-chat button",
      "Contact form setup",
      "Basic on-page SEO and indexing setup",
      "7-day launch support",
    ],
  },
  {
    slug: "growth-pack",
    name: "Growth Pack",
    price: "₹14,999",
    summary: "For stores and service businesses that need multiple sections and stronger search visibility.",
    idealFor: ["Clinics", "restaurants", "coaching centers", "showrooms"],
    features: [
      "Up to 5 custom pages",
      "Service-focused copy structure",
      "Google Maps and reviews section",
      "Lead form + WhatsApp funnel",
      "Technical SEO foundations",
      "Performance optimization",
    ],
  },
  {
    slug: "store-pack",
    name: "Store Pack",
    price: "₹24,999",
    summary: "A richer package for store owners who need catalogue presentation and product discovery pages.",
    idealFor: ["Tile stores", "fashion boutiques", "electronics shops", "home decor stores"],
    features: [
      "Up to 10 catalogue or product pages",
      "Collection and offer landing sections",
      "Inquiry-first product cards",
      "Store trust elements and testimonials",
      "Schema markup for products/services",
      "Analytics and conversion event setup",
    ],
  },
  {
    slug: "premium-pack",
    name: "Premium Lead Engine",
    price: "₹39,999+",
    summary: "For brands that want a premium website, content strategy, and stronger lead-generation workflows.",
    idealFor: ["Multi-location brands", "agencies", "high-ticket services", "growing businesses"],
    features: [
      "Custom page architecture",
      "Advanced internal linking strategy",
      "Location pages and content clusters",
      "CRM-ready lead capture flow",
      "Monthly reporting dashboard integration",
      "Priority support and optimization roadmap",
    ],
  },
] as const;

export const services = [
  {
    title: "Business Website Design",
    description:
      "Conversion-focused landing pages and business websites with clear trust signals and CTA hierarchy.",
  },
  {
    title: "Local SEO Setup",
    description:
      "Metadata, internal linking, schema, sitemap, robots, and city landing pages aligned for indexing.",
  },
  {
    title: "Store Owner Packages",
    description:
      "Starter, growth, store, and premium website packages tailored for retail and catalogue-driven brands.",
  },
  {
    title: "Lead Capture Automation",
    description:
      "WhatsApp, inquiry forms, analytics tracking, and conversion-first user flows.",
  },
  {
    title: "Performance Optimization",
    description:
      "Image optimization, font loading, code cleanup, and Core Web Vitals improvements for faster UX.",
  },
  {
    title: "Content & UX Strategy",
    description:
      "Stronger messaging, semantic structure, and user journeys that guide visitors from discovery to inquiry.",
  },
] as const;

export const portfolioProjects = [
  {
    slug: "tile-showroom-catalogue",
    title: "Tile Showroom Catalogue Website",
    category: "Store Website",
    description:
      "A premium showroom website concept with collection browsing, quote-focused CTAs, and local SEO landing sections.",
    results: ["Premium visual brand feel", "Quote-driven product discovery", "Faster mobile browsing"],
    highlights: ["Catalogue grid", "Brand trust section", "Offer banners", "Location-specific landing content"],
  },
  {
    slug: "restaurant-lead-funnel",
    title: "Restaurant Lead Funnel Website",
    category: "Restaurant Website",
    description:
      "A restaurant site concept designed to support dine-in reservations, menu highlights, and social proof.",
    results: ["Higher booking intent", "Menu-first browsing", "Clear reservation CTAs"],
    highlights: ["Sticky CTA", "Hero conversion block", "Customer reviews", "Google-friendly structure"],
  },
  {
    slug: "gym-membership-landing",
    title: "Gym Membership Landing Page",
    category: "Fitness Website",
    description:
      "A modern gym landing page focused on trial signup, class highlights, and trainer credibility.",
    results: ["Better membership inquiries", "Improved trust", "Stronger mobile CTA visibility"],
    highlights: ["Package comparison", "Trainer cards", "Transformation proof", "Free trial form"],
  },
  {
    slug: "salon-booking-website",
    title: "Salon Booking Website",
    category: "Salon Website",
    description:
      "A beauty and salon website concept built to turn Instagram traffic into WhatsApp and booking requests.",
    results: ["More appointment requests", "Cleaner service discovery", "Sharper luxury positioning"],
    highlights: ["Service cards", "Stylist proof", "Before/after gallery", "WhatsApp booking CTA"],
  },
] as const;

export const testimonials = [
  {
    name: "Arjun Sharma",
    business: "Tile showroom owner",
    quote:
      "The new website looks premium, loads faster, and gives our sales team better inquiry quality from store visitors.",
  },
  {
    name: "Neha Gupta",
    business: "Salon founder",
    quote:
      "We finally have a website that matches our Instagram brand and pushes clients to book directly on WhatsApp.",
  },
  {
    name: "Ravi Kumar",
    business: "Fitness studio manager",
    quote:
      "The layout, CTA strategy, and performance improvements made the site feel trustworthy from the first scroll.",
  },
] as const;

export const blogPosts = [
  {
    slug: "local-business-website-seo-checklist",
    title: "Local Business Website SEO Checklist for 2026",
    excerpt:
      "A practical checklist covering metadata, schema, internal links, speed, and indexability for local business websites.",
    publishedAt: "2026-03-20",
    readingTime: "6 min read",
    keywords: ["local business seo", "website seo checklist", "technical seo"],
    content: [
      "A high-converting local business website starts with crawlable architecture, unique metadata, and a clear primary conversion path.",
      "Use one clear H1, descriptive H2 sections, indexable service pages, and strong internal links from the homepage to revenue pages.",
      "Support rankings with structured data, optimized images, compressed assets, and copy that directly answers customer intent.",
    ],
  },
  {
    slug: "website-development-for-small-business-2026",
    title: "Why Every Small Business Needs a Website in 2026 (Complete Guide)",
    excerpt:
      "Discover why having a professional website is essential for small businesses in 2026 and how it helps increase sales, visibility, and brand trust.",
    publishedAt: "2026-03-22",
    readingTime: "8 min read",
    keywords: [
      "website for small business",
      "business website benefits",
      "online presence",
      "small business website india",
    ],
    content: [
      "In 2026, having a professional website is no longer optional for small businesses. It is the foundation of your digital presence and plays a key role in attracting customers online.",
      
      "A business website helps build trust and credibility. Customers today search on Google before making any purchase decision. Without a website, you are losing potential leads every day.",
      
      "A well-designed website improves conversion rates by providing clear information about your services, pricing, and contact details. It also works 24/7 as your digital salesman.",
      
      "Search engine optimization (SEO) helps your website rank higher on Google. By targeting keywords like 'best web development company in India' or 'affordable website design', you can attract high-intent customers.",
      
      "Fast loading speed, mobile responsiveness, and user-friendly design are essential factors that improve user experience and SEO ranking.",
      
      "In conclusion, investing in a professional website is one of the best decisions for small business growth in 2026."
    ],
  },
  {
    slug: "complete-seo-guide-for-business-website",
    title: "Complete SEO Guide for Business Websites in 2026",
    excerpt:
      "Learn how to optimize your website for search engines with modern SEO strategies including on-page, technical, and local SEO.",
    publishedAt: "2026-03-22",
    readingTime: "9 min read",
    keywords: [
      "seo for website",
      "google ranking tips",
      "technical seo 2026",
      "on page seo",
    ],
    content: [
      "Search engine optimization (SEO) is the key to getting free traffic from Google. A well-optimized website can generate leads without spending money on ads.",
      
      "On-page SEO includes optimizing title tags, meta descriptions, headings, and content. Always include your target keywords naturally in your content.",
      
      "Technical SEO ensures your website is fast, secure, and crawlable. Use proper sitemap.xml, robots.txt, and schema markup for better indexing.",
      
      "Local SEO is very important for businesses targeting nearby customers. Optimize your Google Business profile and include location-based keywords like 'web design company near me'.",
      
      "Internal linking helps Google understand your website structure and improves ranking of important pages.",
      
      "Consistently publishing blog content increases authority and improves long-term SEO performance.",
      
      "SEO is a long-term strategy, but once you rank, it brings consistent and high-quality traffic."
    ],
  },
  {
    slug: "website-packages-for-store-owners",
    title: "How to Choose the Right Website Package for Store Owners",
    excerpt:
      "Compare starter, growth, catalogue, and premium website packages based on your store size and sales process.",
    publishedAt: "2026-03-20",
    readingTime: "5 min read",
    keywords: ["store owner website", "website packages", "catalogue website"],
    content: [
      "Store owners usually need more than a generic brochure website because product discovery and trust heavily influence offline visits.",
      "A starter pack works for early-stage stores, but catalogue-heavy businesses benefit from richer category pages and product inquiry flows.",
      "The right package depends on whether your main goal is visibility, inquiry quality, or high-ticket conversion support.",
    ],
  },
  {
    slug: "improve-website-conversion-with-whatsapp-cta",
    title: "Improve Website Conversion Rates with Better WhatsApp CTAs",
    excerpt:
      "Learn how CTA placement, sticky actions, and message framing can increase inquiries from mobile users.",
    publishedAt: "2026-03-20",
    readingTime: "4 min read",
    keywords: ["whatsapp cta", "conversion optimization", "lead generation"],
    content: [
      "For many Indian service businesses, WhatsApp is the fastest path from interest to conversation, so CTA placement matters a lot.",
      "Use CTA buttons above the fold, repeat them after proof sections, and reduce friction with pre-filled intent-based messages.",
      "Better conversion comes from clarity, consistency, and confidence-building cues such as testimonials, offer framing, and response expectations.",
    ],
  },
] as const;
