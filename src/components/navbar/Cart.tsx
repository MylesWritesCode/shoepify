/**
 * File: /src/components/navbar/Cart.tsx
 * Project: shoepify
 * Purpose: Displays the cart as a popup tooltip
 *
 * @author Myles Berueda
 * @date   Friday January 7th 2022
 * *****
 * Modified: Friday January 7th 2022 8:33:58 am
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import React, { useEffect, useState } from "react";
import { CreateCartDocument } from "@generated/schema";
import { SHOPIFY_API_URL } from "@/const";

import { SHOPIFY_COOKIE_ID } from "@/const";
import styles from "./Cart.module.css";
import { getShopifyData } from "@/utils";

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

  // Debug useEffect
  useEffect(() => {
    console.log("component mounted");
    // We're going to use localStorage 'cause turns out I don't remember how to
    // set cookies and all the examples I found used even more Node packages.

    // On mount, we're gonna check localStorage to see if a cartId exists
    const localCartId = window.localStorage.getItem(SHOPIFY_COOKIE_ID);

    // No async, so can't await; gotta do it this way, bud
    getShopifyData(SHOPIFY_API_URL, CreateCartDocument).then(({ data }) =>
      console.log(data.cartCreate.cart.id)
    );

    return () => {
      // We really don't want this to unmount because it'll be holding our cart
      // state. Unless Shopify will take care of all that goodness for us.
      console.log("component unmounted");
    };
  }, []);

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
