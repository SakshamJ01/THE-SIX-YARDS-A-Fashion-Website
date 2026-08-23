import { Link } from "react-router-dom";
import { useWishlist } from "../context/useWishlist";
import "./ProductCard.css";
import { ImageWithSkeleton } from "../components/withSkeleton";

function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="product-card"
    >

      <div className="product-image">

        <ImageWithSkeleton
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <button
          className="product-wishlist"
          aria-label={`${wishlisted ? "Remove" : "Add"} ${product.name} ${wishlisted ? "from" : "to"} wishlist`}
          aria-pressed={wishlisted}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleWishlist(product);
          }}
        >
          {wishlisted ? "♥" : "♡"}
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