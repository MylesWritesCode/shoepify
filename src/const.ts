/**
 * File: /src/const.ts
 * Project: shoepify
 * Purpose: Holds constants that are needed throughout the app.
 *
 * @author Myles Berueda
 * @date   Friday December 31st 2021
 * *****
 * Modified: Friday December 31st 2021 1:36:16 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 ***/
const isDev = process.env.NODE_ENV === "development";

// General application variables
const app = {
  url: isDev
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_HOSTED_URL,
};

// Shopify variables
const s = {
  url: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,        // Shopify domain
  ver: process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_VERSION, // API version
  cookie: process.env.NEXT_PUBLIC_SHOPIFY_CART_COOKIE,      // Cookie id 
};

// Log warnings for missing variables
if (!app.url) {
  console.warn(
    `ERROR: ${app.url} is not a valid url. Check your NEXT_PUBLIC_API_URL and NEXT_PUBLIC_HOSTED_URL environment variables`
  );
}

if (!s.url) {
  console.warn(
    `ERROR: ${s.url} is not a valid url. Check your NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN environment variables`
  );
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
// Basically this is `app.url ? app.url : ""`
export const API_URL = app.url || "";
export const SHOPIFY_API_URL =
  s.url && s.ver ? `https://${s.url}/api/${s.ver}/graphql.json` : "";
export const SHOPIFY_COOKIE_ID = s.cookie ?? "shopify:cid";
