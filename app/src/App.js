import React from "react";
import "./App.css";

import TableConstruct from "./components/TableConstruct";
import Container from "@material-ui/core/Container";
import UserAutonomous from "./components/UserAutonomous";
import HigherOrderComps from "./components/HigherOrderComps";
import RenderProps from "./components/RenderProps";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <h2>Autonomous</h2>
        <p>Fetching data at the component that requires the data</p>
        <UserAutonomous />
      </Container>

      <Container maxWidth="md">
        <h2>Higher Order Function</h2>
        <p>Fetching data at the parent component and pass down as props</p>
        <HigherOrderComps />
      </Container>

      <Container maxWidth="md">
        <h2>Render Props</h2>
        <p>
          Pretty interesting concept, similar HOA but the rendering is pass to a
          separate comp
        </p>
        <RenderProps children={TableConstruct} />
      </Container>
    </div>
  );
}

export default App;
