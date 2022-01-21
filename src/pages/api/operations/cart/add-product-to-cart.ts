/**
 * src/pages/api/operations/cart/add-product-to-cart.ts
 * Adds products to cart via AddToCart mutation
 * @author Myles Berueda <MylesWritesCode>
 */
import { getShopifyData } from "@utils/getShopifyData";
import { AddToCartDocument, CartLineInput } from "@generated/schema";

import { SHOPIFY_API_URL, SHOPIFY_COOKIE_ID } from "@/const";

export async function addProductToCart(
  cartLineInput: CartLineInput,
  cartId: string | null = window.localStorage.getItem(SHOPIFY_COOKIE_ID)
) {
  if (cartId == null) return { errors: ["The cart id was null"] };

  console.log(cartId);
  console.log(cartLineInput);

  try {
    const { data, errors } = await getShopifyData(
      SHOPIFY_API_URL,
      AddToCartDocument,
      {
        cartId: cartId,
        lines: [cartLineInput],
      }
    );

    if (errors) {
      let errorsArray = errors.reduce((prev: any, error: any) => {
        return { errors: [...prev, error.message] };
      }, []);

      return errorsArray;
    }

    return data.cartLinesAdd.cart;
  } catch (err) {
    console.warn(`ERROR: pages/products/[handle].tsx: ${err}`);
  }
}
