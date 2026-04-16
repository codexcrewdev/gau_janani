export default function ProductDetails({ product }: any) {
  return (
    <div className="product-details">

      {/* IMAGE */}
      <div className="product-details-image">
        <img src={product.image?.asset?.url} alt={product.name} />
      </div>

      {/* CONTENT */}
      <div className="product-details-content">

        <h1>{product.name}</h1>

        <p className="price">₹{product.price}</p>

        <p className="description">{product.description}</p>

        {/* INGREDIENTS */}
        {product.ingredients && product.ingredients.length > 0 && (
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {product.ingredients.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <a
          href={`https://wa.me/91XXXXXXXXXX?text=Hi I want to order ${product.name}`}
          target="_blank"
          className="whatsapp-btn"
        >
          Order on WhatsApp
        </a>

      </div>

    </div>
  );
}