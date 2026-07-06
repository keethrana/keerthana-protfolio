import React from 'react'

export default function Section({ id, tag, title, children }){
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <div>
          <span className="section-tag">{tag}</span>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}
