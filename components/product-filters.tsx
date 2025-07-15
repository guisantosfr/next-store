"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Filter } from "lucide-react"
import { Category } from "@/types/Category";

export default function ProductFilters() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [categories, setCategories] = useState<Category[]>([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
            const allCategories = await categoriesResponse.json();
            const categories: Category[] = allCategories.slice(0, 4);
            setCategories(categories);
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (priceRange[0] !== 0 || priceRange[1] !== 100) {
            params.set('price_min', priceRange[0].toString());
            params.set('price_max', priceRange[1].toString());
          } else {
            params.delete('price_min');
            params.delete('price_max');
          }
      
          router.replace(`/products?${params.toString()}`);
    }, [priceRange])

    const handleSelectCategory = (slug: string) => {  
        const params = new URLSearchParams(searchParams);
        
        if(slug) {
            params.set('categorySlug', slug);
        } else{
            params.delete('categorySlug');
        }

        router.replace(`${pathname}?${params.toString()}`);
        setSelectedCategory(slug);
    }

    return (
        <div className="lg:col-span-1">
            <Card>
                <CardContent className="px-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Filter className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Filters</h2>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Categories</h3>
                        <div className="space-y-2">
                            <RadioGroup
                                value={selectedCategory}
                                onValueChange={handleSelectCategory}
                            >
                                {categories.map((category) => (
                                    <div key={category.id} className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            id={category.slug}
                                            value={category.slug}
                                        />
                                        <Label htmlFor={category.slug} className="text-sm">
                                            {category.name}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>

                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Price Range</h3>
                        <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={100} step={1} className="mb-2" />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>

                    <Button className="w-full" variant="outline">
                        Clear Filters
                    </Button>
                </CardContent>
            </Card>
        </div>
    )

}