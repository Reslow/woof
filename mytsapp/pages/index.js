import Head from "next/head";

import styles from "../styles/Home.module.css";
import Home from "./Home";
export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project NoName</title>
        <meta name="description" content="NoName" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <Home />
    </div>
  );
}
