import "./App.css";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

import TableConstruct from "./components/TableConstruct";
import UserAutonomous from "./components/UserAutonomous";
import HigherOrderComps from "./components/HigherOrderComps";
import RenderProps from "./components/RenderProps";
import HooksReactTable from "./components/HooksReactTable";

function App() {
  const [isVisible, setIsVisible] = useState({
    autonomous: false,
    higherOrder: false,
    renderProp: false,
    hooks: false,
  });

  const handleChange = (e) => {
    setIsVisible({ ...isVisible, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <Container maxWidth="md">
        <h2>Autonomous</h2>
        <p>Fetching data at the component that requires the data</p>
        <Switch
          name="autonomous"
          onChange={handleChange}
          checked={isVisible.autonomous}
        />
        {isVisible.autonomous ? <UserAutonomous /> : null}
      </Container>
      <Container maxWidth="md">
        <h2>Higher Order Function</h2>
        <p>Fetching data at the parent component and pass down as props</p>
        <Switch
          name="higherOrder"
          onChange={handleChange}
          checked={isVisible.higherOrder}
        />

        {isVisible.higherOrder ? <HigherOrderComps /> : null}
      </Container>

      <Container maxWidth="md">
        <h2>Render Props</h2>
        <p>
          Pretty interesting concept, similar HOA but the rendering is pass to a
          separate comp
        </p>
        <Switch
          name="renderProp"
          onChange={handleChange}
          checked={isVisible.renderProp}
        />

        {isVisible.renderProp ? (
          <RenderProps children={TableConstruct} />
        ) : null}
      </Container>

      <Container maxWidth="md">
        <h2>useHooks</h2>
        <p>worked with hooks for a wail and pretty standard</p>
        <Switch
          name="hooks"
          onChange={handleChange}
          checked={isVisible.hooks}
        />
        {isVisible.hooks ? <HooksReactTable /> : null}
      </Container>

      <Container maxWidth="md">
        <h2>Fetching with Suspense</h2>
        <p>
          Suspense lets your components “wait” for something before they can
          render. It is Experimental for some time now. Link for more
          information
          <br />
          <a href="https://reactjs.org/docs/concurrent-mode-suspense.html">
            React Suspense
          </a>
        </p>
      </Container>
    </div>
  );
}

export default App;
