/**
 * File: /src/components/products/ProductGallery.tsx
 * Project: shoepify
 * Purpose: Meant to display the images of a single product on the product page
 *          e.g. /product?id={x}
 *
 *          The first image passed into the array will be the default "featured"
 *          picture in this gallery setup, though I'd like some functionality
 *          that allows a developer to display another picture - picked through
 *          indexing.
 *
 *          To thumbnail, or not to thumbnail? I'd like some functionality where
 *          the dev can just send in the full blown images to this component,
 *          but optimizations can be made with thumbnails available. I'll keep
 *          it as an optional prop for now.
 *
 * @author Myles Berueda
 * @date   Wednesday December 29th 2021
 * *****
 * Modified: Wednesday December 29th 2021 1:13:44 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import React, { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@type/product-image.type";
import styles from "./ProductGallery.module.css";

// Mock data
import defaultProduct from "@mock/default-product";

interface ProductGalleryProps {
  srcs: string[] | ProductImage[];
  defaultIndex?: number;
}

/**
 *
 * @param { string[] | ProductImage[] } srcs - Either a string[] of full-sized
 * images, or a ProductImage[] of full-sized images along with their respective
 * thumbnails.
 * @param { number } defaultIndex
 */
const ProductGallery: React.FC<ProductGalleryProps> = ({
  srcs = defaultProduct.images,
  defaultIndex = 0,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.featured}></div>
      <div className={styles.thumbnails}>
        {srcs.map((image, index) => {
          // I have to do all of this cause otherwise TS gets super mad at me.
          const thumbnail = typeof image === "string" ? image : image.thumbnail;

          return (
            <Image
              key={index}
              // Again, like, 😡😡😡 👈 that mad
              src={(thumbnail as string) ?? image}
              height={50}
              width={50}
              alt="thumbnail"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
