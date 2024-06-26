import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>USU Free Software and Linux Club</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.logo} id="logo">
          USU FSLC
        </h1>
        <h3 className={styles.tagline} id="tagline">
          Keepin&lsquo; it Free Since WHAT YEAR DID WE START????
        </h3>
        <div className={styles.information}>
          <p>
            <b>Meeting Location:</b> ESLC 053
          </p>
          <p>
            <b>Meeting Time:</b> Every Wednesday at 5:30
          </p>
        </div>
      </main>
    </>
  );
}
