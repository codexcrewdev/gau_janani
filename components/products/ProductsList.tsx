import ProductCard from "./ProductCard";

export default function ProductsList({ products }: any) {
  return (
    <div className="products-grid">
      {products.map((p: any) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}