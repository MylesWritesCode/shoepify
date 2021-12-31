declare namespace NodeJS {
  interface ProcessEnv {
    locale: string;
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: string;
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN: string;
    SHOPIFY_GRAPHQL_API_VERSION: string;
  }
}