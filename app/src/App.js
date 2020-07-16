import React from "react";
import "./App.css";

import Container from "@material-ui/core/Container";
import UserTableAutonomous from "./components/UserAutonomous";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <h2>Autonomous</h2>
        <UserTableAutonomous />
      </Container>
    </div>
  );
}

export default App;
