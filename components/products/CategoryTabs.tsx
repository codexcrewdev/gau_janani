import Link from "next/link";

export default function CategoryTabs({ categories, activeCategory }: any) {
  return (
    <div className="category-tabs">

      <Link
        href="/products"
        className={!activeCategory ? "active" : ""}
      >
        All
      </Link>

      {categories.map((cat: any) => (
        <Link
          key={cat._id}
          href={`/products?category=${cat.slug.current}`}
          className={activeCategory === cat.slug.current ? "active" : ""}
        >
          {cat.name}
        </Link>
      ))}

    </div>
  );
}