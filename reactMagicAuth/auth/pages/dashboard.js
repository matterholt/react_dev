import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();

  return (
    <>
      <h2>Dashboard</h2>
      {loading ? "loading.." : user.email}
    </>
  );
}
