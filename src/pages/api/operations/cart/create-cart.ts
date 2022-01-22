/**
 * src/pages/api/operations/cart/create-cart.ts
 * Creates a cart via CreateCart mutation
 * @author Myles Berueda <MylesWritesCode>
 */
import { getCart } from "./get-cart";
import { getShopifyData } from "@utils/getShopifyData";
import { CreateCartDocument, type CartInput } from "@generated/schema";

import { SHOPIFY_API_URL, SHOPIFY_COOKIE_ID } from "@/const";

/**
 * If no cart exists, this fn will return a cart. Otherwise, returns a fresh
 * instance of a cart or errors.
 * @param { Object } [cartInput] 
 * @param { AttributesInput[] } [cartInput.attributes]
 * @param { CartBuyerIdentityInput } [cartInput.buyerIdentity]
 * @param { string[] } [cartInput.discountCodes]
 * @param { CartLineInput[] } [cartInput.lines]
 * @param { string } [cartInput.note]
 * @returns { Cart } 
 */
export async function createCart(cartInput?: CartInput) {
  // In this app, I don't ever want to overwrite if a cart already exists in
  // local storage. I'll just have this check in place to ensure something like
  // that doesn't happen.
  const cartId = window.localStorage.getItem(SHOPIFY_COOKIE_ID);

  if (cartId) {
    return getCart(cartId);
  }

  try {
    const { data, errors } = await getShopifyData(
      SHOPIFY_API_URL,
      CreateCartDocument,
      {
        cartInput: cartInput,
      }
    );

    // NOTE I may want to extract this (literally copied-and-pasted) code into
    // some util fn. I'm sure I'll just want an errors array (or maybe a 
    // hashmap) in the frontend to display errors to users.
    if (errors) {
      let errorsArray = errors.reduce((prev: any, error: any) => {
        return { errors: [...prev, error.message] };
      }, []);

      return errorsArray;
    }

    // This will be changed to a result object
    return data.cartCreate.cart;
  } catch (err) {
    console.warn(`ERROR: create-cart.ts: ${err}`);
  }
}
