# Overview
This is a small learning project meant to use the Shopify API as the backend.

### Branches
I've deployed this to Vercel @ https://shoepify.vercel.app where the only route
that matters so far is [the products index](https://shoepify.vercel.app/products). 
This creates a few problems for me: I don't want Vercel to rebuild this every 
time I sync master. I'm left with two options: Create a production branch, or 
create a dev branch. I'm opting for the production branch instead; I just gotta
remember to merge into that when I want it deployed.

- Created production branch that pushes to Vercel

# Installation
```
# yarn
yarn install

# npm
npm install
```

## Config
### Shopify
Make sure to copy and configure `.env` with your Shopify data. All of this data 
can be found in your store settings. 

```
cp .env.example .env
```

### Store variables
For ease of use, I've created a config file - `src/config/shop.ts`. This file
can be modified to change different variables throughout the app. Right now it's
being used to generate the links and brand text in the navbar. Just open the
file lol.

### GraphQL codegen
~~Modify `codegen.yml` with your GraphQL endpoint on Shopify.~~

**Update** I've updated this to just pull from your `.env`, so make sure to
configure that. After that, build out your GraphQL code in `/graphql`, then run 
the graphql codegen script below. For building out your queries and mutations,
check this reference:

https://shopify-graphiql-app.shopifycloud.com/

## To run
```
# Just need one terminal for this guy
yarn dev
```

The app should be accessible via browser @ http://localhost:3000

# Scripts
**GraphQL Codegen**
```bash
yarn generate:graphql
```
To properly use this script, here's the workflow:

0. Make sure that your `.env` is properly configured
1. Write out some super sick GraphQL code in a file that lives in `src/graphql`
2. Run `yarn generate:graphql`. This will create/update a file in 
`src/generated` 
3. Open the component/page you're working on, then import the generated file 
like below. You should be able to use the hook in the component. Here's an 
example

```graphql
# In GetShopName.graphql
query getShopName {
  shop {
    name
  }
}
```

```tsx
// In SomeComponent.tsx
import { useGetShopName } from "@generated/graphql";

// ...some code...

const SomeComponent: React.FC<SomeComponentProps> = ({...props}) => {
  const { data, loading, error } = useGetShopName();
  // ...some more code...
  return (
    // ...template code...
    <div>{data}</div>
    // ...more template code...
  );
}

export default SomeComponent;
```
This is a contrived example, but if you're feeling adventurous you can look in
`generated/graphql.tsx` and search for your generated GraphQL call by looking 
for your query/mutation name. In the above case, it was `GetShopName`. There's 
some pretty good documentation in there on how to use each generated hook.

# Frontend Mentor
Because I don't want to make any of my own assets, I'm going to be using
[Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) for all of my frontend assets. I don't have
access to the Figma/Sketch designs with a free account, so everything will be my
best approximation based on the pictures I've seen. Of note, I'll probably
hard-code the products for now, but eventually I'm going to need to move it to
Shopify's backend.

# Dependencies 
1. React a la Typescript
2. Nextjs
3. [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen/getting-started/create)
4. GraphQL (if using manual GraphQL calls)
    1. Apollo (needed for @graphql-codegen)
    2. GraphQL Codegen (creates hooks based on gql calls)

# Notes
**Dec 21, 2021** Some general todos to remind myself tomorrow.
- ~~Set up graphql-codegen: I'm fairly certain I just need the right schema URL~~
- Finish `getShopifyData.ts`

**Dec 22, 2021** More general notes and todos.
- ~~I should probably set up `@shopify/hydrogen` to see how it works. Tomorrow
will probably be doc reading time~~
- ~~Pull in assets from an ecommerce project on frontendmentor.io~~

**Dec 27, 2021**
- ~~Style out the rest of the InfoBox component~~
- ~~Add in hardcoded product to index.tsx~~

**Dec 28, 2021** This should probably be in a NOTES.md or something, but I'll
just leave this in here for now. Anyway - notes for tomorrow:
- ~~Styles for general layout. Expanding the full width looks bad on big monitors~~
- Implement product gallery - I'm pretty sure this'll be a component on its own
- Find more assets to upload to Shopify - probably just going to take mock 
content from Nike or Footlocker or something

**Dec 29, 2021**
- Really need to work on responsive styles on mobile. Wew lad it's a mess there
right now. It looks like the first thing that needs to be properly styled 
(responsively), is the navbar.

