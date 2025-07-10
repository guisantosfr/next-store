'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Home, Search, ArrowLeft, Package } from "lucide-react"

export default function CategoryNotFound() {
  const availableCategories = [
    { name: "Clothing", slug: "clothing", description: "Comfortable and stylish clothing" },
    { name: "Electronics", slug: "electronics", description: "Latest tech gadgets and devices" },
    { name: "Furniture", slug: "furniture", description: "Quality furniture for your home" },
    { name: "Shoes", slug: "shoes", description: "Footwear for every occasion" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <Package className="h-24 w-24 mx-auto text-gray-400" />
          <h1 className="text-4xl font-bold text-gray-900">Category Not Found</h1>
          <p className="text-xl text-gray-600">
            Sorry, we couldn't find the category you're looking for. It might have been moved, renamed, or doesn't
            exist.
          </p>
        </div>

        {/* Available Categories */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Browse Our Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableCategories.map((category) => (
              <Card key={category.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Link href={`/categories/${category.slug}`} className="block">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 hover:text-blue-800">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/products">
              <Search className="mr-2 h-4 w-4" />
              Browse All Products
            </Link>
          </Button>
          {/* <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button> */}
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Still can't find what you're looking for?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
