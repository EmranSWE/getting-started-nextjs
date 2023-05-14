import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";
const firstPost = () => {
  return (
    <Layout>
        <div>
      <Head>
        <title>Heading of the pages</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Hello , Inside the page</h1>
      <h1>
        <Link href="/">Home</Link>
      </h1>
    </div>
    </Layout>
  );
};

export default firstPost;
