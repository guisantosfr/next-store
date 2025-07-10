import ProductDetails from "@/components/product-details";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}`);
  const product = await productResponse.json();

  if(productResponse.status === 400 || !product){
    notFound()
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
} 