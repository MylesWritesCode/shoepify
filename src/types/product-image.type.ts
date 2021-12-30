/**
 * File: /src/types/product-image.type.ts
 * Project: shoepify
 * Purpose: Unsure if I need this; On the one hand, it would be much safer to 
 *          have a data type that maps thumbnails to full images, but on the
 *          other hand, what if the dev (or the store) doesn't contain any 
 *          thumbnails?
 *          
 *          Update: I'll just typecheck this in relevant components e.g.
 *          `ProductGallery.tsx`, allowing us to only send in one prop instead
 *          of two.
 * 
 * @author Myles Berueda
 * @date   Wednesday December 29th 2021
 * *****
 * Modified: Wednesday December 29th 2021 1:37:05 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/

/** ProductImage type
 * @param { string } src
 * @param { string } [thumbnail]
 */
export type ProductImage {
  type: 'ProductImage'
  src: string;
  thumbnail?: string;
}