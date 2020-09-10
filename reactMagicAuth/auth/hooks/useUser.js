import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return { user: data?.user || null };
    });

export default function useUser() {
  const { data, error } = useSWR("/api/user", fetcher);
  console.log(data);
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  return error ? null : user;
}
