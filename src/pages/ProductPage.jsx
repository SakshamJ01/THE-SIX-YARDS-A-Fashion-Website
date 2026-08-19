import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductPage.css";
import { useCart } from "../context/CartContext";


function ProductPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
 const { addToCart } = useCart();
const navigate = useNavigate();
  // Temporary product data
  // We will connect this to all our products later.
  const products = {
    "ivory-handwoven-saree": {
      name: "Ivory Handwoven Saree",
      price: "₹6,499",
      category: "SAREES",
      image: "/images/collection-sarees.jpg",
      description:
        "A timeless handwoven saree crafted with understated elegance. Designed for effortless occasions and refined everyday dressing.",
      details: "Handwoven fabric · Lightweight drape · Traditional craftsmanship",
    },

    "heritage-silk-saree": {
      name: "Heritage Silk Saree",
      price: "₹7,999",
      category: "SAREES",
      image: "/images/collection-heritage.jpg",
      description:
        "A rich silk saree inspired by India's timeless textile traditions, created for moments that deserve something special.",
      details: "Pure silk · Heritage-inspired weave · Elegant finish",
    },

    "contemporary-draped-saree": {
      name: "Contemporary Draped Saree",
      price: "₹5,499",
      category: "SAREES",
      image: "/images/collection-sarees.jpg",
      description:
        "A contemporary interpretation of the classic saree, balancing graceful draping with modern simplicity.",
      details: "Soft fabric · Contemporary silhouette · Easy drape",
    },
  };

  const product = products[productId];

  // If product doesn't exist
  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/collections/womens-wear">
          Back to Women's Wear
        </Link>
      </div>
    );
  }

  return (
    <main className="product-page">

      {/* BACK LINK */}
      <div className="product-back">
        <Link to="/collections/womens-wear">
          ← Back to collection
        </Link>
      </div>


      {/* PRODUCT */}
      <section className="product-detail">

        {/* IMAGE */}
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>


        {/* INFORMATION */}
        <div className="product-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-price">
            {product.price}
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

 <button
  className="add-to-bag"
  onClick={() => {
    addToCart(
      {
        id: productId,
        name: product.name,
        price: Number(
          product.price.replace("₹", "").replace(",", "")
        ),
        image: product.image,
        category: product.category,
      },
      quantity
    );

    navigate("/cart");
  }}
>
  ADD TO BAG
</button>

            <button className="buy-now">
              BUY NOW
            </button>

          </div>


          <p className="product-note">
            Crafted with care. Made to be worn and remembered.
          </p>

        </div>

      </section>

    </main>
  );
}

export default ProductPage;