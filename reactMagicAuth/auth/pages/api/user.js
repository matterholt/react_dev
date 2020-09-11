import { getSession } from "../../lib/iron";

const fakeData = [
  { nameFirst: "john", email: "john@test.com" },
  { nameFirst: "sam", email: "sam@test.com" },
  { nameFirst: "joe", email: "joe@test.com" },
  {
    nameFirst: "Matterholt",
    email: "matterholt.dev@gmail.com",
    employeeId: 2,
    role: "admin",
  },
];

export default async function user(req, res) {
  const session = await getSession(req);
  const userEmail = session.email;
  // search database and only return the user that has been logged in.
  const userInfo = fakeData.filter((user) => userEmail === user.email);

  res.status(200).json({ user: userInfo || null });
}
