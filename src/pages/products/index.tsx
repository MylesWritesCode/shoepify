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
import type { NextPage } from "next";
import Head from "next/head";
import ProductWidget from "@components/products/ProductWidget";
import { getAllProducts } from "@pages/api/operations";

import type { Product } from "@type/product.type";

import { shopConfig } from "@config/shop";
import styles from "./Products.module.css";

export const getStaticProps = async () => {
  const data = await getAllProducts();

  return {
    props: {
      data,
    },
  };
};

const Products: NextPage = ({ ...props }: any) => {
  const { pageInfo, products } = props.data;
  const title = "Products";

  return (
    <>
      <Head>
        <title>
          {shopConfig.name} | {title}
        </title>
      </Head>
      <div className={styles.container}>
        {products.map((product: Product, i: number) => {
          return <ProductWidget key={i} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
