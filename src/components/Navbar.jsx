import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";

function scrollToSection(sectionId) {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth" });
}

function Navbar({ variant = "overlay" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    closeMenu();

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
    <header
      ref={menuRef}
      className={[
        "navbar",
        variant === "solid" ? "navbar-solid" : "",
        menuOpen ? "menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        THE SIX YARDS
      </Link>

      <nav className="navbar-links">
        {sectionLink("story", "Our Story")}
        <Link to="/collections">Collections</Link>
        {sectionLink("standard", "Our Standard")}
        {sectionLink("reels", "Reels")}
        <Link to="/contact">Contact</Link>
        <Link to="/stores">Visit Us</Link>
      </nav>

      <Link to="/cart" className="navbar-cart">
        BAG
        {cartCount > 0 && <span>({cartCount})</span>}
      </Link>

      <Link to="/search" className="navbar-search">
        SEARCH
      </Link>

      <Link to="/wishlist" className="navbar-wishlist">
        SAVED {wishlistCount > 0 && `(${wishlistCount})`}
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>


      {/* ================= MOBILE MENU ================= */}

      <div className="mobile-menu">

        <div className="mobile-menu-inner">

          <div className="mobile-menu-label">
            THE SIX YARDS
          </div>

          <nav className="mobile-menu-links">

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/cart" onClick={closeMenu}>
              Bag {cartCount > 0 && `(${cartCount})`}
            </Link>

            <Link to="/wishlist" onClick={closeMenu}>
              Saved {wishlistCount > 0 && `(${wishlistCount})`}
            </Link>

            <Link to="/search" onClick={closeMenu}>
              Search
            </Link>

            {sectionLink("story", "Our Story")}

            <Link to="/collections" onClick={closeMenu}>
              Collections
            </Link>

            {sectionLink("standard", "Our Standard")}

            {sectionLink("reels", "Reels")}

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <Link to="/stores" onClick={closeMenu}>
              Visit Us
            </Link>

          </nav>

          <div className="mobile-menu-footer">
            <span>CONTEMPORARY ELEGANCE</span>
            <span>IN SIX YARDS</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
