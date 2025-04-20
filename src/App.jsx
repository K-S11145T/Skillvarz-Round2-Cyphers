import React, { useRef, useEffect, useState } from 'react'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'

const App = () => {
  const scrollContainerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el || !isDesktop) return

    const handleScroll = (e) => {
      // For trackpad/touchpad horizontal scrolling
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        el.scrollLeft += e.deltaX
        e.preventDefault()
      }
      // For mouse wheel vertical scrolling (converted to horizontal)
      else if (Math.abs(e.deltaY) > 0) {
        el.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }

    const handleKeyDown = (e) => {
      const scrollAmount = 100; // Adjust this value as needed
      
      switch(e.key) {
        case 'ArrowLeft':
          el.scrollLeft -= scrollAmount;
          e.preventDefault();
          break;
        case 'ArrowRight':
          el.scrollLeft += scrollAmount;
          e.preventDefault();
          break;
        case 'PageUp':
          el.scrollLeft -= el.clientWidth;
          e.preventDefault();
          break;
        case 'PageDown':
          el.scrollLeft += el.clientWidth;
          e.preventDefault();
          break;
        case 'Home':
          el.scrollLeft = 0;
          e.preventDefault();
          break;
        case 'End':
          el.scrollLeft = el.scrollWidth;
          e.preventDefault();
          break;
      }
    }

    el.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      el.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDesktop])

  return (
    <div
      ref={scrollContainerRef}
      className={`w-screen h-screen scroll-smooth ${
        isDesktop
          ? 'overflow-x-auto overflow-y-hidden'
          : 'overflow-y-auto overflow-x-hidden flex-col'
      }`}
      tabIndex={0} // Important for keyboard focus
    >
      <div className={isDesktop ? 'flex' : 'flex flex-col'}>
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