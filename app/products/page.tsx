import { client } from "../../lib/sanity";
import ProductsList from "../../components/products/ProductsList";

async function getProducts() {
  return await client.fetch(`
    *[_type == "product"]{
      _id,
      name,
      slug,
      price,
      image{
        asset->{url}
      }
    }
  `);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="section">
      <div className="container">

        <h1>Our Products</h1>

        <ProductsList products={products} />

      </div>
    </section>
  );
}