import { Magic } from "@magic-sdk/admin";
export const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export const checkUserLogin = async (cb) => {
  // added function , determine weather could help or not

  const isLoggedIn = await magic.users.isLoggedIn();

  if (isLoggedIn) {
    const user = await magic.user.getMetaData();
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};
