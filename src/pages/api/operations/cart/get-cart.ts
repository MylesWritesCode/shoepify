/**
 * src/pages/api/operations/cart/get-cart.ts
 * Retrieves the cart via GetCart query
 * @author Myles Berueda <MylesWritesCode>
 */
import { getShopifyData } from "@utils/getShopifyData";
import { GetCartDocument } from "@generated/schema";

import { SHOPIFY_API_URL, SHOPIFY_COOKIE_ID } from "@/const";

export async function getCart(id?: string | null) {
  let cartId = id ?? window.localStorage.getItem(SHOPIFY_COOKIE_ID);
  
  // NOTE I want the cartId to be nullable, so that we can pass the contents
  // of window.localStorage.getItem(...) into this function. That still doesn't
  // mean that null is a valid input, so we'll return here with an error. There
  // isn't any point of passing null to a fetch that expects an id value in the
  // mutation.
  if (cartId == null) {
    return { errors: ["The cart id was null"] };
  }

  try {
    const { data, errors } = await getShopifyData(
      SHOPIFY_API_URL,
      GetCartDocument,
      {
        id: cartId,
      }
    );

    if (errors) {
      let errorsArray = errors.reduce((prev: any, error: any) => {
        return { errors: [...prev, error.message] };
      }, []);

      return errorsArray;
    }

    return data.cart;
  } catch (err) {
    console.warn(`ERROR: get-cart.ts: ${err}`);
  }
}
