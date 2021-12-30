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
import React from "react";
import NextLink from "next/link";

import styles from "./NavbarLink.module.css";

interface NavbarLinkProps {
  text: string;
  link: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link, ...props }) => {
  return (
    <NextLink href={link}>
      <a className={styles.container}>
        {text}
      </a>
    </NextLink>
  );
};

export default NavbarLink;
