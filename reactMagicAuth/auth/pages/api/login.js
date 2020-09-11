import { magic } from "../../lib/magic";
import { encryptSession } from "../../lib/iron";
import { setTokenCookie } from "../../lib/auth-cookie";

export default async function login(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const didToken = req.headers.authorization.substr(7);
    const metadata = await magic.users.getMetadataByToken(didToken);
    const session = { ...metadata };
    const token = await encryptSession(session);
    setTokenCookie(res, token);
    res.status(200).send({ done: true });
  } catch (err) {
    res.status(err.status || 500).end(err.message);
  }
}
