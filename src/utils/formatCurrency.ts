/**
 * File: /src/utils/formatCurrency.ts
 * Project: govalo-store-playground
 * Purpose: Formats a number to a currency. I'm pretty sure there's a way to do
 *          this in native JS.
 * 
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * -----
 * Modified: Tuesday December 28th 2021 10:08:27 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/

export const formatCurrency = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}