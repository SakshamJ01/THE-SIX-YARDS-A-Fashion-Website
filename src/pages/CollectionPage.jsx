import "./CollectionPage.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function CollectionPage({ title, subtitle, description, heroImage }) {
  return (
    <div className="collection-page">

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

        <div className="product-grid">

  {products
    .filter((product) => product.category === title)
    .map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}

</div>

      </section>

    </div>
  );
}

export default CollectionPage;