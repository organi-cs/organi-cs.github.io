'use client'

import { useState } from 'react'

export default function ImageModal({ src, alt, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      
      {isOpen && (
        <div 
          className="modal-overlay active"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsOpen(false)}>X</button>
            <img src={src} alt={alt} className="modal-image smooth-render" />
          </div>
        </div>
      )}
    </>
  )
}
