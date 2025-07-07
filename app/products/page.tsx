import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import ProductFilters from "@/components/product-filters"
import { Product } from "@/types/Product"

export default async function ProductsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?offset=0&limit=12`, {
    next: { revalidate: 60}
  });

  const products: Product[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600">Discover our complete collection of quality products across all categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <ProductFilters />

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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
                
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold">${product.price}</span>
                        {product.price && (
                          <span className="text-sm text-gray-500 line-through">${product.price}</span>
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