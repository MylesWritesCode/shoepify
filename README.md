# Overview
This is a small learning project meant to use the Shopify API as the backend.

# Installation
```
# yarn
yarn install

# npm
npm install
```

## To run
```
# Just need one terminal for this guy
yarn dev
```

The app should be accessible via browser @ http://localhost:3000

# Scripts
**GraphQL Codegen**
```
# To generate hooks from *.graphql, you should just be able to run:
yarn generate:graphql
```
> @note: This is dependent on the config in codegen.yml. If the schema is wrong,
> then you won't be able to generate React hooks. As of now (Dec. 21), it's
> still broken. I need to do some research into how to properly hook this up
> to Shopify. I'm pretty sure I just need to have the right shopId, but we'll
> see.

# Dependencies 
1. React
2. Nextjs
3. [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen/getting-started/create)

# Notes
**Dec 21, 2021** Some general todos to remind myself tomorrow.
- Set up graphql-codegen: I'm fairly certain I just need the right schema URL
- Finish `getShopifyData.ts`