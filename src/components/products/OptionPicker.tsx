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
import React, { useEffect, useState } from "react";
import type { Options } from "@type/product.type";

import styles from "./OptionPicker.module.css";

interface OptionPickerProps {
  data: Options;
  setOptionState: ({}) => void;
}

/**
 * Takes a dataset from a component and creates a view for that option.
 * @param { Options } data
 * @param { string } data.id
 * @param { string } data.name
 * @param { string } data.values
 * @param { callback } setOptionState - The setter for the state in the parent
 */
const OptionPicker: React.FC<OptionPickerProps> = ({
  data,
  setOptionState,
  ...props
}) => {
  const [index, setIndex] = useState<number>();
  const { name, values } = data;

  const handleClick = (i: number) => {
    setIndex(i);
    setOptionState({
      [name.toLowerCase()]: values[i],
    });
  };

  const setClasses = (i: number): string => {
    // All values v should have the value class
    let style = styles.value;
    if (i === index) style += " " + styles.selected;

    return style;
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.values}>
        {Array.isArray(values) &&
          values.map((v, i) => {
            return (
              <div
                key={i}
                className={setClasses(i)}
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
