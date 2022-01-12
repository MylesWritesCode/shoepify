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
  //    for adding, deleting, and updating items in the cart. 

  // Will probably be set to a Product[]; debugging with any[] for now
  const [products, setProducts] = useState<any[]>([]);

  // Debug useEffect
  useEffect(() => {
    console.log("component mounted");

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
