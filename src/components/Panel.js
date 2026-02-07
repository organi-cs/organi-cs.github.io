'use client'

export default function Panel({ title, children }) {
  return (
    <div className="panel-card">
      {title && (
        <div className="panel-header">
          <span className="panel-title">{title}</span>
        </div>
      )}
      <div className="card">
        <div className="panel-body">
          {children}
        </div>
      </div>
    </div>
  )
}