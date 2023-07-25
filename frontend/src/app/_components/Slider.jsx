"use client"

import { useState } from 'react'
import image1 from '../_assets/image1.jpg'
import image2 from '../_assets/image2.jpg'
import image3 from '../_assets/image3.jpg'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderImages = [image1, image2, image3];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderImages.length - 1 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderImages.length - 1 ? 0 : (prev) => prev + 1)
  }

  return (
    <section className="slider h-[calc(100vh-80px)] w-screen relative overflow-hidden">
      <div className="slider-container w-[300vw] h-full flex transition-all duration-1000" style={{
        transform: `translateX(-${currentSlide * 100}vw)`
      }}>
        {sliderImages.map(image =>
          <img src={image.src} key={image.src} alt="Slider image" className="w-screen h-full" />)}
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