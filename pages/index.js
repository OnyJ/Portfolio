import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josselin Julien | Développeur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Josselin Julien
        </h1>

        <div className={styles.description}>
          <p>Développeur web fullstack</p>
          <p>Ruby on Rails | React.js | Next.js | Node.js</p>
        </div>
      </main>
    </div>
  )
}
