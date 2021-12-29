/**
 * File: /src/pages/index.tsx
 * Project: govalo-store-playground
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday December 21st 2021
 * *****
 * Modified: Tuesday December 21st 2021 8:21:59 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
 **/
import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";

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
      <div className={styles.container}>
        <h1 className={styles["call-to-action"]}>
          I need to test the{"\n"}<span className={styles.lobster}>production</span>{" "}
          branch :)
        </h1>
      </div>
    </div>
  );
};

export default Home;
