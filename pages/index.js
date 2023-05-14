import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="text-5xl font-bold underline">Hello</h1>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <h1>
          Post Page <Link href="/posts/first-post">Page</Link>
        </h1>
        <h1>
          Country Page <Link href="/country/restCountry">Page</Link>
        </h1>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
