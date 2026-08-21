import { Children, useEffect, useRef, useState } from "react";
import "./Carousel.css";

function Carousel({
  children,
  itemsToShow = 3,
  gap = 24,
  showArrows = true,
  ariaLabel = "Carousel",
}) {
  const trackRef = useRef(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const itemCount = Children.count(children);

  const updateArrowState = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    setCanGoPrevious(track.scrollLeft > 1);
    setCanGoNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrowState();
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    track.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);

    return () => {
      track.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [itemCount]);

  const move = (direction) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstItem = track.firstElementChild;
    const itemWidth = firstItem?.getBoundingClientRect().width || track.clientWidth;
    const scrollDistance = itemWidth + gap;

    track.scrollBy({
      left: direction * scrollDistance,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  return (
    <div
      className="carousel"
      style={{ "--carousel-gap": `${gap}px`, "--carousel-items": itemsToShow }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {showArrows && (
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => move(-1)}
            disabled={!canGoPrevious}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => move(1)}
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}

      <div
        ref={trackRef}
        className="carousel-track"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        aria-live="polite"
      >
        {Children.map(children, (child) => (
          <div className="carousel-item">{child}</div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
