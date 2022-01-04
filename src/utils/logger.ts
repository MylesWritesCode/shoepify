/**
 * File: /src/utils/logger.ts
 * Project: shoepify
 * Purpose: Because why not
 * 
 * @author Myles Berueda
 * @date   Tuesday January 4th 2022
 * *****
 * Modified: Tuesday January 4th 2022 12:27:34 pm
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
**/

export const logger = (log: string) => {
  console.log(
    `${"%c\n%c"}${log} 🤔`,
    "",
    "border: 2px solid #9e9595; padding: 0.5em; background-color: #2f2f2f; font-size: 50px; text-transform: uppercase; color: red; text-shadow: -2px -2px red, 4px 4px orange, 4px 4px yellow, -6px -6px green, 10px 10px blue, -12px -12px purple;"
  );
}
