import { useState, useEffect } from "react";
import UserLayout from "../component/userLayout";
import userUser from "../hooks/useUser";

export default function Dashboard() {
  const user = userUser();
  return (
    <UserLayout>
      <h2>Dashboard</h2>
      <div>
        <p>Currently logged in as:</p>
        <pre>{user ? Object.entries(user) : null}</pre>
      </div>
    </UserLayout>
  );
}
