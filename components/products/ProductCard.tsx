import "./products.css";

export default function ProductCard({ product }: any) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image?.asset?.url} alt={product.name} />
      </div>

      <div className="product-content">

        <h3>{product.name}</h3>

        <p className="price">₹{product.price}</p>

        <div className="product-actions">
          <a href={`/products/${product.slug.current}`} className="view-btn">
            View Details
          </a>

          <a
            href={`https://wa.me/91XXXXXXXXXX?text=Hi I want ${product.name}`}
            target="_blank"
            className="whatsapp-btn"
          >
            Order
          </a>
        </div>

      </div>

    </div>
  );
}