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

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
