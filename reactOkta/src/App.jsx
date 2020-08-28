import React, { useState, useEffect } from "react";
import "./App.css";
import { decode } from "he"; //converts so that react can read

import { withAuth } from "@okta/okta-react";
import { useAuth } from "./auth";

const App = withAuth(({ auth }) => {
  const [joke, setJoke] = useState("");
  const [authenticated, user] = useAuth(auth);

  const jokeGet = async (signal) => {
    const url = new URL("https://api.icndb.com/jokes/random");
    if (user) {
      url.searchParams.set("firstName", user.given_name);
      url.searchParams.set("lastName", user.family_name);
    }
    const response = await fetch(url);
    const { value } = await response.json();

    setJoke(decode(value.joke));
  };
  useEffect(() => {
    if (!joke) {
      const controller = new AbortController();
      jokeGet(controller.signal);
      return () => controller.abort;
    }
  }, [joke]);

  return (
    <main className="main">
      <div className="action">
        <h1> Very Chuck Joke </h1>
        <p className="jokeContainer"> {joke || "..."} </p>
        <button onClick={() => setJoke("")}>New Joke</button>

        {authenticated !== null && (
          <button
            onClick={() => (authenticated ? auth.logout() : auth.login())}
          >
            log {authenticated ? "out" : "in"}
          </button>
        )}
      </div>
    </main>
  );
});

export default App;
