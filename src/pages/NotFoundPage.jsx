import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <main className="not-found-page">
      <Navbar variant="solid" />

      <section className="not-found-content">
        <span>404 — PAGE NOT FOUND</span>

        <h1>
          This page has
          <br />
          <em>wandered off.</em>
        </h1>

        <p>
          The page you are looking for does not exist
          or may have moved.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home">
            BACK TO HOME <span>↗</span>
          </Link>

          <Link to="/collections" className="not-found-collections">
            EXPLORE COLLECTIONS <span>↗</span>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;
