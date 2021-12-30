/**
 * File: /src/components/Navbar.tsx
 * Project: govalo-store-playground
 * Purpose: General purpose navbar
 *
 * @author Myles Berueda
 * @date   Monday December 27th 2021
 * -----
 * Modified: Monday December 27th 2021 8:09:10 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React, { CSSProperties, useState } from "react";
import NextLink from "next/link";
import NavbarLink from "./NavbarLink";
import Info from "./Info";

import { shopConfig } from "@config/shop";
import styles from "./Navbar.module.css";

interface NavbarProps {
  profilePictureUrl?: string;
}

const Navbar: React.FC<NavbarProps> = ({ profilePictureUrl, ...props }) => {
  const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div
          className={`${styles["icon"]} ${styles["menu-icon"]}`}
          onClick={() => setIsMenuShowing(!isMenuShowing)}
        />
        <NextLink href="/">
          <div className={styles.brand}>
            <h1>{shopConfig.name}</h1>
          </div>
        </NextLink>
        <div
          className={`${styles.links} ${
            isMenuShowing ? styles.hide : styles.show
          }`}
        >
          <div
            className={`${styles["icon"]} ${styles["close-icon"]}`}
            onClick={() => setIsMenuShowing(!isMenuShowing)}
          />
          {shopConfig.links.map((link, index) => {
            return <NavbarLink key={index} text={link.name} link={link.link} />;
          })}
        </div>
      </div>
      <div className={styles.info}>
        <Info
          pictureUrl={
            profilePictureUrl
              ? profilePictureUrl
              : shopConfig.defaultProfile.picture
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
