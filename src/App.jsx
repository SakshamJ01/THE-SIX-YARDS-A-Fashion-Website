import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import Carousel from "./components/Carousel";
import StoreCard from "./components/StoreCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import stores from "./data/stores";
import StoresPage from "./pages/StoresPage";
import StoreDetailPage from "./pages/StoreDetailPage";
import ContactPage from "./pages/ContactPage";

const TESTIMONIALS = [
  {
    quote:
      "The Six Yards makes traditional fashion feel beautifully effortless. Every detail feels considered, from the fabric to the final drape.",
    author: "PRIYA S.",
    role: "The Six Yards customer",
  },
  {
    quote:
      "My heritage silk saree arrived beautifully packed and even better in person. It has become my go-to for every celebration.",
    author: "ANANYA R.",
    role: "The Six Yards customer",
  },
  {
    quote:
      "Finally a place where classic weaves meet modern styling. The curation is thoughtful and the quality speaks for itself.",
    author: "RAHUL M.",
    role: "The Six Yards customer",
  },
];

function useSectionNavigation() {
  const navigate = useNavigate();

  return (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
}

function App() {
  const navigateToSection = useSectionNavigation();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonial = TESTIMONIALS[testimonialIndex];

  const showPreviousTestimonial = () =>
    setTestimonialIndex(
      (index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  const showNextTestimonial = () =>
    setTestimonialIndex((index) => (index + 1) % TESTIMONIALS.length);

  return (
    <div className="app">
      <Navbar />

      {/* ================= PROMOTION BAR ================= */}
      <div className="promotion-bar">
        <div className="promotion-track">
          <span>UPTO 60% OFF ACROSS ALL CATEGORIES</span>
          <span>★</span>
          <span>UPTO 60% OFF ACROSS ALL CATEGORIES</span>
          <span>★</span>
          <span>UPTO 60% OFF ACROSS ALL CATEGORIES</span>
          <span>★</span>
        </div>
      </div>

      {/* ================= HERO ================= */}
<main id="top">
  <section className="hero">
    <div className="hero-image" aria-hidden="true"></div>
    <div className="hero-overlay"></div>
    <div className="hero-frame" aria-hidden="true">
      <span>THE ART OF THE DRAPE</span>
      <span>01 / 04</span>
    </div>

    <div className="hero-content">
      <p className="hero-eyebrow">THE SIX YARDS</p>

      <h1>
        <span>Contemporary</span>
        <br />
        <span className="hero-heading-accent">Elegance</span>
      </h1>

      <p className="hero-description">
        A modern expression of the timeless six yards.
      </p>

      <Link to="/collections" className="hero-button">
        EXPLORE COLLECTION <span>↗</span>
      </Link>
    </div>

    <div className="hero-scroll">
      <span>SCROLL TO EXPLORE</span>
      <span className="scroll-line"></span>
    </div>
  </section>

  {/* ================= CAMPAIGN ================= */}
<section className="campaign-section">
  <div className="campaign-image"></div>

  <div className="campaign-overlay"></div>

  <div className="campaign-content">
    <p>THE SIX YARDS</p>

    <h2>
      THE ART
      <br />
      OF THE
      <br />
      DRAPE
    </h2>

    <Link to="/collections">
      EXPLORE COLLECTION
      <span>↗</span>
    </Link>
  </div>

  <div className="campaign-side-text">
    <span>01</span>
    <span>TIMELESS CRAFT</span>
  </div>
</section>

        
       {/* ================= GROWTH STORY ================= */}
<section id="story" className="story-section">

<div className="story-label">
  <span>OUR STORY</span>
</div>

<div className="story-content">

  <p className="story-kicker">
    THE SIX YARDS
  </p>

  <h2>
    Tradition,
    <br />
    Reimagined
    <br />
    For Today
  </h2>

  <p className="story-description">
    The Six Yards began with a simple belief —
    that tradition should never have to stand still.
    Rooted in the timeless elegance of Indian fashion,
    we bring together heritage craftsmanship,
    contemporary design, and thoughtful curation
    for the way India dresses today.
  </p>

  <a
    href="#standard"
    className="story-link"
    onClick={(event) => {
      event.preventDefault();
      navigateToSection("standard");
    }}
  >
    DISCOVER OUR STANDARD
    <span>↗</span>
  </a>

</div>

</section>

        {/* ================= STANDARD ================= */}
<section id="standard" className="standard-section">

<div className="standard-intro">

  <div className="standard-label">
    WHY THE SIX YARDS
  </div>

  <div className="standard-heading">

    <h2>
      The <em>Six Yards</em>
      <br />
      Standard
    </h2>

    <p>
      We believe Indian fashion should feel timeless,
      thoughtful, and deeply personal — rooted in
      craftsmanship, yet made for the way we live today.
    </p>

  </div>

</div>


<div className="standard-grid">

  {/* 01 */}
  <article className="standard-card">
    <span className="standard-number">01</span>

    <div className="standard-card-content">
      <h3>Timeless Craft</h3>

      <p>
        Every weave carries the character of Indian
        craftsmanship, selected for beauty that lasts
        beyond seasons.
      </p>

      <Link to="/collections">
        LEARN MORE
        <span>↗</span>
      </Link>
    </div>
  </article>


  {/* 02 */}
  <article className="standard-card">
    <span className="standard-number">02</span>

    <div className="standard-card-content">
      <h3>Thoughtful Curation</h3>

      <p>
        From heirloom sarees to contemporary silhouettes,
        every piece is chosen with intention.
      </p>

      <Link to="/collections">
        LEARN MORE
        <span>↗</span>
      </Link>
    </div>
  </article>


  {/* 03 */}
  <article className="standard-card">
    <span className="standard-number">03</span>

    <div className="standard-card-content">
      <h3>Modern Heritage</h3>

      <p>
        We honour traditional techniques while embracing
        the way a new generation wants to dress.
      </p>

      <Link to="/collections">
        LEARN MORE
        <span>↗</span>
      </Link>
    </div>
  </article>


  {/* 04 */}
  <article className="standard-card">
    <span className="standard-number">04</span>

    <div className="standard-card-content">
      <h3>Every Occasion</h3>

      <p>
        Quiet mornings, celebrations, weddings and
        everything between — collections made for real moments.
      </p>

      <Link to="/collections">
        LEARN MORE
        <span>↗</span>
      </Link>
    </div>
  </article>


  {/* 05 */}
  <article className="standard-card standard-card-featured">
    <span className="standard-number">05</span>

    <div className="standard-card-content">
      <h3>Honest Luxury</h3>

      <p>
        Exceptional fabrics, considered design and
        enduring quality without unnecessary excess.
      </p>

      <Link to="/collections">
        LEARN MORE
        <span>↗</span>
      </Link>
    </div>
  </article>

</div>

</section>


{/* ================================
    DISCOVER OUR REELS
================================ */}

<section className="reels-section" id="reels">

  <div className="reels-intro">

    <div className="reels-label">
      DISCOVER OUR REELS
    </div>

    <div className="reels-heading">

      <h2>
        Stories in <em>motion.</em>
      </h2>

      <p>
        A closer look at the colours, textures and moments
        that make every six yards unforgettable.
      </p>

    </div>

  </div>


  <Carousel
    itemsToShow={3}
    gap={22}
    ariaLabel="The Six Yards reels"
  >

    {/* ================= REEL 01 ================= */}

    <article className="reel-card">

      <div className="reel-video">

        <video
          src="/videos/reel-01.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="reel-overlay">
          <span>01</span>

          <span className="reel-play">
            ↗
          </span>
        </div>

      </div>

      <div className="reel-caption">

        <div>
          <span>THE DRAPE</span>

          <h3>
            Elegance,
            <em> unveiled.</em>
          </h3>
        </div>

        <span className="reel-arrow">
          ↗
        </span>

      </div>

    </article>


    {/* ================= REEL 02 ================= */}

    <article className="reel-card">

      <div className="reel-video">

        <video
          src="/videos/reel-02.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="reel-overlay">
          <span>02</span>

          <span className="reel-play">
            ↗
          </span>
        </div>

      </div>

      <div className="reel-caption">

        <div>
          <span>TIMELESS TRADITION</span>

          <h3>
            Woven with
            <em> heritage.</em>
          </h3>
        </div>

        <span className="reel-arrow">
          ↗
        </span>

      </div>

    </article>


    {/* ================= REEL 03 ================= */}

    <article className="reel-card">

      <div className="reel-video">

        <video
          src="/videos/reel-03.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="reel-overlay">
          <span>03</span>

          <span className="reel-play">
            ↗
          </span>
        </div>

      </div>

      <div className="reel-caption">

        <div>
          <span>THE MOMENT</span>

          <h3>
            Made for
            <em> memories.</em>
          </h3>
        </div>

        <span className="reel-arrow">
          ↗
        </span>

      </div>

    </article>

  </Carousel>


  <div className="reels-footer">

    <Link to="/collections">
      VIEW ALL STORIES
      <span>↗</span>
    </Link>

  </div>

</section>

{/* ================= COLLECTIONS ================= */}
<section className="collections-section" id="collections">

  <div className="collections-intro">

    <div className="collections-label">
      THE COLLECTIONS
    </div>

    <div className="collections-heading">
      <h2>
        Made for <em>every</em>
        <br />
        occasion.
      </h2>

      <p>
        From quiet everyday elegance to the moments
        worth dressing up for — discover pieces chosen
        for the way you live, celebrate and remember.
      </p>
    </div>

  </div>


  <div className="collections-grid">

   {/* 01 — WOMEN'S WEAR */}
<article className="collection-card">
  <div className="collection-image">
    <img
      src="/images/collections/collection-womens-01.jpg"
      alt="The Six Yards women's wear collection"
      loading="lazy"
    />
  </div>

  <div className="collection-info">
    <div>
      <span>01 / WOMEN'S WEAR</span>

      <h3>
        Women's
        <em> Wear</em>
      </h3>
    </div>

  <Link to="/collections/womens-wear">
  EXPLORE
  <span>↗</span>
</Link>
  </div>
</article>


{/* 02 — MEN'S WEAR */}
<article className="collection-card">
  <div className="collection-image">
    <img
      src="/images/collections/collection-mens-01.jpg"
      alt="The Six Yards men's wear collection"
      loading="lazy"
    />
  </div>

  <div className="collection-info">
    <div>
      <span>02 / MEN'S WEAR</span>

      <h3>
        Men's
        <em> Wear</em>
      </h3>
    </div>

    <Link to="/collections/mens-wear">
  EXPLORE
  <span>↗</span>
</Link>
  </div>
</article>


{/* 03 — SPECIAL COLLECTIONS */}
<article className="collection-card">
  <div className="collection-image">
    <img
    src="/images/collections/collection-special-01.jpg"
      alt="The Six Yards special collections"
      loading="lazy"
    />
  </div>

  <div className="collection-info">
    <div>
      <span>03 / SPECIAL COLLECTIONS</span>

      <h3>
        Special
        <em> Collections</em>
      </h3>
    </div>

    <Link to="/collections/special-collections">
  EXPLORE
  <span>↗</span>
</Link>
  </div>
</article>
  </div>

</section>

{/* ================================
    VISIT US
================================ */}

<section className="visit-section">
  <div className="visit-intro">
    <span>VISIT THE SIX YARDS</span>

    <div>
      <h2>Spaces where<br /><em>the story continues.</em></h2>
      <p>Our demo locations are imagined as an extension of the Six Yards world: tactile, thoughtful and made for taking your time.</p>
      <Link to="/stores">VIEW ALL STORES <span>↗</span></Link>
    </div>
  </div>

  <Carousel itemsToShow={3} gap={24} ariaLabel="The Six Yards demo stores">
    {stores.map((store, index) => (
      <StoreCard key={store.id} store={store} index={index} />
    ))}
  </Carousel>
</section>

{/* ================================
    TESTIMONIAL
================================ */}

<section className="testimonial-section">

  <div className="testimonial-top">

    <span>WHY PEOPLE CHOOSE US</span>

    <span>
      {String(testimonialIndex + 1).padStart(2, "0")} /{" "}
      {String(TESTIMONIALS.length).padStart(2, "0")}
    </span>

  </div>


  <div className="testimonial-content" aria-live="polite">

    <div className="testimonial-quote-mark">
      “
    </div>

    <blockquote>
      {testimonial.quote}
    </blockquote>

    <div className="testimonial-author">

      <strong>{testimonial.author}</strong>

      <span>
        {testimonial.role}
      </span>

    </div>

  </div>


  <div className="testimonial-controls">

    <button
      aria-label="Previous testimonial"
      onClick={showPreviousTestimonial}
    >
      ←
    </button>

    <button
      aria-label="Next testimonial"
      onClick={showNextTestimonial}
    >
      →
    </button>

  </div>

</section>

</main>

<Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<App />} />

      <Route
        path="/collections"
        element={<CollectionsPage />}
      />

      <Route
        path="/collections/womens-wear"
        element={
          <CollectionPage
            title="Women's Wear"
            subtitle="Timeless silhouettes, contemporary expression."
            description="Discover sarees, graceful silhouettes and considered pieces designed for the modern woman."
            heroImage="/images/collections/collection-womens-01.jpg"
          />
        }
      />

      <Route
        path="/collections/mens-wear"
        element={
          <CollectionPage
            title="Men's Wear"
            subtitle="Quiet confidence, rooted in tradition."
            description="Explore refined Indian menswear crafted for celebrations, occasions and everyday elegance."
          heroImage="/images/collections/collection-mens-01.jpg"
          />
        }
      />

      <Route
        path="/collections/special-collections"
        element={
          <CollectionPage
            title="Special Collections"
            subtitle="Pieces made for moments worth remembering."
            description="Explore our curated edits of wedding, festive and heritage pieces."
            heroImage="/images/collections/collection-special-01.jpg"
          />
        }
      />

      {/* Product page */}
      <Route
        path="/product/:productId"
        element={<ProductPage />}
      />
      <Route
        path="/cart"
        element={<CartPage />}
      />
      <Route
        path="/wishlist"
        element={<WishlistPage />}
      />
      <Route
        path="/search"
        element={<SearchPage />}
      />
      <Route
        path="/stores"
        element={<StoresPage />}
      />
      <Route
        path="/stores/:slug"
        element={<StoreDetailPage />}
      />

      {/* Contact */}
      <Route
        path="/contact"
        element={<ContactPage />}
      />

      {/* 404 — unknown routes */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  );
}

export default AppRoutes;
