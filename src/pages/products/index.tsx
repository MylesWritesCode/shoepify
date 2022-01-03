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
import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import ProductGallery from "@components/products/ProductGallery";
import QuantityWidget from "@components/QuantityWidget";
import { formatPercentage, formatCurrency, getShopifyData } from "@utils";

import getAllProductsQuery from "@utils/queries/get-all-products-query";
import type { Product } from "@type/product.type";

import { API_URL } from "@/const";
import { shopConfig } from "@config/shop";
import styles from "./Products.module.css";

// Mock data
import defaultProduct from "@mock/default-product";

export const getStaticProps = async ({}) => {
  const data = await fetch(
    "http://localhost:3000/api/operations/get-all-products"
  );

  console.log(await data.json());

  const res = await getShopifyData({
    query: getAllProductsQuery,
    variables: {},
    url: API_URL,
  });

  // This return is insane. I'd like to come up with a way to clean up this data
  // before I pass it along to the page. Perhaps this is better done in the
  // getShopifyData fn, rather than here, though.
  const productsRes = res.data.products.edges;
  const products: any[] = [];

  for (const product of productsRes) {
    const { images, ...rest } = product.node;
    const imgs: string[] = [];

    for (const image of images.edges) {
      imgs.push(image.node.originalSrc);
    }

    const p = {
      ...rest,
      imgs,
    };

    products.push(p);
  }

  // Oh my god it goes on. There's an images object that has metadata with it
  // as well. There's gotta be an easier way to clean all this up. For now, I'll
  // just go back into the for-loop and try to extract the images.
  // console.log(products);

  return {
    props: {
      products,
    },
  };
};

const Products: NextPage = ({ ...props }) => {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [quantity, setQuantity] = useState<number>(1);
  const { title, company, description, price, discount } = product;

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
