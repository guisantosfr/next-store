"use client"

import { useState } from 'react'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderImages = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1400&lazy=load",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1400&lazy=load",
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1400&lazy=load",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderImages.length - 1 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderImages.length - 1 ? 0 : (prev) => prev + 1)
  }

  return (
    <section className="slider h-[calc(100vh-80px)] w-screen relative overflow-hidden">
      <div className="slider-container w-[300vw] flex transition-all duration-1000" style={{
        transform: `translateX(-${currentSlide * 100}vw)`
      }}>
        {sliderImages.map((image, index) =>
          <img src={image} key={index} alt="Slider image" className="w-screen" />)}
      </div>

      <div className="icons absolute inset-x-0 bottom-24 m-auto w-fit flex gap-3">
        <div className="icon w-[50px] h-[50px] flex items-center justify-center
        border border-solid border-[#999] cursor-pointer" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>

        <div className="icon w-[50px] h-[50px] flex items-center justify-center
        border border-solid border-[#999] cursor-pointer" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </section>
  )
}