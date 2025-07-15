import ProductFilters from "@/components/product-filters"
import { Product } from "@/types/Product"
import ProductCard from "@/components/product-card"
import { notFound } from "next/navigation";

export default async function ProductsPage({ searchParams }: { searchParams: { title?: string, price_min?: string, price_max?: string, categorySlug?: string } }) {
  const params = new URLSearchParams();

  const search = searchParams.title || '';
  const priceMin = searchParams.price_min || '';
  const priceMax = searchParams.price_max || '';
  const categorySlug = searchParams.categorySlug || '';

  if (search.length > 0) {
    params.set('title', search);
  }

  if (priceMin) {
    params.set('price_min', priceMin);
  }

  if (priceMax) {
    params.set('price_max', priceMax);
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}