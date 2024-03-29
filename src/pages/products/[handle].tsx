/**
 * src/pages/products/[handle].tsx
 * Pulls some data via a handle.
 *
 * NOTES I'm going to change this to instead pull a product by id, but that'll
 * be after I create all the util functions you need for Shopify.
 *
 * @author Myles Berueda <MylesWritesCode>
 **/
import { useEffect, useState } from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getAllProducts } from "@pages/api/operations";
import OptionPicker from "@/components/products/OptionPicker";
import ProductGallery from "@components/products/ProductGallery";
import QuantityWidget from "@components/QuantityWidget";
import { formatPercentage, formatCurrency } from "@utils";

import { CartLineInput } from "@generated/schema";
import { addProductToCart } from "@pages/api/operations/cart";
import { getProductByHandle } from "@pages/api/operations";

import { shopConfig } from "@config/shop";
import { Product, Variant } from "@type/product.type";
import styles from "./Products.module.css";


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
  const [selectedOptions, setSelectedOptions] = useState<Object>({});
  const [selectedVariant, setSelectedVariant] = useState<Variant>();
  const [isValidSelection, setIsValidSelection] = useState<boolean>(false);

  const {
    title,
    vendor,
    descriptionHtml: description = product.description,
    priceRange,
    discount,
    images,
    options,
    variants,
  } = product;
  const { minVariantPrice } = priceRange;

  const handleAddToCart = async () => {
    if (selectedVariant) {
      // A variant should be selected before being able to click atc
      const productToAddToCart: CartLineInput = {
        merchandiseId: selectedVariant.id,
        quantity: quantity,
      };

      addProductToCart(productToAddToCart).then((d) => console.log(d));
    }
  };

  useEffect(() => {
    if (!options) return;

    const getVariant = () => {
      return variants?.filter((variant: Variant) => {
        // Super lazy version of an isEquals fn. I may write one in utils, but
        // this works for now. I don't want to go key-by-key to check if each
        // object is deeply equal to each other.
        return (
          JSON.stringify(variant.selectedOptions) ==
          JSON.stringify(selectedOptions)
        );
      })[0];
    };

    // Just declaring these cause I don't a super long conditional
    const soLen = Object.keys(selectedOptions).length;
    const poLen = Object.keys(options!).length;

    // In this app, you need to select all options
    if (soLen === poLen) {
      setSelectedVariant(getVariant());
      setIsValidSelection(true);
    } else {
      // In case the user pick a valid selection, then clicks an invalid one
      setIsValidSelection(false);
    }
  }, [selectedOptions]);

  useEffect(() => {
    console.log(selectedVariant);
  }, [selectedVariant]);

  useEffect(() => {
    if (selectedVariant?.availableForSale) {
      setQuantity(1);
    } else {
      setQuantity(0);
    }
  }, [selectedVariant]);

  // I want to generically handle all the Options clicks when setting the state
  const handleOptionsClick = (kv: {}) => {
    setSelectedOptions({
      ...selectedOptions,
      ...kv,
    });
  };

  const generatePrice = (): number => {
    if (!selectedVariant) {
      return discount
        ? minVariantPrice.amount * discount
        : minVariantPrice.amount;
    } else {
      return discount
        ? selectedVariant.priceV2.amount * discount
        : selectedVariant.priceV2.amount;
    }
  };

  const generateATCButtonText = (): string => {
    if (selectedVariant) {
      if (!selectedVariant.availableForSale) return "Out of stock :(";
      if (quantity > 0) return "Add to cart";
      if (quantity == 0) return "Select a quantity";
      if (quantity < 0) return "Return product";
    }
    return "Pick your options!";
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
            {selectedVariant && !selectedVariant.availableForSale && (
              <p className={styles["badge"]}>SOLD OUT</p>
            )}
          </div>

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          <div className={styles.pricing}>
            <div className={styles["price-and-discount"]}>
              <h1>{formatCurrency(generatePrice())}</h1>
              {discount && discount > 0 && (
                <div className={styles["badge"]}>
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
          <div className={styles["options-container"]}>
            {Array.isArray(options) &&
              options.map((option, i) => {
                return (
                  <OptionPicker
                    key={i}
                    data={option}
                    setOptionState={handleOptionsClick}
                  />
                );
              })}
          </div>
          <div className={styles["qty-and-atc"]}>
            <QuantityWidget
              state={quantity}
              setState={setQuantity}
              max={selectedVariant?.quantityAvailable || 0}
              min={-100}
            />
            <button
              className={styles.atc}
              disabled={quantity <= 0 || !selectedVariant?.availableForSale}
              onClick={handleAddToCart}
            >
              <div className={styles.icon} /> {generateATCButtonText()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
