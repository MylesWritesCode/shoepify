declare namespace NodeJS {
  interface ProcessEnv {
    locale: string;
    SHOPIFY_STORE_DOMAIN: string;
    SHOPIFY_STOREFRONT_TOKEN: string;
    SHOPIFY_GRAPHQL_API_VERSION: string;
  }
}