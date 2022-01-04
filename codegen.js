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
const dotenv = require("dotenv");
dotenv.config();

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_VERSION;

module.exports = {
  schema: [
    {
      // Sick. We can dyncamically assign keys like this. Thanks Nick.
      [`https://${domain}/api/${version}/graphql`]: {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
        },
      },
    },
  ],
  documents: ["src/graphql/**/*.graphql"],
  overwrite: true,
  generates: {
    "src/generated/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        scalars: {
          ID: "string",
        },
      },
    },
    "src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};
