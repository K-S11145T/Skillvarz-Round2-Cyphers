import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'

const App = () => {
  const scrollContainerRef = useRef(null)
  const contentRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const tl = useRef(null)

  // Initialize GSAP animation only for desktop
  useEffect(() => {
    const container = scrollContainerRef.current
    const content = contentRef.current

    if (isDesktop) {
      // Desktop setup
      gsap.set(container, { overflowX: 'auto', overflowY: 'hidden' })
      gsap.set(content, { display: 'flex' })
      
      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out", duration: 1 }
      })
    } else {
      // Mobile setup
      gsap.set(container, { overflowX: 'hidden', overflowY: 'auto' })
      gsap.set(content, { display: 'flex', flexDirection: 'column' })
    }

    return () => {
      tl.current && tl.current.kill()
    }
  }, [isDesktop])

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 768
      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isDesktop])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el || !tl.current) return

    // Only add desktop scroll handlers if in desktop mode
    if (isDesktop) {
      const handleScroll = (e) => {
        e.preventDefault()
        const currentScroll = el.scrollLeft
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
        const target = currentScroll + delta * 1.8
        
        tl.current.progress(0).kill()
        gsap.to(el, {
          scrollLeft: target,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true
        })
      }

      const handleKeyDown = (e) => {
        const pageWidth = el.clientWidth
        const currentScroll = el.scrollLeft
        const maxScroll = el.scrollWidth - el.clientWidth

        switch(e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: Math.max(currentScroll - pageWidth * 0.33, 0),
              duration: 0.6,
              ease: "power2.out"
            })
            break
          case 'ArrowRight':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: Math.min(currentScroll + pageWidth * 0.33, maxScroll),
              duration: 0.6,
              ease: "power2.out"
            })
            break
          case 'PageUp':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: Math.max(currentScroll - pageWidth * 0.9, 0),
              duration: 0.8,
              ease: "power3.out"
            })
            break
          case 'PageDown':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: Math.min(currentScroll + pageWidth * 0.9, maxScroll),
              duration: 0.8,
              ease: "power3.out"
            })
            break
          case 'Home':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: 0,
              duration: 0.8,
              ease: "power3.out"
            })
            break
          case 'End':
            e.preventDefault()
            gsap.to(el, {
              scrollLeft: maxScroll,
              duration: 0.8,
              ease: "power3.out"
            })
            break
        }
      }

      el.addEventListener('wheel', handleScroll, { passive: false })
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        el.removeEventListener('wheel', handleScroll)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isDesktop])

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen"
      tabIndex={0}
    >
      <div ref={contentRef} className={isDesktop ? 'flex' : 'flex flex-col'}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </div>
  )
}

export default App