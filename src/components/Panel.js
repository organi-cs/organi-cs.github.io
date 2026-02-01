'use client'

import { useState } from 'react'

export default function Panel({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="panel">
      <div className="panel-header">
        <span className="panel-title">{title}</span>
        <button 
          className="panel-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div className={`panel-content ${!isOpen ? 'collapsed' : ''}`}>
        {children}
      </div>
    </div>
  )
}
