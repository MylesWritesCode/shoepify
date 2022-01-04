/**
 * File: /src/mock/default-product.ts
 * Project: govalo-store-playground
 * Purpose: Default product for use in product page development
 *
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * -----
 * Modified: Tuesday December 28th 2021 9:36:16 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import type { ProductImage } from "@type/product-image.type";
import type { Product } from '@type/product.type'


const defaultProduct: Product = {
  id: "1",
  title: "Fall Limited Edition Sneakers",
  handle: "test-product-1",
  vendor: "Sneaker Company",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  priceRange: {
    minVariantPrice: {
      amount: 250.0,
      currencyCode: "USD",
    },
  },
  images: [
    {
      url: "/fall-limited-edition/image-product-1.jpg",
      thumbnail: "/fall-limited-edition/image-product-1-thumbnail.jpg",
      altText: undefined,
    },
    {
      url: "/fall-limited-edition/image-product-2.jpg",
      thumbnail: "/fall-limited-edition/image-product-2-thumbnail.jpg",
    },
    {
      url: "/fall-limited-edition/image-product-3.jpg",
      thumbnail: "/fall-limited-edition/image-product-3-thumbnail.jpg",
    },
    {
      url: "/fall-limited-edition/image-product-4.jpg",
      thumbnail: "/fall-limited-edition/image-product-4-thumbnail.jpg",
    },
  ],
  discount: 0
};

export default defaultProduct;
