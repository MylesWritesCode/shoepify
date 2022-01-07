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

To install: https://shopify-graphiql-app.shopifycloud.com/login

Read-only explorer: https://shopify.dev/graphiql/admin-graphiql

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
example:

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
import { useGetShopName } from "@generated/schema.ts";

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

Alternatively, if using `getShopifyData` (i.e., you need to pull data via
`getStaticProps`), you can pass the generated document to `getShopifyData`.

```tsx
// In pages/api/operations/get-shop-name.ts
import { GetShopNameDocument } from "@generated/schema";

// ...code...

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetAllProductsResponseType>
) => {
  // This should all be extracted to its own fn as well
  const shopifyResponse = await getShopifyData(
    SHOPIFY_API_URL,
    GetShopNameDocument
  );

  // ...more code...

  res.status(200).json(response);
};

export default handler;

```

```tsx
// In pages/SomeComponent.tsx
import { GetShopNameDocument } from "@generated/schema.ts";

// ...code...
export const getStaticProps = async () => {
  const res = await fetch(url);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

```

For a code example of this workflow:
```md
1. Wrote graphql code 
   - src/graphql/queries/GetAllProducts.graphql

2. Ran `yarn generate:graphql`

3. Wrote API route for server side call
   - src/pages/api/operations/get-all-products.ts

4. Wrote `getStaticProps()` fn to call API
   - src/pages/products/index.tsx

5. Used data as props from `getStaticProps()` in Products component
```
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
3. GraphQL (if using manual GraphQL calls)
4. Apollo (needed for @graphql-codegen)
5. GraphQL Codegen (creates hooks based on gql calls)

# Notes
**Jan 6, 2022** Long day, short attention span
- Link up OptionsPicker to [handle] page by sending data back to the parent
- Establish algo for searching through variants for selected options - this is
  probably just going to be some iterative Array method
- Start scaffolding the cart out - gotta start somewhere

**Jan 5, 2022** Again with the notes :)
- ~~Build out SizePicker component. I think it might be better to generalize this
  component e.g. size, style, material, etc. picker. It's not that big of an ask
  once I have my data transforms down pact, but I'd really like these transforms
  down before I start with the component.~~
- ~~Build out better transforms for variant and option data. Notes below under
  @transform.~~

**Jan 4, 2022** More notes 🤙 Pushed to production today as well
- ~~Grab more items to fill out the store. It's pretty tedious to do right now ngl~~
- ~~Work out variant display on product page (`[handle].tsx`)~~
- Build out cart component - I think I'm gonna just deal with the drawer/modal
  thingy shown in the Frontend Mentor design; Shopify has its own checkout page
  and the customer can see their itemized orders there

**Jan 3, 2022** Spent most (all) of the day figuring out what I'd consider the
best way to pull data down from Shopify that doesn't burn through my API
throttling threshold. I've updated the docs (this readme) to show what my
workflow looks like when trying to pull data from the backend. Now, some todos
and notes for tomorrow:
- ~~Work on [handle] route to pull a single product and display it using the
  template.~~
- ~~Build out template for products index page (collection of all products)~~

**Dec 30, 2021** Responsiveness is done...for now. I now need to focus on 
getting products from Shopify into the app. I have two options - using GraphQL 
codegen to just generate the hook myself via the Storefront API and the plethora
of endpoints available, or using the Shopify node package. On the one hand, I've
already set up codegen and all I'll have to do is look for the endpoints in the
Storefront API docs. On the other hand, I kinda want to learn how to use the
Shopify package anyway.
- ~~Pull something from the Shopify backend~~
- ~~Move code from `products/index.tsx` to `products/[id].tsx` or something.~~
- ~~Either get mock data for a full collection, or just upload a bunch of stuff
  to the backend so I have data to play with while styling the collection grid.~~
- ~~Set up API endpoint on the Next server side to make sensitive calls (e.g.,
  calls that contain API keys)~~

**Dec 29, 2021**
- ~~Really need to work on responsive styles on mobile. Wew lad it's a mess there
right now. It looks like the first thing that needs to be properly styled 
(responsively), is the navbar.~~

**Dec 28, 2021** This should probably be in a NOTES.md or something, but I'll
just leave this in here for now. Anyway - notes for tomorrow:
- ~~Styles for general layout. Expanding the full width looks bad on big monitors~~
- ~~Implement product gallery - I'm pretty sure this'll be a component on its own~~
- ~~Find more assets to upload to Shopify - probably just going to take mock 
content from Nike or Footlocker or something~~

**Dec 27, 2021**
- ~~Style out the rest of the InfoBox component~~
- ~~Add in hardcoded product to index.tsx~~

**Dec 22, 2021** More general notes and todos.
- ~~I should probably set up `@shopify/hydrogen` to see how it works. Tomorrow
will probably be doc reading time~~
- ~~Pull in assets from an ecommerce project on frontendmentor.io~~

**Dec 21, 2021** Some general todos to remind myself tomorrow.
- ~~Set up graphql-codegen: I'm fairly certain I just need the right schema URL~~
- ~~Finish `getShopifyData.ts`~~

### Considerations
- ~~Need to think about SSR, because it'll be better overall for SEO~~
  > The app uses static generation for pages that *need* SEO (e.g. product and
  > collection pages), and I don't think I'll need static generation for the
  > cart or user profiles (when I eventually get there)
- ~~Think about handling errors in `getShopifyData`, instead of giving that 
  responsibility to the caller. Maybe it can throw an error that can be logged
  or something.~~
  > I'm going to handle this in the app API rather than the util
- ~~It might be better to just call via the REST API, cause holy moly lord
  almighty that response you get back is gross. It's so bloated. Either come up
  with a way to clean this data on entry, or look for another fetching solution.~~
  > It wasn't as bad as I initially thought, especially cause I could split the
  > code up between the template/normalize logic/data fetch functions.
- ~~Dev vs prod builds with respect to the API url - I should make this dynamic at
  some point. the API URL and the store domain are essentially the same thing in
  prod, but they're different in dev (localhost vs store domain). Not high prio
  right now so I'm just moving on.~~
  > Turns out I went down the wrong rabbithole; I just ended up calling the fn
  > directly, rather than trying to use `fetch` for no reason. The server 
  > doesn't/shouldn't need to call itself to get data; that doesn't make sense.
  > View the graphql-codegen example above to see the workflow I've adopted.
  
# Weird ramblings
Pay no mind to the man behind the curtain 🧙‍♂️

**@transform:** 

**Jan 6 2022 Update** I'm now under the impression that I don't need to do more
data transformation in the page itself; the component should be in charge of 
whatever transformations it needs, and it should send data back to the template
based on what's picked. Based on reading what I wrote yesterday, this seems to 
be another issue of over-thinking  🤦‍♂️. KISS.

You know what, I **do** want people to click on options even if they're not in
stock. It'll give more opportunities for the Govalo OOS integration to work, 
when I eventually get to it.

**Jan 5 2022** I'm not liking how this is working out. Essentially, I want to 
one call to the backend, transform that into useable data, then stick all that 
data into a state within the page. Things I want to be able to efficiently:
- Display all the options (styles, sizes, etc) on the product page
- When a user clicks on an option, disable the buttons for the other options of
  which none are available e.g.

  > - A user clicks size 9
  > - Classic greys out, because we don't have a size 9 Classic in stock
  
  > - A user clicks the style Running
  > - Sizes 7, 9, and 12 grey out. They're not available

My first thought was to create a hash map with the variants, but this is kinda
weird because I'm not a huge fan of magic strings vs a dictionary e.g. 
```ts
// I don't wanna do this way
findSomehowWithAFunction(variants, "10/Classic")  

// I want to do this way
variants["10"]["Classic"]
```
This is why I write things out though, cause now that I'm exposing my
thoughts, I'm realizing that the dictionary is actually a dumb way to do this.
If, say, we don't have a shoe size in `x`, and we look up using the dictionary 
e.g. `variants[x][y]`, even if variant exists in `y` style, this will throw an
error. What I'm left with is a really slow lookup through the array of variant
objects. So maybe the magic string is the only way I can do this.

Looking up "x/y" will return `null` if we don't have size `x` in style `y`,
but this may be dumb as well. What if I want to display all the sizes we *do*
have in stock in style `y`?

The most brute-force answer I can come up with is to have two different arrays
which will output what sizes `x` we have of style `y`, but I mean, come on. At
that point I'd rather just take the hit and search through the pre-existing
array that has a `selectedOptions` object, and compare that way, via some 
iterator method. Actually that might be the only way I can do what I want. Screw
it, that's how it's I'm gonna implement this unless I figure out a better 
method.
