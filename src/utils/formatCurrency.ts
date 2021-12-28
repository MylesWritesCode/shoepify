/**
 * File: /src/utils/formatCurrency.ts
 * Project: govalo-store-playground
 * Purpose: // TODO: Add the purpose of the file here.
 * 
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * *****
 * Modified: Tuesday December 28th 2021 10:08:27 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/
export const formatCurrency = (price: number): string => {
  // Consider adding support for different currencies
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}