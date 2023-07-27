'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'

import Navbar from "../../_components/Navbar"
import Footer from "../../_components/Footer"
import ProductsList from "@/app/_components/ProductsList"

export default function Products() {
  const categoryId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <>
      <Navbar />

      <section className="products py-8 px-12 flex">
        <div className="left flex-1 sticky h-full top-12">
          <div className="filter mb-8">
            <h2 className="font-semibold text-xl mb-3">Product Categories</h2>

            <div className="input mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className="ml-3" htmlFor="1">Shoes</label>
            </div>
            <div className="input mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className="ml-3" htmlFor="2">Skirts</label>
            </div>
            <div className="input mb-3">
              <input type="checkbox" id="3" value={3} />
              <label className="ml-3" htmlFor="3">Coats</label>
            </div>
          </div>

          <div className="filter">
            <h2 className="font-semibold text-xl mb-3">Filter by price</h2>

            <div className="input mb-3">
              <span className="mr-3">0</span>
              <input type="range" min={0} max={1000} defaultValue={1000} onChange={e => setMaxPrice(e.target.value)} />
              <span className="ml-3">{maxPrice}</span>

            </div>
          </div>

          <div className="filter">
            <h2 className="font-semibold text-xl mb-3">Sort by</h2>

            <div className="input mb-3">
              <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort("asc")} />
              <label className="ml-3" htmlFor="asc">Price (Lowest first)</label>
            </div>

            <div className="input mb-3">
              <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort("desc")} />
              <label className="ml-3" htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>

        <div className="right flex-[3]">
          <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Category image"
            className="categoryImg w-full h-80 mb-12" />

          <ProductsList categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
        </div>

      </section>

      <Footer />
    </>
  )
}