import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react"

export default function Home() {
  const featuredProducts = [
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
  ]

  const categories = [
    { name: "Women", slug: "women", image: "/placeholder.svg?height=300&width=300" },
    { name: "Men", slug: "men", image: "/placeholder.svg?height=300&width=300" },
    { name: "Accessories", slug: "accessories", image: "/placeholder.svg?height=300&width=300" },
    { name: "Shoes", slug: "shoes", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Discover Your Perfect Style</h1>
            <p className="text-xl mb-8 text-gray-300">
              Explore our curated collection of premium fashion and accessories. From timeless classics to the latest
              trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/categories/women">Women's Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button asChild variant="outline">
              <Link href="/products">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe with us</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy on all items</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
