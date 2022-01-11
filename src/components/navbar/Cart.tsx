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
import React from "react";

interface CartProps {}

// Alright, so it looks like I have some work ahead of me. I want to have all 
// the cart data in this navbar, which will exist kinda like a singleton 
// throughout the application. I have to be able to add and remove from the cart
// via simple functions, which updates this view template. Finally, when a 
// customer wants to checkout, I want a button on this cart tooltip that sends
// them to the Shopify checkout page, so I don't have to make it myself.
const Cart: React.FC<CartProps> = ({ ...props }) => {
  // I'm half tempted to just store everything (products, variantIds, quantity)
  // in states here. But I don't know if that's a good idea. On one hand, I'll
  // only be making one call to GraphQL. On the other, I don't have any locks on
  // products, creating race conditions with multiple customers on the same
  // inventory. Yeah. I'll just use GraphQL and Shopify lmfao.
  return (
    <div>
      <div>
        <div>testing</div>
      </div>
    </div>
  );
};

export default Cart;