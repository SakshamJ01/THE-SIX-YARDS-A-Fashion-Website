import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import StoreCard from "../components/StoreCard";
import stores from "../data/stores";
import "./StoresPage.css";

function StoresPage() {
  const [activeCity, setActiveCity] = useState("All");
  const cities = ["All", ...new Set(stores.map((store) => store.city))];
  const visibleStores = activeCity === "All"
    ? stores
    : stores.filter((store) => store.city === activeCity);

  return (
    <main className="stores-page">
      <div className="stores-page-back">
        <Link to="/">← BACK TO HOME</Link>
      </div>
      <section className="stores-hero">
        <div className="stores-hero-image" aria-hidden="true"></div>
        <div className="stores-hero-overlay" aria-hidden="true"></div>
        <div className="stores-hero-content">
          <span>THE SIX YARDS</span>
          <h1>Visit <em>Us.</em></h1>
          <p>Spaces where the story continues.</p>
        </div>
      </section>

      <section className="stores-directory">
        <div className="stores-intro">
          <span>OUR STORES</span>
          <div>
            <h2>Come into the<br /><em>story.</em></h2>
            <p>Explore our demo locations and imagine The Six Yards in person. Store details below are sample content awaiting confirmed locations.</p>
          </div>
        </div>

        <div className="stores-filter-row">
          <span>CITY FILTER</span>
          <div className="stores-filters" role="group" aria-label="Filter demo stores by city">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={activeCity === city ? "active" : ""}
                aria-pressed={activeCity === city}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {visibleStores.length > 0 ? (
          <Carousel itemsToShow={3} gap={24} ariaLabel="The Six Yards demo stores">
            {visibleStores.map((store, index) => (
              <StoreCard key={store.id} store={store} index={index} />
            ))}
          </Carousel>
        ) : (
          <div className="stores-empty">
            <span>NO DEMO STORES IN THIS CITY</span>
            <h2>More spaces<br /><em>to come.</em></h2>
          </div>
        )}
      </section>

      <section className="stores-cta">
        <span>THE SIX YARDS</span>
        <h2>Visit us.<br /><em>Take your time.</em></h2>
        <Link to="/collections">EXPLORE THE COLLECTION <span>↗</span></Link>
      </section>
    </main>
  );
}

export default StoresPage;
