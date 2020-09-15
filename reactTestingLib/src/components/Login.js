import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  return (
    <form>
      <h2>Login</h2>
      <label htmlFor="userName">Username:</label>
      <input
        name="userName"
        id="userName"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </form>
  );
}
