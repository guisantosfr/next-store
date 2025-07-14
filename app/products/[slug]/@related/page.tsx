import { Product } from "@/types/Product"
import { notFound } from "next/navigation"
import ProductCard from "@/components/product-card"

export default async function RelatedProducts({ params }: { params: { slug: string } }) {  
  const { slug } = await params

  const relatedProductsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}/related`);
  const allRelatedProducts: Product[] = await relatedProductsResponse.json();
  const relatedProducts = allRelatedProducts.sort(() => 0.5 - Math.random()).slice(0, 4);

  if(relatedProductsResponse.status === 400){
    notFound()
  }

  return (
    <div className="my-16 w-5/6 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
