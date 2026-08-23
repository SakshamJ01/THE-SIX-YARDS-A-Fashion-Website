import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CollectionsPage.css";

const collections = [
  {
    number: "01",
    name: "Women's Wear",
    path: "/collections/womens-wear",
    image: "/images/collections/collection-womens-01.jpg",
    description: "Timeless silhouettes, contemporary expression.",
  },
  {
    number: "02",
    name: "Men's Wear",
    path: "/collections/mens-wear",
    image: "/images/collections/collection-mens-01.jpg",
    description: "Quiet confidence, rooted in tradition.",
  },
  {
    number: "03",
    name: "Special Collections",
    path: "/collections/special-collections",
    image: "/images/collections/collection-special-01.jpg",
    description: "Pieces made for moments worth remembering.",
  },
];

function CollectionsPage() {
  return (
    <>
      <main className="collections-landing-page">
      <Navbar variant="solid" />

      <header className="collections-landing-header">
        <div className="collections-landing-top">
          <Link to="/" className="collections-home-link">← BACK TO HOME</Link>
          <span>THE SIX YARDS</span>
          <Link to="/cart" className="collections-bag-link">VIEW BAG ↗</Link>
        </div>

        <div className="collections-landing-heading">
          <span>THE SIX YARDS</span>
          <h1>Our <em>Collections.</em></h1>
          <p>Considered pieces for the way you live, celebrate and remember.</p>
        </div>
      </header>

      <section className="collections-landing-grid" aria-label="All collections">
        {collections.map((collection) => (
          <article className="collections-landing-card" key={collection.path}>
            <Link to={collection.path} className="collections-landing-image-link">
              <div className="collections-landing-image">
                <img src={collection.image} alt={`${collection.name} collection`} loading="lazy" />
                <span>{collection.number}</span>
              </div>
            </Link>
            <div className="collections-landing-card-content">
              <span>{collection.number} / COLLECTION</span>
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <Link to={collection.path}>EXPLORE <span>↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      </main>

      <Footer />
    </>
  );
}

export default CollectionsPage;
