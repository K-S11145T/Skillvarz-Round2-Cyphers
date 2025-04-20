import React, { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Footer from './Components/Footer'
import Lenis from 'lenis'
import Page6 from './Components/Page6'

const BREAKPOINT = 768

const App = () => {
  const scrollContainerRef = useRef(null)
  const contentRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= BREAKPOINT)
  const animationRef = useRef(null)
  const lenis = new Lenis();

  // Handle scroll animation with GSAP
  const animateScroll = useCallback((target, duration = 0.8, ease = "power3.out") => {
    if (animationRef.current) {
      animationRef.current.kill()
    }
    
    animationRef.current = gsap.to(scrollContainerRef.current, {
      scrollLeft: target,
      duration,
      ease,
      overwrite: true
    })
  }, [])

  // Initialize responsive layout
  useEffect(() => {
    const container = scrollContainerRef.current
    const content = contentRef.current

    if (isDesktop) {
      // Desktop setup
      gsap.set(container, { overflowX: 'auto', overflowY: 'hidden' })
      gsap.set(content, { display: 'flex' })
    } else {
      // Mobile setup
      gsap.set(container, { overflowX: 'hidden', overflowY: 'auto' })
      gsap.set(content, { display: 'flex', flexDirection: 'column' })
    }

    return () => {
      animationRef.current?.kill()
    }
  }, [isDesktop])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= BREAKPOINT
      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop)
      }
    }
    
    const debouncedResize = debounce(handleResize, 100)
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [isDesktop])

  // Desktop scroll handlers
  useEffect(() => {
    if (!isDesktop) return
    
    const el = scrollContainerRef.current
    if (!el) return

    const handleWheel = (e) => {
      e.preventDefault()
      const currentScroll = el.scrollLeft
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      const target = currentScroll + delta * 1.8
      animateScroll(target)
    }

    const handleKeyDown = (e) => {
      if (!['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) return
      
      e.preventDefault()
      const pageWidth = el.clientWidth
      const currentScroll = el.scrollLeft
      const maxScroll = el.scrollWidth - el.clientWidth

      const scrollActions = {
        ArrowLeft: () => animateScroll(Math.max(currentScroll - pageWidth * 0.33, 0)),
        ArrowRight: () => animateScroll(Math.min(currentScroll + pageWidth * 0.33, maxScroll), 0.6, "power2.out"),
        PageUp: () => animateScroll(Math.max(currentScroll - pageWidth * 0.9, 0)),
        PageDown: () => animateScroll(Math.min(currentScroll + pageWidth * 0.9, maxScroll)),
        Home: () => animateScroll(0),
        End: () => animateScroll(maxScroll)
      }

      scrollActions[e.key]?.()
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      el.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDesktop, animateScroll])

  return (
    <div 
      ref={scrollContainerRef}
      className="w-screen bg-zinc-700 h-screen"
      tabIndex={0}
      data-horizontal-scroll
    >
      <div ref={contentRef} className={isDesktop ? 'flex relative' : 'flex flex-col relative'}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
 
        <Footer />
      </div>
    </div>

  )
}

// Helper function for debouncing
function debounce(func, delay) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

export default App