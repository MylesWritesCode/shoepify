/**
 * File: /src/pages/products/index.tsx
 * Project: govalo-store-playground
 * Purpose: Eventually will become the products page. For now, I'm using this
 *          for rapid development.
 *
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * -----
 * Modified: Tuesday December 28th 2021 7:04:39 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { shopConfig } from "@config/shop";
import { formatPercentage, formatCurrency } from "@utils";

import styles from "./Products.module.css";

// Types
import type { Product } from "@type/product.type";

// Mock data
import defaultProduct from "@mock/default-product";

const Products: NextPage = () => {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const { title, company, description, price, discount } = product;

  return (
    <>
      <Head>
        <title>
          {shopConfig.name} | {title}
        </title>
      </Head>
      <div className={styles.container}>
        <div className={`${styles.section}`}>
          {/* image impl */}
        </div>
        <div className={`${styles.section}`}>
          {/* info impl */}
          <div className={styles.company}>{company}</div>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>

          <div className={styles.description}>{description}</div>

          <div className={styles.pricing}>
            <div className={styles["price-and-discount"]}>
              <h1>{formatCurrency(price * discount)}</h1>
              <div className={styles["discount-percentage"]}>
                {formatPercentage(discount)}
              </div>
            </div>
            <div className={styles["original-price"]}>
              {formatCurrency(price)}
            </div>
          </div>

          <div className={styles["qty-and-atc"]}>0 Add to cart</div>
        </div>
      </div>
    </>
  );
};

export default Products;
