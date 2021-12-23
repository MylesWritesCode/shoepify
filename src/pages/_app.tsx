/**
 * File: /src/pages/_app.tsx
 * Project: govalo-store-playground
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * -----
 * Modified: Tuesday December 21st 2021 8:21:59 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ShopifyServerProvider, DefaultRoutes } from "@shopify/hydrogen";

import shopifyConfig from "../../shopify.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig} >
      <Component {...pageProps} />
    </ShopifyServerProvider>
  );
}

export default MyApp;
