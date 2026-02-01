import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Panel from '@/components/Panel'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on math, coding, and random things by Samputhy Khim.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-btn">HOME</Link>
        <Link href="/blog" className="nav-btn blog-btn">BLOG</Link>
      </nav>

      <div className="container">
        <section>
          <Panel title="BLOG">
            {posts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ 
                  fontFamily: "'Press Start 2P', cursive", 
                  fontSize: '14px', 
                  color: 'var(--border-dark)',
                  marginBottom: '16px'
                }}>
                  NO POSTS YET
                </div>
                <p className="detail-text">
                  Check back soon! I'm working on some posts about math, coding, and other stuff.
                </p>
              </div>
            ) : (
              <div className="blog-list">
                {posts.map(post => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="blog-card"
                  >
                    <div className="blog-date">{post.date}</div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    {post.tags.length > 0 && (
                      <div className="tech-tags" style={{ marginTop: '12px' }}>
                        {post.tags.map(tag => (
                          <span key={tag} className="tech-tag">{tag.toUpperCase()}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </Panel>
        </section>

        <footer className="footer">
          <Link href="/" className="link-btn">← BACK TO HOME</Link>
        </footer>
      </div>
    </>
  )
}
