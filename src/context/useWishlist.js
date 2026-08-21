import { useContext } from "react";
import { WishlistContext } from "./WishlistContextValue";

export function useWishlist() {
  return useContext(WishlistContext);
}
