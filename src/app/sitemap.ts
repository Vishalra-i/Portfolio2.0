import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com"

  const cities = ["raipur", "bangalore", "ranchi", "delhi"]

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/web-development/${city}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...cityPages,
  ]
}