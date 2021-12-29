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
import type { AppProps } from "next/app";
import { ShopifyServerProvider, DefaultRoutes } from "@shopify/hydrogen";
import Navbar from "@components/Navbar/Navbar";

import shopifyConfig from "../../shopify.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig}>
      <>
        <Navbar />
        <div className="content-container">
          <div className="content">
            <Component {...pageProps} />
          </div>
        </div>
      </>
    </ShopifyServerProvider>
  );
}

export default MyApp;
