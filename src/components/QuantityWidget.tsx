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
import React, { useState } from "react";

import styles from "./QuantityWidget.module.css";

interface QuantityWidgetProps {}

const QuantityWidget: React.FC<QuantityWidgetProps> = ({ ...props }) => {
  const [quantity, setQuantity] = useState<number>(10);
  return (
    <div className={styles.container}>
      <style>
        svg { 
          
        }
      </style>
      <div className={`${styles.icon} ${styles.minus}`}></div>
      <div className={styles.qty}>{quantity}</div>
      <div className={`${styles.icon} ${styles.plus}`}></div>
    </div>
  );
};

export default QuantityWidget;
