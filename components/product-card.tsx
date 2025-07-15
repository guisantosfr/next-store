import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Product } from "@/types/Product";
import { Badge } from "./ui/badge";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="group cursor-pointer hover:shadow-lg transition-shadow py-0">
            <CardContent className="p-0">
                <Link href={`/products/${product.slug}`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                        <Image
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.description}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                            
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.price && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                        <span className="text-lg font-bold">${product.price}</span>
                    </div>
                </Link>
            </CardContent>
        </Card>
    )
}