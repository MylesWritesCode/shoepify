/**
 * File: /src/types/product.type.ts
 * Project: shoepify
 * Purpose: Contains a product data type
 * 
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * *****
 * Modified: Tuesday December 28th 2021 9:37:58 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/

import { ProductImage } from "./product-image.type";

/**
 * 💢 jsdoc extention not working i give up
 */
export interface Product {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    }
  };
  featuredImage?: ProductImage;
  images: ProductImage[];
  variants?: {
    title: string;
    availableForSale: boolean;
    image: ProductImage;
    // TODO: FIX THIS 
    selectedOptions: any;
    priceV2: any;
  }[]
  discount?: number;
}