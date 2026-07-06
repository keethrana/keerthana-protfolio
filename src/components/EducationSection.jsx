import React from 'react'
import Section from './Section'

export default function EducationSection(){
  return (
    <Section id="education" tag="Education" title="Academic Journey">
      <div className="box">
        <h3>Master of Computer Applications (MCA)</h3>
        <p>2025 – Present</p>
      </div>
      <div className="box">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>Vivekanandha College of Arts and Sciences for Women</p>
        <p>2022 – 2025 | 74%</p>
      </div>
    </Section>
  )
}
