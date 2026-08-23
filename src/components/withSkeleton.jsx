import { useState } from "react";

export function ImageWithSkeleton({ src, alt, className = "", ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-wrapper ${className}`} style={{ position: "relative" }}>
      {isLoading && <div className="skeleton-image" style={{ aspectRatio: "3/4", borderRadius: "var(--radius-md)" }} />}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease", display: "block", width: "100%", height: "100%", objectFit: "cover" }}
          {...props}
        />
      )}
      {hasError && (
        <div className="skeleton-image" style={{ aspectRatio: "3/4", borderRadius: "var(--radius-md)", background: "#ddd8cf" }}>
          <span style={{ fontSize: "10px", color: "#777064" }}>Failed to load</span>
        </div>
      )}
    </div>
  );
}