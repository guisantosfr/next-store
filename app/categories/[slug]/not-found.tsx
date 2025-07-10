
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Home, Search, ArrowLeft, Package, Filter } from "lucide-react"
import { Category } from "@/types/Category";

export default async function CategorySlugNotFound() {
  const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const allCategories = await categoriesResponse.json();
  const availableCategories: Category[] = allCategories.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <Filter className="h-24 w-24 mx-auto text-gray-400" />
            <h1 className="text-4xl font-bold text-gray-900">Category Not Available</h1>
            <p className="text-xl text-gray-600">
              The category you're looking for doesn't exist or may have been moved. Let's help you find what you need!
            </p>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <span className="hover:text-gray-900">
              Categories
            </span>
            <span>/</span>
            <span className="text-gray-400">Unknown Category</span>
          </nav>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/products">
                <Search className="mr-2 h-4 w-4" />
                Browse All Products
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Available Categories */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore Our Categories</h2>
            <p className="text-gray-600">Find exactly what you're looking for in our organized categories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableCategories.map((category) => (
              <Card key={category.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Link href={`/categories/${category.slug}`} className="block">
                    <div className="mb-4">
                      <Package className="h-12 w-12 mx-auto text-blue-600 group-hover:text-blue-800 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8">
          <div className="text-sm text-gray-500">
            <p>
              Still need help?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact our support team
              </Link>{" "}
              or check our{" "}
              <Link href="/help" className="text-blue-600 hover:underline">
                help center
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
