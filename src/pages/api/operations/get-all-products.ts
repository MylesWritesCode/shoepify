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
import { GetAllProductsDocument } from "@generated/schema";

type GetAllProductsResponseType = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };

  // I'm still unsure of what I want in each product for this call. In the
  // meantime, I'm just gonna inline the object here; note that this is a
  // Product[], not a single Product
  products?: {
    id: string;
    title: string;
    vendor: string;
    handle: string;
    images: string[];
  }[];
};

export const getAllProducts = async () => {
  const { data } = await getShopifyData(
    SHOPIFY_API_URL,
    GetAllProductsDocument
  );

  const products: any[] = [];
  
  const { pageInfo, edges } = data.products;
  
  // Normalize all the data coming from the Shopify response
  edges.map(({ node }: any) => {
    products.push(node);
  });

  return {
    pageInfo,
    products,
  };
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetAllProductsResponseType>
) => {
  res.status(200).json(await getAllProducts());
};

// I'll still export this as default, since it's the way to fetch this route
// via a fetch call (or in the browser/Postman/etc). The thing is, the only 
// *thing* that should be calling this route is this app, so we should just call
// the function (i.e. getAllProducts, in this file) from our other components.
export default handler;
