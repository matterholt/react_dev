import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Login</h1>
        <Link href="/login">
          <a className="logButton">Login</a>
        </Link>
        <style jsx>
          {`
            .logButton {
              padding: 15px 25px;
              border-radius: 5px;
              box-shadow: 2px 4px 8px #c5c5c5;
            }
          `}
        </style>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
