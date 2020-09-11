import Link from "next/link";

import useUser from "../hooks/useUser";
import Layout from "../component/Layout";

const Logout = () => {
  return (
    <li>
      <a href="/api/logout">Logout</a>
    </li>
  );
};
const Login = () => {
  return (
    <Link href="/login">
      <a className="logButton">login</a>
    </Link>
  );
};

export default function Home() {
  const user = useUser();
  return (
    <Layout>
      <h1>{user ? "Logged" : "Login"}</h1>
      {user ? <Logout /> : <Login />}
      {user && (
        <>
          <p>Listen up you are logged on aready</p>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </>
      )}
      <style jsx>
        {`
          .logButton {
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 2px 4px 8px #c5c5c5;
          }
          a {
            background-color: gray;
            margin: 10px;
            padding: 15px 25px;
          }
        `}
      </style>
    </Layout>
  );
}
