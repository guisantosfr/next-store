import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Home, ShoppingBag, AlertCircle } from "lucide-react"
import { Product } from "@/types/Product"

export default async function ProductSlugNotFound() {
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?offset=0&limit=12`, {
    next: { revalidate: 60}
  });
  const relatedProducts: Product[] = await response.json();

  console.log(relatedProducts)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-400">Product Not Found</span>
        </nav>

        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <AlertCircle className="h-24 w-24 mx-auto text-orange-400" />
            <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
            <p className="text-xl text-gray-600">
              We couldn't find the product you're looking for. It may have been discontinued, moved, or the link might
              be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Browse All Products
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            {/* <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button> */}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Products</h2>
            <p className="text-gray-600">Check out these trending items instead</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.price && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category.name}
                      </Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                      
                      
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Need Help Finding Something?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our support team is here to help you find exactly what you're looking for.
              </p>
              <div className="flex gap-2">
                <Button asChild className="flex-1 bg-transparent" variant="outline">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild className="flex-1 bg-transparent" variant="outline">
                  <Link href="/help">Help Center</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-8">
          <div className="text-sm text-gray-500">
            <p>
              You can also try{" "}
              <Link href="/categories/clothing" className="text-blue-600 hover:underline">
                browsing by category
              </Link>{" "}
              or{" "}
              <Link href="/products?sort=newest" className="text-blue-600 hover:underline">
                checking our latest arrivals
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
