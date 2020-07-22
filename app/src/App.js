import React from "react";
import "./App.css";

import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import TableConstruct from "./components/TableConstruct";
import UserAutonomous from "./components/UserAutonomous";
import HigherOrderComps from "./components/HigherOrderComps";
import RenderProps from "./components/RenderProps";
import HooksReactTable from "./components/HooksReactTable";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <div>
          <h2>Autonomous</h2>
        </div>
        <div>
          <p>Fetching data at the component that requires the data</p>
        </div>

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

      <Container maxWidth="md">
        <h2>useHooks</h2>
        <p>worked with hooks for a wail and pretty standard</p>
        <HooksReactTable />
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
