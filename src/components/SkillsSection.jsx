import React from 'react'
import Section from './Section'
import SkillCard from './SkillCard'

const skills = ['Communication','Teamwork','Canva','Creative Thinking','Networking']

export default function SkillsSection({ onCardMove, onCardLeave }){
  return (
    <Section id="skills" tag="Skills" title="Core Strengths">
      <div className="skills">
        {skills.map(label => (
          <SkillCard key={label} label={label} onMove={onCardMove} onLeave={onCardLeave} />
        ))}
      </div>
    </Section>
  )
}
