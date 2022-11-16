import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
