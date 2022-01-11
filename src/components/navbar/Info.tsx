/**
 * File: /src/components/Navbar/Info.tsx
 * Project: govalo-store-playground
 * Purpose: Contains the dropdown cart and profile picture on the navbar.
 *
 * @author Myles Berueda
 * @date   Monday December 27th 2021
 * -----
 * Modified: Monday December 27th 2021 9:43:06 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React, { useState } from "react";
import Image from "next/image";
import Cart from "./Cart";

import styles from "./Info.module.css";

interface InfoProps {
  pictureUrl: string;
}

// Not dealing with this long ass className again

const Info: React.FC<InfoProps> = ({ pictureUrl, ...props }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const setCartClasses = (): string => {
    let classes = styles.cart;

    classes +=
      " " +
      (isCartOpen
        ? styles["puff-in-center-reverse"]
        : styles["puff-in-center"]);
      
    return classes;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.cart}
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      {isCartOpen && (
        <div style={{ position: "relative" }}>
          <Cart />
        </div>
      )}
      <div className={styles.profile}>
        <Image src={pictureUrl} alt="Profile picture" width={36} height={36} />
      </div>
    </div>
  );
};

export default Info;
