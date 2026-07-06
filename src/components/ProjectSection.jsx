import React from 'react'
import Section from './Section'

export default function ProjectSection(){
  return (
    <Section id="projects" tag="Project" title="Academic Project">
      <div className="box">
        <h3>Chatbot for the Mining Industry</h3>
        <p><strong>Focus:</strong> Learning and speaking about mining protocols in a simple and interactive way.</p>
        <ul className="list">
          <li>Designed a chatbot concept to help users understand mining industry protocols.</li>
          <li>Focused on providing clear guidance and interactive communication for learning purposes.</li>
          <li>Explored how AI-based conversation can make technical information easier to access.</li>
        </ul>
      </div>
    </Section>
  )
}
