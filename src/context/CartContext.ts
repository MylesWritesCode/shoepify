/**
 * src/context/CartContext.ts
 * Stores and provides cart data throughout the app.
 * @author Myles Berueda <MylesWritesCode>
 */
import { CartInput } from "@/generated/schema";
import React from "react";

type CartInputWithId = CartInput & { id: string | null };
export const cart_: CartInputWithId = {
  id: null,
  lines: [],
  attributes: [],
  buyerIdentity: {},
  discountCodes: [],
  note: undefined,
};

type CartContextState = [
  CartInputWithId,
  React.Dispatch<React.SetStateAction<CartInputWithId>>
];

const CartContext = React.createContext<CartContextState>([cart_, () => {}]);

export default CartContext;
