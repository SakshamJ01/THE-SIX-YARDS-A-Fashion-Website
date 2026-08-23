import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

function scrollToSection(sectionId) {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth" });
}

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(sectionId), 120);
    } else {
      scrollToSection(sectionId);
    }
  };

  const sectionLink = (sectionId, label) => (
    <a
      href={`#${sectionId}`}
      onClick={(event) => handleSectionClick(event, sectionId)}
    >
      {label}
    </a>
  );

  return (
    <footer id="contact" className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>THE SIX YARDS</h2>

          <p>
            Contemporary elegance rooted in
            the timeless six yards.
          </p>

        </div>


        <div className="footer-navigation">

          <div className="footer-column">

            <span>EXPLORE</span>

            <Link to="/">Home</Link>
            {sectionLink("standard", "Our Standard")}
            {sectionLink("reels", "Our Reels")}
            {sectionLink("story", "Our Story")}

          </div>


          <div className="footer-column">

            <span>COLLECTIONS</span>

            <Link to="/collections/womens-wear">Women's Wear</Link>
            <Link to="/collections/mens-wear">Men's Wear</Link>
            <Link to="/collections/special-collections">
              Special Collections
            </Link>

          </div>

          <div className="footer-column">

            <span>CONNECT</span>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <Link to="/contact">Contact</Link>
            <Link to="/stores">Visit Us</Link>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © THE SIX YARDS
        </span>

        <span>
          MADE WITH INTENTION
        </span>

        <button
          type="button"
          className="footer-back-to-top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          BACK TO TOP ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;
