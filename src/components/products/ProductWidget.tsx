/**
 * File: /src/components/products/ProductWidget.tsx
 * Project: shoepify
 * Purpose: Displays some data about a product. Meant to be used as a selector
 *          (i.e. a link) for the user to pick which product to look at.
 *
 * @author Myles Berueda
 * @date   Tuesday January 4th 2022
 * *****
 * Modified: Tuesday January 4th 2022 12:55:05 pm
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import React from "react";
import NextLink from "next/link";
import type { Product } from "@type/product.type";

import styles from "./ProductWidget.module.css";

interface ProductWidgetProps {
  product: Product;
}

const ProductWidget: React.FC<ProductWidgetProps> = ({ product, ...props }) => {
  return (
    <NextLink href={`products/${product.handle}`}>
      <a href={`products/${product.handle}`}>
        <div className={styles.container}>
          {/* I just want the data for now, so I know what to make */}
          <div>{JSON.stringify(product, null, 2)}</div>
          <div>
            <div>hello lmao</div>
          </div>
        </div>
      </a>
    </NextLink>
  );
};

export default ProductWidget;
