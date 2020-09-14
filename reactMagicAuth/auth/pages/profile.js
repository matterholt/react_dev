import useUser from "../hooks/useUser";
import UserLayout from "../component/userLayout";

export default function Profile() {
  const user = useUser();

  return (
    <UserLayout>
      <div>
        <p>Currently logged in as:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </UserLayout>
  );
}
