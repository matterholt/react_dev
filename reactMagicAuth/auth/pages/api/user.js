import { getSession } from "../../lib/iron";

const fakeData = {
  nameFirst: "Matterholt",
  email: "matterholt.dev@gmail.com",
  employeeId: 2,
  role: "admin",
};

export default async function user(req, res) {
  const session = await getSession(req);
  const userEmail = session.email;
  // search database and only return the user that has been logged in.
  const userInfo = fakeData;

  res.status(200).json({ user: fakeData || null });
}
