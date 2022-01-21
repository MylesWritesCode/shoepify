/**
 * src/pages/api/operations/cart/update-cart.ts
 * Updates cart items via UpdateCart mutation
 * @author Myles Berueda <MylesWritesCode>
 */
import { getShopifyData } from "@utils/getShopifyData";
import {
  UpdateCartDocument,
  type CartLineUpdateInput,
} from "@generated/schema";

import { SHOPIFY_API_URL, SHOPIFY_COOKIE_ID } from "@/const";

export async function updateCart(
  cartInput: CartLineUpdateInput,
  id: string | null = window.localStorage.getItem(SHOPIFY_COOKIE_ID)
) {
  console.log("update-cart.ts: id: ", id);

  // We don't need to go further if the id is null
  if (id == null) return { errors: ["The cart id was null"] };

  try {
    const { data, errors } = await getShopifyData(
      SHOPIFY_API_URL,
      UpdateCartDocument,
      {
        cartId: id,
        lines: cartInput,
      }
    );

    if (errors) {
      let errorsArray = errors.reduce((prev: any, error: any) => {
        return { errors: [...prev, error.message] };
      }, []);

      return errorsArray;
    }

    console.log("update-cart.ts: data: ", data);

    return data;
  } catch (err) {
    console.warn(`ERROR: update-cart.ts: ${err}`);
  }
}
