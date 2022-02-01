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
            content="GenZtechies - Connecting Teen Techies Across Nigeria"
          />
          <meta
            name="description"
            content="Favoured destinies montessory academy"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://genztechies.com/" />
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
            content="https://genztechies.com/assets/site-preview.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://genztechies.com/" />
          <meta
            property="twitter:title"
            content="GenZtechies - Connecting Teen Techies Across Nigeria"
          />
          <meta
            property="twitter:description"
            content="Connecting Teen Techies Across Nigeria"
          />
          <meta
            property="twitter:image"
            content="https://genztechies.com/assets/site-preview.png"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
