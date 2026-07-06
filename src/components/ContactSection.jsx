import React from 'react'
import Section from './Section'

export default function ContactSection({ onSubmit }){
  return (
    <Section id="contact" tag="Contact" title="Contact Me">
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-field">
          <input type="text" name="name" placeholder=" " required />
          <label>Full name</label>
        </div>
        <div className="form-field">
          <input type="email" name="email" placeholder=" " required />
          <label>Email address</label>
        </div>
        <div className="form-field">
          <textarea name="message" rows="4" placeholder=" " required />
          <label>Your message</label>
        </div>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>
    </Section>
  )
}
