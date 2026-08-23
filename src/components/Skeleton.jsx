import "./Skeleton.css";

export function Skeleton({ className = "", variant = "text", lines = 3, width = "100%" }) {
  const skeletonItems = Array.from({ length: lines }, (_, i) => (
    <div key={i} className="skeleton-line" style={{ width: i === lines - 1 ? "70%" : width }} />
  ));

  return (
    <div className={`skeleton skeleton--${variant} ${className}`} style={{ width }}>
      {variant === "card" ? (
        <>
          <div className="skeleton-image" />
          <div className="skeleton-content">
            <div className="skeleton-line" style={{ width: "40%" }} />
            <div className="skeleton-line" style={{ width: "60%" }} />
            <div className="skeleton-line" style={{ width: "30%" }} />
          </div>
        </>
      ) : variant === "image" ? (
        <div className="skeleton-image" />
      ) : variant === "button" ? (
        <div className="skeleton-button" />
      ) : variant === "heading" ? (
        <div className="skeleton-heading" />
      ) : (
        skeletonItems
      )}
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <article className="product-card skeleton-card">
      <div className="product-image skeleton-image" />
      <div className="product-details">
        <div>
          <div className="skeleton-line" style={{ width: "35%", height: "8px", marginBottom: "8px" }} />
          <div className="skeleton-line" style={{ width: "60%", height: "22px" }} />
        </div>
        <div className="skeleton-line" style={{ width: "25%", height: "13px", marginTop: "20px" }} />
      </div>
    </article>
  );
}

export function ProductGridSkeleton({ count = 3 }) {
  return (
    <div className="product-grid skeleton-grid" style={{ gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)` }}>
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CollectionHeroSkeleton() {
  return (
    <section className="collection-page-hero skeleton-hero">
      <div className="skeleton-overlay" />
      <div className="collection-page-content">
        <div className="skeleton-line" style={{ width: "20%" }} />
        <div className="skeleton-heading" style={{ width: "70%" }} />
        <div className="skeleton-line" style={{ width: "50%", marginTop: "24px" }} />
      </div>
    </section>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="product-detail skeleton-detail">
      <div className="product-image skeleton-image skeleton-detail-image" />
      <div className="product-info skeleton-info">
        <div className="skeleton-line" style={{ width: "25%", height: "10px", marginBottom: "22px" }} />
        <div className="skeleton-heading" style={{ width: "70%", marginBottom: "30px" }} />
        <div className="skeleton-line" style={{ width: "30%", height: "28px", marginBottom: "38px" }} />
        <div className="skeleton-text-block" />
        <div className="skeleton-text-block" style={{ marginTop: "45px" }} />
        <div className="quantity-selector skeleton-quantity" style={{ marginTop: "35px" }} />
        <div className="product-actions skeleton-actions" style={{ marginTop: "30px" }} />
      </div>
    </div>
  );
}

export function CartSkeleton({ itemCount = 2 }) {
  return (
    <section className="cart-content skeleton-cart">
      <div className="cart-items skeleton-items">
        <div className="cart-items-heading skeleton-line" style={{ width: "100%", height: "10px", marginBottom: "24px" }} />
        {Array.from({ length: itemCount }, (_, i) => (
          <article key={i} className="cart-item skeleton-item">
            <div className="cart-item-image skeleton-image" />
            <div className="cart-item-info">
              <div className="skeleton-line" style={{ width: "30%", height: "9px", marginBottom: "12px" }} />
              <div className="skeleton-line" style={{ width: "60%", height: "30px", marginBottom: "16px" }} />
              <div className="skeleton-line" style={{ width: "25%", height: "13px", marginBottom: "24px" }} />
              <div className="cart-item-actions skeleton-actions" />
            </div>
            <div className="cart-item-total skeleton-line" style={{ width: "20%", height: "13px", marginTop: "32px" }} />
          </article>
        ))}
      </div>
      <aside className="cart-summary skeleton-summary">
        <div className="cart-summary-inner">
          <div className="skeleton-line" style={{ width: "30%", height: "10px", marginBottom: "36px" }} />
          <div className="cart-summary-row skeleton-line" style={{ height: "13px", marginBottom: "20px" }} />
          <div className="cart-shipping-progress skeleton-line" style={{ height: "22px", marginBottom: "27px" }} />
          <div className="cart-total-row skeleton-line" style={{ height: "20px", marginBottom: "32px" }} />
          <div className="skeleton-button" style={{ width: "100%", height: "56px" }} />
        </div>
      </aside>
    </section>
  );
}

export function SearchSkeleton({ resultCount = 3 }) {
  return (
    <section className="search-results skeleton-search">
      <div className="search-results-heading skeleton-line" style={{ width: "100%", height: "10px", marginBottom: "32px" }} />
      <ProductGridSkeleton count={resultCount} />
    </section>
  );
}

export function WishlistSkeleton({ itemCount = 2 }) {
  return (
    <section className="wishlist-products skeleton-wishlist">
      <div className="wishlist-products-heading skeleton-line" style={{ width: "100%", height: "10px", marginBottom: "32px" }} />
      <div className="wishlist-list">
        {Array.from({ length: itemCount }, (_, i) => (
          <article key={i} className="wishlist-item skeleton-item">
            <div className="wishlist-item-image skeleton-image" />
            <div className="wishlist-item-info">
              <div className="skeleton-line" style={{ width: "30%", height: "9px", marginBottom: "10px" }} />
              <div className="skeleton-line" style={{ width: "55%", height: "24px", marginBottom: "12px" }} />
              <div className="skeleton-line" style={{ width: "25%", height: "13px", marginBottom: "24px" }} />
              <div className="wishlist-item-actions skeleton-actions" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StoresSkeleton() {
  return (
    <section className="stores-directory skeleton-stores">
      <div className="stores-intro">
        <div className="skeleton-line" style={{ width: "20%", height: "10px", marginBottom: "24px" }} />
        <div className="skeleton-heading" style={{ width: "65%", marginBottom: "35px" }} />
        <div className="skeleton-line" style={{ width: "80%", height: "15px" }} />
      </div>
      <div className="stores-filter-row skeleton-line" style={{ width: "100%", height: "38px", marginBottom: "28px" }} />
      <article className="store-card skeleton-store">
            <div className="store-card-image skeleton-image" />
            <div className="store-card-content">
              <div className="skeleton-line" style={{ width: "35%", height: "9px", marginBottom: "12px" }} />
              <div className="skeleton-line" style={{ width: "50%", height: "30px", marginBottom: "10px" }} />
              <div className="skeleton-line" style={{ width: "40%", height: "12px", marginBottom: "20px" }} />
              <div className="skeleton-line" style={{ width: "30%", height: "15px" }} />
            </div>
          </article>
    </section>
  );
}