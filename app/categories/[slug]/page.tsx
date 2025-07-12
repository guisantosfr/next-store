import Image from "next/image"
import Link from "next/link"
import { Category } from "@/types/Category"
import { Product } from "@/types/Product"
import { notFound } from "next/navigation"
import ProductCard from "@/components/product-card"

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
            <ProductCard key={product.id} product={product} />
          ))
          }
        </div>
      </div>
    </div>
  )
}
