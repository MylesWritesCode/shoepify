/**
 * File: /src/types/product.type.ts
 * Project: shoepify
 * Purpose: Contains a product data type
 * 
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * *****
 * Modified: Tuesday December 28th 2021 9:37:58 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/

/** Product Type
 * @param { string } title 
 * @param { string } company 
 * @param { string } description 
 * @param { number } price - The price in number form
 * @param { number } discount - The percentage discount in decimal form.
 */
export interface Product {
  title: string;
  company: string;
  description: string;
  price: number;
  discount: number;
}