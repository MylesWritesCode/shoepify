/**
 * File: /src/utils/formatPercentage.ts
 * Project: govalo-store-playground
 * Purpose: Formats a decimal value to a string percentage e.g. 0.5 => 50%
 *
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * -----
 * Modified: Tuesday December 28th 2021 10:01:59 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
export const formatPercentage = (decimal: number): string => {
  return (decimal * 100).toString().concat("%");
};
