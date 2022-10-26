import React from "react";
import Head from "next/head";
import Home from "./Home";

export default function index() {
  return (
    <div>
      <Head>
        <title>Project NoName</title>
        <meta name="description" content="NoName" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
