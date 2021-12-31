/**
 * File: /src/utils/get-all-products-query.ts
 * Project: shoepify
 * Purpose: Gets all products from Shopify
 * 
 * @author Myles Berueda
 * @date   Thursday December 30th 2021
 * *****
 * Modified: Thursday December 30th 2021 5:38:33 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/
export const productConnectionFragment = /* GraphQL */ `
  fragment productConnection on ProductConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        title
        vendor
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              originalSrc
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`;

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 250
    $query: String = ""
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(
      first: $first
      sortKey: $sortKey
      reverse: $reverse
      query: $query
    ) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`;

export default getAllProductsQuery;
