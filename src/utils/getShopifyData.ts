/**
 * File: /src/hooks/getShopifyData.ts
 * Project: shoepify
 * Purpose: Gets data from Shopify w/ authentication
 *
 * Source: https://shopify.dev/custom-storefronts/hydrogen/components#limitations
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * *****
 * Modified: Tuesday December 21st 2021 1:57:59 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/

import { DocumentNode } from "@apollo/client";

/**
 * Retrieves data from the Shopify backend.
 * @param { string } url
 * @param { string | DocumentNode } query
 * @param { Object } variables
 * @returns { Object } The response from the backend.
 */
export const getShopifyData = async (
  url: string,
  query: string | DocumentNode,
  variables?: Object
) => {
  if (typeof query !== 'string' && typeof query === 'object') {
    if (query.loc) {
      query = query.loc?.source.body;
    } else {
      console.warn(`ERROR: Query targeting URL ${url} is invalid.`);
    }
  }

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
      "Content-Type": "application/json",
    },
  });

  // Think about handling errors here.
  return await res.json();
};
