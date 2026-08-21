import { useContext } from "react";
import { CartContext } from "./CartContextValue";

export function useCart() {
  return useContext(CartContext);
}
