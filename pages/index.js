import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const storageLanguage = localStorage.getItem("lang");
    setLanguage(storageLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Josselin Julien | Développeur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Josselin Julien</h1>

        <div className={styles.description}>
          <p>Développeur web fullstack</p>
          <p>Ruby on Rails | React.js | Next.js | Node.js</p>
          <button
            onClick={() => {
              language === "fr"
                ? setLanguage("en")
                : setLanguage("fr");
            }}
          >
            change language
          </button>
          <span>{language}</span>
        </div>
      </main>
    </div>
  );
}
