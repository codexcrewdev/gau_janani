import Link from "next/link";

export default function CategoryTabs({ categories, activeCategory }: any) {
  const current = activeCategory || ""; // normalize

  return (
    <div className="category-tabs">

      {/* ALL TAB */}
      <Link
        href="/products"
        className={current === "" ? "active" : ""}
      >
        All
      </Link>

      {/* CATEGORY TABS */}
      {categories.map((cat: any) => {
        const slug = cat.slug?.current || "";

        const isActive = current === slug;

        return (
          <Link
            key={cat._id}
            href={`/products?category=${slug}`}
            className={isActive ? "active" : ""}
          >
            {cat.name}
          </Link>
        );
      })}

    </div>
  );
}