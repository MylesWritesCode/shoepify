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
}

const QuantityWidget: React.FC<QuantityWidgetProps> = ({ 
  state: quantity,
  setState,
  ...props 
}) => {
  // Just some render testing. Keeping here so I remember.
  useEffect(() => {
    // Will be fired on component mount. Note no dependencies in dep array.
    console.log('component mounted');
    return () => {
      // Will be fired when the component unmounts.
      console.log('component unmounted');
    }
  }, []);

  return (
    <div className={styles.container}>
      <button id="minus" onClick={() => {
        if (quantity > 0) setState(quantity - 1);
        }}>
        <div className={`${styles.icon} ${styles.minus}`}></div>
      </button>
      <div className={styles.qty}>{quantity}</div>
      <button id="plus" onClick={() => setState(quantity + 1)}>
        <div className={`${styles.icon} ${styles.plus}`}></div>
      </button>
    </div>
  );
};

export default QuantityWidget;
