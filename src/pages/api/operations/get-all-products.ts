/**
 * File: /src/pages/api/operations/get-all-products.ts
 * Project: shoepify
 * Purpose: API route for getting all products from Shopify
 *
 * @author Myles Berueda
 * @date   Monday January 3rd 2022
 * *****
 * Modified: Monday January 3rd 2022 9:22:34 am
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import type { NextApiRequest, NextApiResponse } from "next";
import { SHOPIFY_API_URL } from "@/const";
import { getShopifyData } from "@utils";
import getAllProductsQuery from "@utils/queries/get-all-products-query";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getShopifyData(SHOPIFY_API_URL, getAllProductsQuery, {});
  
  console.log("get-all-products:", data);
  
  res.status(200).json({
    products: [
      {
        name: "product 1",
        data: "data 1",
      },
      {
        name: "product 2",
        data: "data 2",
      },
    ],
  });
};

export default handler;
