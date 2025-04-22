import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Page2 = () => {
  const circleRef = useRef(null)
  const rotationTween = useRef(null)
  const lastScrollTime = useRef(Date.now())
  const lastScrollPos = useRef(0)
  const velocityRef = useRef(0)
  const animationFrameId = useRef(null)

  useEffect(() => {
    // Base rotation animation
    rotationTween.current = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 5, // Balanced base rotation speed
      ease: 'none',
      repeat: -1
    })

    rotationTween.current = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15, // Reduced from 15
      ease: 'none',
      repeat: -1
    })

    const updateRotation = () => {
      const container = document.querySelector('[data-horizontal-scroll]')
      if (!container) return

      const currentScroll = container.scrollLeft
      const currentTime = Date.now()
      const timeDelta = currentTime - lastScrollTime.current
      const scrollDelta = Math.abs(currentScroll - lastScrollPos.current)
      
      // More responsive velocity calculation
      const newVelocity = scrollDelta / Math.max(timeDelta, 8) // Reduced from 16
      velocityRef.current = gsap.utils.interpolate(
        velocityRef.current,
        Math.max(0, Math.min(3, newVelocity * 5)), // Increased multiplier
        0.2 // Reduced from 0.4 for faster response
      )
      
      // Quicker rotation update
      gsap.to(rotationTween.current, {
        timeScale: 1 + (velocityRef.current * 4),
        duration: 0.1, // Reduced from power1.out for instant response
        ease: 'none',
        overwrite: 'auto'
      })

      lastScrollTime.current = currentTime
      lastScrollPos.current = currentScroll
    }

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId.current)
      animationFrameId.current = requestAnimationFrame(updateRotation)
    }

    const container = document.querySelector('[data-horizontal-scroll]')
    container?.addEventListener('scroll', handleScroll, { passive: true })
    
    // Auto reset to base speed
    const resetInterval = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 50) { // Reduced from 100
        gsap.to(rotationTween.current, {
          timeScale: 1,
          duration: 0.3, // Reduced from 0.8
          ease: 'power1.out',
          overwrite: true
        })
      }
    }, 50)

    return () => {
      container?.removeEventListener('scroll', handleScroll)
      rotationTween.current?.kill()
      clearInterval(resetInterval)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <div className="flex-none w-screen min-h-screen bg-zinc-200 text-xl">
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10 justify-evenly w-full h-full py-10 lg:py-0 lg:h-screen">
        {/* Image Section */}
        <div className="w-full lg:w-[65vh] h-[40vh] lg:h-[65vh] lg:ml-[-18%] mb-8 lg:mb-0 z-[9]">
          <img
            className="w-full h-full object-cover"
            src="/Page-2/artist.png"
            alt="Artist"
          />
        </div>

        {/* Vertical Text Section */}
        <div className="text-4xl lg:text-7xl mb-8 lg:mb-0">
          <h1 className="lg:[writing-mode:vertical-rl] lg:rotate-180 lg:[text-orientation:mixed]">
            Marshall - Marshall
          </h1>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[35%] text-base lg:text-lg h-auto lg:h-[90%] px-4 lg:px-0">
          <h1>Artist: Suki | Toronto</h1>

          <div className="relative">
            <h1 className="text-2xl lg:text-4xl mt-3">
              Amplifying future icons in music
              <span className="absolute top-0 lg:-top-2 right-0 lg:-right-2 text-lg lg:text-3xl">
                02
              </span>
            </h1>
          </div>

          <p className="text-sm lg:text-lg mt-3">
            Inspired by the jazz music she grew up hearing, Suki used her first
            guitar to play covers before experimenting with her own sound.
            Writing songs in her bedroom, and then broadcasting on Soundcloud,
            Suki started sharing her songs without revealing her face, letting
            the music speak for itself.
          </p>

          <div className="flex relative flex-col lg:flex-row gap-3 lg:items-start items-center justify-between mt-5 gap-4">
            <button className="px-3 py-1 mt-5 bg-black text-white rounded-full w-full lg:w-auto text-center">
              Read More
            </button>

            <div   ref={circleRef} className="circle absolute top-1/4 left-1/2 w-54 h-54 bg-transparent border-1 border-zinc-900 rounded-full">
              <h4 className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0">
                2021
              </h4>
              <h4 className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 rotate-90">
                2021
              </h4>
              <h4 className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180">
                2021
              </h4>
              <h4 className="absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]">
                2021
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
