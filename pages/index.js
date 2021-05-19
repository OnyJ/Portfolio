import React from "react";
import Head from "next/head";
import fs from "fs";
import styles from "styles/Home.module.scss";
import { getAllProjectsData } from "../lib/projectsFunctions";
import { useTextContext } from "components/TextContext";
import TextSlider from "components/Home/TextSlider";
import ProjectsList from "components/ProjectsList";

export async function getStaticProps() {
  const fileNames = await fs.readdirSync("projects");
  const allProjectsData = getAllProjectsData(fileNames);
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
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
          <ProjectsList allProjectsData={allProjectsData} />
        </div>
      </main>
    </div>
  );
}
