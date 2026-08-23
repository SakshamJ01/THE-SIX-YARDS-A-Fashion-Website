import { Link } from "react-router-dom";
import { useWishlist } from "../context/useWishlist";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WishlistPage.css";
import { ImageWithSkeleton } from "../components/withSkeleton";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToBag = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const moveAllToBag = () => {
    wishlistItems.forEach((product) => addToCart(product));
    wishlistItems.forEach((product) =>
      removeFromWishlist(product.id)
    );
  };

  return (
    <>
      <main className="wishlist-page">
        <Navbar variant="solid" />

        <section className="wishlist-header">
          <div className="wishlist-header-top">
            <Link to="/" className="wishlist-home-link">
              ← BACK TO HOME
            </Link>
            <span className="wishlist-brand">THE SIX YARDS</span>
            <Link to="/cart" className="wishlist-cart-link">
              VIEW BAG ↗
            </Link>
          </div>

          <div className="wishlist-heading">
            <span>THE SIX YARDS</span>
            <h1>Saved Pieces</h1>
            <p>{wishlistItems.length} {wishlistItems.length === 1 ? "piece" : "pieces"}</p>
          </div>
        </section>

        {wishlistItems.length === 0 ? (
          <section className="wishlist-empty">
            <span>YOUR WISHLIST IS EMPTY</span>
            <h2>
              Keep what
              <br />
              <em>inspires you.</em>
            </h2>
            <p>Save considered pieces here while you explore the collection.</p>
            <Link to="/collections" className="wishlist-empty-button">
              EXPLORE COLLECTIONS ↗
            </Link>
          </section>
        ) : (
          <section className="wishlist-products">
            <div className="wishlist-products-heading">
              <span>YOUR SAVED PIECES</span>
              <button
                type="button"
                className="wishlist-move-all"
                onClick={moveAllToBag}
              >
                ADD ALL TO BAG ↗
              </button>
            </div>

            <div className="wishlist-list">
              {wishlistItems.map((product) => (
                <article className="wishlist-item" key={product.id}>
                  <Link
                    to={`/product/${product.slug}`}
                    className="wishlist-item-image"
                  >
                    <ImageWithSkeleton
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </Link>

                  <div className="wishlist-item-info">
                    <span className="wishlist-item-category">
                      {product.category} / {product.subcategory}
                    </span>

                    <Link
                      to={`/product/${product.slug}`}
                      className="wishlist-item-name"
                    >
                      {product.name}
                    </Link>

                    <p className="wishlist-item-price">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <div className="wishlist-item-actions">
                      <button
                        type="button"
                        className="wishlist-move-to-bag"
                        onClick={() => moveToBag(product)}
                      >
                        MOVE TO BAG
                      </button>

                      <button
                        type="button"
                        className="wishlist-remove"
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default WishlistPage;
