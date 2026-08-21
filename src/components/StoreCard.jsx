import { Link } from "react-router-dom";
import "./StoreCard.css";

function StoreCard({ store, index = 0 }) {
  return (
    <article className="store-card">
      <Link to={`/stores/${store.slug}`} className="store-card-image-link">
        <div className="store-card-image">
          <img src={store.image} alt={`${store.name} demo store`} loading="lazy" />
          <span className="store-card-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="store-card-arrow" aria-hidden="true">↗</span>
        </div>
      </Link>

      <div className="store-card-content">
        <span className="store-card-eyebrow">DEMO STORE / {store.city.toUpperCase()}</span>
        <h3>{store.name}</h3>
        <p>{store.area}</p>
        <Link to={`/stores/${store.slug}`} className="store-card-link">
          VIEW STORE <span>↗</span>
        </Link>
      </div>
    </article>
  );
}

export default StoreCard;
