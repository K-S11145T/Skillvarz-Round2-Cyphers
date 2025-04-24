import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const Page5 = () => {
  return (
    <div className="flex-none w-screen h-screen text-white text-xl">
    <div className="relative flex items-top justify-start w-full h-screen flex flex-col">
      {/* Details container */}
      <div className='Card-containter w-[30%] h-[80%] bg-[#EDEDED]'>
        <div className='text-black font-[Saans] text-sm lg:text-xl mt-40 ml-10'>
          <span className='text-[#A29C9C] mr-1'>Product |</span>
          <span>Speakers</span>

          <div className='w-full h-20 flex items-start justify-between mt-16'>
            <h1 className='text-5xl font-[Aux-Mono]'>ACTION-III</h1>
            <h3 className='text-3xl font-[Silk-Serif-Light-Italic] mr-8'>4.9 Stars</h3>
          </div>

          <div className='w-full h-90'>
            <h4 className='font-[Saans] text-[#A29C9C] w-[75%] leading-10'>Marshall ACTION-III combines classic rock-inspired design with bold sound performance. Experience deep bass, clear highs, and seamless Bluetooth 5.2 connectivity in a compact, stylish speaker.</h4>
            <div className='flex justify-between w-[26%] mt-16'>
              <div className='circle-1 h-10 w-10 rounded-full bg-[#060606]'></div>
              <div className='circle-2 h-10 w-10 rounded-full bg-[#824820]'></div>
              <div className='circle-3 h-10 w-10 rounded-full bg-[#E8E0D5]'></div>
            </div>
            <div className='Readmore font-[Aux-Mono] h-14 w-50 bg-[#383838] rounded-full flex items-center justify-center text-[#EDEDED] mt-10'>Read more</div>
          </div>

          <div className='delivery-container w-full h-70 pr-8 flex items-end justify-end flex-col'>  
            <div className='w-full h-12 flex items-center justify-between border-b-2 border-[#A29C9C]'>
              <h2>Delivery Time</h2>
              <h2 className='text-[#A29C9C]'>4-7 days</h2>
            </div>
            <div className='w-full h-12 flex items-center justify-between'>
              <h2>Returns, Warranty & Payments</h2>
              <span className='text-[#A29C9C]'>< SlArrowRight /></span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom container */}
      <div className='BottomContainer w-[70%] h-[20%] absolute right-0 bottom-0 flex'>
        <div className='Price w-[50%] bg-[#1E1E1E] text-[8vw] flex -center justify-center h-full font-[Silk-Serif-Light-Italic]'>$2999.</div>
        <div className='ProductNames w-[50%] h-full p-2'>
          <div className='justify-between flex h-18 items-center border-b-2 border-[#FFFFFF]'>
            <h1 className='text-3xl font-[Montserrat]'>ACTION-III</h1>
            <h3 className='text-3xl font-[Silk-Serif-Light-Italic]'>01</h3>
          </div>
          <div className='justify-between flex h-18 items-center border-b-2 border-[#FFFFFF]'>
            <h1 className='text-3xl font-[Montserrat]'>Major V.</h1>
            <h3 className='text-3xl font-[Silk-Serif-Light-Italic]'>02</h3>
          </div>
          <div className='justify-between flex h-18 items-center border-b-2 border-[#FFFFFF]'>
            <h1 className='text-3xl font-[Montserrat]'>Motif 2</h1>
            <h3 className='text-3xl font-[Silk-Serif-Light-Italic]'>03</h3>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Page5