/**
 * src/types/product.type.ts
 * Contains a product data type
 * @author Myles Berueda
 **/
export interface Options {
  id: string;
  name: string;
  values: string[];
}

interface PriceV2 {
  amount: number;
  currencyCode: string;
}

export interface Variant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number;
  image: ProductImage;
  // TODO: FIX THIS lmfao
  selectedOptions: any;
  priceV2: PriceV2;
}

export type ProductImage = {
  url: string;
  thumbnail?: string;
  altText?: string;
};

export interface Product {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: PriceV2;
  };
  featuredImage?: ProductImage;
  images: ProductImage[];
  options?: Options[];
  variants?: Variant[];
  discount?: number;
}
