'use client'

import Link from 'next/link'

export default function Nav({ onBlogClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const targetY = el.offsetTop - 80
      const startY = window.scrollY
      const diff = targetY - startY
      let step = 0
      
      function animate() {
        step++
        window.scrollTo(0, startY + (diff * (step / 4)))
        if (step < 4) setTimeout(animate, 50)
      }
      animate()
    }
  }

  return (
    <nav className="nav">
      <button className="nav-btn" onClick={() => scrollTo('about')}>ABOUT</button>
      <button className="nav-btn" onClick={() => scrollTo('orgs')}>ORGS</button>
      <button className="nav-btn" onClick={() => scrollTo('projects')}>PROJECTS</button>
      <button className="nav-btn" onClick={() => scrollTo('achievements')}>ACHIEVEMENTS</button>
      <button className="nav-btn" onClick={() => scrollTo('files')}>FILES</button>
      <Link href="/blog" className="nav-btn blog-btn">BLOG</Link>
    </nav>
  )
}
