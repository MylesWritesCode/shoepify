/**
 * File: /shopify.config.js
 * Project: govalo-store-playground
 * Purpose: Config for Shopify Storefront API
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * -----
 * Modified: Tuesday December 21st 2021 11:13:27 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/

module.exports = {
  locale: process.env.locale ?? "",
  storeDomain: process.env.storeDomain ?? "",
  storefrontToken: process.env.storefrontToken ?? "",
  graphqlApiVersion: process.env.graphqlApiVersion ?? "",
};
