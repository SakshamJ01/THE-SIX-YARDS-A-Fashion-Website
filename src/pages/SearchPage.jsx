import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./SearchPage.css";

function SearchPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? products.filter((product) =>
        [product.name, product.category, product.subcategory].some((field) =>
          field.toLowerCase().includes(normalizedQuery)
        )
      )
    : [];

  return (
    <main className="search-page">
      <header className="search-header">
        <div className="search-header-top">
          <Link to="/" className="search-home-link">← BACK TO HOME</Link>
          <span className="search-brand">THE SIX YARDS</span>
          <Link to="/cart" className="search-cart-link">VIEW BAG ↗</Link>
        </div>

        <div className="search-heading">
          <span>THE SIX YARDS</span>
          <h1>Find your piece</h1>
          <label htmlFor="product-search">Search the collection</label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Sarees, kurtas, heritage..."
            autoFocus
          />
        </div>
      </header>

      <section className="search-results" aria-live="polite">
        {!normalizedQuery && (
          <p className="search-prompt">Search by product name, collection or category.</p>
        )}

        {normalizedQuery && results.length > 0 && (
          <>
            <div className="search-results-heading">
              <span>SEARCH RESULTS</span>
              <span>{results.length} {results.length === 1 ? "PIECE" : "PIECES"}</span>
            </div>
            <div className="product-grid search-grid">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {normalizedQuery && results.length === 0 && (
          <div className="search-empty">
            <span>NO MATCHES</span>
            <h2>Nothing found<br /><em>this time.</em></h2>
            <p>Try a broader search such as sarees, menswear or heritage.</p>
            <Link to="/collections" className="search-empty-link">
              EXPLORE COLLECTIONS ↗
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default SearchPage;
