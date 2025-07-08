import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Product } from "@/types/Product"

export default async function RelatedProducts({ params }: { params: { slug: string } }) {  
  const { slug } = params

  const relatedProductsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}/related`);
  const relatedProducts: Product[] = await relatedProductsResponse.json();

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
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.price && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
            
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.price}</span>
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
