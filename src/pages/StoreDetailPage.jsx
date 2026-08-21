import { Link, useParams } from "react-router-dom";
import stores from "../data/stores";
import "./StoreDetailPage.css";

function StoreDetailPage() {
  const { slug } = useParams();
  const store = stores.find((item) => item.slug === slug);

  if (!store) {
    return (
      <main className="store-detail-page store-detail-not-found">
        <span>THE SIX YARDS</span>
        <h1>Store not found.</h1>
        <Link to="/stores">BACK TO STORES ↗</Link>
      </main>
    );
  }

  return (
    <main className="store-detail-page">
      <div className="store-detail-back">
        <Link to="/stores">← BACK TO STORES</Link>
        <Link to="/">HOME</Link>
      </div>

      <section className="store-detail-hero">
        <div className="store-detail-copy">
          <span>DEMO STORE / {store.city.toUpperCase()}</span>
          <h1>{store.name}</h1>
          <p>{store.description}</p>
        </div>
        <div className="store-detail-image">
          <img src={store.image} alt={`${store.name} demo store`} />
        </div>
      </section>

      <section className="store-detail-info">
        <div>
          <span>LOCATION DETAILS</span>
          <h2>A space to<br /><em>experience.</em></h2>
        </div>
        <dl>
          <div><dt>AREA</dt><dd>{store.area}</dd></div>
          <div><dt>ADDRESS</dt><dd>{store.address}</dd></div>
          <div><dt>HOURS</dt><dd>{store.hours}</dd></div>
          <div><dt>PHONE</dt><dd>{store.phone}</dd></div>
        </dl>
      </section>

      <div className="store-detail-actions">
        <a href={store.directionsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <span>↗</span></a>
        <Link to="/collections">VIEW COLLECTION <span>↗</span></Link>
      </div>

      <p className="store-demo-note">Demo location shown for presentation only. Confirmed store information will be added when available.</p>
    </main>
  );
}

export default StoreDetailPage;
