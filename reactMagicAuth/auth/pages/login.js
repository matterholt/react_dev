import { userRouter, useRouter } from "next/router";
import { Magic } from "magic-sdk";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;

    // magic code below lol

    const did = await new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUB_KEY
    ).auth.loginWithMagicLink({ email: elements.email.value });

    // login with our own API

    const authRequest = await fetch("/api/login", {
      method: "POST",
      headers: { Authorization: `Bearer ${did}` },
    });

    if (authRequest.ok) {
      router.push("/dashboard");
    } else {
      // handle Error, update state to not auth
      console.log("not Auth");
    }
  };
  return (
    <div>
      <h2>The Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <button>Log In</button>
      </form>
    </div>
  );
}
