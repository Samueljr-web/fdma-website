import "../styles/globals.css";
import Head from "next/head";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>F.D.M.A</title>
          <link rel="icon" href="/assets/logo.svg" />
          <meta
            name="title"
            content="FDMA - Favoured Destinies Montessory Academy"
          />
          <meta
            name="description"
            content="Favoured destinies montessory academy"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://favoureddestinies.org.ng/" />
          <meta
            property="og:title"
            content="FDMA - Favoured destinies montessory academy"
          />
          <meta
            property="og:description"
            content="Favoured destinies montessory academy"
          />
          <meta
            property="og:image"
            content="https://favoreddestinies.org.ng/assets/logo.svg"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://favoureddestinies.org.ng/"
          />
          <meta
            property="twitter:title"
            content="FDMA - Favoured Destinies Montessory Academy"
          />
          <meta
            property="twitter:description"
            content="Favoured Destinies Montessory Academy"
          />
          <meta
            property="twitter:image"
            content="https://favoureddestinies.org.ng/assets/logo.svg"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
