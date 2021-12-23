/**
 * File: /codegen.ts
 * Project: govalo-store-playground
 * Purpose: I want to use a TS file instead of YAML, cause we need stuff from
 *          shopify.conig.js. Make sure that file is modified with the right
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
import config from './shopify.config';

module.exports = {
  schema: [
    {
      // Sick. We can dyncamically assign keys like this. Thanks Nick.
      [`${config.storeDomain}/api/2021-10/graphql.json`]: {
        headers: {
          Authorization: "api-key"
        }
      },
      overwrite: true,
      generates: {
        "./src/generated/graphql.tsx": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ]
        },
        "./graphql.schema.json": {
          plugins: [
            "introspection"
          ]
        }
      },
    }

  ]
}