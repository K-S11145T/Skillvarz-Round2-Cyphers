import React from 'react'
import BlurText from '../Animations/BlurText'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useState } from 'react'

const products = [
  { name: "Monitor 3", image: "./public/Page-3/legacy.jpg" },
  { name: "Major V.", image: "./public/Page-3/homeImg2.jpg" },
  { name: "Motif 2", image: "./public/Page-3/legacy.jpg" },
  { name: "Minor 4", image: "./public/Page-3/homeImg2.jpg" },
  { name: "Motif Black 3", image: "./public/Page-3/legacy.jpg" },
  { name: "Mode EQ", image: "./public/Page-3/homeImg2.jpg" },
  { name: "Amps", image: "./public/Page-3/legacy.jpg" },
  { name: "Solid Mars Drums", image: "./public/Page-3/homeImg2.jpg" },
  { name: "Marshall Speakers", image: "./public/Page-3/legacy.jpg" },
];

const Page3 = () => {
  
  const [currentImage, setCurrentImage] = useState(products[0].image);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  const handleMouseEnter = (newImage, index) => {
    if (newImage === currentImage) return;

    gsap.fromTo(
      imageRef.current,
      { x: '-100%', opacity: 0 }, // Start position (off-screen to the left)
      {
        x: '0%', // End position (centered)
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          // Fade out and scale down the current image
          gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            ease: 'power2.inOut',
            onComplete: () => {
              setCurrentImage(newImage);
              // Fade in and scale up the new image
              gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              });
            },
          });
        },
      }
    );

    // Animate text elements
    gsap.to(".product-item", {
      opacity: 0.6,
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(`.product-item:nth-child(${index + 1})`, {
      opacity: 1,
      x: 10,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".product-item", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
  <div className="flex-none w-[100vw] h-screen bg-[#EDEDED] text-white text-xl">
    <div className="flex items-center justify-center w-full h-screen ">
      {/* column 1 - card */}
      <div className='h-screen w-[33vw] flex justify-center items-center '>
        <div className='h-[80%] w-[1px] bg-[#989898] rounded-lg mr-9'></div>
        <div className='h-[80%] w-[90%]'>
          <div className='h-[50%] w-full '>
            <div className='h-[60%] flex justify-start items-end'>
              <h1 className='w-[84%] font-[Aux-Mono] text-[5vh] text-[#1E1E1E]'>
              <BlurText
                text="Marshall signature sound"
                animateBy="words"
                direction="bottom"
                delay={0.15}
              />
              </h1>
              <h3 className='font-[Silk-Serif-Light-Italic] text-[#1E1E1E] text-[5vh] mb-[7vh]'>03</h3>
            </div>
            <p className='font-[Saans] text-[1.5vh] text-[#A29C9C] pt-[3%] pb-[4%] w-[80%]'>Signature sound that delivers clarity, depth, and pure audio power. Experience every beat like never before. Buy Now.</p>
            <button className='font-[Aux-Mono] text-[2vh] bg-[#383838] px-[2vw] py-[1vh] rounded-full cursor-pointer'>Buy Now</button>
          </div>
          <div className='h-[50%] w-full flex justify-start items-end'>
            <div className='h-[90%] w-[70%]'>
            <img src="./public/page-3/homeImg2.jpg" alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      {/* column 2 - Buttons */}
      <div className='h-screen w-[33vw] flex justify-center items-center '>
        <div className='h-[80%] w-[1px] bg-[#989898] rounded-lg mr-9'></div>
        <div className='h-[80%] w-[90%] flex justify-between items-center'>
          <div className='h-[70%] w-[60%] group'>
            
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-item relative"
              onMouseEnter={() => handleMouseEnter(product.image, index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="font-[Silk-Serif-Light] text-[4vh] leading-none text-black cursor-pointer hover:pl-[3vh] hover:text-black transition-all duration-300 group-hover:text-gray-300 transition-all duration-300">
                
                {product.name}
              </h3>
            </div>
          ))}
          </div>
          <div className=''>
            <h4 className='font-[Saans] text-black pr-[2vw] text-[2vh]'>Products</h4>
          </div>
        </div>
      </div>
      {/* column 3 - Images*/}
      <div className='h-screen w-[33vw] flex justify-start items-center '>
        <div className='h-screen w-[90%] relative overflow-hidden flex items-center justify-center'>
        <img
            ref={imageRef}
            src={currentImage}
            alt="Product"
            className=" w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page3