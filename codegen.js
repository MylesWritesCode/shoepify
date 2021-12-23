/**
 * File: /codegen.js
 * Project: govalo-store-playground
 * Purpose: I want to use a JS file instead of YAML, cause we need stuff from
 *          shopify.config.js. Make sure that file is modified with the right
 *          stuff.
 *
 * @author Myles Berueda
 * @date   Wednesday December 22nd 2021
 * -----
 * Modified: Wednesday December 22nd 2021 10:23:07 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
const {
  storeDomain,
  storefrontToken,
} = require("./shopify.config.js");

module.exports = {
  schema: [
    {
      // Sick. We can dyncamically assign keys like this. Thanks Nick.
      [`https://${storeDomain}/api/graphql`]: {
        headers: {
          "X-Shopify-Storefront-Access-Token": storefrontToken,
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
