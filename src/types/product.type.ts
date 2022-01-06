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
export interface Options {
  id: string;
  name: string;
  values: string[];
}

export interface Variant {
  title: string;
  availableForSale: boolean;
  image: ProductImage;
  // TODO: FIX THIS lmfao
  selectedOptions: any;
  priceV2: any;
}

export type ProductImage = {
  url: string;
  thumbnail?: string;
  altText?: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  description: string;
  descriptionHtml: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  featuredImage?: ProductImage;
  images: ProductImage[];
  options?: Options[];
  variants?: Variant[];
  discount?: number;
}
