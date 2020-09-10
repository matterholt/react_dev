import { serialize, parse } from "cookie";

const TOKEN_NAME = "api_token";
const MAX_AGE = 60 * 60 * 8;

export function setTokenCookie(res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
  res.setHeader("Set-cookie", cookie);
}

export function parseCookies(req) {
  if (req.cookies) return req.cookies;
  const cookie = req.header?.cookie;
  return parse(cookie || "");
}

// get Session Cookie to use
export function getTokenCookie(req) {
  const cookies = parseCookies(req);

  return cookies[TOKEN_NAME];
}
