import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <main className="cart-page">

      <div className="cart-header">
        <span>THE SIX YARDS</span>

        <h1>Your Bag</h1>

        <p>
          {cartCount} {cartCount === 1 ? "item" : "items"}
        </p>
      </div>


      {cartItems.length === 0 ? (

        <section className="empty-cart">

          <h2>Your bag is currently empty.</h2>

          <p>
            Discover pieces crafted with intention.
          </p>

          <Link to="/collections/womens-wear">
            EXPLORE COLLECTIONS →
          </Link>

        </section>

      ) : (

        <section className="cart-content">

          <div className="cart-items">

            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                <div className="cart-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                <div className="cart-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>


                  <div className="cart-item-controls">

                    <div className="cart-quantity">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
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
                      >
                        +
                      </button>

                    </div>


                    <button
                      className="remove-item"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      REMOVE
                    </button>

                  </div>

                </div>


                <strong className="cart-item-total">
                  ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </strong>

              </article>

            ))}

          </div>


          <aside className="cart-summary">

            <span>ORDER SUMMARY</span>

            <div className="summary-row">

              <p>Subtotal</p>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="summary-row">

              <p>Shipping</p>

              <span>
                Calculated at checkout
              </span>

            </div>


            <div className="summary-total">

              <p>Total</p>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>

            </div>


            <button className="checkout-button">
              PROCEED TO CHECKOUT
            </button>

            <Link
              to="/collections/womens-wear"
              className="continue-shopping"
            >
              ← CONTINUE SHOPPING
            </Link>

          </aside>

        </section>

      )}

    </main>
  );
}

export default CartPage;