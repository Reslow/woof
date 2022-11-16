import React from "react";
import Head from "next/head";
import Home from "./Home";

export default function index() {
  return (
    <div>
      <Head>
        <title>Woof</title>
        <meta name="description" content="Hitta Kennel med Woofg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
