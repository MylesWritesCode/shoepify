/**
 * File: /src/pages/products/index.tsx
 * Project: shoepify
 * Purpose: Currently being used for rapid development, but will eventually pull
 *          all products from Shopify and display them as a grid.
 *
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * *****
 * Modified: Tuesday December 28th 2021 7:04:39 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { getAllProducts } from '@pages/api/operations';
import ProductGallery from "@components/products/ProductGallery";
import QuantityWidget from "@components/QuantityWidget";
import { formatPercentage, formatCurrency } from "@utils";

import type { Product } from "@type/product.type";

import { shopConfig } from "@config/shop";
import styles from "./Products.module.css";

// Mock data
import defaultProduct from "@mock/default-product";

export const getStaticProps = async () => {
  const data = await getAllProducts();
  
  return {
    props: {
      data,
    },
  };
};

const Products: NextPage = ({ ...props }: any) => {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [quantity, setQuantity] = useState<number>(1);
  const { title, company, description, price, discount } = product;

  const { data } = props;
  console.log("product data:", JSON.stringify(data, null, 2));

  const generateATCButtonText = (): string => {
    if (quantity > 0) return "Add to cart";
    if (quantity == 0) return "Select a quantity";
    if (quantity < 0) return "Return product";
    return "";
  };

  return (
    <>
      <Head>
        <title>
          {shopConfig.name} | {title}
        </title>
      </Head>
      <div className={styles.container}>
        <div className={`${styles.section}`}>
          {/* gallery implementation */}
          <ProductGallery srcs={defaultProduct.images} />
        </div>
        <div className={`${styles.section} ${styles.right}`}>
          {/* info implementation */}
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

          <div className={styles["qty-and-atc"]}>
            <QuantityWidget
              state={quantity}
              setState={setQuantity}
              min={-100}
            />
            <button className={styles.atc} disabled={quantity == 0}>
              <div className={styles.icon} /> {generateATCButtonText()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
