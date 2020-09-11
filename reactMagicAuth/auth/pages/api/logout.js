import { magic } from "../../lib/magic";
import { removeCookie } from "../../lib/auth-cookie";
import { getSession } from "../../lib/iron";

export default async function logout(req, res) {
  const session = await getSession(req);
  await magic.users.logoutByIssuer(session.issuer);
  removeCookie(res);
  res.writeHead(302), { location: "/" };
  res.end();
}
