/*
hook will allow us to keep the latest info about the 
authorized user consistent across tabs and pages
*/
import userSWR from "swr";

function fetcher(route) {
  // token cookie get sent with this request
  return fetch(route)
    .then((r) => r.ok && r.json())
    .then((user) => user || null);
}

export default function userAuth() {
  const { data: user, error, mutate } = userSWR("/api/user", fetcher);
  const loading = user === undefined;

  return {
    user,
    loading,
    error,
  };
}
