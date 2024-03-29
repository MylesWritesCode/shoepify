declare namespace NodeJS {
  interface ProcessEnv {
    locale: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_HOSTED_URL: string;
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: string;
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN: string;
    NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_VERSION: string;
    NEXT_PUBLIC_SHOPIFY_CART_COOKIE: string;
  }
}