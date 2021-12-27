/**
 * File: /src/components/Navbar/NavbarLink.tsx
 * Project: govalo-store-playground
 * Purpose: General links for the navbar
 *
 * @author Myles Berueda
 * @date   Monday December 27th 2021
 * -----
 * Modified: Monday December 27th 2021 8:18:41 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import styles from "./NavbarLink.module.css";
import React from "react";

interface NavbarLinkProps {
  text: string;
  link: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link, ...props }) => {
  return (
    <a className={styles.container} href={link}>
      {text}
    </a>
  );
};

export default NavbarLink;
