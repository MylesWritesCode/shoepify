/**
 * File: /src/hooks/getShopifyData.ts
 * Project: govalo-store-playground
 * Purpose: According to the Shopify docs, we can't use useShopQuery in Next.js,
 *          So we have to write out our own custom hook to get Shopify data.
 *          This hook will take the Storefront credentials and make a GraphQL
 *          query.
 * Source: https://shopify.dev/custom-storefronts/hydrogen/components#limitations
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * -----
 * Modified: Tuesday December 21st 2021 1:57:59 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/

// @todo: Make this not of type any lmao. 
export const getShopifyData = ({ query, variables}: any) => {
  
  const res = {
    props: {
      data: null,
      errors: null,
    }
  };
  
  try {
    // @note: I know there's a better way to do this. The question is, how many
    // dependencies am I willing to put into this project? I'd also have to
    // consult my other projects, since I don't really remember.
    // @update: Screw it I remember how to do this. Check graphql folder.

  } catch (err) {
    console.log("Error: ", err);
  }
}