import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Footer = () => {
  const footerRef = useRef(null)
  const animationTriggered = useRef(false)

  useEffect(() => {
    const container = document.querySelector('[data-horizontal-scroll]')
    if (!container || !footerRef.current) return
  
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      
      // Check scroll position for both reveal and hide
      if (Math.abs(scrollLeft - maxScroll) < 5) {
        // Reveal footer
        gsap.to(footerRef.current, {
          y: '0%',
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        })
      } else {
        // Hide footer
        gsap.to(footerRef.current, {
          y: '130%',
          rotate: -10,
          scale: 1.2,
          opacity: 0.3,
          duration: 1,
          ease: 'power3.out'
        })
      }
    }
  
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-screen h-screen">
      <div 
        ref={footerRef}
        className="fixed flex-none bottom-0 left-0 w-screen h-screen bg-white text-black z-50"
        style={{
          transform: 'translateY(130%) rotate(-10deg) scale(1.2)',
          opacity: 0.3,
          transformOrigin: 'center center'
        }}
      >
        <div className="w-full flex items-center justify-center text-9xl min-h-screen font-rewritten">
          Footer
        </div>
      </div>
    </div>
  )
}

export default Footer