import Link from "next/link";
import useUser from "../hooks/useUser";

export default function Header() {
  const user = useUser();
  return (
    <div>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <Link href="">
        <a>LOGOUT</a>
      </Link>
    </div>
  );
}
