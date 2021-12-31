/**
 * File: /src/const.ts
 * Project: shoepify
 * Purpose: Holds constants that are needed throughout the app.
 *
 * @author Myles Berueda
 * @date   Friday December 31st 2021
 * *****
 * Modified: Friday December 31st 2021 1:36:16 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/

// I really don't want to deal with these long names:
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const apiVer = process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_VERSION;

export const API_URL = `https://${domain}/api/${apiVer}/graphql.json`;
