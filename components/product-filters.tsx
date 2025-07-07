"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

import { Filter } from "lucide-react"


export default function ProductFilters() {
    const [priceRange, setPriceRange] = useState([0, 500])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const categories = ["Tops", "Outerwear", "Accessories", "Shoes", "Dresses"]

    const handleCategoryChange = (category: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category])
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
        }
    }

    return (
        <div className="lg:col-span-1">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Filter className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Filters</h2>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Categories</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={category}
                                        checked={selectedCategories.includes(category)}
                                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                                    />
                                    <Label htmlFor={category} className="text-sm">
                                        {category}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Price Range</h3>
                        <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-2" />
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