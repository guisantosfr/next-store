import ProductDetails from "@/components/product-details";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const productResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}`);
  const product = await productResponse.json();

  if (!product) {
    // Handle product not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
} 