"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

import { Filter } from "lucide-react"
import { Category } from "@/types/Category";

export default function ProductFilters({ minPrice, maxPrice }: { minPrice: number, maxPrice: number }) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
            const allCategories = await categoriesResponse.json();
            const categories: Category[] = allCategories.slice(0, 4);
            setCategories(categories);
        }

        fetchCategories()
    }, [])

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
                                value={selectedCategory?.slug}
                                onValueChange={(slug) => {
                                    const category = categories.find(c => c.slug === slug);
                                    if (category) setSelectedCategory(category);
                                }}
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
                        <Slider value={priceRange} onValueChange={setPriceRange} min={minPrice} max={maxPrice} step={1} className="mb-2" />
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