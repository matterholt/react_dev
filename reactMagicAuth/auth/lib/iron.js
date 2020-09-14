import Iron from "@hapi/iron";
import { getTokenCookie } from "./auth-cookie";

const TOKEN_SECRET = process.env.ENCRYPTION_SECRET;

export function encryptSession(session) {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
}

export async function getSession(req) {
  const token = getTokenCookie(req);
  return token && Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
}
