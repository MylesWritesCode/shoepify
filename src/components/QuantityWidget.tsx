/**
 * File: /src/components/QuantityWidget.tsx
 * Project: govalo-store-playground
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday December 28th 2021
 * *****
 * Modified: Tuesday December 28th 2021 11:05:50 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import React, { useEffect } from "react";

import styles from "./QuantityWidget.module.css";

interface QuantityWidgetProps {
  state: number;
  setState: (state: number) => void;
  min?: number;
  max?: number;
}

const QuantityWidget: React.FC<QuantityWidgetProps> = ({
  state: quantity,
  setState,
  min = 0,
  max = 20,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <button
        id="minus"
        onClick={() => {
          if (quantity > min) setState(quantity - 1);
        }}
      >
        <div className={`${styles.icon} ${styles.minus}`}></div>
      </button>
      <div className={styles.qty}>{quantity}</div>
      <button
        id="plus"
        onClick={() => {
          if (quantity < max) setState(quantity + 1);
        }}
      >
        <div className={`${styles.icon} ${styles.plus}`}></div>
      </button>
    </div>
  );
};

export default QuantityWidget;
