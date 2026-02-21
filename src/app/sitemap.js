import { getAllPostSlugs } from '@/lib/blog'

export default function sitemap() {
    const baseUrl = 'https://organi-cs.github.io'

    // Get all blog post slugs
    const postSlugs = getAllPostSlugs()

    // Base routes
    const routes = [
        '',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}/`, // enforce trailing slash
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: route === '' ? 'monthly' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Blog post routes
    const blogRoutes = postSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}/`, // enforce trailing slash
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [...routes, ...blogRoutes]
}
