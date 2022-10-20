import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import Home from "./Home";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
