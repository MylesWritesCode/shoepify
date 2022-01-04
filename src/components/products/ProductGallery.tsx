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
  srcs: ProductImage[] | string[];
  defaultIndex?: number;
}

/** ProductGallery component
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
  const [index, setIndex] = useState(defaultIndex);
  return (
    <div className={styles.container}>
      <div className={styles.featured}>
        <img
          src={(srcs[index] as ProductImage).url ?? srcs[index]}
          alt={(srcs[index] as ProductImage).url ?? srcs[index]}
        />
      </div>
      <div className={styles.thumbnails}>
        {srcs.map((image, i) => {
          const thumb = ((image as ProductImage).url as string) ?? image;
          // NextJS is mean about using next/image, but it creates 4 nodes per
          // image. I don't want 4 nodes per image. That's insane. I'm reverting
          // to basic img tags and just ignoring the dumb warnings.
          return (
            <div
              key={i}
              className={`${styles.thumbnail} ${i == index ? styles.selected : ""}`}
            >
              <img
                alt={thumb}
                src={thumb}
                onClick={() => {
                  setIndex(i);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
