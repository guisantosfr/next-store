"use client"

import { use, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const [sortBy, setSortBy] = useState("featured")

  // Mock category data - in real app, fetch based on params.slug
  const categoryData = {
    women: {
      name: "Women's Fashion",
      description: "Discover our curated collection of women's clothing and accessories",
      image: "/placeholder.svg?height=300&width=1200",
    },
    men: {
      name: "Men's Fashion",
      description: "Explore our premium men's clothing and accessories",
      image: "/placeholder.svg?height=300&width=1200",
    },
    accessories: {
      name: "Accessories",
      description: "Complete your look with our stylish accessories",
      image: "/placeholder.svg?height=300&width=1200",
    },
    shoes: {
      name: "Shoes",
      description: "Step out in style with our footwear collection",
      image: "/placeholder.svg?height=300&width=1200",
    },
  }

  const category = categoryData[resolvedParams.slug as keyof typeof categoryData] || categoryData.women

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 49.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "premium-cotton-t-shirt",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Designer Denim Jacket",
      price: 129.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "designer-denim-jacket",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Luxury Silk Scarf",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "luxury-silk-scarf",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Classic Leather Boots",
      price: 199.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "classic-leather-boots",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 5,
      name: "Elegant Evening Dress",
      price: 249.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "elegant-evening-dress",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 6,
      name: "Casual Sneakers",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "casual-sneakers",
      rating: 4.5,
      reviews: 312,
    },
  ]

  return (
    <div>
      {/* Category Hero */}
      <div className="relative h-64 lg:h-80 mb-8">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg lg:text-xl">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-gray-900">
            Categories
          </Link>
          <span>/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">{products.length} products found</p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
