'use client'

import { useState } from 'react'

export default function ExpandableCard({ 
  icon, 
  title, 
  subtitle, 
  status, 
  statusType = 'live',
  children 
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="expandable-card">
      <div 
        className="expandable-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="expand-icon">{isExpanded ? '-' : '+'}</div>
        <div className="item-icon">
          <span className="item-icon-text">{icon}</span>
        </div>
        <div className="item-main">
          <div className="item-name">{title}</div>
          <div className="item-subtitle">{subtitle}</div>
        </div>
        {status && (
          <span className={`status-tag ${statusType}`}>{status}</span>
        )}
      </div>
      <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
        {children}
      </div>
    </div>
  )
}
