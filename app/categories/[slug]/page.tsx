import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Category } from "@/types/Category"
import { Product } from "@/types/Product"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/slug/${slug}`);
  const category: Category = await categoryResponse.json();

  const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${category.id}/products`);
  const products: Product[] = await productsResponse.json();

  if(categoryResponse.status === 400 || productsResponse.status === 400) {
    notFound()
  }

  return (
    <div>
      {/* Category Hero */}
      <div className="relative h-64 lg:h-80 mb-8">
        <Image src={category.image || "/placeholder.svg"} alt={category.name || "Category Image"} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{category.name}</h1>
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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
          products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow py-0">
              <CardContent className="p-0">
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title || 'Product Image'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.price && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                  
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.price && (
                        <span className="text-sm text-gray-500 line-through">${product.price}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))
          }
        </div>
      </div>
    </div>
  )
}
