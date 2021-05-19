import React from "react";
import Head from "next/head";
import styles from "styles/Home.module.scss";
import { useTextContext } from "components/TextContext";
import TextSlider from "components/Home/TextSlider";
import ProjectsList from "components/ProjectsList";
import { getAllProjectsData } from "../lib/projectsFunctions";
import fs from "fs";

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
        <h1>AllProjectsData</h1>
        <div>
          {allProjectsData.map(({ id, name, date, title }) => (
            <li>
              <p>{id}</p>
              <p>{name}</p>
              <p>{title}</p>
              <p>{date}</p>
            </li>
          ))}
        </div>
      </main>
    </div>
  );
}
