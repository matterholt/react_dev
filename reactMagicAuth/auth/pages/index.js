import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import useUser from "../hooks/useUser";

export default function Home() {
  const user = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{user ? "Logged" : "Login"}</h1>
        <Link href="/login">
          <a className="logButton">{user ? "Loged IN" : "Login"}</a>
        </Link>
        {user && (
          <>
            <p>Currently logged in as:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
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
