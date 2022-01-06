/**
 * File: /src/components/products/SizePicker.tsx
 * Project: shoepify
 * Purpose: Creates options in the template for users to select.
 *
 * @author Myles Berueda
 * @date   Wednesday January 5th 2022
 * *****
 * Modified: Wednesday January 5th 2022 12:43:38 pm
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import React, { useState } from "react";
import type { Options } from "@type/product.type";

import styles from "./OptionPicker.module.css";

interface OptionPickerProps {
  data: Options;
}

/**
 * Takes a dataset from a component and creates a view for that option.
 * @param { Options } data
 * @param { string } data.id
 * @param { string } data.name
 * @param { string } data.values
 */
const OptionPicker: React.FC<OptionPickerProps> = ({ data, ...props }) => {
  const [index, setIndex] = useState<number>();
  const { name, values } = data;
  console.log(data);
  
  const handleClick = (i: number) => {
    setIndex(i);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.values}>
        {Array.isArray(values) &&
          values.map((v, i) => {
            return (
              <div
                key={i}
                className={`${styles.value} ${
                  i === index ? styles.selected : ""
                }`}
                onClick={() => handleClick(i)}
              >
                {v}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OptionPicker;
