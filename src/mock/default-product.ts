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

interface DefaultProductType {
  title: string;
  company: string;
  description: string;
  price: number;
  discount: number;
  images: ProductImage[];
}

const defaultProduct: DefaultProductType = {
  title: "Fall Limited Edition Sneakers",
  company: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250.0,
  discount: 0.5,
  images: [
    {
      src: "/fall-limited-edition/image-product-1.jpg",
      thumbnail: "/fall-limited-edition/image-product-1-thumbnail.jpg",
    },
    {
      src: "/fall-limited-edition/image-product-2.jpg",
      thumbnail: "/fall-limited-edition/image-product-2-thumbnail.jpg",
    },
    {
      src: "/fall-limited-edition/image-product-3.jpg",
      thumbnail: "/fall-limited-edition/image-product-3-thumbnail.jpg",
    },
    {
      src: "/fall-limited-edition/image-product-4.jpg",
      thumbnail: "/fall-limited-edition/image-product-4-thumbnail.jpg",
    },
  ],
};

export default defaultProduct;
