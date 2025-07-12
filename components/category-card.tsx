import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Category } from "@/types/Category";

export default function CategoryCard({ category }: { category: Category }) {
    return (
        <Link href={`/categories/${category.slug}`}>
            <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow py-2">
                <CardContent className="p-0">
                    <div className="relative aspect-square">
                        <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}