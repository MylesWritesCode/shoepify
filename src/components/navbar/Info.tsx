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
import Image from 'next/image';

interface InfoProps {
  pictureUrl: string;
}

const Info: React.FC<InfoProps> = ({ pictureUrl, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
      </div>
      <div className={styles.profile}>
        <Image src={pictureUrl} alt="Profile picture" width="45%" height="45%"/>
      </div>
    </div>
  );
};

export default Info;
