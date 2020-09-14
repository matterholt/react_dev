import Head from "next/head";
import useUser from "../hooks/useUser";
import { NotLoginModal } from "../component/NotLoginModal";
import Header from "./header";

export default function UserLayout(props) {
  const user = useUser();

  return (
    <>
      {!user && <NotLoginModal />}
      {user && (
        <>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Header />
            <div className="container">{props.children}</div>
          </main>
        </>
      )}
    </>
  );
}
