import React from 'react'

export default function SkillCard({ label, onMove, onLeave }){
  return (
    <div className="card" onMouseMove={onMove} onMouseLeave={onLeave}>
      {label}
    </div>
  )
}
