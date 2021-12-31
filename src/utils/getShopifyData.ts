/**
 * File: /src/hooks/getShopifyData.ts
 * Project: govalo-store-playground
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

/**
 * Retrieves data from the Shopify backend.
 * @param { string } query
 * @param { Object } variables
 * @param { string } url 
 * @returns { Object } The response from the backend. 
 */
export const getShopifyData = async ({ query, variables, url }: any) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN,
      "Content-Type": "application/json",
    },
  });
  
  // Think about handling errors here.
  return await res.json();
};
