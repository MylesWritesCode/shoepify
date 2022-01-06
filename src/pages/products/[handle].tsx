/**
 * File: /src/pages/products/[handle].tsx
 * Project: govalo-store-playground
 * Purpose: Pulls some data via a handle. I'm going to change this to instead
 *          pull a product by id, but that'll be after I create all the util
 *          functions you need for Shopify.
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * *****
 * Modified: Tuesday December 21st 2021 1:45:32 pm
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import { useState } from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getAllProducts } from "@pages/api/operations";
import OptionPicker from "@/components/products/OptionPicker";
import ProductGallery from "@components/products/ProductGallery";
import QuantityWidget from "@components/QuantityWidget";
import { formatPercentage, formatCurrency } from "@utils";

import { getProductByHandle } from "@pages/api/operations";

import { shopConfig } from "@config/shop";
import styles from "./Products.module.css";
import type { Product, Variant } from "@type/product.type";

export const getStaticPaths = async () => {
  // Get all the product paths
  const { products } = await getAllProducts();
  const paths = products.map((product) => {
    return `/products/${product.handle}`;
  });

  // { fallback = false } -> other routes should 404
  return { paths, fallback: false };
};

interface StaticProps {
  product: Product;
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const { handle } = params || {};
  const product = await getProductByHandle(handle as string);

  return {
    props: {
      product,
    },
  };
};

const Product: NextPage<StaticProps> = ({
  product,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [quantity, setQuantity] = useState<number>(1);

  const {
    title,
    vendor,
    description,
    priceRange,
    discount,
    images,
    variants,
  } = product;

  const { minVariantPrice } = priceRange;

  const options: { [title: string]: any } = {};

  if (product.options) {
    product.options.map((option: { name: string; values: string[] }) => {
      options[option.name.toLowerCase()] = option.values;
    });
  }
  
  // It's getting late. But I should be able to filter through the variants
  // based on what the user interacts with in each OptionPicker (yes, we're
  // generalizing it tomorrow) in the DOM.
  console.log(variants);

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
          <ProductGallery srcs={images} />
        </div>
        <div className={`${styles.section} ${styles.right}`}>
          {/* info implementation */}
          <div className={styles.company}>{vendor}</div>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>

          <div className={styles.description}>{description}</div>

          <div className={styles.pricing}>
            <div className={styles["price-and-discount"]}>
              <h1>
                {discount
                  ? formatCurrency(minVariantPrice.amount * discount)
                  : formatCurrency(minVariantPrice.amount)}
              </h1>
              {discount && discount > 0 && (
                <div className={styles["discount-percentage"]}>
                  {formatPercentage(discount)}
                </div>
              )}
            </div>
            {discount && discount > 0 && discount < 1 && (
              <div className={styles["original-price"]}>
                {formatCurrency(minVariantPrice.amount)}
              </div>
            )}
          </div>
          {options.size && (
            <div className={styles.sizes}>
              <OptionPicker data={options.size} />
            </div>
          )}
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

export default Product;
