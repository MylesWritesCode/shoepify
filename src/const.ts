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
  url: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, // Shopify domain
  ver: process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_VERSION, // API version
};

export const API_URL = app.url;
export const SHOPIFY_API_URL = `https://${s.url}/api/${s.ver}/graphql.json`;
