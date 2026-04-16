import { client } from "../../lib/sanity";
import ProductsList from "../../components/products/ProductsList";
import CategoryTabs from "../../components/products/CategoryTabs";

// 🔹 Fetch products
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

// 🔹 Fetch categories (ADD THIS)
async function getCategories() {
  return await client.fetch(`
   *[_type == "category" && !(_id in path("drafts.**"))]{
  _id,
  name,
  slug
}
  `);
}

export default async function ProductsPage({ searchParams }: any) {
  const category = searchParams?.category;

  // 🔥 Fetch BOTH products + categories
  const [products, categories] = await Promise.all([
    getProducts(category),
    getCategories(),
  ]);

  return (
    <section className="section">
      <div className="container">

        <h1>Our Products</h1>

        {/* 🔥 Category Tabs */}
        <CategoryTabs
          categories={categories}
          activeCategory={category}
        />

        <ProductsList products={products} />

      </div>
    </section>
  );
}