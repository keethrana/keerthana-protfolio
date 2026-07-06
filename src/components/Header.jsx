import React from 'react'

export default function Header({ navOpen, setNavOpen }){
  return (
    <header className="hero">
      <nav className={"nav" + (navOpen ? ' open' : '')}>
        <div className="nav-inner container">
          <a href="#" className="logo"><span>KR</span> Portfolio</a>
          <button className="menu-toggle" onClick={()=>setNavOpen(!navOpen)} aria-label="Toggle menu">☰</button>
          <ul className="nav-links">
            <li><a href="#about">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="container hero-content">
        <div>
          <div className="eyebrow">MCA Fresher • Future Tech Professional</div>
          <h1>Hi, I'm <span>Keerthana</span></h1>
          <p className="hero-subtitle">A creative and ambitious MCA student with a strong interest in communication, networking, and modern technology. I build polished digital experiences with a futuristic, professional edge.</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>

          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">GH</a>
            <a href="#" aria-label="Email">✉</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb-card">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="tech-stack">
              <span>Networking</span>
              <span>Communication</span>
              <span>UI/UX</span>
              <span>AI</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
