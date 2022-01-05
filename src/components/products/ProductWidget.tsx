/**
//  * File: /src/components/products/ProductWidget.tsx
//  * Project: shoepify
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
import { formatCurrency } from "@/utils";

interface ProductWidgetProps {
  product: Product;
}

const ex = {
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MzgwNTM4OTAxMDg=",
  title: "Govalo [MB] Gift Card",
  vendor: "Govalo [MB]",
  handle: "govalo-mb-gift-card",
  featuredImage: {
    url: "https://cdn.shopify.com/s/files/1/0554/1465/2988/products/getTomorrowDate.png?v=1639594257",
    altText: null,
  },
  priceRange: {
    minVariantPrice: {
      amount: "10.0",
      currencyCode: "USD",
    },
  },
};

const ProductWidget: React.FC<ProductWidgetProps> = ({ product, ...props }) => {
  return (
    <NextLink href={`products/${product.handle}`}>
      <a className={styles['container-link']}>
        <div className={styles.container}>
          {/* TODO: Add a default image */}
          <div className={styles["img-container"]}>
            <img src={product.featuredImage ? product.featuredImage.url : ""} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{product.title}</h3>
            <h3 className={styles.price}>
              {formatCurrency(product.priceRange.minVariantPrice.amount)}
            </h3>
          </div>
        </div>
      </a>
    </NextLink>
  );
};

export default ProductWidget;
