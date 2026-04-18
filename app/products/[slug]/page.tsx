import { client } from "../../../lib/sanity";

import ProductDetails from "../../../components/products/ProductDetails";

async function getProduct(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      description,
      ingredients,
      image{
        asset->{url}
      }
    }`,
    { slug }
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 🔥 THIS IS THE FIX
  const { slug } = await params;


  if (!slug) return <div>No slug found</div>;

  const product = await getProduct(slug);

  if (!product) return <div>Product not found</div>;

  return (
    <section className="section">
      <div className="container">
        <ProductDetails product={product} />
      </div>
    </section>
  );
}