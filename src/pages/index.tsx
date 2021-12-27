import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Some title</title>
        <meta
          name="description"
          content="A small shopify app written in Typescript with React, Hydrogen, and Nextjs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        this is a thing that goes in here
      </div>
    </div>
  );
};

export default Home;
