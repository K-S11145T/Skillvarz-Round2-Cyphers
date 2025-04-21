import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

const Footer = () => {
  const [rotate, setRotate] = useState(0)
  const buttonRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {


    // Footer reveal effect
    const handleScroll = () => {
      const container = document.querySelector('[data-horizontal-scroll]')
      if (!container || !footerRef.current) return
      
      const scrollLeft = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth
      const scrollProgress = scrollLeft / maxScroll
      
      if (scrollProgress > 0.8) {
        const revealAmount = (scrollProgress - 0.8) / 0.2
        gsap.to(footerRef.current, {
          clipPath: `polygon(${100 - revealAmount * 100}% 100%, 100% 100%, 100% 0%, ${100 - revealAmount * 100}% 0%)`,
          ease: 'power2.out',
          duration: 0.5
        })
      } else {
        gsap.to(footerRef.current, {
          clipPath: 'polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%)',
          ease: 'power2.out',
          duration: 0.5
        })
      }
    }
    const container = document.querySelector('[data-horizontal-scroll]')
    container?.addEventListener('scroll', handleScroll)

    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative w-screen h-screen">
    <div 
      ref={footerRef}
      className="fixed top-0 left-0 w-full h-screen bg-white text-black z-50"
      style={{
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
        willChange: 'transform'
      }}
    >
        <div className="w-full flex items-center justify-center text-9xl min-h-screen">
          Footer
        </div>
      </div>
    </div>
  )
}

export default Footer