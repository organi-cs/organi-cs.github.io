'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('blogPopupShown')) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('blogPopupShown', 'true')
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div 
      className="popup-overlay active"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div className="popup-box">
        <div className="popup-header">
          <span className="popup-title">NEW!</span>
          <button className="popup-close" onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className="popup-content">
          <div className="popup-icon">[ ! ]</div>
          <p className="popup-text">
            Hey! I started a blog where I write about math, coding, and random thoughts. Check it out!
          </p>
          <Link href="/blog" className="popup-btn">READ BLOG</Link>
          <button className="popup-btn secondary" onClick={() => setIsOpen(false)}>
            MAYBE LATER
          </button>
        </div>
      </div>
    </div>
  )
}
