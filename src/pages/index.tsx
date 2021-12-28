/**
 * File: /src/pages/index.tsx
 * Project: govalo-store-playground
 * Purpose: Landing page. For now I'll use this for quick development
 * 
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * -----
 * Modified: Tuesday December 21st 2021 8:21:59 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/
import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";

import Navbar from '@components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>👞 Shoepify 👟</title>
        <meta
          name="description"
          content="A small shopify app written in Typescript with React, Hydrogen, and Nextjs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        Sneaker Company

        Fall Limited Edition Sneakers

        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.

        $125.00
        50%
        $250.00

        0
        Add to cart
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </div>
  );
};

export default Home;
