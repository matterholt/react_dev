import Link from "next/link";
import useUser from "../hooks/useUser";

export default function Header() {
  const user = useUser();
  return (
    <div>
      <h2>{JSON.stringify(user, null, 2)}</h2>

      {user ? (
        <>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      )}
      <style jsx>{`
        a {
          color: gray;
          text-decoration: none;
          padding: 15px 25px;
          margin-left: 26px;
        }
        a:hover {
          color: black;
          background-color: gray;
          border-radius: 5px;
          box-shadow: 5px 6px 8px light-gray;
        }
      `}</style>
    </div>
  );
}
