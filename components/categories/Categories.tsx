import { client } from "../../lib/sanity";
import Link from "next/link";
import "./categories.css";

async function getCategories() {
  return await client.fetch(`
    *[_type == "category"]{
      _id,
      name,
      slug,
      image{
        asset->{url}
      }
    }
  `);
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="categories section">
      <div className="container">

        <h2 className="categories-heading">Shop by Category</h2>

        <div className="categories-grid">
          {categories.map((cat: any) => (
            
            <Link
              key={cat._id}
              href={`/products?category=${cat.slug?.current}`}
              className="category-card"
            >
              <img src={cat.image?.asset?.url} alt={cat.name} />
              <h3>{cat.name}</h3>
            </Link>

          ))}
        </div>

      </div>
    </section>
  );
}