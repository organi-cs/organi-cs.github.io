import Link from 'next/link'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import Panel from '@/components/Panel'

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

// Convert markdown to HTML
async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-btn">HOME</Link>
        <Link href="/blog" className="nav-btn blog-btn">BLOG</Link>
      </nav>

      <div className="container">
        <section>
          <Panel title="BLOG POST">
            <article>
              <div className="blog-date" style={{ marginBottom: '8px' }}>{post.date}</div>
              <h1 style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '18px',
                color: 'var(--border-dark)',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {post.title}
              </h1>
              
              {post.tags.length > 0 && (
                <div className="tech-tags" style={{ marginBottom: '24px' }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag.toUpperCase()}</span>
                  ))}
                </div>
              )}
              
              <div 
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </article>
          </Panel>
        </section>

        <footer className="footer">
          <Link href="/blog" className="link-btn">← ALL POSTS</Link>
          <Link href="/" className="link-btn">HOME</Link>
        </footer>
      </div>
    </>
  )
}
