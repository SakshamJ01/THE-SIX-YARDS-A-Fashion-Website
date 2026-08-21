import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductPage.css";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function ProductPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
 const { addToCart } = useCart();
 const { isWishlisted, toggleWishlist } = useWishlist();
const navigate = useNavigate();
  const product = products.find((item) => item.slug === productId);
  const collectionPath = product
    ? {
        "Women's Wear": "/collections/womens-wear",
        "Men's Wear": "/collections/mens-wear",
        "Special Collections": "/collections/special-collections",
      }[product.category]
    : "/collections";
  const relatedProducts = product
    ? products.filter(
        (item) => item.category === product.category && item.id !== product.id
      ).slice(0, 3)
    : [];

  const addProductToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  // If product doesn't exist
  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/">
          ← BACK TO HOME
        </Link>
        <Link to={collectionPath}>
          Back to collection
        </Link>
      </div>
    );
  }

  return (
    <main className="product-page">

      {/* BACK LINK */}
      <div className="product-back">
        <Link to={collectionPath}>
          ← Back to collection
        </Link>
        <Link to="/">HOME</Link>
      </div>


      {/* PRODUCT */}
      <section className="product-detail">

        {/* IMAGE */}
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="eager"
            fetchPriority="high"
          />
        </div>


        {/* INFORMATION */}
        <div className="product-info">

          <Link
            to={collectionPath}
            className="product-category product-category-link"
          >
            {product.category} / {product.subcategory}
          </Link>

          <h1>{product.name}</h1>

          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="product-description">
            {product.description}
          </p>


          <div className="product-details">
            <span>DETAILS</span>

            <p>
              {product.details}
            </p>
          </div>


          {/* QUANTITY */}
          <div className="quantity-selector">

            <span>QUANTITY</span>

            <div className="quantity-controls">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>


          {/* ACTIONS */}
          <div className="product-actions">

          <button className="add-to-bag" onClick={addProductToCart}>
  ADD TO BAG
</button>

            <button className="buy-now" onClick={addProductToCart}>
              BUY NOW
            </button>

            <button
              className={`product-wishlist-button ${isWishlisted(product.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
              aria-label={`${isWishlisted(product.id) ? "Remove" : "Add"} ${product.name} ${isWishlisted(product.id) ? "from" : "to"} wishlist`}
              aria-pressed={isWishlisted(product.id)}
            >
              {isWishlisted(product.id) ? "♥" : "♡"}
            </button>

          </div>


          <p className="product-note">
            Crafted with care. Made to be worn and remembered.
          </p>

        </div>

      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="related-products-heading">
            <span>MORE FROM {product.category.toUpperCase()}</span>
            <h2>Continue exploring</h2>
          </div>
          <div className="product-grid related-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}

export default ProductPage;