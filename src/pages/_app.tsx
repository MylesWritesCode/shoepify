/**
 * File: /src/pages/_app.tsx
 * Project: shoepify
 * Purpose: Main entry into app
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * *****
 * Modified: Tuesday December 21st 2021 8:21:59 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import "../styles/globals.css";
import React, { useState } from "react";
import shopifyConfig from "shopify.config";
import type { AppProps } from "next/app";
import { ShopifyServerProvider } from "@shopify/hydrogen";
import Navbar from "@components/navbar/Navbar";
import CartContext from '@/context/CartContext';

function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState({});

  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig}>
      <>
        <CartContext.Provider value={[cart, setCart]}>
          <Navbar />
          <div className="content-container">
            <div className="content">
              <Component {...pageProps} />
            </div>
          </div>
        </CartContext.Provider>
      </>
    </ShopifyServerProvider>
  );
}

export default App;
