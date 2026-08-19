import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="product-card"
    >

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className="product-wishlist"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={(event) => event.preventDefault()}
        >
          ♡
        </button>

      </div>

      <div className="product-details">

        <div>
          <span className="product-category">
            {product.subcategory}
          </span>

          <h3>{product.name}</h3>
        </div>

        <strong>
          ₹{product.price.toLocaleString("en-IN")}
        </strong>

      </div>

    </Link>
  );
}

export default ProductCard;