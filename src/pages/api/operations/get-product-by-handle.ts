/**
 * File: /src/pages/api/operations/get-product-by-handle.ts
 * Project: shoepify
 * Purpose: Gets a product by their handle. Primarly used in product page
 *
 * @author Myles Berueda
 * @date   Tuesday January 4th 2022
 * *****
 * Modified: Tuesday January 4th 2022 7:40:15 am
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import type { NextApiRequest, NextApiResponse } from "next";
import { getShopifyData } from "@utils/getShopifyData";
import { GetProductByHandleDocument } from "@generated/schema";

import { SHOPIFY_API_URL } from "@/const";

interface GetProductByHandleType {}

export const getProductByHandle = async (handle: string) => {
  const { data } = await getShopifyData(
    SHOPIFY_API_URL,
    GetProductByHandleDocument,
    {
      handle: handle,
    }
  );

  // Start normalizing the data as to how the app will use it.
  const { product: shopifyProduct } = data;
  const { images, variants } = shopifyProduct;

  // Consider stronger typing here.
  const product = {
    ...shopifyProduct,
    images: images.edges.map(({ node }: any) => {
      return node;
    }),
    variants: variants.edges.map(({ node }: any) => {
      const { selectedOptions, ...rest } = node;

      return {
        ...rest,
        // Reduce the array to an object of it's kv-pairs.
        selectedOptions: selectedOptions.reduce(
          (a: any, option: { name: string; value: string }) => {
            return { ...a, [option.name.toLowerCase()]: option.value };
          },
          {}
        ),
      };
    }),
  };

  return product;
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<GetProductByHandleType>
) => {};

export default handler;
