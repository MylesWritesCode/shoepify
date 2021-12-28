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
import styles from "./Info.module.css";
import React from "react";

interface InfoProps {
  pictureUrl: string;
}

const Info: React.FC<InfoProps> = ({ pictureUrl, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <img src="/icon-cart.svg" />
      </div>
      <div className={styles.profile}>
        <img src={pictureUrl} />
      </div>
    </div>
  );
};

export default Info;
