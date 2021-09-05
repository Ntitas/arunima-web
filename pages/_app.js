import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import { Container } from "react-bootstrap";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Arunima Group</title>
        <meta
          property="og:title"
          content="Welcome to Arunima Group"
          key="title"
        />
      </Head>
      <Layout>
        <Container className="mt-3 min-vh-100">
          <Component {...pageProps} />
        </Container>
      </Layout>
    </div>
  );
}

export default MyApp;
