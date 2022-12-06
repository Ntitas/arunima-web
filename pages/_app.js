import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
        <title>Arunima Group</title>
        <meta
          property="og:title"
          content="Welcome to Arunima Group"
          key="title"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
