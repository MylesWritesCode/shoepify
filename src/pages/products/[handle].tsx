/**
 * File: /src/pages/products/[handle].tsx
 * Project: govalo-store-playground
 * Purpose: Pulls some data via a handle. I'm going to change this to instead
 *          pull a product by id, but that'll be after I create all the util
 *          functions you need for Shopify.
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * *****
 * Modified: Tuesday December 21st 2021 1:45:32 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import { Product as ShopifyProduct } from "@shopify/hydrogen";
import { NextPage } from "next";

import { getShopifyData } from "@utils/getShopifyData";

// export const getStaticProps = async ({ params }: any) => {
//   const { data } = getShopifyData({
//     query: QUERY,
//     variables: { handle: params.handle },
//   });

//   return {
//     props: data,
//     revalidate: 5,
//   };
// };

export const Product: NextPage = ({ data }: any) => {
  return (
    <ShopifyProduct product={data.product}>
      {
        // other stuff
      }
    </ShopifyProduct>
  );
};
