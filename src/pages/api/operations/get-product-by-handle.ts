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

import { API_URL } from "@/const";

interface GetProductByHandleType {}

export const getProductByHandle = async (handle: string) => {
  console.log(handle);
  const data = await getShopifyData(API_URL, GetProductByHandleDocument, {
    handle: handle,
  });

  // console.log(data);
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<GetProductByHandleType>
) => {};

export default handler;
