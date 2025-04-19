import React, { useRef, useEffect } from 'react'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'

const App = () => {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const el = scrollContainerRef.current

    const handleWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div
    ref={scrollContainerRef}
    className="w-screen h-screen overflow-x-auto overflow-y-hidden scroll-smooth"
  >
    <div className="flex">
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
