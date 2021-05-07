import React from "react";
import Head from "next/head";
import styles from "styles/Home.module.scss";
import { useTextContext } from "components/TextContext";
import TextSlider from "components/Home/TextSlider";

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
          <TextSlider />
          <p>{textProps.language}</p>
        </div>
      </main>
    </div>
  );
}
