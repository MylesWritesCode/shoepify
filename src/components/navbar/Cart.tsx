/**
 * src/components/navbar/Cart.tsx
 * Displays the cart as a popup tooltip
 * @author Myles Berueda <MylesWritesCode>
 **/
import React, { useContext, useEffect, useState } from "react";
import { createCart, getCart } from "@pages/api/operations/cart";
import { CreateCartDocument } from "@generated/schema";
import CartContext from "@/context/CartContext";

import { SHOPIFY_API_URL, SHOPIFY_COOKIE_ID } from "@/const";
import { getShopifyData } from "@/utils";
import styles from "./Cart.module.css";

interface CartProps {
  isShowing: boolean;
}

const Cart: React.FC<CartProps> = ({ isShowing, ...props }) => {
  // Options:
  // 1. Manage the cart via a local state, then when a user clicks "Checkout",
  //    we create a cart with the items + quantities, navigating to the Shopify
  //    managed checkout URL.
  // 2. We manage the cart via Shopify by always making various calls to the
  //    cart depending on what the user did. It looks like there are mutations
  //    for adding, deleting, and updating items in the cart. Of note, I swear
  //    I read that Shopify will throttle Storefront API requests based on the
  //    customer, not the API key like typical APIs tend to do. That means that
  //    no matter what the traffic looks like, as long as a customer isn't
  //    making millions of calls to the API, it should generally be fine.

  // Will probably be set to a Product[]; debugging with any[] for now
  const [products, setProducts] = useState<any[]>([]);
  const [cartId, setCartId] = useState<string>();
  const [cartContext, setCartContext] = useContext(CartContext);

  useEffect(() => {
    console.log("Cart component loaded!");
    // Once on mount, we want to check localStorage for our cookie id. I'd like
    // to use localStorage as our source-of-truth, since it should still be
    // there when a customer comes back to the app.
    const cookieInStorage = window.localStorage.getItem(SHOPIFY_COOKIE_ID);

    if (cookieInStorage) {
      getCart(cookieInStorage).then((data) => {
        setCartId(data.id);
      });
    } else {
      createCart().then((data) => {
        window.localStorage.setItem(SHOPIFY_COOKIE_ID, data.id);
        setCartId(data.id);
      });
    }

    return () => {
      console.log("Cart component unmounted!");
    };
  }, []);

  useEffect(() => {
    if (cartId) {
      setCartContext({
        id: cartId,
        lines: products,
      });
    }
    // I'm scared this will re-render constantly, but we'll see.
  }, [cartId, products]);

  return (
    <div style={{ position: "relative", display: isShowing ? "flex" : "none" }}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Cart</p>
        </div>
        <div className={styles.cart}>
          {products.length <= 0 && (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
