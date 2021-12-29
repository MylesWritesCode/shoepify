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
import Navbar from "@components/navbar/Navbar";

import shopifyConfig from "shopify.config";

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
        {/* This is what qualifies as my footer for now */}
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </>
    </ShopifyServerProvider>
  );
}

export default MyApp;
