"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Link from "next/link"
import { Star, Filter } from "lucide-react"

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 49.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "premium-cotton-t-shirt",
      category: "Tops",
      rating: 4.8,
      reviews: 124,
      colors: ["Black", "White", "Navy"],
    },
    {
      id: 2,
      name: "Designer Denim Jacket",
      price: 129.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "designer-denim-jacket",
      category: "Outerwear",
      rating: 4.9,
      reviews: 89,
      colors: ["Blue", "Black"],
    },
    {
      id: 3,
      name: "Luxury Silk Scarf",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "luxury-silk-scarf",
      category: "Accessories",
      rating: 4.7,
      reviews: 156,
      colors: ["Red", "Blue", "Gold"],
    },
    {
      id: 4,
      name: "Classic Leather Boots",
      price: 199.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "classic-leather-boots",
      category: "Shoes",
      rating: 4.9,
      reviews: 203,
      colors: ["Brown", "Black"],
    },
    {
      id: 5,
      name: "Elegant Evening Dress",
      price: 249.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "elegant-evening-dress",
      category: "Dresses",
      rating: 4.6,
      reviews: 78,
      colors: ["Black", "Navy", "Burgundy"],
    },
    {
      id: 6,
      name: "Casual Sneakers",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      slug: "casual-sneakers",
      category: "Shoes",
      rating: 4.5,
      reviews: 312,
      colors: ["White", "Black", "Gray"],
    },
  ]

  const categories = ["Tops", "Outerwear", "Accessories", "Shoes", "Dresses"]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600">Discover our complete collection of quality products across all categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
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
    </div>
  )
}
