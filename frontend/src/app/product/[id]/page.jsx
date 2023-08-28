'use client'
import { useState } from "react"

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"

import Navbar from "../../_components/Navbar"
import Footer from "../../_components/Footer"

export default function Product({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/10026492/pexels-photo-10026492.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  ]

  return (
    <>
      <Navbar />
      <main className="product px-5 py-12 flex gap-12">
        <div className="left flex flex-1 gap-5">
          <div className="images flex-1">
            <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} className="w-full h-36 cursor-pointer mb-3" />
            <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} className="w-full h-36 cursor-pointer mb-3" />
          </div>

          <div className="mainImg flex-[5] cursor-pointer">
            <img src={images[selectedImage]} alt="" className="w-full max-h-[800px]" />
          </div>
        </div>

        <div className="right flex flex-1 flex-col gap-8">
          <h1>Title</h1>
          <span className="price text-3xl text-[#2879fe] font-medium">$199</span>
          <p className="text-lg font-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quis aspernatur modi ex suscipit consectetur, esse magnam voluptatum doloribus adipisci eos laboriosam voluptas minus eligendi earum, assumenda nesciunt, incidunt possimus?</p>

          <div className="quantity flex items-center gap-3">
            <button className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-300 mr-3 rounded-lg" onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button className="w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-300 ml-3 rounded-lg" onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>

          <button className="addButton uppercase w-64 p-3 bg-[#2879fe] text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium">
            <AddShoppingCartIcon /> Add to cart
          </button>

          <div className="links flex gap-5">
            <div className="item uppercase flex items-center gap-3 text-[#2879fe] text-sm">
              <FavoriteBorderIcon /> Add to Wishlist
            </div>
            <div className="item uppercase flex items-center gap-3 text-[#2879fe] text-sm">
              <BalanceIcon /> Add to compare
            </div>
          </div>

          <div className="info flex flex-col gap-3 text-gray-500 text-sm mt-8">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>

          <hr className="border-solid border-spacing-[1px] border-gray-400" />

          <div className="details flex flex-col gap-3 text-gray-500 text-sm mt-8">
            <span className="uppercase">Description</span>
            <hr className="w-52 border-solid border-spacing-[1px] border-gray-400" />
            <span className="uppercase">Additional information</span>
            <hr className="w-52 border-solid border-spacing-[1px] border-gray-400" />
            <span className="uppercase">Faq</span>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}