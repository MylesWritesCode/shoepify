# Overview
This is a small learning project meant to use the Shopify API as the backend.

# Installation
```
# yarn
yarn install

# npm
npm install
```

## Config
### Shopify
Make sure to copy and configure `shopify.config.example.js` with your Shopify
data. All of this can be found in your store settings.
```
cp shopify.config.example.js shopify.config.js
```
### GraphQL codegen
~~Modify `codegen.yml` with your GraphQL endpoint on Shopify.~~

**Update** I've updated this to just pull from your `shopify.config.js`, so 
make sure to configure that. After that, build out your GraphQL code in 
`/graphql`, then run the graphql codegen script below. For building out your
queries and mutations, check this reference:

https://shopify-graphiql-app.shopifycloud.com/

## To run
```
# Just need one terminal for this guy
yarn dev
```

The app should be accessible via browser @ http://localhost:3000

# Scripts
**GraphQL Codegen**
```
# First, build out your *.graphql code in /graphql
# Once you have the queries/mutations you want, runt he following script below:
yarn generate:graphql
```
This will generate hooks that you can call from `/generated` as hooks.

# Frontend Mentor
Because I don't want to make any of my own assets, I'm going to be using
[Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) for all of my frontend assets. I don't have
access to the Figma/Sketch designs with a free account, so everything will be my
best approximation based on the pictures I've seen. Of note, I'll probably
hard-code the products for now, but eventually I'm going to need to move it to
Shopify's backend.

# Dependencies 
1. React
2. Nextjs
3. [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen/getting-started/create)

# Notes
**Dec 21, 2021** Some general todos to remind myself tomorrow.
- ~~Set up graphql-codegen: I'm fairly certain I just need the right schema URL~~
- Finish `getShopifyData.ts`

**Dec 22, 2021** More general notes and todos.
- I should probably set up `@shopify/hydrogen` to see how it works. Tomorrow
will probably be doc reading time
- Pull in assets from an ecommerce project on frontendmentor.io