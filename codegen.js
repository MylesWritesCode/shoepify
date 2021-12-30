/**
 * File: /codegen.js
 * Project: shoepify
 * Purpose: Config for graphql-codegen. Updated to use env vars instead of 
 *          pulling from `shopify.config.js`
 * 
 * @author Myles Berueda
 * @date   Wednesday December 22nd 2021
 * *****
 * Modified: Wednesday December 22nd 2021 10:23:07 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  schema: [
    {
      // Sick. We can dyncamically assign keys like this. Thanks Nick.
      [`https://${process.env.storeDomain}/api/graphql`]: {
        headers: {
          "X-Shopify-Storefront-Access-Token": process.env.storefrontToken,
        },
      },
    },
  ],
  documents: ["src/graphql/**/*.graphql"],
  overwrite: true,
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
