export const siteConfig = {
  name: "VR Web Solutions",
  baseUrl: "https://vrwebsolutions.in",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@vrwebsolutions.in",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20VR%20Web%20Solutions%2C%20I%20want%20a%20business%20website%20demo",
};

export const cities = ["raipur", "bangalore", "ranchi", "delhi"] as const;

export const cityIntroMap: Record<string, string> = {
  raipur:
    "Raipur businesses are growing quickly, and your website should help you stand out with trust-building design, fast loading pages, and clear WhatsApp calls-to-action.",
  bangalore:
    "In Bangalore's competitive market, a conversion-focused website helps local businesses generate qualified leads with better visibility and stronger credibility.",
  ranchi:
    "For Ranchi business owners, a modern website can turn search traffic into real calls and inquiries by combining local SEO with clean, mobile-first pages.",
  delhi:
    "Delhi customers search online before making decisions, so we build high-performance websites that highlight your services and convert visits into leads.",
};

export const testimonials = [
  {
    name: "Arjun Sharma",
    city: "Raipur",
    quote:
      "VR Web Solutions helped us launch a clean business website and we started receiving WhatsApp leads in the first week.",
  },
  {
    name: "Neha Gupta",
    city: "Bangalore",
    quote:
      "Our old website was slow and outdated. The new site loads fast and brings much better local inquiries.",
  },
  {
    name: "Ravi Kumar",
    city: "Delhi",
    quote:
      "They understood our business goals and built a website that actually converts visitors into customers.",
  },
];
