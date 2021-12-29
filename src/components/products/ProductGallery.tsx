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
import React from "react";

import styles from "./ProductGallery.module.css";

/** ProductGalleryProps
 * Idk if this will populate a helpful window in vscode, because I might be 
 * documenting the wrong thing.
 * @param { srcs } string[] An array containing the hrefs of images. The first
 * image will be defaulted to the featured image.
 * @param { thumbSrcs } string[] An array of thumbnails. They should be in the
 * same order as their respective srcs. I'm contemplating just turning this guy
 * into an object.
 * @param { defaultIndex } number The index you would like the featured image to
 * be on load. May be useful, idk.
 */
interface ProductGalleryProps {
  srcs: string[];
  thumbSrcs?: string[];
  defaultIndex?: number;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  srcs,
  thumbSrcs = [],
  defaultIndex = 0,
  ...props
}) => {
  console.log("srcs: ", srcs);
  console.log("thumbSrcs: ", thumbSrcs);
  return <div>greetings from the product gallery, my fellow dude</div>;
};

export default ProductGallery;
