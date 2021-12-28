/**
 * File: /src/types/product.type.ts
 * Project: govalo-store-playground
 * Purpose: Contains type information for products
 * 
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * -----
 * Modified: Tuesday December 28th 2021 9:37:58 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/

/** Product Type
 * @param { title } string
 * @param { company } string
 * @param { description } string
 * @param { price } number The price in number form
 * @param { discount } number The percentage discount in decimal form.
 */
export interface Product {
  title: string;
  company: string;
  description: string;
  price: number;
  discount: number;
}