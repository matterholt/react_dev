import Iron from "@hapi/iron";

const TOKEN_SECRET = process.env.ENCRYPTION_SECRET;

export function encryptSession(session) {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults);
}
