import { client } from "../../lib/sanity";
import ProductsList from "../../components/products/ProductsList";

async function getProducts(category?: string) {
  if (category) {
    return await client.fetch(
      `*[_type == "product" && category._ref in *[_type=="category" && slug.current==$category]._id]{
        _id,
        name,
        slug,
        price,
        image{
          asset->{url}
        }
      }`,
      { category }
    );
  }

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

export default async function ProductsPage({ searchParams }: any) {
  const category = searchParams?.category;

  const products = await getProducts(category);

  return (
    <section className="section">
      <div className="container">

        <h1>Our Products</h1>

        {category && (
          <p className="active-filter">
            Showing: {category}
          </p>
        )}

        <ProductsList products={products} />

      </div>
    </section>
  );
}