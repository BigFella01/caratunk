export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Caratunk Contractors",
  description: "Excavation company providing quality and professional work across New Hampshire.",
  url: "https://caratunkcontractors.com", 
  ogImage: "/bearclaw.webp", 
  navItems: [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Gallery",
      href: "/gallery"
    }
  ]
};
