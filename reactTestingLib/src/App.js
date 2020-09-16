import React from "react";
import "./App.css";

import ApiCall from "./components/ApiCall";
import LoadingSpinner from "./components/LoadingSpinner";

const title = "Hello React";
function getUser() {
  return Promise.resolve({ id: "1", name: "Matt" });
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default function App() {
  const [user, setUser] = React.useState(null);
  const [search, setSearch] = React.useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }
  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React Testing Library</h1>
        {user ? <p>Sign in as {user.name}</p> : null}
      </header>
      <main>
        {title}
        <div>
          <Search value={search} onChange={handleChange}>
            Search:
          </Search>

          <p>Searches for {search ? search : "..."}</p>
        </div>
        <ApiCall />
        <LoadingSpinner />
      </main>
    </div>
  );
}
