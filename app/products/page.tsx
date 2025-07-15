import { Suspense } from "react";
import ProductFilters from "@/components/product-filters"
import { Product } from "@/types/Product"
import ProductCard from "@/components/product-card"
import { notFound } from "next/navigation";

interface SearchParams {
  title?: string;
  price_min?: string;
  price_max?: string;
  categorySlug?: string;
}

export default async function ProductsPage({ searchParams }: { searchParams: Promise<SearchParams>}) {
  const resolvedSearchParams = await searchParams;
  
  const params = new URLSearchParams();

  const { title, price_min, price_max, categorySlug } = resolvedSearchParams;

  console.log(categorySlug)

  if (title) {
    params.set('title', title);
  }

  if (price_min) {
    params.set('price_min', price_min);
  }

  if (price_max) {
    params.set('price_max', price_max);
  }

  if(categorySlug){
    params.set('categorySlug', categorySlug);
  }

  const queryString = params.toString();

  const endpoint = queryString.length > 0
    ? `${process.env.NEXT_PUBLIC_API_URL}/products?${queryString}`
    : `${process.env.NEXT_PUBLIC_API_URL}/products`;

  const response = await fetch(endpoint, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    return notFound();
  }

  const products: Product[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600">Discover our complete collection of quality products across all categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading Filters...</div>}>
          <ProductFilters />
        </Suspense>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}