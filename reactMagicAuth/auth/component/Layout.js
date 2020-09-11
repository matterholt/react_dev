import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className="container">{props.children}</div>
      </main>
    </div>
  );
}
