import { useState } from "react";
import { Link } from "react-router-dom";
import "./CollectionPage.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function CollectionPage({ title, subtitle, description, heroImage }) {
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const subcategories = {
    "Women's Wear": ["Sarees", "Lehengas", "Suits", "Anarkalis"],
    "Men's Wear": ["Kurtas", "Kurta Sets", "Sherwanis", "Nehru Jackets"],
    "Special Collections": ["Wedding Edit", "Festive Edit", "Heritage", "Signature Collection"],
  }[title];

  const collectionProducts = products.filter(
    (product) =>
      product.category === title &&
      (activeSubcategory === "All" || product.subcategory === activeSubcategory)
  );

  return (
    <div className="collection-page">

      <div className="collection-page-back">
        <Link to="/">← BACK TO HOME</Link>
      </div>

      <section
  className="collection-page-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="collection-page-overlay"></div>

        <div className="collection-page-content">
          <span>THE SIX YARDS</span>

          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>
      </section>

      <section className="collection-products">

        <div className="collection-heading">
          <span>THE COLLECTION</span>

          <h2>{description}</h2>
        </div>

        <nav className="subcategory-filters" aria-label={`${title} categories`}>
          <button
            className={activeSubcategory === "All" ? "active" : ""}
            onClick={() => setActiveSubcategory("All")}
          >
            All
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              className={activeSubcategory === subcategory ? "active" : ""}
              onClick={() => setActiveSubcategory(subcategory)}
            >
              {subcategory}
            </button>
          ))}
        </nav>

        <div className="product-grid">

  {collectionProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}

  {collectionProducts.length === 0 && (
    <p className="collection-empty">
      More pieces in this edit are being thoughtfully prepared.
    </p>
  )}

</div>

      </section>

    </div>
  );
}

export default CollectionPage;