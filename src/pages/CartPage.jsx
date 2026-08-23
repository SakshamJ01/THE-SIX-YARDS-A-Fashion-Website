import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CartPage.css";

function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  return (
    <>
      <main className="cart-page">

      <Navbar variant="solid" />

      {/* ================= HEADER ================= */}

      <section className="cart-header">

        <div className="cart-header-top">

          <Link to="/" className="cart-home-link">
            ← BACK TO HOME
          </Link>

          <span className="cart-brand">
            THE SIX YARDS
          </span>

          <Link
            to="/collections"
            className="cart-shop-link"
          >
            CONTINUE SHOPPING ↗
          </Link>

        </div>


        <div className="cart-heading">

          <span>THE SIX YARDS</span>

          <h1>Your Bag</h1>

          <p>
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </p>

        </div>

      </section>


      {/* ================= EMPTY CART ================= */}

      {cartItems.length === 0 ? (

        <section className="cart-empty">

          <span>YOUR BAG IS EMPTY</span>

          <h2>
            Nothing here
            <br />
            <em>yet.</em>
          </h2>

          <p>
            Discover pieces chosen for the way
            you live, celebrate and remember.
          </p>

          <Link
            to="/collections"
            className="cart-empty-button"
          >
            EXPLORE COLLECTIONS ↗
          </Link>

        </section>

      ) : (

        /* ================= CART CONTENT ================= */

        <section className="cart-content">

          {/* LEFT — PRODUCTS */}

          <div className="cart-items">

            <div className="cart-items-heading">

              <span>
                YOUR SELECTION
              </span>

              <span>
                {cartCount} {cartCount === 1 ? "ITEM" : "ITEMS"}
              </span>

            </div>


            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}

                <Link
                  to={`/product/${item.slug}`}
                  className="cart-item-image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </Link>


                {/* INFORMATION */}

                <div className="cart-item-info">

                  <span className="cart-item-category">
                    {item.category}
                  </span>

                  <Link
                    to={`/product/${item.slug}`}
                    className="cart-item-name"
                  >
                    {item.name}
                  </Link>

                  <p className="cart-item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>


                  {/* QUANTITY + REMOVE */}

                  <div className="cart-item-actions">

                    <div className="cart-quantity">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                    </div>


                    <button
                      className="cart-remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      REMOVE
                    </button>

                  </div>

                </div>


                {/* ITEM TOTAL */}

                <div className="cart-item-total">

                  ₹{(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}

                </div>

              </article>

            ))}

          </div>


          {/* RIGHT — SUMMARY */}

          <aside className="cart-summary">

            <div className="cart-summary-inner">

              <span className="cart-summary-label">
                ORDER SUMMARY
              </span>


              <div className="cart-summary-row">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>


              <div className="cart-summary-row cart-shipping">

                <span>
                  Shipping
                </span>

                <span>
                  Calculated at checkout
                </span>

              </div>


              <div className="cart-summary-divider"></div>


              <div className="cart-total-row">

                <span>
                  Total
                </span>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>


              <button
                className="checkout-button"
                onClick={() =>
                  alert("Checkout will be available soon.")
                }
              >
                PROCEED TO CHECKOUT
              </button>


              <p className="cart-summary-note">
                Secure checkout · Crafted with care
              </p>

            </div>

          </aside>

        </section>

      )}

      </main>

      <Footer />
    </>
  );
}

export default CartPage;