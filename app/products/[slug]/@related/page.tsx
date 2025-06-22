import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function RelatedProducts() {
  const relatedProducts = [
    {
      id: 2,
      name: "Designer Denim Jacket",
      price: 129.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=300&width=250",
      slug: "designer-denim-jacket",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Luxury Silk Scarf",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=250",
      slug: "luxury-silk-scarf",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 5,
      name: "Elegant Evening Dress",
      price: 249.99,
      image: "/placeholder.svg?height=300&width=250",
      slug: "elegant-evening-dress",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 6,
      name: "Casual Sneakers",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=250",
      slug: "casual-sneakers",
      rating: 4.5,
      reviews: 312,
    },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
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
  )
}
