import React, { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ProjectSection from './components/ProjectSection'
import CertificationsSection from './components/CertificationsSection'
import LanguagesSection from './components/LanguagesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App(){
  const [navOpen, setNavOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const particleLayerRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(()=>{
    const layer = particleLayerRef.current
    if(layer){
      for(let i=0;i<18;i++){
        const p = document.createElement('div')
        p.className = 'particle'
        p.style.left = Math.random()*100 + '%'
        p.style.top = Math.random()*100 + '%'
        p.style.animationDelay = (Math.random()*6)+'s'
        p.style.width = p.style.height = (2 + Math.random()*6)+'px'
        layer.appendChild(p)
      }
    }

    const onMove = (e)=>{
      if(cursorRef.current){
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('show')
      })
    },{ threshold: 0.18 })
    sections.forEach((s, i)=>{ s.style.setProperty('--delay', `${i*120}ms`); observer.observe(s) })

    return ()=>{
      window.removeEventListener('mousemove', onMove)
      if(layer) layer.innerHTML = ''
      observer.disconnect()
    }
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setSent(true)
    setTimeout(()=>setSent(false), 2200)
    e.target.reset()
  }

  const handleCardMove = (e)=>{
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width/2
    const cy = rect.height/2
    const dx = (x-cx)/cx
    const dy = (y-cy)/cy
    const rx = (dy*6).toFixed(2)
    const ry = (dx*-6).toFixed(2)
    card.style.transform = `translateY(-6px) scale(1.02) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  const resetCard = (e)=>{ e.currentTarget.style.transform = '' }

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" />
      <div ref={particleLayerRef} className="particle-layer" aria-hidden="true" />

      <Hero navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <AboutSection />
        <SkillsSection onCardMove={handleCardMove} onCardLeave={resetCard} />
        <EducationSection />
        <ProjectSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection onSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  )
}
