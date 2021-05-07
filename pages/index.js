import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useTextContext } from "../components/TextContext";

export default function Home() {
  const textProps = useTextContext();
  const text = textProps.text;

  return (
    <div className={styles.container}>
      <Head>
        <title>Josselin Julien | Développeur Web Fullstack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Josselin Julien</h1>
        <div className={styles.description}>
          <p>{text.home_subtitle}</p>
          <p>Ruby on Rails | React.js | Next.js | Node.js</p>
          <p>{textProps.language}</p>
        </div>
      </main>
    </div>
  );
}
