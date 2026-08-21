import {
  useEffect,
  useState,
} from "react";
import { WishlistContext } from "./WishlistContextValue";

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("sixYardsWishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "sixYardsWishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const isWishlisted = (productId) =>
    wishlistItems.some((item) => item.id === productId);

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) =>
      isWishlisted(product.id)
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product]
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount: wishlistItems.length,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

