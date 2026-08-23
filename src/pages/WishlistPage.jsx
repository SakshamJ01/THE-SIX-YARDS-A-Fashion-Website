import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/useWishlist";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WishlistPage.css";

function WishlistPage() {
  const { wishlistItems } = useWishlist();

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
            <span>{wishlistItems.length} {wishlistItems.length === 1 ? "ITEM" : "ITEMS"}</span>
          </div>
          <div className="product-grid wishlist-grid">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
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
